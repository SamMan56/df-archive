<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import UserProfile from './UserProfile.vue';

export default {
    components: {
    InfiniteScroll,
    UserProfile
},

    computed: {
        threadsQuery() {
            const user_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/userThreads?user_id=${user_id}`;
        },
        postsQuery() {
            const user_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/userPosts?user_id=${user_id}`;
        }
    },

    data () {
        return {
            data: "threads",
        }
    },
}
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col/>
            <v-col cols="12" md="10" xl="8">
    <Suspense>
        <UserProfile/>
        <template #fallback>
            <div>
                <v-progress-circular indeterminate/>
            </div>
        </template>
    </Suspense>
    <v-sheet border rounded class>
        <v-toolbar class="pl-4" flat>
            <v-btn-toggle 
                v-model='data'
                color="primary"
            >
                <v-btn value="threads">
                    Threads
                </v-btn>

                <v-btn value="posts">
                    Posts
                </v-btn>
            </v-btn-toggle>
        </v-toolbar>
        <div class="pa-4">
            <InfiniteScroll v-if="data == 'threads'" :query="threadsQuery" infinite/>
            <InfiniteScroll v-if="data == 'posts'" :query="postsQuery" item-type="external" infinite/>
        </div>
    </v-sheet>
            </v-col>
            <v-col/>
            </v-row>
            </v-container>
</template>