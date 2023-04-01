<script lang="ts">
import { categories, forums } from "./forums/cached"; 

export default {
    data() {
        return {
            items: categories.flatMap(category => [
                {type: "subheader", title: category.category_name},
                ...forums[category.category_id].map(forum => { return {
                    title: forum.forum_name,
                    value: forum.forum_id,
                    props: {
                        href: `#/forum/${forum.forum_id}`
                    }
                }})
            ])
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
    </v-btn>

    <v-btn
      color="primary"
      stacked
      prepend-icon="mdi-forum"
    >
      Forums

      <v-menu activator="parent">
        <v-list :items="items"/>
      </v-menu>
    </v-btn>

    <v-btn
      color="primary"
      stacked
      prepend-icon="mdi-crystal-ball"
      href="/#/random"
    >
      Random
    </v-btn>
</template>