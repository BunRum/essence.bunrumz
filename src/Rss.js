
import { Button, Grid, Text, Card, Row, createTheme, NextUIProvider, Spacer, Col, Image, Tooltip } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import './index.css'

const darkTheme = createTheme({
    type: 'dark'
})


const CustomCard = () => {
    const navigate = useNavigate();
    var Game = 'God of War'
    var request = new XMLHttpRequest();
    request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
    request.send(null)
    console.log(request.responseText)
    var GameList = JSON.parse(request.responseText)
    return (
        <Image
            id="Suggestion"
            width={1000}
            height='70%'
            src={GameList[Game]["CoverArt"]}
            alt="Default Image"
            objectFit="fill"
            onMouseEnter={
                () => {
                    document.getElementById('Suggestion').style.cursor = 'pointer';
                }
            }
            onClick={() => {
                navigate(`/essence.bunrumz/Player?game=${Game}`)
            }}
            css={{
                boxShadow: '$md',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                '&:hover': {
                    transform: 'scale(1.05, 1.05)',
                    'transform-origin': 'left right',
                    zIndex: '1',
                    transition: 'all 0.4s ease'
                }
            }}
        />
    )
}

// function


export default function Riddleschoolseries() {
    const navigate = useNavigate();
    var request = new XMLHttpRequest();
    request.open("GET", "/essence.bunrumz/ListOfGames.json", false);
    request.send(null)
    console.log(request.responseText)
    var GameList = JSON.parse(request.responseText)

    return (
        // <NextUIProvider theme={darkTheme}>
        <div style={{
            'backgroundImage': 'url(/essence.bunrumz/sitefiles/bg7.png',
            'backgroundRepeat': 'no-repeat',
            'backgroundAttachment': 'fixed',
            'backgroundSize': 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <Text h1
                css={{
                    textGradient: " $black500 100",
                }}
            >"aa"</Text>

            <CustomCard></CustomCard>
            <Spacer y={1} />
            <Image
                id='rs'
                width={327}
                height={104}
                src='/essence.bunrumz/sitefiles/rss.png'
                alt="Default Image"
                objectFit="fill"
                onMouseEnter={
                    () => {
                        document.getElementById('rs').style.cursor = 'pointer';
                    }
                }
                onClick={() => {
                    navigate(`/essence.bunrumz/Player?game=Riddle School`)
                }}
                css={{
                    boxShadow: '$md',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                        transform: 'scale(1.05, 1.05)',
                        'transform-origin': 'left right',
                        zIndex: '1',
                        transition: 'all 0.4s ease'
                    }
                }}
            />

        </div>
        //     {/* <Spacer y={3} />
        //         <Text h1
        //             css={{
        //                 textGradient: " $black500 100",
        //             }}
        //         >"aa"</Text>
        //         <CustomCard></CustomCard>
        //         <Spacer y={1} />

        //         <Image
        //             id='rs'
        //             width={327}
        //             height={104}
        //             src='/essence.bunrumz/sitefiles/rss.png'
        //             alt="Default Image"
        //             objectFit="contain"
        //             onMouseEnter={
        //                 () => {
        //                     document.getElementById('rs').style.cursor = 'pointer';
        //                 }
        //             }
        //             onClick={() => {
        //                 navigate(`/essence.bunrumz/Player?game=Riddle School`)
        //             }}
        //             css={{
        //                 boxShadow: '$md',
        //                 position: 'relative',
        //                 overflow: 'hidden',
        //                 transition: 'all 0.4s ease',
        //                 '&:hover': {
        //                     transform: 'scale(1.05, 1.05)',
        //                     'transform-origin': 'left right',
        //                     zIndex: '1',
        //                     transition: 'all 0.4s ease'
        //                 }
        //             }}
        //         />

        //         <Grid.Container gap={2} justify="center">
        //             {
        //                 Object.entries(GameList).map(([Game], i) => (
        //                     <Grid xs={10000} sm={2} key={i}>
        //                         <Tooltip contents={'Gaaaa'}>

        //                         </Tooltip>
        //                         <Image
        //                             id={i}
        //                             width='90%'
        //                             height={100}
        //                             src={GameList[Game]["CoverArt"]}
        //                             alt="Default Image"
        //                             objectFit="cover"
        //                             onMouseEnter={
        //                                 () => {
        //                                     document.getElementById(i).style.cursor = 'pointer';
        //                                 }
        //                             }
        //                             onClick={() => {
        //                                 navigate(`/essence.bunrumz/Player?game=${Game}`)
        //                             }}
        //                             css={{
        //                                 boxShadow: '$md',
        //                                 position: 'relative',
        //                                 overflow: 'hidden',
        //                                 transition: 'all 0.4s ease',
        //                                 '&:hover': {
        //                                     transform: 'scale(1.05, 1.05)',
        //                                     'transform-origin': 'left right',
        //                                     zIndex: '1',
        //                                     transition: 'all 0.4s ease'
        //                                 }
        //                             }}
        //                         />
        //                     </Grid>
        //                 ))
        //             }
        //         </Grid.Container > */}
        // // {/* </NextUIProvider > */}
    );
}
