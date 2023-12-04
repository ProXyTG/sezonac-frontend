<template>
	<div class="categoryView">
		Category {{ currentCategory }}
    <SearchBar />

		{{ jobs }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
//Interfaces & Enums
import { type StoreInterface } from '@/store/index'
import { JobStateActions } from '@/types/enums/Job'
//Components
import SearchBar from '@/components/General/TextFields/SearchBar.vue'
import { computed } from 'vue'

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
		const store: StoreInterface = useStore()
		const route = useRoute()

		return {
			route,
			jobs: computed(() => store.state.jobs),
			fetchJobs: () => store.dispatch(JobStateActions.fetchJobs),
		}
	},
	async created() {
		await this.fetchJobs()
	}
})
</script>

<style lang="scss">

</style>
