<script>
export default {
    name: "DashBoard",
    methods: {
        changeEndpoint(endpoint) {
            const baseUrl = window.location.origin;
            const url = new URL(endpoint, baseUrl);
            window.location.href = url.href;
        },
    }
}
</script>
<template>
    <div class="dashboard">
        <button @click="changeEndpoint('/replays')" id="replays" class="card">
            <span>Replays</span>
        </button>
        <button @click="changeEndpoint('/friends')" id="friends" class="card">
            <span>Friends</span>
        </button>
        <button @click="changeEndpoint('/leaderboard')" id="leaderboard" class="card">
            <span>Leaderboard</span>
        </button>
        <button @click="changeEndpoint('/settings')" id="settings" class="card">
            <span>Settings</span>
        </button>
    </div>
</template>
<style scoped>
div[class="dashboard"] {
    width: auto;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: darkblue;
}

button[class="card"] {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: lightblue;
    border: 3px solid blueviolet;
    border-radius: 10px;
}

button[class="card"]:hover {
    cursor: pointer;
    transform: scale(1.05);
}

span {
    font-size: 25px;
}
</style>
