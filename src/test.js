import React from "react";
import { NextUIProvider, createTheme, Button, Modal, Input, Text, Row, Checkbox} from "@nextui-org/react";

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
                aria-labelledby="modal-title"
                width="600px"
                height="1000px"
                open={visible}
                onClose={closeHandler}
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
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>
                                Remember me
                            </Text>
                        </Checkbox>
                        <Text size={14}>
                            Forgot password?
                        </Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </NextUIProvider>
    );
};