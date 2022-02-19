import React from "react";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
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


function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function App() {
  return (
    <div style={{
      backgroundColor: "rgb(19, 16, 16)",
      width: '100vw',
      height: '100vh'
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "rgb(0,0,0)",
        width: '40%',
        height: '50%'
      }}>
        <IconButton color="primary" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(700%, -550%)'
        }}
          onClick={() => {
            let elem = document.getElementById("container");
            if (!document.fullscreenElement) {
              elem.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
              });
            } else {
              document.exitFullscreen();
            }
          }}
        >
          <FullscreenIcon />
        </IconButton>
        <iframe title="Game Frame" src="" id="container" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%'
        }} allow="fullscreen"></iframe>
      </div>
      <CustomButton style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, 500%)'
      }}
        onClick={() => {
          document.getElementById("container").setAttribute("src", "https://bunrum.github.io/JavaScriptGames/Portal2d.html");
        }}
      >
        Super Smash Flash
      </CustomButton>
    </div>

  );
};