import React, { useState } from 'react';
import { SignIn } from './components/SignIn';

import './style/App.scss';
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  return (
    <div className="App">
      {isUserLoggedIn ? 'welcome' : <SignIn />}
    </div>
  );
}

export default App;
