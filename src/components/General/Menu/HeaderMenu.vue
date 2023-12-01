<template>
	<div class="menuHolder">
		<div class="logoHolder" @click="router.push('/')">Logo</div>
		<div class="tabsHolder">
			<v-tabs
				v-model="selectedTab"
				color="deep-purple-accent-4"
				align-tabs="end"
			>
				<v-tab
					v-for="(tab, i) in tabs"
					:key="i"
					@click="router.push(tab.route)"
				>
					{{ tab.value }}
				</v-tab>
			</v-tabs>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
	name: 'HeaderMenu',
	data() {
		return {
			tabs: [
				{
					value: 'Home',
					route: '/'
				},
				{
					value: 'O nama',
					route: '/about-us'
				},
				{
					value: 'Kontakt',
					route: '/contact-us'
				},
			]
		}
	},
	setup() {
		const router = useRouter()
		const route = useRoute()

		return {
			router, route
		}
	},
	computed: {
		selectedTab() {
			const tabIndex = this.tabs.findIndex(tab => tab.route === this.route.path)
			return tabIndex
		}
	}
})
</script>

<style lang="scss">
.menuHolder {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 16px;
}
</style>
