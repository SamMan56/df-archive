<script lang="ts">
import { PropType } from 'vue';
import { Post, Vote } from '../../types';
import bbobHTML from '@bbob/html';
import preset from '@bbob/preset-html5';
import { TagNode } from '@bbob/plugin-helper';
import ReactIcon from './ReactIcon.vue';
import { convertUrl } from '../convert/convert';

const myPreset = preset.extend((tags) => ({
    ...tags,
    url: (node) => {
        let attrs = node.attrs;
        delete attrs["target"];

        const urlKey = Object.keys(attrs)[0];
        // auto converts old forum links
        const convertedUrl = convertUrl(urlKey);
        return (new TagNode("a", {
            ...node.attrs,
            href: convertedUrl ?? urlKey
        }, node.content || ""));
    },
    youtube: (node) => {
        console.log(node);
        
        if (node.content === null || node.content.length < 1 || typeof node.content[0] !== "string") return node;

        const url = `https://youtu.be/${node.content[0]}`;
        
        return (new TagNode("a", {
            ...node.attrs,
            href: url
        }, url));
    }
}))


export default {
    props: {
        postRaw: Object as PropType<Post>,
        type: String,
    },
    computed: {
        post() {
            if (this.postRaw !== undefined) {
                const votes = this.postRaw.votes
                    .sort((a, b) => parseInt(b.votetype_id) - parseInt(a.votetype_id))
                    .map(vote => {return {
                        ...vote,
                        user_url: `#/user/${vote.user_id}`
                    }});
                const date = new Date(this.postRaw.time * 1000);
                return {
                    author: this.postRaw.username || this.postRaw.user_id,
                    content: bbobHTML(this.postRaw.content || "", myPreset()),
                    dateString: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                    authorId: this.postRaw.user_id,
                    authorUrl: `#/user/${this.postRaw.user_id}`,
                    threadUrl: `#/thread/${this.postRaw.thread_id}`,
                    threadTitle: this.postRaw.thread_name,
                    votes: votes
                };
            }
            else
                return undefined;
        },
        is_hidden() {
            return this.postRaw?.admin_hidden
        }
    },
    components: { ReactIcon }
}
</script>

<template>
<v-card
    :color="is_hidden ? 'red-lighten-5' : ''"
>
    <v-toolbar v-if="type==='external'">
        <template v-slot:title>
            <a :href="post?.threadUrl">{{ post?.threadTitle }}</a>
        </template>
    </v-toolbar>
    <v-card-title class="text-center"><a :href="post?.authorUrl">{{ post?.author }}</a></v-card-title>
    <v-card-subtitle class="text-center">{{ post?.dateString }}</v-card-subtitle>
    <v-chip v-if="is_hidden">Hidden by Admins</v-chip>
    <v-card-text>
        <div class="text-left content" v-html="post?.content"/>
        <v-chip 
            v-for="vote of post?.votes"
            :ripple="false"
            class="ma-2"
        >
            <template v-slot:prepend>
                <ReactIcon :id="vote.votetype_id"/>
            </template>
            <a :href="vote.user_url">{{ vote.username }}</a>
        </v-chip>
    </v-card-text>
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