<template>
  <v-card
    link
    :image="image"
    :title="title"
    theme="dark"
    height="200"
    width="200"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageCard',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true }
  }
})
</script>

<style lang="scss">
</style>
