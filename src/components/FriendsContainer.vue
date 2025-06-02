<script>
export default {
    name: "FriendsContainer",
    data() {
        return {
            friends: [
                { username: 'friend 1' },
                { username: 'friend 2' },
                { username: 'friend 3' },
                { username: 'friend 4' },
                { username: 'friend 5' },
                { username: 'friend 6' },
                { username: 'friend 7' },
                { username: 'friend 8' },
                { username: 'friend 9' },
                { username: 'friend 10' },
                { username: 'friend 11' },
                { username: 'friend 12' },
                { username: 'friend 13' },
                { username: 'friend 14' },
                { username: 'friend 15' },
                { username: 'friend 16' },
                { username: 'friend 17' },
                { username: 'friend 18' },
                { username: 'friend 19' },
                { username: 'friend 20' }
            ],
        };
    },
    methods: {
        removeFriend(index) {
            this.friends.splice(index, 1);
        },
        sendMessage(username) {
            alert(`Sending message to ${username}`);
            // Here you can implement the logic to send a message
        }
    }
}
</script>
<template>
    <div class="outer-container">
        <div class="inner-container">
            <ol>
                <div class="friend" v-for="(friend, index) in friends" :key="friend.username">
                    <span>{{ friend.username }}</span>
                    <div class="options">
                        <button @click="sendMessage(friend.username)" class="message-button">Message</button>
                        <button @click="removeFriend(index)" class="remove-button">Remove</button>
                    </div>
                </div>
            </ol>
        </div>
    </div>
</template>
<style scoped>
.outer-container {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkblue;
}

.inner-container {
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
    border-radius: 10px;
}

ol {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 10px;
    list-style-type: none;
}

div[class="friend"] {
    cursor: pointer;
    padding: 0px;
    width: 97%;
    height: 50px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 1px solid blueviolet;
    border-radius: 10px;
}

span {
    font-size: 20px;
    color: black;
}

.options {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
}
</style>