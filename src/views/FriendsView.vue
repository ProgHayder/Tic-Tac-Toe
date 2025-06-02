<script>
import SearchFriends from '@/components/SearchFriends';
import FriendsContainer from '@/components/FriendsContainer';
export default {
    name: 'FriendsView',
    components: {
        SearchFriends,
        FriendsContainer
    },
};
</script>
<template>
    <SearchFriends />
    <FriendsContainer />
</template>
<style scoped>
</style>