import React, {useState} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.clase ? "#EDEDA5" : "#292A2A"}; 
      
    button {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: black;
      color: white;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      padding: 25px;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const App = () => {

  const [luzPrendida, setluzPrendida] = useState(false)
  
  const handleClick = () => {
    setluzPrendida(!luzPrendida)
  }
  
  return (
    <Div clase={luzPrendida}>
      <button onClick={handleClick}>{!luzPrendida ? "Prender la luz" : "Apagar la luz"}</button>
    </Div>
  );
}

export default App;
