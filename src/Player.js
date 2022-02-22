import React from "react";

export default function LoadFlashGame(url) {
    console.log("ran");
    let myScript = document.createElement("script");
    myScript.setAttribute("src", "https://bunrum.github.io/RuffleForGoogleSites/ruffle.js");
    document.body.appendChild(myScript);
    myScript.addEventListener("load", scriptLoaded, false);
    function scriptLoaded() {
        window.RufflePlayer = window.RufflePlayer || {};
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("container");
        container.appendChild(player);
        player.Config = {
            "backgroundColor": "#000000",
            "contextMenu": true,
            "autoplay": "auto",
            "letterbox": "on",
            "unmuteOverlay": "visible",
        };
        player.load(url);
        player.style.width = "100%";
        player.style.height = "100%";
    }
}

export default function Player() {
    return (
        <div id="container" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "rgb(0,0,0)",
            width: '100vw',
            height: '100vh'
        }}>
        </div>
    );
};
//  <IconButton color="primary" style={{
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(700%, -550%)'
// }}
//   onClick={() => {
//     let elem = document.getElementById("container");
//     if (!document.fullscreenElement) {
//       elem.requestFullscreen().catch(err => {
//         alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
//   }}
// >
//   <FullscreenIcon />
// </IconButton>