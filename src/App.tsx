import React from 'react';
import styled from "styled-components";

function App() {
  return (
      <Container>
          <p>
              Hello World!!!
          </p>
      </Container>

  );
}

export default App;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  height: 100vh;
  gap: 35px;
`
