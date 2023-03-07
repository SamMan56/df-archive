<script setup lang="ts">
import { Thread } from '../../types';

const thread_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://nqyfq3brahlgx3kpldiwbwo42i0qyerv.lambda-url.eu-west-2.on.aws/?thread_id=${thread_id}`);
const posts_raw = await res.json();
var post = {title: "Thread not found..."};
if (posts_raw.length > 0) {
    const post_raw: Thread = posts_raw[0];
    post = 
        {
            title: post_raw.thread_subject
        };
    document.title = post.title;
}
</script>

<template>
    <h1>{{ post.title }}</h1>
</template>