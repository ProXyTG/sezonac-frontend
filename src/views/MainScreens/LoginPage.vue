<template>
    <v-card>
		<v-card-title>
			<span class="text-h5">Prijava</span>
		</v-card-title>

		<v-card-text>
			<v-container>
				<v-form fast-fail @submit.prevent>
					<div class="text-subtitle-1 text-medium-emphasis">Email adresa</div>
						<v-text-field  
							v-model="email.value.value"
							:error-messages="email.errorMessage.value"
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
							v-model="password.value.value"
							:error-messages="password.errorMessage.value"
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

						<v-btn @click="submit" block class="mb-8" color="blue" size="large" variant="tonal">
							Prijava
						</v-btn>

						<v-card-text class="text-center">
							<a
								class="text-blue text-decoration-none"
								href="#"
								rel="noopener noreferrer"
								@click="dialog = true"
							>
								Registriraj se 
								<v-icon icon="mdi-chevron-right"></v-icon>
							</a>
						</v-card-text>
					</v-form>
				</v-container>
			</v-card-text>
	</v-card>
        <v-dialog v-model="dialog" persistent width="auto">
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
                        @click="dialog = false"
                    >
                        Zatvori
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField, useForm } from 'vee-validate'

export default defineComponent({
	data () {
      return {
        dialog: false,
		visible: false,
      }
    },
	setup() {
		const {handleSubmit, handleReset } = useForm({
			validationSchema: {
				password(value: string) {
					if (value?.length >8) return true
					return 'Password needs to be at least 8 characters.'
				},
				email(value: string) {
        			if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        			return 'Must be a valid e-mail.'
      			},
			}
		})
		const password = useField('password')
		const email = useField('email')
// here put submit logic
		const submit = handleSubmit(values => {
    		alert(JSON.stringify(values, null, 2))
  })
  return {
	password, email, submit, handleReset,
  }
	}
})
</script>

<style scoped>

</style>