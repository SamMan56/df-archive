<script lang="ts">
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';
import { convertUrl, urlRegex } from './convert';

export default {
    mounted() {
        document.title = "Convert URL";
    },
    components: {  },
    data: () => ({
      url: "",
      urlRules: [
        (value: string) => {
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
          const newUrl = convertUrl(this.url);
          if (newUrl) {
            location.href = newUrl;
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