<template>
	<div class="categoryView">
		Category {{ currentCategory }}
    <SearchBar />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
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
		this.currentCategory = this.route.query.category
	}
})
</script>

<style lang="scss">

</style>
