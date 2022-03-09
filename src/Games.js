
import { Button, Grid, Text, Card, Row, createTheme, NextUIProvider, Spacer } from "@nextui-org/react";
import { Col } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'react-iconly';

const darkTheme = createTheme({
    type: 'dark'
})

// const list = [
//     {
//         title: 'fortnite',
//         img: '/static/images/fortnite.jpg'
//     },
//     {
//         title: 'Yakuza kiwami',
//         img: '/static/images/kiwami.jpg'
//     },
//     {
//         title: 'yakuza 0',
//         img: '/static/images/y0.jpg'
//     },
//     {
//         title: 'Super Mario 64',
//         img: '/images/sm64cover.jpg'
//     },
//     {
//         title: 'Riddle School',
//         img: '/images/rs1.jpg'
//     },
//     {
//         title: 'Riddle School 2',
//         img: '/images/rs2.png'
//     },
//     {
//         title: 'Riddle School 3',
//         img: '/images/rs3.jpg'
//     },
//     {
//         title: 'Riddle School 4',
//         img: '/images/rs4.jpg'
//     },
//     {
//         title: 'Riddle School 5',
//         img: '/images/rs5.jpg'
//     },
//     {
//         title: 'Riddle Transfer',
//         img: '/images/rst.jpg'
//     },
//     {
//         title: 'Riddle Transfer 2',
//         img: '/images/rt2.jpg'
//     },
//     {
//         title: 'Spider-Man (2000)',
//         img: '/images/sm2000.jpg'
//     },
// ];

var request = new XMLHttpRequest();
request.open("GET", "./ListOFGames.json", false);
request.send(null)
var GameList = JSON.parse(request.responseText)

export default function Games() {
    const navigate = useNavigate();

    function stuff() {
    }
    stuff()

    return (
        <NextUIProvider theme={darkTheme}>
            <Grid.Container justify="center" id="NewItem">
                <Grid xs={12} sm={7}>
                    <Card cover css={{ w: '100%', p: 0 }}>
                        <Card.Body>
                            <Card.Image
                                src='/images/sm64gameplay2.jpg'
                                height={300}
                                width="100%"
                                alt="Relaxing app background"
                            />
                        </Card.Body>

                        <Card.Footer
                            blur
                            css={{
                                position: 'absolute',
                                bgBlur: '#0f1114',
                                borderTop: '$borderWeights$light solid $gray700',
                                bottom: 0,
                                zIndex: 1
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Text color="#d1d1d1" size={12}>
                                                Recently Added
                                            </Text>
                                            <Spacer y={.4} />
                                            <Text color="#d1d1d1" size={16}>
                                                Super Mario 64
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button auto css={{ color: '#94f9f0', bg: '#000000' }}>
                                            {<Play fill="currentColor" filled />}
                                            <Spacer x={0.2} />
                                            Play
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>

                    </Card>
                </Grid>
            </Grid.Container>


            {/* <div justify="center">
                <Card>
                    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 50 }}>
                        <div>
                            <Col>
                                <Text
                                    h1
                                    size={60}
                                    css={{
                                        "color": "white",
                                        "-webkit-text-stroke-width": "3px",
                                        "-webkit-text-stroke-color": "black"
                                    }}
                                    weight="bold"
                                >
                                    Recently Added
                                </Text>
                            </Col>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Image
                            src='/images/sm64gameplay2.jpg'
                            height="10px"
                            width="100%"
                            alt="Relaxing app background"
                            objectFit='cover'
                        />
                    </Card.Body>

                </Card>
            </div> */}

            <Spacer y={1} />
            <Grid.Container gap={2} justify="flex-start">
                {
                    Object.entries(GameList).map(([Game], i) => (
                        <Grid xs={1} sm={2.4} key={i}>
                            <Card hoverable animated shadow>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        objectFit="scale-down"
                                        src={GameList[Game]["CoverArt"]}
                                        width='100%'
                                        height={140}
                                        alt={GameList[Game]["CoverArt"]}
                                    />
                                </Card.Body>
                                <Card.Footer justify="flex-end" blur="true">
                                    <Row wrap='wrap' justify="space-between">
                                        <Text b>
                                            {Game}
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row justify="flex-end">
                                                <Button flat auto rounded color="success" onClick={() => { navigate("../Player?game=" + Game) }}>
                                                    <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                                                        Play
                                                    </Text>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container >
        </NextUIProvider >
    );
}
