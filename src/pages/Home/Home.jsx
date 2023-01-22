import { Typography, Box } from "@mui/material"; 

const Home = () => {
    return (
        <Box
            as={'main'}
            sx={{
                width: "100%",
                height: "90vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography variant="h1" component="h1">
                Phonebook
            </Typography>
        </Box>
    )
}

export default Home;