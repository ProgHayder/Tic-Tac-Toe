<script>
export default {
    name: "DashBoard",
}
</script>
<template>
    <div class="dashboard">
        <div id="replays" class="card">
            <span>Replays</span>
        </div>
        <div id="friends" class="card">
            <span>Friends</span>
        </div>
        <div id="leaderboard" class="card">
            <span>Leaderboard</span>
        </div>
        <div id="settings" class="card">
            <span>Settings</span>
        </div>
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
    background-color: chocolate;
}

div[class="card"] {
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border: 3px solid blueviolet;
    border-radius: 10px;
}

div[class="card"]:hover {
    cursor: pointer;
    transform: scale(1.05);
}

span {
    font-size: 25px;
}

div[id="replays"] {
    background-color: orange;
}

div[id="friends"] {
    background-color: lightgreen;
}

div[id="leaderboard"] {
    background-color: lightblue;
}

div[id="settings"] {
    background-color: lightcoral;
}

</style>
