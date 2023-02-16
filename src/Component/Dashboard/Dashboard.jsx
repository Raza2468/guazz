import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';



export default function Dashboard() {
    return (

        <Container
            maxW="container"
            //   marginLeft="15%"
            p='10' width="" rounded='lg'
        //     boxShadow='md'
        // maxWidth='xl'
        // justifyContent="center"
        // textAlign='center'
        // columns={{ sm: 2, md: 4 }}
        // backgroundColor='red.100'
        // spacing='8'
        // alignItems="center"
        // backgroundColor='#F6F6F6'
        // backgroundColor='yellow.200'
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
                minHeight="70vh"
                rounded="md"
                mt="7"
                mb='7'
                paddingTop='10%'

                // m={10}
                // maxW='xl'
                // backgroundColor='#F6F6F6'
                // backgroundColor='yellow.100'
                // bgGradient='linear(to-t, #316489, #FFFFFF)'
                bgGradient={[
                    'linear(to-tr, teal.300, #FFFFFF)',
                    'linear(to-t, #316489, teal.500)',
                    'linear(to-b, #316489, #316489',
                ]}
                // alignItems="center"
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
                {/* <Stack  */}
                {/* alignItems="center"
                        // display='flow-root'
                        // colSpan={2}
                        // gap={6}
                        flex={1}
                        justifyContent="center"
                    > */}
                {/* <Stack  */}
                {/* //  mt={20}
                     > */}


                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='red.200'>
                            Box 1
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='green.200'>
                            Box 2
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='tomato'>
                            Box 3
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='blue.200'>
                            Box 4
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='blackAlpha.500'>
                            Box 5
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' mt={10} >
                    <WrapItem>
                        <Center w='180px' h='80px' bg='red.200'>
                            Box 1
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='green.200'>
                            Box 2
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='tomato'>
                            Box 3
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='blue.200'>
                            Box 4
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='180px' h='80px' bg='blackAlpha.500'>
                            Box 5
                        </Center>
                    </WrapItem>
                </Wrap>
                {/* </Stack> */}
                {/* <SimpleGrid spacing={4}
                            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                            columns={2} spacingX='40px' spacingY='20px'
                            >
                            <Card backgroundColor="red.100"
                            >
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
                        </SimpleGrid> */}
                {/* </Stack> */}
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
