<script setup lang="ts">
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
        content: post_raw.post_content,
        timestamp: parseInt(post_raw.post_time)
    }
}).sort((a, b) => a.timestamp - b.timestamp);
</script>

<template>
    <div class="post">
        <div v-for="post in posts">
            <h2>{{ post.author }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<style scoped>
    .post {
        display: flex;
        flex-direction: column;
    }
</style>