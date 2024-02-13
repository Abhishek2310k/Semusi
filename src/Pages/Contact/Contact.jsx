import React, { useState, useEffect } from 'react';
import './Contact.scss';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Contact = ({ data }) => {
  let { id } = useParams();
  id = id - 1;
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const receiver = data[id].email;

  let from = '';
  if (authUser !== null) from = authUser.email;

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      Username: 'kumarabhi2k21@gmail.com',
      Password: '453EA6E8292E460E3C1C63B57F976A45E1ED',
      Host: 'smtp.elasticemail.com',
      Port: '2525',
      To: receiver,
      From: from,
      Subject: subject,
      Body: body,
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert('email sent'));
    }
  };

  return (
    <div>
      {authUser === null ? (
        <div className='request_login'>
          <h1> Please Login Or Register For Sending Messages</h1>
          <div className='buttons'>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
          </div>
        </div>
      ) : (
        <div className='contact'>
          <h1>Contact {data[id].alt}</h1>
          <form onSubmit={submitHandler}>
            <div className='item'>
              <label htmlFor='Subject'>Subject</label>
              <input type='text' id='Subject' onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className='item'>
              <label htmlFor='body'>Message</label>
              <textarea id='body' onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
