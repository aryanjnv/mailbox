import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';

const ReceivedEmails = () => {
  const [receivedEmails, setReceivedEmails] = useState([]);

  useEffect(() => {
    const fetchReceivedEmails = async () => {
      try {
        const currentUserEmail = auth.currentUser.email;
        const response = await axios.get(`https://mailbox-ac5ed-default-rtdb.firebaseio.com/emails.json?orderBy="recipient"&equalTo="${currentUserEmail}"`);
        const data = response.data;
        const emails = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setReceivedEmails(emails);
      } catch (error) {
        console.error('Error fetching received emails:', error);
      }
    };

    fetchReceivedEmails();
  }, []);

  return (
    <div>
      <h2>Received Emails</h2>
      <ul>
        {receivedEmails.map(email => (
          <li key={email.id}>
            <strong>From:</strong> {email.sender}<br />
            <strong>Subject:</strong> {email.subject}<br />
            <strong>Message:</strong> {email.message}
          </li>
        ))}
      </ul>
      <button onClick={() => { /* Handle compose button click */ }}>Compose</button>
    </div>
  );
};

export default ReceivedEmails;
