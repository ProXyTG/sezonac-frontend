<template>
	<div class="categoryView">
		Category {{ currentCategory }}
    <SearchBar />
		{{ queryUser }}
		{{ jobs }}
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
//Interfaces & Enums
import { type StoreInterface } from '@/store/index'
import { JobStateActions } from '@/types/enums/Job'
//Components
import SearchBar from '@/components/General/TextFields/SearchBar.vue'
//GraphQL
import { GetUser } from '@/graphql/general'

export default defineComponent({
	name: 'CategoryView',
  components: {
    SearchBar
  },
	apollo: {
		queryUser: {
			query: GetUser
		}
	},
	data() {
		return {
			currentCategory: '',
			queryUser: [] as any,
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
})
</script>

<style lang="scss">

</style>
