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
  <v-container fluid>
      <v-row>
          <v-col/>
          <v-col cols="12" sm="9" md="6" xl="4">
            <v-form class="form" @submit="submit">
              <h1 class="text-center">Convert Existing URL</h1>
              <br>
              <p>Paste an existing <em>http://www.mcdiamondfire.com/forum</em> link to view in the archive.</p>
              <v-text-field
                v-model="url"
                :rules = "urlRules"
                label = "URL"
                placeholder = "http://www.mcdiamondfire.com/forum/m/xxxxxxxx/viewthread/xxxxxxxx-thread-title"
              />
              <v-btn type="submit" block>Submit</v-btn>
            </v-form>
          </v-col>
          <v-col/>
      </v-row>
  </v-container>
</template>