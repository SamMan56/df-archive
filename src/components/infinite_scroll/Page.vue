<script lang="ts">
import { APIResponse, Post, Thread, User } from '../../types';
import PostItem from '../thread/PostItem.vue';
import ThreadItem from '../forum/Thread.vue';

import UserItem from '../user/UserItem.vue';
export default {
    props: {
        lastKey: {
            type: Number
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
    } | {
        type: "post",
        data: Post[]
    } | {
        type: "user",
        data: User[]
    }> {
        const url = `${props.query}${props.lastKey ? `&last_key=${props.lastKey}` : ""}`;
        const res = await fetch(url);
        const json: APIResponse = await res.json();

        if (json.structure === "single")
            return { type: "error" };

        if (json.structure==="list" && json.data.length == 0) {
            context.emit("empty");
        }

        if (json.type === "thread") {
            if ("last_key" in json) {
                context.emit("nextKey", json.last_key);
            }
            return { data: json.data, type: "thread" };
        }

        if (json.type === "post") {
            if ("last_key" in json) {
                context.emit("nextKey", json.last_key);
            }
            return { data: json.data, type: "post" };
        }

        if (json.type === "user") {
            if ("last_key" in json) {
                context.emit("nextKey", json.last_key);
            }
            return { data: json.data, type: "user" };
        }

        return { type: "error" };
    },

    components: { PostItem, ThreadItem, UserItem }
}
</script>

<template>
    <div v-if="type==='post'" class="thread">
        <PostItem v-for="post in data" :post-raw="post" :type="itemType"/>
    </div>
    <div v-if="type==='thread'" class="forum">
        <ThreadItem v-for="thread in data" :thread-raw="thread"/>
    </div>
    <div v-if="type==='user'" class="user">
        <UserItem v-for="user in data" :user-raw="user"/>
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