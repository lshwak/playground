import React from "react";
import MyHeader from "./myHeader";
import Counter from "./Counter";
import Container from "./Container";
 
function App() {
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  }

  return (
    <Container>
    <div>
      <MyHeader/>
      <Counter {...counterProps} />
    </div>
    </Container>
  );
}
export default App;
