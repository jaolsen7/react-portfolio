import React, { useState } from 'react';

function Contact(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [error, setError] = useState('');

  const handleChange = (e) => {

    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="Contact container-fluid">
      <div className="row justify-content-center m-4">
      <div className="col-6 shadow">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mt-3 mb-3">
            <label for="name" className="form-label">Name: </label>
            <input
              className="form-control"
              value={name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Type here..."
            />
            <div className="form-text">Please enter first and last name.</div>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email: </label>
            <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Type here..."
            />
            <div className="form-text">I will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message: </label>
            <textarea
              className="form-control"
              value={message}
              name="message"
              onChange={handleChange}
              type="message"
              placeholder="Type here..."
            />
            <div className="form-text">Please try to be constructive and/or positive :)</div>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        {/* {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} */}
      </div>
      </div>
    </div>
    
  );
}

export default Contact;