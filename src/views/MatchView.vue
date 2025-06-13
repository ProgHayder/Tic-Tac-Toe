<script>
import { bus } from '@/bus';
import PlayerHeader from '@/components/PlayerHeader.vue';
export default {
    name: 'MatchView',
    components: {
        PlayerHeader
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
        }
    },
    mounted() {
        bus.on('opponent-joined', (data) => {
            this.opponentName = data.name;
        });
    },
    beforeMount() {
        bus.off('opponent-joined')
    },
    created() {
        
    }   
}
</script>
<template>
    <div class="view">
        <PlayerHeader :username="this.name" />
        <div class="game-board">
            <!-- Game board component will go here -->
            <p>Game Board Placeholder</p>
        </div>
        <PlayerHeader :username="this.opponentName" />
    </div>
</template>
<style scoped>
.view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.game-board {
    width: 70%;
    height: 500px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}
</style>