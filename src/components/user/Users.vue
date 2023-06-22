<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import UserProfile from './UserProfile.vue';

export default {
    components: {
    InfiniteScroll,
    UserProfile
},

    computed: {
        query() {
            return `https://europe-west2-df-archive.cloudfunctions.net/topUsers?category=${this.category}`;
        }
    },

    data () {
        return {
            category: "posts",
        }
    },
}
</script>

<template>
    <h1 class="pb-4">Top Users</h1>
    <v-sheet border rounded class>
        <v-toolbar class="pl-4 pr-4" flat>
            <v-btn-toggle 
                v-model='category'
                color="primary"
            >
                <v-btn value="posts">
                    By Posts
                </v-btn>

                <v-btn value="threads">
                    By Threads
                </v-btn>

                <v-btn value="votes_given">
                    By Votes Given
                </v-btn>

                <v-btn value="votes_received">
                    By Votes Received
                </v-btn>
            </v-btn-toggle>
        </v-toolbar>
        <div class="pa-4">
            <InfiniteScroll :query="query" infinite :key="category"/>
        </div>
    </v-sheet>
</template>