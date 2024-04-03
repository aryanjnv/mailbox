import React, { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';

const ComposeEmail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    try {
      const currentUserEmail = auth.currentUser.email;
      await axios.post('https://mailbox-ac5ed-default-rtdb.firebaseio.com/emails.json', {
        recipient,
        sender: currentUserEmail,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      // Clear input fields after sending
      setRecipient('');
      setSubject('');
      setMessage('');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div>
      <h2>Compose Email</h2>
      <label htmlFor="recipient">Recipient:</label>
      <input
        type="email"
        id="recipient"
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
      /><br />
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      /><br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea><br />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ComposeEmail;
