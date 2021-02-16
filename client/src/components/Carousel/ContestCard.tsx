import {
    Badge,
    Box,
    Button,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

export interface ContestCardProps {
    name: string;
    status: string;
    theme: string;
    problemsURL: string;
    solutionURL: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
    name,
    status,
    theme,
    problemsURL,
    solutionURL,
}) => (
    <Box
        borderRadius="md"
        p={{ lg: '5', base: '2' }}
        border="solid 1px"
        borderColor="gray.400"
    >
        <Heading fontSize={{ lg: '3xl', base: '2xl' }} my="5">
            {name}
        </Heading>
        <Badge
            variant="solid"
            colorScheme="green"
            fontSize={{ lg: 'lg', base: 'md' }}
            my="2"
        >
            {status}
        </Badge>
        <Text fontSize={{ lg: 'xl', base: 'lg' }} my="4">
            Theme: {theme}
        </Text>
        <Stack
            direction="row"
            spacing={4}
            align="center"
            my={{ lg: '5', base: '3' }}
        >
            <a href={problemsURL}>
                <Button
                    size="md"
                    fontSize={{ lg: 'lg', base: 'sm' }}
                    colorScheme="teal"
                    variant="solid"
                >
                    Problem Statements
                </Button>
            </a>
            <a href={solutionURL}>
                <Button
                    size="md"
                    fontSize={{ lg: 'lg', base: 'sm' }}
                    colorScheme="teal"
                    variant="outline"
                >
                    Solutions
                </Button>
            </a>
        </Stack>
    </Box>
);

export default ContestCard;
