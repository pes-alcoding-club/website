import { Box, Button, Heading, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <Box w="100vw" p="10px" backgroundColor="black">
            <Box display="flex" justifyContent="space-evenly">
                <Box display="flex" justifyContent="center" flexDir="row">
                    <Heading
                        align="center"
                        color="whitesmoke"
                        fontSize={{ lg: '3xl', base: 'xl' }}
                        margin="80px 20px"
                    >
                        Contact Us
                    </Heading>
                    <Divider orientation="vertical" height="60%" margin="40px 10px 40px 40px"/>
                <Box display="flex" justifyContent="center" flexDir="row" margin="80px 40px">
                    <a href="https://www.instagram.com/thealcodingclub/" style={{margin:"0 20px"}}>
                        <Button
                            w="100%"
                            fontSize={{ lg: 'lg', base: 'md' }}
                            _hover={{
                                bg: '#bc2a8d',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaInstagram />}
                        >
                            Instagram
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/company/the-alcoding-club/" style={{margin:"0 20px"}}>
                        <Button
                            w="100%"
                            fontSize={{ lg: 'lg', base: 'md' }}
                            _hover={{
                                bg: '#0e76a8',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaLinkedin/>}
                        >
                            Linkedin
                        </Button>
                    </a>
                    <a href="https://github.com/pes-alcoding-club" style={{margin:"0 20px"}}>
                        <Button
                            w="100%"
                            fontSize={{ lg: 'lg', base: 'md' }}
                            _hover={{
                                bg: '#4A5568',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaGithub />}
                        >
                            Github
                        </Button>
                    </a>
                    <a href="mailto:alcoding@pes.edu" style={{margin:"0 20px"}}>
                        <Button
                            w="100%"
                            fontSize={{ lg: 'lg', base: 'md' }}
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
            </Box>
        </Box>
    );
};
export default Footer;
