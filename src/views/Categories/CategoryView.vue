<template>
	<div class="categoryView">
		Category {{ currentCategory }}
    <SearchBar />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
//Endpoints
import { getJobs } from '@/api/dbApi'
//Components
import SearchBar from '@/components/General/TextFields/SearchBar.vue'

export default defineComponent({
	name: 'CategoryView',
  components: {
    SearchBar
  },
	data() {
		return {
			currentCategory: ''
		}
	},
	setup() {
		const route = useRoute()

		return {
			route
		}
	},
	created() {
    this.fetchJobs()
	},
  methods: {
    async fetchJobs() {
      const data = await (await getJobs()).data
    }
  }
})
</script>

<style lang="scss">

</style>
