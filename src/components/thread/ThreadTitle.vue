<script setup lang="ts">
import { APIResponse, Thread } from '../../types';

const thread_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://europe-west2-df-archive.cloudfunctions.net/getThread?thread_id=${thread_id}`);
const json: APIResponse = await res.json();

var post = {title: "Thread not found..."};
if (json.type === "thread" && json.structure === "single") {
    post = 
        {
            title: json.data.subject
        };
    document.title = post.title;
}
</script>

<template>
    <h1>{{ post.title }}</h1>
</template>