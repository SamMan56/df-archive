<script lang="ts">
export default {
    data() {
        return {
            items: [
                {title: "ee"},
                {title: "oo"},
            ]
        }
    }
}
</script>

<template>
    <v-btn
      color="primary"
      stacked
      prepend-icon="custom:logo"
      href="/#/"
    >
      Home

      <!-- <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-btn>

    <v-btn
      color="primary"
      stacked
      prepend-icon="mdi-forum"
    >
      Forums

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
</template>