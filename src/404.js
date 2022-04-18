import { NextUIProvider, createTheme, Text } from '@nextui-org/react'

const darkTheme = createTheme({
    type: 'dark'
})


export default function NotFoundPage() {
    return (
        <NextUIProvider theme={darkTheme}>
            <Text h1
                style={{
                    position: 'fixed', left: '50%', top: '50%',
                    transform: 'translate(-50%, 170%)'
                }}> page doesnt exist stupid. </Text>
        </NextUIProvider>
    )
}