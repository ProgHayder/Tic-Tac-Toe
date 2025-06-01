<script>
import UserInfo from '@/components/UserInfo';
import Dashboard from '@/components/Dashboard';
import UserPhoto from '@/components/UserPhoto'
export default {
  name: 'App',
  components: {
    UserInfo,
    Dashboard,
    UserPhoto,
  },
}
</script>
<template>
    <div id="app">
    <UserPhoto />
    <UserInfo />
  </div>
  <Dashboard />
</template>
<style scoped>
#app {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: lightblue;
    justify-content: space-around;
    height: 50px;
}
</style>