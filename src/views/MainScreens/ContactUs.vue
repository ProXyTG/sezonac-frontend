<template>
	<div class="contact-page-wrapper">
		<div class="text-contact-page">
			<h1>Let get in Touch</h1>
			<p>If you have questions fell free to rech us</p>
		</div>
				<v-form fast-fail @submit.prevent class="form-basic" ref="form">
					<v-text-field
						v-model="name.value.value"
						:counter="10"
						label="Full name"
						:error-messages="name.errorMessage.value"
					></v-text-field>
					<v-text-field
						v-model="email.value.value"
						:error-messages="email.errorMessage.value"
						label="Email"
					></v-text-field>
					<v-textarea
						v-model="message.value.value"
						:error-messages="message.errorMessage.value"
						label="Your message" 
						variant="solo-filled" 
						@submit.prevent
						:counter="500"
					></v-textarea>
					<v-btn @click="submit" block class="mt-2">Submit</v-btn>
					<v-btn @click="handleReset"> clear </v-btn>
				</v-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useField, useForm } from 'vee-validate'

export default defineComponent({
	name: 'ContactUs',
	setup() {
		const {handleSubmit, handleReset } = useForm({
			validationSchema: {
				name(value: string) {
					if (value?.length >2) return true
					return 'Name needs to be at least 2 characters.'
				},
				email(value: string) {
        			if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        			return 'Must be a valid e-mail.'
      			},
				message(value: string) {
					if (value?.length >2) return true

					return 'Message needs to be at least 2 characters.'
				}
			}
		})
		const name = useField('name')
		const email = useField('email')
		const message =useField('message')
// here put submit logic
		const submit = handleSubmit(values => {
    		alert(JSON.stringify(values, null, 2))
  })
  return {
	name, email, message,  submit, handleReset,
  }
	}
})
</script>

<style lang="scss">
.form-basic {
	width: 35%;
	margin: 50px;
}
.contact-page-wrapper {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	margin-top: 50px;
}

</style>
