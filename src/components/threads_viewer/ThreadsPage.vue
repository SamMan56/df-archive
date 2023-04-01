<script lang="ts">
import { Thread } from '../../types';

export default {
    props: {
        lastKey: {
            type: String
        },
        query: String
    },
    
    emits: ['nextKey'],

    async setup(props, context) {
        const url = `${props.query}${props.lastKey ? `&last_key=${props.lastKey}` : ""}`;
        const res = await fetch(url);
        const threads_raw: [Thread] = await res.json();
        const last_thread_time = threads_raw.slice(-1)[0].time

        context.emit("nextKey", last_thread_time);
        
        const threads = threads_raw.map(thread_raw => {
            const date = new Date(parseInt(thread_raw.time) * 1000);
            
            return {
                id: thread_raw.id,
                name: thread_raw.subject,
                author: thread_raw.author_username || thread_raw.author_id,
                url: `#/thread/${thread_raw.id}`,
                author_url: `#/user/${thread_raw.author_id}`,
                date_string: `${date?.toLocaleTimeString()} ${date?.toLocaleDateString()}`,
                date: date,
                views: thread_raw.views
            }
        });
        return { threads }
    }
}
</script>

<template>
    <v-card class="mb-2 pb-4 text-left" v-for="thread in threads">
        <v-card-title><a :href="thread.url">{{ thread.name }}</a></v-card-title>
        <v-card-subtitle><a :href="thread.author_url">{{ thread.author }}</a><br>{{ thread.date_string }}<br>{{ thread.views }} Views</v-card-subtitle>
    </v-card>
</template>

<style scoped>
a {
    color: rgb(var(--v-theme-primary))
}
</style>