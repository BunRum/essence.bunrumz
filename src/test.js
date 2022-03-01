import React from "react";
import { NextUIProvider, createTheme, Button, Modal, Text, Card, Grid, Col } from "@nextui-org/react";

const darkTheme = createTheme({
    type: 'dark'
})

export default function Test() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };
    return (
        <NextUIProvider theme={darkTheme}>
            <Button auto shadow onClick={handler}>
                Open modal
            </Button>
            <Modal
                closeButton
                scroll
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                width="600px"
                height="1000px"
                open={visible}
                onClose={closeHandler}
                fullScreen
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={2} justify="center">
                        <Grid xs={1} sm={3}>
                            <Card bordered css={{mw: "100px"}}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        objectFit="cover"
                                        src='/images/sm2000.jpg'

                                        height={100}
                                        width={100}
                                        alt="Card image background"

                                    />
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                    <Col>
                        <Text
                            size={12}
                            weight="bold" x
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            Description
                        </Text>
                        <Text h4 color="white">
                            Stream the Acme event
                        </Text>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </NextUIProvider>
    );
};