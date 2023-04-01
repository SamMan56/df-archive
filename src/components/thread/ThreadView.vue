<script setup lang="ts">
import ThreadItem from './ThreadItem.vue';
import bbobHTML from '@bbob/html';
import preset from '@bbob/preset-html5';

const thread_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://europe-west2-df-archive.cloudfunctions.net/getPosts?thread_id=${thread_id}`);
const posts_raw: {
    thread_id: string,
    id: string,
    time: number,
    username: string,
    user_id: string,
    content: string,
    admin_hidden: boolean,
    last_edit_time: number,
    last_edit_user: string,
}[] = await res.json();
const posts = posts_raw.map(post_raw => {
    return {
        author: post_raw.username || post_raw.user_id,
        content: bbobHTML(post_raw.content || "", preset()),
        date: new Date(post_raw.time * 1000)
    }
});
</script>

<template>
    <div class="thread">
        <ThreadItem v-for="post in posts" :author=post.author :content=post.content :date=post.date />
    </div>
</template>

<style scoped>
    .thread {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>