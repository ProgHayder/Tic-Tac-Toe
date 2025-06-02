<script>
import UserPhoto from '@/components/UserPhoto';
export default {
    name: "SearchFriends",
    components: {
        UserPhoto
    }
}
</script>
<title>Friends</title>
<template>
    <div class="search-section">
        <UserPhoto />
        <input type="text" placeholder="Search for friends..." />
        <button>Search</button>
    </div>
</template>
<style scoped>
div[class="search-section"] {
    background-color: lightblue;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

input[type="text"] {
    width: 250px;
    padding: 5px;
    border: 1px solid blueviolet;
    border-radius: 10px;
}

button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

</style>