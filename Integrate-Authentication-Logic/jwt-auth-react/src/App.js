
import React, { useState } from 'react';
import Login from './Login';
import Protected from './Protected';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      {!token ? <Login setToken={setToken} /> : <Protected />}
    </div>
  );
}

export default App;
