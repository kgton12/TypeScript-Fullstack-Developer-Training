import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { login } from "../services/login";

export const Card = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            backgroundColor="#f0f4f8"
            padding="25px"
        >
            <Box
                backgroundColor="#FFFFFF"
                borderRadius="15px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                padding="20px"
                maxWidth="400px"
                width="100%"
            >
                <Center marginBottom="20px">
                    <Header />
                </Center>
                <Center marginBottom="20px">
                    <h1
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#333",
                        }}
                    >
                        Faça o login
                    </h1>
                </Center>
                <Input placeholder="Email" marginBottom="10px" />
                <Input
                    placeholder="Password"
                    type="password"
                    marginBottom="20px"
                />
                <Button
                    onClick={login}
                    colorScheme="teal"
                    size="md"
                    width="100%"
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
};
