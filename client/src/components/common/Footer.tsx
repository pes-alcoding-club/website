import { Box, Button, Divider, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const { pathname } = useRouter();
    return (
        <Box
            w="100vw"
            p="10px"
            pb={{ base: pathname === '/' ? '85px' : '10px', lg: '10px' }}
            backgroundImage={`url(/shattered-island.gif)`}
            mt="100"
        >
            <Box display="flex" justifyContent="space-evenly">
               
                <Box display="flex" justifyContent="center" >
                    <a href="https://discord.com/invite/WJyMrRyfW8">
                            <Button
                                m="2"
                                w={{ lg: '100%', base: '90%' }}
                                fontSize={{ lg: 'xl', base: 'md' }}
                                _hover={{
                                    bg: '#bc2a8d',
                                    textColor: 'whitesmoke',
                                }}
                                leftIcon={<FaDiscord />}
                                margin={10}
                            >
                                Discord
                            </Button>
                        </a>
                    <a href="https://www.instagram.com/thealcodingclub/">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#bc2a8d',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaInstagram />}
                            margin={10}
                        >
                            Instagram
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/company/the-alcoding-club/">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#0e76a8',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaLinkedin />}
                            margin={10}
                        >
                            Linkedin
                        </Button>
                    </a>
                    <a href="https://github.com/pes-alcoding-club">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#4A5568',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<FaGithub />}
                            margin={10}
                        >
                            Github
                        </Button>
                    </a>
                    <a href="mailto:alcoding@pes.edu">
                        <Button
                            m="2"
                            w={{ lg: '100%', base: '90%' }}
                            fontSize={{ lg: 'xl', base: 'md' }}
                            _hover={{
                                bg: '#DB4437',
                                textColor: 'whitesmoke',
                            }}
                            leftIcon={<SiGmail />}
                            margin={10}
                        >
                            Email
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
