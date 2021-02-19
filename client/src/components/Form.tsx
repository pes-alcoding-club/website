import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    Text,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const BASEURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://alcoding-website-backend.herokuapp.com';

const Form = () => {
    const toast = useToast();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [buttonIsLoading, setButtonLoading] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        setButtonLoading(true);
        if (
            email.replace(/\s/g, '').length == 0 ||
            name.replace(/\s/g, '').length == 0
        ) {
            toast({
                title: 'Register failed',
                description: 'Fill out all entry fields to register.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            setButtonLoading(false);
            return;
        }
        await axios
            .post(`${BASEURL}/user`, { name, email })
            .then((res) => {
                setButtonLoading(false);
                const { err } = res.data;

                if (err) {
                    if (err.code === 11000) {
                        toast({
                            title: 'Registration failed',
                            description:
                                'This email address has already registered for the contest.',
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        });
                    } else {
                        toast({
                            title: 'Registration failed',
                            description:
                                'There was some problem while processing your request.\nPlease try again later.',
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        });
                    }
                } else {
                    toast({
                        title: 'Registration sucessful!',
                        description:
                            'We registered your account for the latest contest.',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                    router.push('/');
                }
            })
            .catch(() => {
                setButtonLoading(false);
                toast({
                    title: 'Registration failed',
                    description:
                        'There was some problem while processing your request. Please try again later.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            });
    };

    return (
        <Box>
            <Heading textAlign="center" my="10">
                About the contest
            </Heading>
            <Box w={{ lg: '50%', base: '95%' }} mx="auto">
                <Text textAlign="center" fontSize="lg" my="5" p="5">
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
                </Text>
            </Box>
            <Container id="form">
                <Heading textAlign="center" my="10">
                    Apply
                </Heading>
                <InputGroup size="lg" my="5" mx="auto">
                    <InputLeftAddon children="Name" />
                    <Input
                        borderColor="#CBD5E0"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isRequired
                    />
                </InputGroup>
                <InputGroup size="lg" my="5">
                    <InputLeftAddon children="Email" />
                    <Input
                        borderColor="#CBD5E0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isRequired
                    />
                </InputGroup>
                <Box display="flex" justifyContent="center" my="10">
                    <Button
                        size="lg"
                        _hover={{ textColor: 'whitesmoke' }}
                        bgColor="#e94560"
                        onClick={onSubmit}
                        isLoading={buttonIsLoading}
                        loadingText="Submitting"
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Form;
