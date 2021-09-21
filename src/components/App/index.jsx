import React from "react";
import Heading from "../Heading";
import Navbar from "../Navbar";
import Widget from "../Widget";
import Container from "../../style/Container";

const App = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Heading />
        <Widget />
      </main>
    </Container>
  );
};

export default App;
