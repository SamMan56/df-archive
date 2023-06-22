<script lang="ts">
import { PropType } from 'vue';
import { User } from '../../types';

export default {
    props: {
        userRaw: Object as PropType<User>,
        type: String,
    },
    computed: {
        user() {
            if (this.userRaw !== undefined) {
                return {
                    author: this.userRaw.username || this.userRaw.id,
                    userUrl: `#/user/${this.userRaw.id}`,
                    posts: this.userRaw.posts,
                    threads: this.userRaw.threads,
                    votes_given: this.userRaw.votes_given,
                    votes_received: this.userRaw.votes_received
                };
            }
            else
                return undefined;
        }
    }
}
</script>

<template>
<v-card>
    <v-card-title><a :href="user?.userUrl">{{ user?.author }}</a></v-card-title>
    <v-card-text>
        Posts: {{ user?.posts }} <br/>
        Threads: {{ user?.threads }} <br/>
        Votes Given: {{ user?.votes_given }} <br/>
        Votes Received: {{ user?.votes_received }}
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