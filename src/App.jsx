import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/ComposeEmail';
import ReceivedMails from './components/ReceivedMails';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/receivedmails" element={<ReceivedMails />} />
      <Route path="/compose" element={<Welcome />} />
      
      
      </Routes>
    </Router>
  );
}

export default App;
