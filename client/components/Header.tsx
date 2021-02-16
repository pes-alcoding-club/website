import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';

interface HeaderProps {
    showApplyBtn?: boolean;
    goToBottom: () => void;
}

const Header: React.FC<HeaderProps> = ({ showApplyBtn, goToBottom }) => (
    <Box
        w="100vw"
        backgroundImage="url(https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
    >
        <a href="/">
                <Logo
                    style={{
                        height: '200px',
                        width: '200px',
                        margin: '0 auto',
                        paddingTop: '10px',
                    }}
                />
        </a>
        <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: '4xl', lg: '6xl' }}
        >
            <Link href="/">The Alcoding Club</Link>
        </Heading>
        {showApplyBtn && (
            <Link href="/register">
                <Button
                    fontSize={{ lg: 'xl', base: 'md' }}
                    size="lg"
                    _hover={{
                        bg: '#0f3460',
                        textColor: 'whitesmoke',
                    }}
                    bgColor="#e94560"
                    mt="30px"
                    mx="auto"
                    mb="90px"
                    display="block"
                >
                    Apply to our Monthly Challenge
                </Button>
            </Link>
        )}
        <Nav goToBottom={goToBottom} />
    </Box>
);

export default Header;
