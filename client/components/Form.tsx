import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/user/', { name, email });
    };

    return (
        <>
            <Container>
                <Heading textAlign="center" my="10">
                    About the contest
                </Heading>
                <Text textAlign="center" fontSize="lg" my="5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis blandit posuere est, eget lacinia est fermentum at.
                    Mauris et ultrices arcu. Aliquam vitae pulvinar ex. Maecenas
                    vitae luctus sapien, nec laoreet metus. Nam ultricies
                    euismod dolor id vulputate. Cras sit amet faucibus enim, in
                    pulvinar metus. Pellentesque nec facilisis sem. Integer
                    vitae dolor sit amet quam tempor commodo. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Phasellus vel massa et dolor tristique
                    sollicitudin non sed velit. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Fusce in augue nulla. Nulla non lobortis purus. Proin
                    vestibulum mollis ipsum in condimentum. Ut eu sollicitudin
                    quam. Donec vehicula arcu a sapien molestie tempus. Nullam
                    et placerat nibh. Quisque blandit sed dui eget vehicula.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sit amet enim pharetra, posuere odio nec, mollis mi.
                    Phasellus eu volutpat sapien, sit amet viverra nunc. Mauris
                    augue elit, ullamcorper sed lorem eu, venenatis euismod
                    arcu. Etiam vehicula ultricies diam, nec porttitor lacus
                    feugiat non. In vel placerat dui. Pellentesque velit purus,
                    tristique et blandit at, interdum at erat. Cras iaculis orci
                    leo, sollicitudin tincidunt tellus ultrices non. Suspendisse
                    dignissim congue enim, ut porttitor lectus lacinia nec. Nam
                    quis enim sit amet metus aliquam hendrerit vitae sit amet
                    velit. Vivamus odio nisl, dictum et sapien id, molestie
                    elementum quam. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse tincidunt sem ut libero dictum,
                    et posuere urna placerat. Mauris fermentum nulla et sem
                    blandit, a fermentum neque lacinia.
                </Text>
            </Container>
            <Container>
                <Heading textAlign="center" my="10">
                    Apply
                </Heading>
                <InputGroup size="lg" my="5" mx="auto">
                    <InputLeftAddon children="Name" />
                    <Input
                        borderColor="#CBD5E0"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>
                <InputGroup size="lg" my="5">
                    <InputLeftAddon children="Email" />
                    <Input
                        borderColor="#CBD5E0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
                <Box display="flex" justifyContent="center" my="10">
                    <Button
                        size="lg"
                        _hover={{ bg: '#0f3460', textColor: 'whitesmoke' }}
                        bgColor="#e94560"
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default Form;
