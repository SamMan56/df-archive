<script lang="ts">
import { PropType } from 'vue';
import { Post } from '../../types';
import bbobHTML from '@bbob/html';
import preset from '@bbob/preset-html5';

export default {
    props: {
        postRaw: Object as PropType<Post>,
        type: String,
    },

    computed: {
        post() {
            if (this.postRaw !== undefined) {
                const date = new Date(this.postRaw.time * 1000);
                return {
                    author: this.postRaw.username || this.postRaw.user_id,
                    content: bbobHTML(this.postRaw.content || "", preset()),
                    dateString: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                    authorId: this.postRaw.user_id,
                    authorUrl: `#/user/${this.postRaw.user_id}`,
                    threadUrl: `#/thread/${this.postRaw.thread_id}`
                }
            } else return undefined;
        }
    }
}
</script>

<template>
<v-card>
    <v-toolbar v-if="type==='external'" flat collapse>
        <a :href="post?.threadUrl">Jump to thread...</a>
    </v-toolbar>
    <v-card-title><a :href="post?.authorUrl">{{ post?.author }}</a></v-card-title>
    <v-card-subtitle>{{ post?.dateString }}</v-card-subtitle>
    <v-card-text><div class="text-left content" v-html="post?.content"/></v-card-text>
</v-card>
</template>

<style>
blockquote {
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: gray solid 4px;
    font-style: italic;
}

img {
    max-width: 100%;
}
</style>

<style scoped>
.content {
    white-space: pre-wrap;
}
</style>