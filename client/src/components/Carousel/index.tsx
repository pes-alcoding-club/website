import { Box, Button, Divider, Image, Stack } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { BASEURL } from '../../config';
import ContestCard, { ContestCardProps } from './ContestCard';
// help from: https://www.youtube.com/watch?v=l1MYfu5YWHc :)

interface CarouselProps {
    data: any[];
    isImg?: boolean;
}

const Carousel: FC<CarouselProps> = ({ isImg, data }) => {
    const [current, setCurrent] = useState<number>(0);
    const increment = () => setCurrent((current + 1) % data.length);
    const decrement = () => {
        setCurrent(current !== 0 ? current - 1 : data.length - 1);
    };

    if (isImg) {
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
                {data.map((src, key) => (
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
                                w={{ lg: '778px', base: '357px' }}
                                h={{ lg: '556px', base: '236px' }}
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
    } else {
        return (
            <Box
                my="10"
                mx="auto"
                display="flex"
                flexDir="column"
                justifyContent="center"
                position="relative"
            >
                <Box mx="auto" mb="5px">
                    {data.map(
                        (
                            {
                                name,
                                problemsURL,
                                theme,
                                solutionURL,
                                status,
                            }: ContestCardProps,
                            key
                        ) => (
                            <Box
                                position="relative"
                                zIndex="1"
                                key={key}
                                opacity={key === current ? '1' : '0'}
                                transitionDuration={
                                    key === current ? '1s' : '1s ease'
                                }
                                transform={`scale(${
                                    key === current ? '1.08' : '1'
                                })`}
                            >
                                {key === current && (
                                    <ContestCard
                                        name={name}
                                        problemsURL={problemsURL}
                                        theme={theme}
                                        status={status}
                                        solutionURL={solutionURL}
                                    />
                                )}
                            </Box>
                        )
                    )}
                </Box>
                <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                    mx="auto"
                    mt={{ lg: '10', base: '5' }}
                >
                    <Button onClick={decrement} mr={{lg:"7",base:"7"}}>
                        <FaArrowCircleLeft cursor="pointer" size="30" />
                    </Button>
                    <Button onClick={increment}>
                        <FaArrowCircleRight cursor="pointer" size="30" />
                    </Button>
                </Stack>
            </Box>
        );
    }
};

export default Carousel;
