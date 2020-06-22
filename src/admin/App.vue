<template>
  <div>
    <transition name="lol">
      <LoadingAnimation v-if="globalLoading" class="app-loading-animation"/>
    </transition>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    globalLoading() {
      return this.$store.state.globalLoading
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s ease !important;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.app-loading-animation {
  position: fixed;
  z-index: 100000;
  top: 10px;
  left: 50%;
}
</style>