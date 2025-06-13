<script>
import UserPhoto from '@/components/UserPhoto.vue'

export default {
    name: 'PlayerHeader',
    components: {
        UserPhoto
    },
    props: {
        username: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            player_name: '',
            player_turn: '',
            player_score: 0,
            opponent_score: 0,
        }
    },
    mounted() {
        this.player_name = this.username;
        this.player_turn = this.player_name === 'Opponent' ? 'O' : 'X';
    },
    unmounted() {
        
    }
}
</script>

<template>
    <div class="container">
        <UserPhoto />
        <div class="username">{{ player_name }}</div>
        <span class="turn-container">{{ player_turn }}</span>
        <span class="score-container">Score:<br>{{ player_score }}</span>
    </div>
</template>

<style scoped>
.container {
    height: 490px;
    width: 15%;
    background-color: lightblue;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
}
.score-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 18px;
}
.turn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 2px solid blueviolet;
    font-size: 24px;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
}
.username {
    font-size: 14px;
}
</style>