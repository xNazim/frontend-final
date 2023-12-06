import { Container } from "@mui/material";
import { Header, Board } from "../../components/Game";

export const Game = () => {
    return (
        <>
            <Container>
                <Header />
                <Board />
            </Container>
        </>
    );
};
