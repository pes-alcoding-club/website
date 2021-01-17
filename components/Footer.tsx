import { Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import MediaQuery from 'react-responsive';

const Footer = () => {
    return (
        <div style={{bottom:0}}>
            <MediaQuery minDeviceWidth={1224}>
                <footer
                    style={{
                        width: '100%',
                        padding: '20px',
                        position: 'relative',
                        backgroundColor: 'black',
                    }}
                >
                    <Heading
                        align="center"
                        fontSize="xl"
                        color="whitesmoke"
                        style={{ margin: '10px 0 20px 2px' }}
                    >
                        Contact Us
                    </Heading>
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            width: '100%',
                        }}
                    >
                        <div style={{ margin: '0px auto', display: 'flex' }}>
                            <a href="https://www.instagram.com/thealcodingclub/">
                                <Button
                                    _hover={{
                                        bg: '#bc2a8d',
                                        textColor: 'whitesmoke',
                                    }}
                                    leftIcon={<FaInstagram />}
                                    to="https://www.instagram.com/thealcodingclub"
                                    style={{ display: 'flex', margin: '10px' }}
                                >
                                    Instagram
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/company/the-alcoding-club/">
                                <Button
                                    _hover={{
                                        bg: '#0e76a8',
                                        textColor: 'whitesmoke',
                                    }}
                                    leftIcon={
                                        <FaLinkedin
                                            style={{ margin: '0 3px 0 3px' }}
                                        />
                                    }
                                    style={{ display: 'flex', margin: '10px' }}
                                >
                                    LinkedIn
                                </Button>
                            </a>
                            <Button
                                _hover={{
                                    bg: '#DB4437',
                                    textColor: 'whitesmoke',
                                }}
                                leftIcon={
                                    <SiGmail
                                        style={{ margin: '0 5px 0 5px' }}
                                    />
                                }
                                style={{
                                    display: 'flex',
                                    margin: '10px',
                                    padding: '0 27px',
                                }}
                            >
                                Mail
                            </Button>
                        </div>
                    </div>
                </footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
                <footer
                    style={{
                        width: '140%',
                        padding: '20px 20px 90px 20px',
                        position: 'relative',
                        backgroundColor: 'black',
                    }}
                >
                    <Heading
                        align="center"
                        fontSize="xl"
                        color="whitesmoke"
                        style={{ margin: '10px 0 20px 2px' }}
                    >
                        Contact Us
                    </Heading>
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            width: '100%',
                        }}
                    >
                        <div style={{ margin: '0px auto', display: 'flex' }}>
                            <Button
                                _hover={{
                                    bg: '#bc2a8d',
                                    textColor: 'whitesmoke',
                                }}
                                leftIcon={<FaInstagram />}
                                to="https://www.instagram.com/thealcodingclub"
                                style={{ display: 'flex', margin: '10px' }}
                            >
                                <a href="https://www.instagram.com/thealcodingclub/">
                                    Instagram
                                </a>
                            </Button>
                            <Button
                                _hover={{
                                    bg: '#0e76a8',
                                    textColor: 'whitesmoke',
                                }}
                                leftIcon={
                                    <FaLinkedin
                                        style={{ margin: '0 3px 0 3px' }}
                                    />
                                }
                                style={{ display: 'flex', margin: '10px' }}
                            >
                                <a href="https://www.linkedin.com/company/the-alcoding-club/">
                                    LinkedIn
                                </a>
                            </Button>
                            <Button
                                _hover={{
                                    bg: '#DB4437',
                                    textColor: 'whitesmoke',
                                }}
                                leftIcon={
                                    <SiGmail
                                        style={{ margin: '0 5px 0 5px' }}
                                    />
                                }
                                style={{
                                    display: 'flex',
                                    margin: '10px',
                                    padding: '0 27px',
                                }}
                            >
                                Mail
                            </Button>
                        </div>
                    </div>
                </footer>
            </MediaQuery>
        </div>
    );
};
export default Footer;
