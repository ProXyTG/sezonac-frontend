<template>
	<div class="categoryView">
		Category {{ currentCategory }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'CategoryView',
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
