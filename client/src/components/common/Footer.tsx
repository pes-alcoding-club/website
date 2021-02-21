import { Box, Button, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => (
    <Box w="100vw" p="10px" backgroundColor="black" mt="100">
        <Box display="flex" justifyContent="space-evenly">
            <Box
                display="flex"
                justifyContent="center"
                width={{ base: '50%', lg: '25%' }}
                height="100%"
            >
                <Box width={{ lg: '80%', base: '100%' }}>
                    <Image src="/Logo-w.png" userSelect="none" />
                </Box>
            </Box>
            <Box
                display={{ lg: 'flex', base: 'none' }}
                justifyContent="center"
                flexDir="column"
            >
                <Divider orientation="vertical" color="white" height="80%" />
            </Box>
            <Box display="flex" justifyContent="center" flexDir="column">
                <a href="https://www.instagram.com/thealcodingclub/">
                    <Button
                        m="2"
                        w="100%"
                        fontSize={{ lg: 'xl', base: 'md' }}
                        _hover={{
                            bg: '#bc2a8d',
                            textColor: 'whitesmoke',
                        }}
                        leftIcon={<FaInstagram />}
                    >
                        Instagram
                    </Button>
                </a>
                <a href="https://www.linkedin.com/company/the-alcoding-club/">
                    <Button
                        m="2"
                        w="100%"
                        fontSize={{ lg: 'xl', base: 'md' }}
                        _hover={{
                            bg: '#0e76a8',
                            textColor: 'whitesmoke',
                        }}
                        leftIcon={<FaLinkedin />}
                    >
                        Linkedin
                    </Button>
                </a>
                <a href="https://github.com/pes-alcoding-club">
                    <Button
                        m="2"
                        w="100%"
                        fontSize={{ lg: 'xl', base: 'md' }}
                        _hover={{
                            bg: '#4A5568',
                            textColor: 'whitesmoke',
                        }}
                        leftIcon={<FaGithub />}
                    >
                        Github
                    </Button>
                </a>
                <a href="mailto:alcoding@pes.edu">
                    <Button
                        m="2"
                        w="100%"
                        fontSize={{ lg: 'xl', base: 'md' }}
                        _hover={{
                            bg: '#DB4437',
                            textColor: 'whitesmoke',
                        }}
                        leftIcon={<SiGmail />}
                    >
                        Email
                    </Button>
                </a>
            </Box>
        </Box>
        <Box w="80%" mx="auto" my="5">
            <Divider />
        </Box>
        <Box color="whitesmoke" textAlign="center" my="4">
            <Text fontWeight="bold" fontSize={{ lg: '3xl', base: 'xl' }}>
                The Alcoding Club
            </Text>
        </Box>
    </Box>
);

export default Footer;
