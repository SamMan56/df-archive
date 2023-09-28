<script lang="ts">
import { PropType } from 'vue';
import { Thread } from '../../types';

export default {
    props: {
        threadRaw: Object as PropType<Thread>
    },

    computed: {
        thread() {
            if (this.threadRaw !== undefined) {
                const date = new Date(parseInt(this.threadRaw.time) * 1000);
                return {
                    id: this.threadRaw.id,
                    name: this.threadRaw.subject,
                    author: this.threadRaw.author_username || this.threadRaw.author_id,
                    url: `#/thread/${this.threadRaw.id}`,
                    author_url: `#/user/${this.threadRaw.author_id}`,
                    date_string: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                    views: this.threadRaw.views,
                    is_pinned: this.threadRaw.is_pinned,
                    is_locked: this.threadRaw.is_locked,
                }
            } else return undefined;
        }
    }
}
</script>

<template>
    <v-card class="mb-2 pb-4 text-left">
        <v-card-title>
            <v-icon v-if="thread?.is_locked" icon="mdi-lock" class="mr-1" size="x-small"></v-icon>
            <v-icon v-if="thread?.is_pinned" icon="mdi-pin" class="mr-1" size="x-small"></v-icon>
            <a :href="thread?.url">{{ thread?.name }}</a>
        </v-card-title>
        <v-card-subtitle><a :href="thread?.author_url">{{ thread?.author }}</a><br>{{ thread?.date_string }}<br>{{ thread?.views }} Views</v-card-subtitle>
    </v-card>
</template>