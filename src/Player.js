import React from "react";
import { useSearchParams } from "react-router-dom";
let bun = 0
export function LoadFlashGame(url) {
    console.log("Ran")
    console.log(bun)
    bun = bun + 1
    let myScript = document.createElement("script");
    myScript.setAttribute("src", "https://bunrum.github.io/RuffleForGoogleSites/ruffle.js");
    document.body.appendChild(myScript);

    // if ((bun = 1)) {
    //     console.log("log")
    //     let myScript = document.createElement("script");
    //     myScript.setAttribute("src", "https://bunrum.github.io/RuffleForGoogleSites/ruffle.js");
    //     document.body.appendChild(myScript);
    //     myScript.addEventListener("load", scriptLoaded, false);
    //     function scriptLoaded() {
    //         window.RufflePlayer = window.RufflePlayer || {};
    //         const ruffle = window.RufflePlayer.newest();
    //         const player = ruffle.createPlayer();
    //         const container = document.getElementById("container");
    //         console.log(container)
    //         container.appendChild(player);
    //         player.Config = {
    //             "backgroundColor": "#000000",
    //             "contextMenu": true,
    //             "autoplay": "auto",
    //             "letterbox": "on",
    //             "unmuteOverlay": "visible",
    //         };
    //         player.style.width = "100%";
    //         player.style.height = "100%";
    //         player.load(url);
    //         console.log("aa");
    //     }
    // }
}

const Games = {
    "Riddle School": {
        "type": "Flash",
        "swf": "https://bunrum.github.io/RuffleForGoogleSites/riddleschool.swf"
    }
}

function LoadGame(Game) {
    if (Games[Game]["type"] = "Flash") {
        console.log("is Flash")
        LoadFlashGame(Games[Game]["swf"])
    }
}

export default function Player() {
    let [searchParams, setSearchParams] = useSearchParams();
    let game = searchParams.get("game")
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
            {LoadGame(game)}
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