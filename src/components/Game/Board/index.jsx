import React, { useState } from "react";
import Kazan from "./Kazan";

import { K as pitsCount, N as ballsCount } from "../../../constants/game";
import { withAB } from "../../../utils/minimax";
import BoardManager from "../../../utils/BoardManager";

import styles from "./Board.module.scss";
import Pit from "./Pit";

const makeComputerMove = (gameBoard, depth = 7) => {
    const board = gameBoard.clone();
    const computer = 1;
    const abResult = withAB(board, depth, computer);
    board.pli(pitsCount + abResult[0], abResult[1], computer);
    return board;
};

const isGameOver = (gameBoard) => {
    return (
        gameBoard.kaznas[0] >= ballsCount * pitsCount ||
        gameBoard.kaznas[1] >= ballsCount * pitsCount
    );
};

export const Board = () => {
    const [gameBoard, setGameBoard] = useState(new BoardManager());

    const handlePitClick = (pitId) => {
        if (isGameOver(gameBoard)) {
            const message =
                gameBoard.kaznas[0] > gameBoard.kaznas[1]
                    ? "You win"
                    : "You lose";
            alert(message);
            return;
        }

        if (pitId < 0 || pitId >= pitsCount) {
            alert("Now not your turn!");
            return;
        }

        const player1 = 0;
        const updatedBoard = gameBoard.clone();
        updatedBoard.pli(pitId, false, player1);

        setGameBoard(makeComputerMove(updatedBoard));
    };

    return (
        <div className={styles.board}>
            <div className={styles.inner}>
                <div className={styles.player}>
                    {gameBoard.sockets
                        .slice(pitsCount, 2 * pitsCount)
                        .map((count, idx) => (
                            <Pit
                                key={idx}
                                count={count}
                                idx={idx + pitsCount}
                                onClick={handlePitClick}
                            />
                        ))}
                </div>
                <Kazan count={gameBoard.kaznas[1]} />
                <Kazan count={gameBoard.kaznas[0]} />
                <div className={styles.player}>
                    {gameBoard.sockets.slice(0, pitsCount).map((count, idx) => (
                        <Pit
                            key={idx}
                            count={count}
                            idx={idx}
                            onClick={handlePitClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
