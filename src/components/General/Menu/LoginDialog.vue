<template>
	<v-dialog v-model="dialog" persistent width="500">
			<template v-slot:activator="{ props }">
				<v-btn color="primary" v-bind="props" @click="dialog = true"> Login </v-btn>
			</template>
			<v-card>
				<v-card-title>
					<span class="text-h5">Prijava</span>
				</v-card-title>

				<v-card-text>
					<v-container>
						<v-form fast-fail @submit.prevent>
							<div class="text-subtitle-1 text-medium-emphasis">Email adresa</div>
								<v-text-field   
									density="compact"
									placeholder="Email adresa"
									prepend-inner-icon="mdi-email-outline"
									variant="outlined">
								</v-text-field>
							<div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
								Lozinka
								<a
									class="text-caption text-decoration-none text-blue"
									href="#"
									rel="noopener noreferrer"
									target="_blank"
								>
									Zaboravili ste lozinku?</a>
							</div>

							<v-text-field
								:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
								:type="visible ? 'text' : 'password'"
								density="compact"
								placeholder="Unesite Lozinku"
								prepend-inner-icon="mdi-lock-outline"
								variant="outlined"
								@click:append-inner="visible = !visible"
							></v-text-field>

							<v-card class="mb-12" color="surface-variant" variant="tonal">
								<v-card-text class="text-medium-emphasis text-caption">
									Upozorenje: Nakon 3 uzastopna neuspjela pokušaja prijave, vaš račun
									će biti privremeno zaključan na tri sata. Ako se sada morate prijaviti,
									također možete kliknuti "Zaboravili ste lozinku za prijavu?" ispod za
									poništavanje lozinke za prijavu.
								</v-card-text>
							</v-card>

							<v-btn block class="mb-8" color="blue" size="large" variant="tonal">
								Prijava
							</v-btn>

							<v-card-text class="text-center">
								<a
									class="text-blue text-decoration-none"
									href="#"
									rel="noopener noreferrer"
									@click="dialogTwo = true"
								>
									Registriraj se 
									<v-icon icon="mdi-chevron-right"></v-icon>
								</a>
							</v-card-text>
						</v-form>
					</v-container>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue-darken-1" variant="text" @click="dialog = false">
						Zatvori
					</v-btn>
				</v-card-actions>
			</v-card>
		<v-dialog v-model="dialogTwo" persistent width="auto">
			<v-card
				variant="elevated"
				title="Registracija"
				subtitle="Nemaš korisnički račun?"
				text="Registracija za:"
			>
				<v-btn>Poslodavac</v-btn>
				<v-btn>Posloprimac</v-btn>
				<v-card-actions>
					<v-btn
						@click="dialogTwo = false"
					>
						Zatvori
					</v-btn>
				</v-card-actions>
			</v-card>
    	</v-dialog>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ContactUs',
	data () {
      return {
        dialog: false,
		dialogTwo: false,
		visible: false,
      }
    },
})
</script>

<style lang="scss">

</style>
