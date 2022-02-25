
import React from 'react';
import { Button, Grid, Text, Card, Row, createTheme, NextUIProvider, Input, Spacer } from "@nextui-org/react";
import { Col } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

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

export default function Games() {
    const navigate = useNavigate();
    return (
        <NextUIProvider theme={darkTheme}>
            <Input
                css={{
                    zIndex: "1",
                    position: "absolute",
                    left: "50%",
                    transform: "translate(320%, -100%)",
                }}
                clearable label="Search" placeholder="  " initialValue=""
            />
            
            <Spacer y={3.7} />
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Card hoverable animated shadow>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    objectFit="cover"
                                    src={item.img}
                                    width='100%'
                                    height={140}
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer justify="flex-end" blur="true">
                                <Row wrap='wrap' justify="space-between">
                                    <Text b>
                                        {item.title}
                                    </Text>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row justify="flex-end">
                                            <Button flat auto rounded color="success" onClick={() => {navigate("../Player?game=" + item.title)}}>
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
