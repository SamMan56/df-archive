<script setup lang="ts">
import { Thread } from '../../types';

const forum_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://yc7lkh7t2ut54rchjbwzvpfrg40ekowv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}`);
const threads_raw: [Thread] = await res.json();
const threads = threads_raw.map(thread_raw => {
    const date = new Date(parseInt(thread_raw.post_time) * 1000);

    return {
        id: thread_raw.thread_id,
        name: thread_raw.thread_subject,
        author: thread_raw.post_username || thread_raw.post_user_id,
        url: `#/thread/${thread_raw.thread_id}`,
        date_string: `${date?.toLocaleTimeString()} ${date?.toLocaleDateString()}`,
        date: date,
        views: thread_raw.thread_views
    }
}).sort((a, b) => b.date.valueOf() - a.date.valueOf())
</script>

<template>
    <v-card class="mb-2 pb-4 text-left" v-for="thread in threads">
        <v-card-title><a :href="thread.url">{{ thread.name }}</a></v-card-title>
        <v-card-subtitle>{{ thread.author }}<br>{{ thread.date_string }}<br>{{ thread.views }} Views</v-card-subtitle>
    </v-card>
</template>