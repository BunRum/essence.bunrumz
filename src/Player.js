
import { useSearchParams } from "react-router-dom";
import { NextUIProvider, createTheme, Text } from '@nextui-org/react'

const darkTheme = createTheme({
    type: 'dark'
})

var dict = {
    "Riddle School": function () {
        return (
            <iframe title="wip" id="container" style={{
                display: "block",   /* iframes are inline by default */
                position: "fixed",
                background: "#000",
                border: "none",
                top: "0", right: "0",
                bottom: "0", left: "0",
                width: '100vw',
                height: '100vh',
                overflow: "hidden"
            }} src="https://bunrum.github.io/webgames/Riddle School">
            </iframe>
        )
    },
    "Super Mario 64": function () {
        return (
            <iframe title="wip" id="container" style={{
                display: "block",   /* iframes are inline by default */
                position: "fixed",
                background: "#000",
                border: "none",
                top: "0", right: "0",
                bottom: "0", left: "0",
                width: '100vw',
                height: '100vh',
                overflow: "hidden"
            }} src="https://sm64web.clambam10.repl.co/f.html">
            </iframe>
        )
    }
};

var request = new XMLHttpRequest();
request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
request.send(null)
var GameList = JSON.parse(request.responseText)

function CheckifGameExists(game) {

    if (GameList[game] === undefined) {
        return (
            <NextUIProvider theme={darkTheme}>
                <Text h1
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, 350%)'
                    }}> This game does not exist </Text>
            </NextUIProvider>
        )
    }
    if (GameList[game] !== undefined) {
        return (
            <div>
                <iframe title="wip" id="container" style={{
                    display: "block",   /* iframes are inline by default */
                    position: "fixed",
                    background: "#000",
                    border: "none",
                    top: "0", right: "0",
                    bottom: "0", left: "0",
                    width: '100vw',
                    height: '100vh',
                    overflow: "hidden"
                }} src={`/essence.bunrumz/gamefiles/${game}/game.html`}>
                </iframe>
            </div>
        )
    }
}

export default function Player() {
    // const location = useLocation();
    console.log("a")
    let [searchParams] = useSearchParams();
    let game = searchParams.get("game")
    document.body.style.margin = "0";
    return (
        <div>
            {CheckifGameExists(game)}
        </div>
    );
};