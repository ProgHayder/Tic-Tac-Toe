<script>
import { bus } from '@/bus';

export default {
    name: 'GameBoard',
    props: {
        player: {
            type: Number,
            required: true
        },
    },
    data()  {
        return {
            board: Array.from({ length: 4 }, () => Array(4).fill('')),
            pkayer_name: '',
            turn: '',
        }
    },
    mounted() {
        bus.on('sendTurn', (data) => {
            this.turn = data.turn;
            this.player_name = data.player;
    });
        alert(this.player_name);
        bus.on('updateBoard', (data) => {
            this.board = data;
        });
    },
    beforeMount() {
        bus.off('updateBoard');
        bus.off('sendTurn');
    },
    methods: {
        resetBoard() {
            this.board = Array.from({ length: 4 }, () => Array(4).fill(''))
        },
        updateState(row, col) {
        bus.on('setTurn', data => {
            this.turn = data.turn 
        })
            if (!this.board[row][col]) {
                this.board[row][col] = this.turn;
            }
            bus.emit('updateBoard', this.board);
        },
        checkWinner() {
            // Check rows
            for (let row = 0; row < 4; row++) {
                if (this.board[row][0] && this.board[row][0] === this.board[row][1] && this.board[row][0] === this.board[row][2] && this.board[row][0] === this.board[row][3]) {
                    return true
                }
            }
            // Check columns
            for (let col = 0; col < 4; col++) {
                if (this.board[0][col] && this.board[0][col] === this.board[1][col] && this.board[0][col] === this.board[2][col] && this.board[0][col] === this.board[3][col]) {
                    return true;
                }
            }
            // Check diagonals
            if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] === this.board[3][3]) {
                return true;
            }
            if (this.board[0][3] && this.board[0][3] === this.board[1][2] && this.board[0][3] === this.board[2][1] && this.board[0][3] === this.board[3][0]) {
                return true;
            }
            return false;
        },
        showWinner() {
            if (this.checkWinner()) {
                alert(`Player ${this.turn} wins!`);
                this.resetBoard();
            } else if (this.board.flat().every(cell => cell)) {
                alert('It\'s a draw!');
                this.resetBoard();
            }
        bus.emit('reversePlayer');
        },
    }
}
</script>
<template>
    <div class="game-board">
        <div class="row" v-for="(row, rowIndex) in board" :key="rowIndex">
            <div class="box" @click="updateState(rowIndex, colIndex)" @dblclick="showWinner()"
            v-for="(cell, colIndex) in row" :key="colIndex">
                {{ cell }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.game-board {
    width: 70%;
    height: 500px;
    background-color: rgb(0, 138, 172);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}
.row {
    display: flex;
    flex-direction: column;
}
.box {
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    font-size: 28px;
    text-align: center;
    background-color: white;
    border: 2px solid black;
    margin: 20px;
    border-radius: 15px;
}
.box:hover {
    transform: scale(1.13);
}
</style>