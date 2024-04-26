import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'; // Changed import statement

const Card = ({ children }) => (
  <div className="contact">
    <div className="card">{children}</div>
  </div>
);

const Form = ({ children, onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
  </form>
);

const TextInput = ({
  name,
  label,
  value,
  focus,
  onChange,
  onFocus,
  onBlur,
}) => (
  <div className="text-input">
    <label
      className={focus || value !== '' ? 'label-focus' : ''}
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className={focus || value !== '' ? 'input-focus' : ''}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

const TextArea = ({ name, label, value, focus, onChange, onFocus, onBlur }) => (
  <div className="text-area">
    <label
      className={focus || value !== '' ? 'label-focus' : ''}
      htmlFor={name}
    >
      {label}
    </label>
    <textarea
      className={focus || value !== '' ? 'input-focus' : ''}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

const Button = ({ children }) => <button className="button">{children}</button>;

const App = () => {
  const [inputs, setInputs] = useState({
    name: {
      name: 'name',
      label: 'Name',
      value: '',
      focus: false,
    },
    email: {
      name: 'email',
      label: 'Email',
      value: '',
      focus: false,
    },
    message: {
      name: 'message',
      label: 'Message',
      value: '',
      focus: false,
    },
  });

  const handleFocus = (name) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        focus: true,
      },
    }));
  };

  const handleBlur = (name) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        focus: false,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: inputs.name.value,
      email: inputs.email.value,
      message: inputs.message.value,
    };

    emailjs
      .sendForm(
        'service_i7wfzks',
        'service_i7wfzks',
        e.target,
        '3Q2Fp7WXULFPkNEsw'
      )
      .then(
        (result) => {
          console.log(result.text);
          setInputs({
            name: { ...inputs.name, value: '' },
            email: { ...inputs.email, value: '' },
            message: { ...inputs.message, value: '' },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { name, email, message } = inputs;

  return (
    <div className="container">
      <Card>
        <h1>Send us a Message!</h1>
        <Form onSubmit={handleSubmit}>
          <TextInput
            {...name}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            onChange={handleChange}
          />
          <TextInput
            {...email}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            onChange={handleChange}
          />
          <TextArea
            {...message}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            onChange={handleChange}
          />
          <Button type="submit">Send</Button>
        </Form>
      </Card>
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import './Contact.css';

// const Card = ({ children }) => (
//   <div className="contact">
//     <div className="card">
//       {/*<div className="waves">
//     </div>*/}
//       {children}
//     </div>
//   </div>
// );

// const Form = ({ children }) => <form className="form">{children}</form>;

// const TextInput = ({
//   name,
//   label,
//   value,
//   focus,
//   onChange,
//   onFocus,
//   onBlur,
// }) => (
//   <div className="text-input">
//     <label
//       className={focus || value !== '' ? 'label-focus' : ''}
//       htmlFor={name}
//     >
//       {label}
//     </label>
//     <input
//       className={focus || value !== '' ? 'input-focus' : ''}
//       type="text"
//       name={name}
//       value={value}
//       onChange={onChange}
//       onFocus={onFocus}
//       onBlur={onBlur}
//     />
//   </div>
// );

// const TextArea = ({ name, label, value, focus, onChange, onFocus, onBlur }) => (
//   <div className="text-area">
//     <label
//       className={focus || value !== '' ? 'label-focus' : ''}
//       htmlFor={name}
//     >
//       {label}
//     </label>
//     <textarea
//       className={focus || value !== '' ? 'input-focus' : ''}
//       name={name}
//       value={value}
//       onChange={onChange}
//       onFocus={onFocus}
//       onBlur={onBlur}
//     />
//   </div>
// );

// const Button = ({ children }) => <button className="button">{children}</button>;

// const App = () => {
//   const [inputs, setInputs] = useState({
//     name: {
//       name: 'name',
//       label: 'Name',
//       value: '',
//       focus: false,
//     },
//     email: {
//       name: 'email',
//       label: 'Email',
//       value: '',
//       focus: false,
//     },
//     message: {
//       name: 'message',
//       label: 'Message',
//       value: '',
//       focus: false,
//     },
//   });

//   const handleFocus = (name) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: {
//         ...prevState[name],
//         focus: true,
//       },
//     }));
//   };

//   const handleBlur = (name) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: {
//         ...prevState[name],
//         focus: false,
//       },
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: {
//         ...prevState[name],
//         value,
//       },
//     }));
//   };

//   const { name, email, message } = inputs;

//   return (
//     <div className="container">
//       <Card>
//         <h1>Send us a Message!</h1>
//         <Form>
//           <TextInput
//             {...name}
//             onFocus={() => handleFocus('name')}
//             onBlur={() => handleBlur('name')}
//             onChange={handleChange}
//           />
//           <TextInput
//             {...email}
//             onFocus={() => handleFocus('email')}
//             onBlur={() => handleBlur('email')}
//             onChange={handleChange}
//           />
//           <TextArea
//             {...message}
//             onFocus={() => handleFocus('message')}
//             onBlur={() => handleBlur('message')}
//             onChange={handleChange}
//           />
//           <Button>Send</Button>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default App;
