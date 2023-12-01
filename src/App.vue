<template>
  <div class="appHeader">
    <HeaderMenu />
  </div>
  <div class="appContent">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
//Components
import HeaderMenu from '@/components/General/Menu/HeaderMenu.vue'

export default defineComponent({
  components: {
    RouterView,
    HeaderMenu
  }
})
</script>


<style scoped>
</style>
