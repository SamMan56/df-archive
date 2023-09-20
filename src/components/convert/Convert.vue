<script lang="ts">
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';

export default {
    mounted() {
        document.title = "Convert URL";
    },
    components: {  },
    data: () => ({
      url: "",
      urlRules: [
        (value: string) => {
          const urlRegex = /https?:\/\/(?:www\.)?mcdiamondfire(?:\.enjin)?\.com\/forum\/m\/\d+\/viewthread\/\d+-.*/
          if (!value.match(urlRegex)) {
            return "Couldn't find a Thread ID in this url!"
          }

          return true;
        }
      ]
    }),
    methods: {
      async submit(submitEventPromise: SubmitEventPromise) {
        submitEventPromise.preventDefault();
        const submit = await submitEventPromise

        if (submit.valid) {
          const urlRegex = /https?:\/\/(?:www\.)?mcdiamondfire(?:\.enjin)?\.com\/forum\/m\/\d+\/viewthread\/(\d+)-.*/
          const matches = this.url.match(urlRegex);
          if (matches && matches.length >= 2) {
            location.href = `#/thread/${matches[1]}`
          }
        }
        
        return false;
      }
    }
}
</script>

<template>
  <v-form class="form" @submit="submit">
    <h1>Convert Existing URL</h1>
    <p>Paste an existing <em>http://www.mcdiamondfire.com/forum</em> link to view in the archive.</p>
    <v-text-field
      v-model="url"
      :rules = "urlRules"
      label = "URL"
      placeholder = "http://www.mcdiamondfire.com/forum/m/xxxxxxxx/viewthread/xxxxxxxx-thread-title"
    />
    <v-btn type="submit" block>Submit</v-btn>
  </v-form>
</template>

<style scoped>
.form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
</style>