<script setup lang="ts">
const category_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://rjpoo5tz7qm2b7zjc4qypcykpm0fcikg.lambda-url.eu-west-2.on.aws/?category_id=${category_id}`);
const subforums_raw: [{
    forum_id: number,
    category_id: number,
    forum_name: string,
    forum_description: string
}] = await res.json();
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
        <div v-for="subforum in subforums">
            <a :href="subforum.url">{{ subforum.name }}</a>
            <p>{{ subforum.description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .subforums {
        display: flex;
        flex-direction: column;
    }
</style>