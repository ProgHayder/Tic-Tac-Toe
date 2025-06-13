<script>
class Message {
    constructor(sender, text) {
        this.sender = sender;
        this.text = text;
    }
}
export default {
    name: 'ChatView',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            messages: [],
            newMessage: '',
            friend: this.username
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() === '') return;
            const message = new Message('Me', this.newMessage);
            this.messages.push(message);
            this.newMessage = '';
            this.scrollToBottom();
        },
        scrollToBottom() {
            const messagesContainer = this.$refs.messages;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    },
    mounted() {
        this.scrollToBottom();
    }
};
</script>
<template>
    <div class="view">
        <h1>Chatting with {{ this.friend }}</h1>
        <div class="chat-container">
            <div class="messages" ref="messages">
                <div v-for="(msg, index) in messages" :key="index">
                    <span class="message-sender">{{ msg.sender }}</span>
                    <span class="message-text">{{ msg.text }}</span>
                </div>
            </div>
            <div class="text-area">
                <input class="message-input" v-model="newMessage"
                @keyup.enter="sendMessage" placeholder="Type a message..." />
                <button @click="sendMessage">Send</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.chat-container {
    display: flex;
    background-color: white;
    flex-direction: column;
    height: 71vh;
    border: 1px solid blueviolet;
    border-radius: 15px;
    padding: 10px;
}

.messages {
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px;
}

.message-sender {
    font-weight: bold;
    color: black;
    margin-right: 10px;
}

.message-text {
    margin-bottom: 5px;
    display: flex;
    height: auto + 20px;
    width: 85%;
    color: black;
    align-items: flex-start;
    word-wrap: break-word;
    word-break: break-word;
    border: 3px solid blueviolet;
    padding: 10px;
    border-radius: 15px;
    background-color: lightblue;
}

.text-area {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.message-input {
    padding: 10px;
    border: 2px solid blueviolet;
    border-radius: 5px;
    width: 90%;
}

.message-input:focus {
    outline: none;
    border: 2px solid blueviolet;
}

.view {
    background-color: darkblue;
    color: white;
    padding-bottom: 10px;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>