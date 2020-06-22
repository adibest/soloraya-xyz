<template>
  <header id="navbar">
    <div class="nav-list">
      <router-link class="nav-item" to="/home">HOME</router-link> 
      <router-link class="nav-item" to="/login">LOGIN</router-link> 
      <router-link class="nav-item" to="/register">REGISTER</router-link> 
      <a class="nav-item" href="/admin/">DASHBOARD</a> 
    </div>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
#navbar {
  margin-bottom: 30px;
}
.nav-list {
  display: flex;
}
.nav-item {
  margin-right: 15px;
}
</style>