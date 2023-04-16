<script lang="ts">
import { APIResponse, Post, Thread } from '../../types';
import PostItem from '../thread/PostItem.vue';
import ThreadItem from '../forum/Thread.vue';

export default {
    props: {
        lastKey: {
            type: String
        },
        query: String,
        itemType: String,
    },
    emits: ["nextKey", "empty"],
    async setup(props, context): Promise<{
        type: "error"
    } | {
        type: "thread",
        data: Thread[]
    }| {
        type: "post",
        data: Post[]
    }> {
        const url = `${props.query}${props.lastKey ? `&last_key=${props.lastKey}` : ""}`;
        const res = await fetch(url);
        const json: APIResponse = await res.json();

        if (json.type==="user" || json.structure === "single")
            return { type: "error" };

        if (json.structure==="list" && json.data.length == 0) {
            context.emit("empty");
        }

        if (json.type === "thread") {
            context.emit("nextKey", json.last_key);
            return { data: json.data, type: "thread" };
        }

        if (json.type === "post") {
            if ("nextKey" in json) {
                context.emit("nextKey", json.last_key);
            }
            return { data: json.data, type: "post" };
        }

        return { type: "error" };
    },

    components: { PostItem, ThreadItem }
}
</script>

<template>
    <div v-if="type==='post'" class="thread">
        <PostItem v-for="post in data" :post-raw="post" :type="itemType"/>
    </div>
    <div v-if="type==='thread'" class="forum">
        <ThreadItem v-for="thread in data" :thread-raw="thread"/>
    </div>
</template>

<style scoped>
    a {
        color: rgb(var(--v-theme-primary))
    }
    .thread {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>