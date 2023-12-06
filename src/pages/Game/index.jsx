import { Header, Board } from "../../components/Game";

import styles from "./Game.module.scss";

export const Game = () => {
    return (
        <div className={styles.inner}>
            <Header />
            <Board />
        </div>
    );
};
