<script>
import { bus } from '@/bus';
import PlayerHeader from '@/components/PlayerHeader';
import GameBoard from '@/components/GameBoard';
export default {
    name: 'MatchView',
    components: {
        PlayerHeader,
        GameBoard
    },
    props: {
        name: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            opponentName: 'Opponent',
            activePlayer: Math.floor(Math.random() * 2),
            turn: '',
            current: 1,
        }
    },
    mounted() {
        bus.on('opponent-joined', (data) => {
            this.opponentName = data.name;
        });
        bus.on('reversePlayer', () => {
            this.activePlayer = !this.activePlayer;
            this.current = this.activePlayer ? 1 : 0;
            this.turn = this.activePlayer ? 'X' : 'O';
        });
    },
    beforeMount() {
        bus.off('opponent-joined');
        bus.off('reversePlayer');
    }
}
</script>
<template>
    <div v-if="activePlayer === 1" class="view">
        <PlayerHeader :username="name" active='true' />
        <GameBoard :player="this.current" :playerTurn="this.turn" />
        <PlayerHeader :username="opponentName" />
    </div>
    <div v-if="activePlayer === 0" class="view">
        <PlayerHeader :username="name" />
        <GameBoard :player="this.current" :playerTurn="this.turn" />
        <PlayerHeader :username="opponentName" active='true' />
    </div>
</template>
<style scoped>
.view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>