<script>
import UserInfo from './components/UserInfo';
import Dashboard from './components/Dashboard';
import UserPhoto from './components/UserPhoto'
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
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
}
</style>
