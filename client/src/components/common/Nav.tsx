import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const LinkContainer = ({ children }) => (
    <Box
        userSelect="none"
        _hover={{ color: '#e94560' }}
        color="whitesmoke"
        fontSize={{ lg: 'xl', base: 'sm' }}
        fontWeight="bold"
    >
        {children}
    </Box>
);

interface NavProps {
    containerRef: React.MutableRefObject<undefined>;
}

const Nav: FC<NavProps> = ({ containerRef }) => {
    const { pathname } = useRouter();
    const goToBottom = () => {
        // @ts-ignore
        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    if (pathname === '/register') {
        return (
            <Box
                display="flex"
                p="30px"
                w="100%"
                justifyContent="space-around"
                ref={containerRef}
            >
                <LinkContainer>
                    <Link href="/">Home</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="/problems"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contests">Contests</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    } else if (pathname === '/contests') {
        return (
            <Box
                display="flex"
                p="30px"
                w="100%"
                justifyContent="space-around"
                ref={containerRef}
            >
                <LinkContainer>
                    <Link href="/">Home</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="/upcoming"
                        style={{ cursor: 'pointer' }}
                    >
                        Upcoming Events
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="/problems"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    } else {
        return (
            <Box
                display="flex"
                p="30px"
                w="100%"
                justifyContent="space-around"
                ref={containerRef}
            >
                <LinkContainer>
                    <a
                        href="/upcoming"
                        style={{ cursor: 'pointer' }}
                    >
                        Upcoming Events
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <a
                        href="/problems"
                        style={{ cursor: 'pointer' }}
                    >
                        Editorials
                    </a>
                </LinkContainer>
                <LinkContainer>
                    <Link href="/contests">Contests</Link>
                </LinkContainer>
                <LinkContainer>
                    <a
                        onClick={() => goToBottom()}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact Us
                    </a>
                </LinkContainer>
            </Box>
        );
    }
};

export default Nav;
