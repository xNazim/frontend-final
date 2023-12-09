import { PITS_COUNT, BALLS_COUNT } from "constants/game";

export default class Board {
    constructor() {
        this.sockets = new Array(2 * PITS_COUNT).fill(BALLS_COUNT);
        this.tuzdeks = [-1, -1];
        this.kaznas = [0, 0];
    }

    playSocket(p) {
        if (this.sockets[p] === 1) {
            this.sockets[p] = 0;
            this.sockets[this.idx(p + 1)] += 1;
            return this.idx(p + 1);
        }
        let tempSocket = this.sockets[p];
        for (let i = p + 1; i < p + tempSocket; ++i) {
            let id = this.idx(i);
            this.sockets[id] += 1;
        }
        let result = this.idx(p + tempSocket - 1);
        this.sockets[p] = 1;
        return result;
    }

    isMovePossible(p) {
        for (let i = p * PITS_COUNT; i < PITS_COUNT * (1 + p); ++i) {
            if (this.sockets[i] !== 0) {
                return true;
            }
        }
        return false;
    }

    atsyrauFunction(p) {
        for (let i = p * PITS_COUNT; i < PITS_COUNT * (1 + p); ++i) {
            this.kaznas[p] += this.sockets[i];
            this.sockets[i] = 0;
        }
        return this.kaznas[p];
    }

    tuzdekPossible(s, player) {
        return (
            this.sockets[s] === 3 &&
            Math.floor(s / PITS_COUNT) === 1 - player &&
            (s + 1) % PITS_COUNT !== 0 &&
            this.tuzdeks[player] === -1 &&
            (this.tuzdeks[1 - player] === -1 ||
                this.tuzdeks[1 - player] % PITS_COUNT !== s % PITS_COUNT)
        );
    }

    accountSocket(s, player) {
        if (
            Math.floor(s / PITS_COUNT) === 1 - player &&
            this.sockets[s] % 2 === 0
        ) {
            this.kaznas[player] += this.sockets[s];
            this.sockets[s] = 0;
        }
        for (let playerIt = 0; playerIt < 2; ++playerIt) {
            if (this.tuzdeks[playerIt] !== -1) {
                this.kaznas[playerIt] += this.sockets[this.tuzdeks[playerIt]];
                this.sockets[this.tuzdeks[playerIt]] = 0;
            }
        }
    }

    pli(s, tuzdek, player) {
        let target = this.playSocket(s);
        if (tuzdek) {
            this.tuzdeks[player] = target;
        }
        this.accountSocket(target, player);
        return target;
    }

    rotate() {
        let result = new Board();
        result.kaznas[0] = this.kaznas[1];
        result.kaznas[1] = this.kaznas[0];

        result.tuzdeks[0] = this.tuzdeks[1];
        result.tuzdeks[1] = this.tuzdeks[0];

        for (let i = 0; i < PITS_COUNT; ++i) {
            result.sockets[i] = this.sockets[PITS_COUNT + i];
            result.sockets[PITS_COUNT + i] = this.sockets[i];
        }
        return result;
    }

    idx(s) {
        return s % (2 * PITS_COUNT);
    }

    clone() {
        const clonedBoard = new Board();
        clonedBoard.sockets = [...this.sockets];
        clonedBoard.tuzdeks = [...this.tuzdeks];
        clonedBoard.kaznas = [...this.kaznas];
        return clonedBoard;
    }
}
