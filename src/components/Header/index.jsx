import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";

export const Header = () => {
    const isAuth = true;

    const onClickLogout = () => {};

    return (
        <AppBar position="static">
            <Container>
                <Toolbar className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <div>Toguz Korgool</div>
                    </a>
                    <div className={styles.buttons}>
                        {isAuth ? (
                            <>
                                <a href="/games/create">
                                    <Button variant="contained">
                                        Создать игру
                                    </Button>
                                </a>
                                <Button
                                    onClick={onClickLogout}
                                    variant="contained"
                                    color="error"
                                >
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <>
                                <a href="/login">
                                    <Button variant="outlined">Войти</Button>
                                </a>
                                <a href="/register">
                                    <Button variant="contained">
                                        Создать аккаунт
                                    </Button>
                                </a>
                            </>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
