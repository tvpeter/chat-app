import { FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import React, { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

 
    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {

    }
    const submitHandler = () => {}

  return (
      <VStack spacing="5px" color="black">

           <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
                  <Input placeholder='Enter your email'
                  onChange={(e)=>setEmail(e.target.value)}
                  />
          </FormControl>

           <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                  <Input placeholder='Enter password' type={ show ? "text" : "password"}
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "show"}
                      </Button>
                  </InputRightElement>
                  </InputGroup>
          </FormControl>

          <Button
              colorScheme="blue"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}>
              Login
          </Button>

          <Button
              variant="solid"
              colorScheme="red"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={() => {
                  setEmail("guest@example.com");
                  setPassword("password");
              }}>
              Get Default Crendentials
          </Button>
    </VStack>
  )
}

export default Login
