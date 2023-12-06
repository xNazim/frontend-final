import { Container } from "@mui/material";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Container>
                <div className={styles.inner}>
                    <header>
                        <h1 className={styles.title}>Toguz Korgool</h1>
                    </header>
                    <main>
                        <ul className={styles.list}>
                            <li>
                                <Link to="/game">Play</Link>
                            </li>
                            <li>
                                <Link to="/rules">Rules</Link>
                            </li>
                            <li>
                                <Link to="/history">Game History</Link>
                            </li>
                        </ul>
                    </main>
                </div>
            </Container>
        </>
    );
};
