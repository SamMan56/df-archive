<script setup lang="ts">
const forum_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://yc7lkh7t2ut54rchjbwzvpfrg40ekowv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}`);
const threads_raw: [{
    thread_id: number,
    forum_id: string,
    category_id: string,
    thread_subject: string,
    thread_views: string,
    thread_status: string
}] = await res.json();
const threads = threads_raw.map(thread_raw => {
    return {
        name: thread_raw.thread_subject,
        url: `#/thread/${thread_raw.thread_id}`
    }
})
</script>

<template>
    <div class="subforums">
        <div v-for="thread in threads">
            <a :href="thread.url">{{ thread.name }}</a>
        </div>
    </div>
</template>

<style scoped>
    .subforums {
        display: flex;
        flex-direction: column;
    }
</style>