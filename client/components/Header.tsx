import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MediaQuery from 'react-responsive';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
    l1: string;
    l2: string;
    l3: string;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn, l1, l2, l3 }) => (
    <>
        <MediaQuery minDeviceWidth={1224}>
            <Box
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
                {showApplyBtn && (
                    <Link href="/register">
                        <Button
                            size="lg"
                            _hover={{
                                bg: '#0f3460',
                                textColor: 'whitesmoke',
                            }}
                            bgColor="#e94560"
                            style={{
                                margin: '30px auto 90px',
                                display: 'block',
                            }}
                        >
                            Apply To Our Monthly Challenge
                        </Button>
                    </Link>
                )}
                <Nav l1={l1} l2={l2} l3={l3} />
                <Divider />
            </Box>
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
                        padding: '0 20px',
                    }}
                >
                    The Alcoding Club
                </Heading>
                <Link href="/register">
                    <Button
                        size="lg"
                        _hover={{ bg: '#0f3460', textColor: 'whitesmoke' }}
                        bgColor="#e94560"
                        style={{
                            margin: '30px auto 90px',
                            display: 'block',
                        }}
                        href="/about"
                    >
                        Apply To Our Monthly Challenge
                    </Button>
                </Link>
                <Nav l1={l1} l2={l2} l3={l3} />
                <Divider />
            </div>
        </MediaQuery>
    </>
);

export default Header;
