
import React from 'react';
import { Button, Grid, Text, Card, Row, createTheme, NextUIProvider, Input, Spacer } from "@nextui-org/react";
import { Col } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'react-iconly';

const darkTheme = createTheme({
    type: 'dark'
})

const list = [
    {
        title: 'fortnite',
        img: '/static/images/fortnite.jpg'
    },
    {
        title: 'Yakuza kiwami',
        img: '/static/images/kiwami.jpg'
    },
    {
        title: 'yakuza 0',
        img: '/static/images/y0.jpg'
    },
    {
        title: 'Super Mario 64',
        img: '/images/sm64cover.jpg'
    },
    {
        title: 'Riddle School',
        img: '/images/rs1.jpg'
    },
    {
        title: 'Riddle School 2',
        img: '/images/rs2.png'
    },
    {
        title: 'Riddle School 3',
        img: '/images/rs3.jpg'
    },
    {
        title: 'Riddle School 4',
        img: '/images/rs4.jpg'
    },
    {
        title: 'Riddle School 5',
        img: '/images/rs5.jpg'
    },
    {
        title: 'Riddle Transfer',
        img: '/images/rst.jpg'
    },
    {
        title: 'Riddle Transfer 2',
        img: '/images/rt2.jpg'
    },
    {
        title: 'Spider-Man (2000)',
        img: '/images/sm2000.jpg'
    },
];


var request = new XMLHttpRequest();
request.open("GET", "./ListOFGames.json", false);
request.send(null)
var GameList = JSON.parse(request.responseText)
console.log(GameList[0])

export default function Games() {
    const navigate = useNavigate();
    return (
        <NextUIProvider theme={darkTheme}>
            <Grid.Container justify="center" id="NewItem">
                <Grid sm="100%">
                    <Card cover css={{ w: '100%', p: 0 }}>
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
                                        Super Mario 64
                                    </Text>
                                    <Button auto css={{ color: '#94f9f0', bg: '#000000' }}>
                                        {<Play fill="currentColor" filled />}
                                        <Spacer x={0.2} />
                                        Play
                                    </Button>
                                </Col>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Image
                                src='/images/sm64cover.jpg'
                                height={400}
                                width="100%"
                                alt="Relaxing app background"
                                objectFit='Fill'
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
                                        <Col span={3}>
                                            <Card.Image
                                                src='/images/sm64cover.jpg'
                                                css={{ background: 'black' }}
                                                height={40}
                                                width={40}
                                                alt="Breathing app icon"
                                                objectFit='fill'
                                            />
                                        </Col>
                                        <Col>
                                            <Text color="#d1d1d1" size={12}>
                                                Breathing App
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                Get a good night's sleep.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
            <Spacer y={1} />
            <Grid.Container gap={2} justify="flex-start">
                {
                    Object.entries(GameList).map(([Game], i) => (
                        console.log(Game, GameList[Game]),
                        <Grid xs={6} sm={3} key={i}>
                            <Card hoverable animated shadow>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        objectFit="cover"
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
