import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,
    Image,
    HStack,
    CardHeader,
    Card,
    CardBody,
    CardFooter
} from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import CardPages from "../CardPages/CardPages";



const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                bg="#084877"
                color="white"
                {...props}
            >
                <Flex align="center" mr={5}>
                    {/* <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Chakra UI
                </Heading> */}
                    <Image src='https://e7.pngegg.com/pngimages/287/216/png-clipart-black-and-red-wings-logo-illustration-logo-phoenix-art-phoenix-leaf-logo.png' h="50px" />
                </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                    <HamburgerIcon />
                </Box>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: isOpen ? "block" : "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <Link>
                        <Button variant="nav">About us</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Princing</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Login</Button>
                    </Link>

                </Stack>

                <Box
                    display={{ base: isOpen ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                >

                    <Link>
                        <Button variant="nav">Login</Button>
                    </Link>
                    <Button
                        variant="outline"
                        _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Flex>
            <Box h={50} bg="red.100">
                <HStack justifyContent='center' alignItems='center'>
                    <Link>
                        <Button variant="nav">Icon-1</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Icon-2</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Icon-3</Button>
                        {/* <AddIcon w={8} h={8} color="blue.200" /> */}
                    </Link>
                </HStack>
            </Box>


            <CardPages />
        </>
    );
};

export default Header;
