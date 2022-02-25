import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Player() {
    let [searchParams] = useSearchParams();
    let game = searchParams.get("game")
    document.body.style.margin = "0";
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
        }} src={"https://bunrum.github.io/webgames/" + game}>
        </iframe>
    );
};