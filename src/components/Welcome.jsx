import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';

const ComposeEmail = () => {
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');

  const handleSend = async () => {
    try {
      // Send email data to Firebase API endpoint
      await axios.post('https://mailbox-ac5ed-default-rtdb.firebaseio.com/emails.json', {
        recipient,
        content,
        sender: 'aryangpjnv188@gmail.com', // Replace with current user's email
        timestamp: new Date().toISOString()
      });

      // Clear input fields after sending
      setRecipient('');
      setContent('');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Recipient Email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Compose your email..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ComposeEmail;
