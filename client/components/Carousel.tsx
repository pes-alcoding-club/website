import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/'
        : 'https://alcoding-website-backend.herokuapp.com/';
const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'];

const Carousel = () => {
    const [current, setCurrent] = useState<number>(0);
    const increment = () => setCurrent((current + 1) % images.length);
    const decrement = () => {
        setCurrent(current !== 0 ? current - 1 : images.length - 1);
    };
    return (
        <Box
            my="10"
            mx="auto"
            w="80%"
            display="flex"
            justifyContent="center"
            userSelect="none"
            position="relative"
        >
            <FaArrowCircleLeft
                cursor="pointer"
                size="35"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20%',
                    zIndex: 10,
                }}
                onClick={decrement}
            />
            {images.map((src, key) => (
                <Box
                    position="relative"
                    zIndex="1"
                    key={key}
                    opacity={key === current ? '1' : '0'}
                    transitionDuration={key === current ? '1s' : '1s ease'}
                    transform={`scale(${key === current ? '1.08' : '1'})`}
                >
                    {key === current && (
                        <Image
                            alt="Alcoding Club Contest"
                            w={{ lg: '678px', base: '377px' }}
                            h={{ lg: '456px', base: '276px' }}
                            src={`${BASEURL}img${src}`}
                        />
                    )}
                </Box>
            ))}
            <FaArrowCircleRight
                cursor="pointer"
                size="35"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20%',
                    zIndex: 10,
                }}
                onClick={increment}
            />
        </Box>
    );
};

export default Carousel;
