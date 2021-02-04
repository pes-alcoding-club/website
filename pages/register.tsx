import { Divider, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import { Link as L } from '@chakra-ui/react';
import axios from 'axios';

const Register = () => {
    const [formData,setformData]=useState({name:"",email:""})

    const handleChange=(event)=>{
        setformData({...formData,[event.target.name]:event.target.value})
    }
    
    const onSubmit = async (event) => {
        await axios.post('http://localhost:4000/api/register',formData)
            .catch(function (err: any) {
                console.log(err);
                alert('Some error while signing up.');
            });
        event.preventDefault();
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <input name="name" onChange={handleChange}/>
            <input name="email" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </>
    );
};
export default Register;
