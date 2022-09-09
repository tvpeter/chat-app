import { FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const toast = useToast();
    const history = useHistory();
    const [loading, setLoading] = useState(false);


 
    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {

    }
    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            };

            const { data } = await axios.post("/api/user/login",
                {
                    email, password
                },
                config
            );

            toast({
                title: "Login successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push("/chats");

        } catch (error) {
            toast({
                title: "Error occured",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setLoading(false);
        }
    }

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
              onClick={submitHandler}
              isLoading={loading}
          >
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
