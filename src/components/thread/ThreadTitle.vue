<script setup lang="ts">
import { APIResponse } from '../../types';

const thread_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://europe-west2-df-archive.cloudfunctions.net/getThread?thread_id=${thread_id}`);
const json: APIResponse = await res.json();

var post = {title: "Thread not found...", locked: false, pinned: false};
document.title = "Loading...";
if (json.type === "thread" && json.structure === "single") {
    post = 
        {
            title: json.data.subject,
            locked: json.data.is_locked,
            pinned: json.data.is_pinned,
        };
    document.title = post.title;
}
</script>

<template>
    <h1 class="text-center">{{ post.title }}</h1>
    <div class="d-flex justify-center">
        <v-chip v-if="post.locked" prepend-icon="mdi-lock" class="ma-2">Locked</v-chip>
        <v-chip v-if="post.pinned" prepend-icon="mdi-pin" class="ma-2">Pinned</v-chip>
    </div>
</template>