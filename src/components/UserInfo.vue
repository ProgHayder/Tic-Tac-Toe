<script>
export default {
    name: "UserInfo",
}
</script>
<template>
    <div class="user-info">
        <span>User Name:</span>
        <input type="text" name="username" id="username" placeholder="Enter your username">
        <span>Invite Code:</span>
        <input type="text" name="invite_code" id="invite_code" placeholder="Enter the invite code">
        <button type="button">Play</button>
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
    width: 250px;
    margin: 0px 30px;
}
</style>