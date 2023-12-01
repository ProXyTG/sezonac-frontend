<template>
  <div class="homeView">
    <div class="categoriesHolder">
      <h2>Kategorije</h2>
      <div class="cards">
        <ImageCard
          class="card"
          :title="'Ugostiteljstvo'"
          :image="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          @click="router.push('/category?category=ugostiteljstvo')"
        />
        <ImageCard
          class="card"
          :title="'Trgovina'"
          :image="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          @click="router.push('/category?category=trgovina')"
        />
        <ImageCard
          class="card"
          :title="'Logistika'"
          :image="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          @click="router.push('/category?category=logistika')"
        />
        <ImageCard
          class="card"
          :title="'Ostalo'"
          :image="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          @click="router.push('/category?category=ostalo')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
//Components
import ImageCard from '@/components/General/Card/ImageCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageCard,
  },
  setup() {
    const router = useRouter()

    return {
      router
    }
  }
})
</script>

<style lang="scss">
.homeView {
  padding: 16px;

  .categoriesHolder {
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      .card {
        flex-basis: 200px;
      }
    }
  }
}
</style>
