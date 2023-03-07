<script lang="ts">
import { PropType } from 'vue';
import { Thread, ForumKey } from '../../types';

export default {
    props: {
        lastKey: {
            type: Object as PropType<ForumKey>
        }
    },
    
    emits: ['nextKey'],

    async setup(props, context) {
        const forum_id = window.location.hash.slice(2).split("/")[1];
        const url = `https://yc7lkh7t2ut54rchjbwzvpfrg40ekowv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}${props.lastKey ? `&last_forum_id=${props.lastKey.forum_id}&last_thread_id=${props.lastKey.thread_id}` : ""}`;
        const res = await fetch(url);
        const threads_raw: {
            items: [Thread],
            last_key: { thread_id: number }
        } = await res.json();

        context.emit("nextKey", threads_raw.last_key);
        
        const threads = threads_raw.items.map(thread_raw => {
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
        return { threads }
    }
}
</script>

<template>
    <v-card class="mb-2 pb-4 text-left" v-for="thread in threads">
        <v-card-title><a :href="thread.url">{{ thread.name }}</a></v-card-title>
        <v-card-subtitle>{{ thread.author }}<br>{{ thread.date_string }}<br>{{ thread.views }} Views</v-card-subtitle>
    </v-card>
</template>

<style scoped>
a {
    color: rgb(var(--v-theme-primary))
}
</style>