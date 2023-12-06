import { K, N } from "../constants/game";

export default class Board {
    constructor() {
        this.sockets = new Array(2 * K).fill(N);
        this.tuzdeks = [-1, -1];
        this.kaznas = [0, 0];
    }

    getSumOfOtausOfPlayer(p) {
        let sum = 0;
        for (let i = p * K; i < K * (1 + p); ++i) {
            sum += this.kaznas[i];
        }
        return sum;
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
        for (let i = p * K; i < K * (1 + p); ++i) {
            if (this.sockets[i] !== 0) {
                return true;
            }
        }
        return false;
    }

    atsyrauFunction(p) {
        for (let i = p * K; i < K * (1 + p); ++i) {
            this.kaznas[p] += this.sockets[i];
            this.sockets[i] = 0;
        }
        return this.kaznas[p];
    }

    tuzdekPossible(s, player) {
        return (
            this.sockets[s] === 3 &&
            Math.floor(s / K) === 1 - player &&
            (s + 1) % K !== 0 &&
            this.tuzdeks[player] === -1 &&
            (this.tuzdeks[1 - player] === -1 ||
                this.tuzdeks[1 - player] % K !== s % K)
        );
    }

    accountSocket(s, player) {
        if (Math.floor(s / K) === 1 - player && this.sockets[s] % 2 === 0) {
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

        for (let i = 0; i < K; ++i) {
            result.sockets[i] = this.sockets[K + i];
            result.sockets[K + i] = this.sockets[i];
        }
        return result;
    }

    idx(s) {
        return s % (2 * K);
    }

    toString() {
        let output = "";
        for (let player = 1; player >= 0; --player) {
            output += player + ":\t";
            for (let i = 0; i < K; ++i) {
                let idx = player ? 2 * K - i - 1 : i;
                output += " " + this.sockets[idx];
                if (this.tuzdeks[1 - player] === idx) {
                    output += "*";
                }
                output += "\t";
            }
            output += "Kazna: " + this.kaznas[player] + "\n\t";
        }
        output += "\t";
        for (let i = 0; i < K; ++i) {
            output += "-" + (i + 1) + "-\t";
        }
        return output;
    }

    clone() {
        const clonedBoard = new Board();
        clonedBoard.sockets = [...this.sockets];
        clonedBoard.tuzdeks = [...this.tuzdeks];
        clonedBoard.kaznas = [...this.kaznas];
        return clonedBoard;
    }
}
