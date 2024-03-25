import React from "react";
import './App.css'
import { Grommet } from 'grommet';
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import { useState } from "react";






function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const opeGrid = () => {
    setLoggedIn(true);
  }
  return (
    <>
      <Grommet>
      <Header />
      {loggedIn ? <Grid /> : <SignIn /> }
      <Footer />
      </Grommet>
    </>
  );
}

export default App;