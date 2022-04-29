import React, { useState } from 'react';
import { SignIn } from './components/SignIn';
import { Welcome } from './components/Welcome';

import './style/App.scss';
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  const setUserLoggedIn = (username) => {
    setIsUserLoggedIn(username);
    setTimeout(() => {
      setIsLoaded(true)
    }, 2000);
  }

  return (
    <div className="App">
      {isUserLoggedIn ? <Welcome isLoaded={isLoaded} /> : <SignIn onSignIn={setUserLoggedIn} />}
    </div>
  );
}

export default App;
