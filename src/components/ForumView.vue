<script setup lang="ts">
const forum_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://yc7lkh7t2ut54rchjbwzvpfrg40ekowv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}`);
const threads_raw: [{
    thread_id: number,
    forum_id: string,
    category_id: string,
    thread_subject: string,
    thread_views: string,
    thread_status: string,
    post_user_id: string,
    post_username: string,
    post_time: string,
}] = await res.json();
const threads = threads_raw.map(thread_raw => {
    const date = new Date(parseInt(thread_raw.post_time) * 1000);

    return {
        id: thread_raw.thread_id,
        name: thread_raw.thread_subject,
        author: thread_raw.post_username || thread_raw.post_user_id,
        url: `#/thread/${thread_raw.thread_id}`,
        date: `${date?.toLocaleTimeString()} ${date?.toLocaleDateString()}`
    }
})
</script>

<template>
    <v-card>
        <v-list lines="two">
            <v-list-item v-for="thread in threads" :key="thread.id" :value="thread.url">
                <v-list-item-title><a :href="thread.url">{{ thread.name }}</a></v-list-item-title>
                <v-list-item-subtitle>{{ thread.author }}<br>{{ thread.date }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </v-card>
</template>