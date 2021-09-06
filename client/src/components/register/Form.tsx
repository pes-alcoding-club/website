import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    useToast,
} from '@chakra-ui/react';
import axios from '../../utils/axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface FormProps {}

const Form: React.FC<FormProps> = () => {
    const toast = useToast();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [srn, setSRN] = useState<string>('');
    const [graduationYear, setgradYear] = useState<string>('2021');
    const [buttonIsLoading, setButtonLoading] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            setButtonLoading(true);
            if (
                email.replace(/\s/g, '').length == 0 ||
                name.replace(/\s/g, '').length == 0 ||
                srn.replace(/\s/g, '').length == 0
            ) {
                toast({
                    title: 'Register failed',
                    description: 'Fill out all fields to register.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
                setButtonLoading(false);
                return;
            }
            await axios.post('/user', {
                name,
                email,
                srn,
                graduationYear,
                contestCode: 'SEPT_21',
            });

            setButtonLoading(false);
            toast({
                title: 'Registration sucessful!',
                description:
                    'We registered your account for the latest contest.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            router.push('/');
        } catch ({ response }) {
            setButtonLoading(false);
            if (!response) {
                toast({
                    title: 'Registration failed',
                    description:
                        'There was some problem while processing your request.\nPlease try again later.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                const {
                    data: { err },
                } = response;
                if (err.code === 11000) {
                    toast({
                        title: 'Registration failed',
                        description:
                            'This email address has already registered for the contest.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: 'Registration failed',
                        description:
                            'There was some problem while processing your request.\nPlease try again later.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            }
        }
    };

    return (
        <Box>
            <Container id="form" p="5">
                <Heading textAlign="center" my={{ lg: '10', base: '2' }}>
                    Apply
                </Heading>
                <Box>
                    <FormControl
                        size="lg"
                        my="5"
                        mx="auto"
                        id="name"
                        isRequired
                    >
                        <FormLabel as="legend">Name</FormLabel>
                        <Input
                            borderColor="#ced4da"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            isRequired
                        />
                    </FormControl>
                    <FormControl
                        size="lg"
                        my="5"
                        mx="auto"
                        id="email"
                        isRequired
                    >
                        <FormLabel as="legend">Email</FormLabel>
                        <Input
                            borderColor="#ced4da"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isRequired
                        />
                    </FormControl>
                    <FormControl size="lg" my="5" mx="auto" id="srn">
                        <FormLabel as="legend">SRN</FormLabel>
                        <Input
                            borderColor="#ced4da"
                            value={srn}
                            onChange={(e) => setSRN(e.target.value)}
                            isRequired
                        />
                    </FormControl>
                    <FormControl size="lg" my="5" mx="auto" id="year">
                        <FormLabel as="legend">Year of Graduation</FormLabel>
                        <Select
                            borderColor="#ced4da"
                            placeholder="2021"
                            defaultValue={graduationYear}
                            onChange={(e) => setgradYear(e.target.value)}
                        >
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </Select>
                    </FormControl>
                </Box>
                <Box display="flex" justifyContent="center" my="10">
                    <Button
                        size="lg"
                        textColor="whitesmoke"
                        _hover={{ bg: '#b0152f', textColor: 'whitesmoke' }}
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
