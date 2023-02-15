import React from 'react'

import {
    Box, Stack, SimpleGrid, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
export default function Dashboard() {
    return (

        <Container
         maxW="container"
        //   marginLeft="15%"
          p='10' width="" rounded='lg'
        //     boxShadow='md'
        // maxWidth='xl'
        justifyContent="center"
        // textAlign='center'
        // columns={{ sm: 2, md: 4 }}
        // backgroundColor='red.100'
        // spacing='8'
        alignItems="center"
        // backgroundColor='#F6F6F6'
        backgroundColor='yellow.200'
        // mt='4%'

        >
            {/* <Flex
                // width='auto'
                rounded='md'
                boxShadow='md'
                // maxWidth='xl'
                // justifyContent="center"
            // textAlign='center'
            > */}
                <Box
                    boxShadow="2xl"
                    width="100%"
                    height="70vh"
                    rounded="md"
                    mt="7"
                    mb='7'
                    // maxW='xl'
                    // backgroundColor='#F6F6F6'
                    backgroundColor='yellow.100'
                    alignItems="center"
                    color='black.100'
                    // flex={1}
                // justifyContent="center"
                // justifyContent="space-evenly"
                >
                    {/* <VStack color="black"><Heading fontSize={30} m="3%" fontWeight="bold">Dashboard</Heading> </VStack> */}
                    {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                    >

                    </HStack> */}

                    {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                        mt={3}

                    > */}
                    <Stack 
                        alignItems="space-evenly"
                    >
                        <SimpleGrid spacing={4}
                            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                        >
                            <Card backgroundColor="red.100">
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                            <Card backgroundColor="red.100">
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                            <Card backgroundColor="red.100">
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                        </SimpleGrid>
                    </Stack>
                    {/* </HStack> */}
                    {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                        mt={3}
                    >
                        <Input
                            placeholder=' Password'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                        <Input
                            placeholder=' Re-Type Password'
                            size='sm'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}

                        />
                    </HStack> */}
                    {/* </Stack> */}

                    {/* <Text>Policy # / Prev #</Text>
                    <Text>Named Issured</Text>
                    <Text>Team</Text>
                    <Text>Effective</Text>
                    <Text>Expiration</Text>
                    <Text>Status    </Text> */}
                    {/* <HStack   mt={20} alignContent="center" justifyContent="center"> */}
                    <VStack mt={10} >
                        <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                    </VStack>
                    {/* </HStack> */}
                </Box>
            {/* </Flex> */}

        </Container>
    )
}
