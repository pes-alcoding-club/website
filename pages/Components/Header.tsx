import React from 'react'
import { Container, Button, Heading, Divider } from '@chakra-ui/react'
import Nav from './Nav'
import Logo from '../Assets/Logo.svg'
import MediaQuery from 'react-responsive'
const Header = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={1224}>
                <div
                    style={{
                        backgroundImage:
                            'url(' +
                            'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' +
                            ')',
                        backgroundSize: '1550px 750px',
                    }}
                >
                    <Logo
                        style={{
                            height: '200px',
                            width: '200px',
                            margin: '0 auto 0',
                            padding: '10px 0 0 0',
                        }}
                    />
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '10px 0 0 0',
                            fontSize: '65px',
                        }}
                    >
                        The Alcoding Club
                    </Heading>
                    <Button
                        size="lg"
                        _hover={{ bg: '#0f3460', textColor: 'whitesmoke' }}
                        bgColor="#e94560"
                        style={{ margin: '30px auto 90px', display: 'block' }}
                    >
                        Apply To Our Monthly Challenge
                    </Button>
                    <Nav />
                    <Divider />
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <div
                    style={{
                        backgroundImage:
                            'url(' +
                            'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' +
                            ')',
                        backgroundSize: '1550px 750px',
                        width: '140%',
                    }}
                >
                    <Logo
                        style={{
                            height: '200px',
                            width: '200px',
                            margin: '0 auto 0',
                            padding: '10px 0 0 0',
                        }}
                    />
                    <Heading
                        style={{
                            textAlign: 'center',
                            margin: '10px 0 0 0',
                            fontSize: '65px',
                        }}
                    >
                        The Alcoding Club
                    </Heading>
                    <Button
                        size="lg"
                        _hover={{ bg: '#0f3460', textColor: 'whitesmoke' }}
                        bgColor="#e94560"
                        style={{ margin: '30px auto 90px', display: 'block' }}
                    >
                        Apply To Our Monthly Challenge
                    </Button>
                    <Nav />
                    <Divider />
                </div>
            </MediaQuery>
        </>
    )
}
export default Header
