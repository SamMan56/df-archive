<script setup lang="ts">
import { toRefs } from 'vue';
import { forums } from "./cached"

const props = defineProps({
    category_id: Number,
});
const { category_id } = toRefs(props);

// const res = await fetch(`https://rjpoo5tz7qm2b7zjc4qypcykpm0fcikg.lambda-url.eu-west-2.on.aws/?category_id=${category_id?.value}`);
// const subforums_raw: [Forum] = await res.json();
const subforums_raw = forums[category_id?.value as (2425456 | 2427417) || 2425456];
const subforums = subforums_raw.map(subforum_raw => {
    return {
        name: subforum_raw.forum_name,
        description: subforum_raw.forum_description,
        url: `#/forum/${subforum_raw.forum_id}`
    }
})
</script>

<template>
    <div class="subforums">
        <v-card class="mb-2 pb-4 text-left" v-for="subforum in subforums">
            <v-card-title><a :href="subforum.url">{{ subforum.name }}</a></v-card-title>
            <v-card-subtitle>{{ subforum.description }}</v-card-subtitle>
        </v-card>
    </div>
</template>

<style scoped>
    .subforums {
        display: flex;
        flex-direction: column;
    }

    a {
        color: rgb(var(--v-theme-primary))
    }
</style>