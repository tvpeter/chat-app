import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {

    }
    const submitHandler = () => {}

  return (
      <VStack spacing="5px" color="black">
          <FormControl id='first-name' isRequired>
              <FormLabel>Name</FormLabel>
                  <Input placeholder='Enter your name'
                  onChange={(e)=>setName(e.target.value)}
                  />
          </FormControl>

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

          <FormControl id='password' isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                  <Input placeholder='Confirm password' type={ show ? "text" : "password"}
                  onChange={(e)=>setConfirmpassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "show"}
                      </Button>
                  </InputRightElement>
                  </InputGroup>
          </FormControl>

           <FormControl id='pic'>
              <FormLabel>Upload your Picture</FormLabel>
              <Input 
                  type="file"
                  p={1.5}                 
                  accept="image/*"
                  onChange={(e)=>postDetails(e.target.files[0])}
                  />
          </FormControl>

          <Button colorScheme="blue" width="100%" style={{marginTop: 15}} onClick={submitHandler}>
              Sign Up
          </Button>
    </VStack>
  )
}

export default Signup
