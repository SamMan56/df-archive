<script setup lang="ts">
import ThreadItem from './ThreadItem.vue';
import bbobHTML from '@bbob/html';
import preset from '@bbob/preset-html5';

const thread_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://2qlpwthhodrxe6mhp2w4xkhvfy0onjll.lambda-url.eu-west-2.on.aws/?thread_id=${thread_id}`);
const posts_raw: [{
    thread_id: string,
    post_id: string,
    post_time: string,
    post_username: string,
    post_user_id: string,
    post_content: string
}] = await res.json();
const posts = posts_raw.map(post_raw => {
    return {
        author: post_raw.post_username || post_raw.post_user_id,
        content: bbobHTML(post_raw.post_content, preset()),
        date: new Date(parseInt(post_raw.post_time) * 1000)
    }
}).sort((a, b) => a.date.valueOf() - b.date.valueOf());
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