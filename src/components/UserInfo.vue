<script>
import { bus } from '@/bus';
export default {
    name: "UserInfo",
    data() {
        return {
            username: ''
        }
    },
    methods: {
        FindMatch() {
            if (!this.username) {
                alert("Please enter a username.");
                return;
            }
            bus.emit("opponent-joined", { name: this.username });
            this.$router.push({ name: 'Match', 
            params: { name: this.username } });
        },
        setUsername(event) {
            this.username = event.target.value.trim()
        }
    }
}
</script>
<template>
    <div class="user-info">
        <span>User Name:</span>
        <input type="text" name="username" @input="setUsername" placeholder="Enter your username">
        <span>Invite Code:</span>
        <input type="text" name="invite_code" id="invite_code" placeholder="Enter the invite code">
        <button type="button" @click="FindMatch">Play</button>
    </div>
</template>
<style scoped>
div[class="user-info"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
}

input {
    height: 25px;
    width: 250px;
    margin: 0px 30px;
}

button {
    height: 30px;
    background-color: white;
    border: 1px solid #000;
}

button:hover {
    cursor: pointer;
    transform: scale(1.05);
}

</style>