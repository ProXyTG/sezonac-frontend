<template>
  <v-text-field
		:loading="loading"
		:label="label"
		variant="solo"
		append-inner-icon="mdi-magnify"
		@click:append-inner="onClick"
	></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',
	props: {
		label: { type: String, required: true, default() { return 'Search' } }
	},
	data() {
		return {
			loading: false
		}
	},
	methods: {
		onClick () {
			this.loading = true

			setTimeout(() => {
				this.loading = false
				this.loaded = true
			}, 2000)
		},
	},
})
</script>

<style lang="scss">

</style>
