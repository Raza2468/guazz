import React from 'react'

import {
    Box, Stack, Heading, Flex, Text, FormLabel,Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
export default function CardPages() {
    return (

        <Container
            //  maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
            //     boxShadow='md'
            // maxWidth='xl'
            // justifyContent="center"
            // textAlign='center'
            // columns={{ sm: 2, md: 4 }}
            // backgroundColor='red.100'
            // spacing='8'
            // backgroundColor='#F6F6F6'
            backgroundColor='yellow'
        // mt='4%'

        >
            <Flex
                // width='auto'
                rounded='md'
                boxShadow='md'
                // maxWidth='xl'
                justifyContent="center"
                // textAlign='center'
                >
                <Box
                    boxShadow="2xl"
                    width="90%"
                    height="70vh"
                    rounded="md"
                    mt="7"
                    mb='7'
                    maxW='xl'
                    backgroundColor='#F6F6F6'
                    color='black.100'
                // justifyContent="center"
                // style={{ justifyContent: "space-around" }}
                // height="130%"`
                // align="center"`
                >
                    <VStack color="black"><Text size="42" m="3%">User Rigistration</Text> </VStack>
              

                    <Text>Policy # / Prev #</Text>
                    <Text>Named Issured</Text>
                    <Text>Team</Text>
                    <Text>Effective</Text>
                    <Text>Expiration</Text>
                    <Text>Status    </Text>


                </Box>
            </Flex>

        </Container>
    )
}
