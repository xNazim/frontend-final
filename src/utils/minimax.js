import { K, N } from "../constants/game";

export function minimaxWithAB(
    board,
    depth,
    alpha,
    beta,
    player,
    pointers,
    isAtsyrau = false,
) {
    if (depth === 0 || board.kaznas[0] > K * N || board.kaznas[1] > K * N) {
        pointers.move = -1;
        return board.kaznas[0];
    }
    if (isAtsyrau && !board.isMovePossible(player)) {
        let newBoard = board.clone();
        newBoard.atsyrauFunction(player);
        return newBoard.kaznas[0];
    }

    let dummyPointers = { move: 0, tuzdek: false };
    let sign = player === 0 ? 1 : -1;
    let bestValue = -127 * sign;
    let played = false;

    if (!board.isMovePossible(player)) {
        let copyBoard = board.clone();
        return minimaxWithAB(
            copyBoard,
            depth,
            alpha,
            beta,
            player === 0 ? 1 : 0,
            dummyPointers,
            true,
        );
    }
    for (let i = player * K; i < player * K + K; i++) {
        let localBoard = board.clone();
        if (localBoard.sockets[i] === 0) {
            continue;
        }
        played = true;
        let target = localBoard.playSocket(i);
        let withTuzdek = -127 * sign;

        if (localBoard.tuzdekPossible(target, player)) {
            let tuzdekBoard = localBoard.clone();
            tuzdekBoard.tuzdeks[player] = target;
            tuzdekBoard.accountSocket(target, player);
            withTuzdek = minimaxWithAB(
                tuzdekBoard,
                depth - 1,
                alpha,
                beta,
                player === 0 ? 1 : 0,
                dummyPointers,
            );
        }

        if (beta > alpha) {
            localBoard.accountSocket(target, player);
            let withoutTuzdek = minimaxWithAB(
                localBoard,
                depth - 1,
                alpha,
                beta,
                player === 0 ? 1 : 0,
                dummyPointers,
            );
            if (sign * withoutTuzdek > sign * bestValue) {
                pointers.move = i;
                bestValue = withoutTuzdek;
                if (player === 0) alpha = Math.max(alpha, bestValue);
                else beta = Math.min(beta, bestValue);
            }
            if (sign * withTuzdek > sign * bestValue) {
                pointers.tuzdek = true;
                bestValue = withTuzdek;
                if (player === 0) alpha = Math.max(alpha, bestValue);
                else beta = Math.min(beta, bestValue);
            } else {
                pointers.tuzdek = false;
            }
            if (beta <= alpha) {
                break;
            }
        }
    }
    if (played) {
        return bestValue;
    } else {
        pointers.move = -1;
        return board.kaznas[0];
    }
}

export function withAB(board, d1, player, isAtsyrau = false) {
    const MIN_INT = Number.MIN_SAFE_INTEGER;
    const MAX_INT = Number.MAX_SAFE_INTEGER;
    let pointers1 = { move: 0, tuzdek: false };

    if (player === 1) {
        board = board.rotate();
    }

    let score = minimaxWithAB(
        board,
        d1,
        MIN_INT,
        MAX_INT,
        0,
        pointers1,
        isAtsyrau,
    );

    return [pointers1.move, pointers1.tuzdek, score];
}
