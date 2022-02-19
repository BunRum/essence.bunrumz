import React from "react";
//import Button from "@mui/material/Button";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
// function SetBackgroundColor() {
//   return (
//     <div
//       style={{
//         backgroundColor: 'rgb(19, 16, 16)',
//         width: '100vw',
//         height: '100vh'
//       }}
//     />
//   );
// }

const mystyle = {
  backgroundColor: "rgb(19, 16, 16)",
  width: '100vw',
  height: '100vh'
};

const box = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: "rgb(0,0,0)",
  width: '40%',
  height: '50%'
};

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, 500%)'
};

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function App() {
  return (
    <div style={mystyle}>
      <div style={box}></div>

      <CustomButton style={style}>Button</CustomButton>
      {/* <Button variant="contained" style={style}>Contained</Button> */}
    </div>
    
  );
};