<script lang="ts">
import ThreadsViewer from '../threads_viewer/ThreadsViewer.vue';

export default {
    components: {
        ThreadsViewer
    },

    computed: {
        getQuery() {
            const user_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/userThreads?user_id=${user_id}`;
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
            <ThreadsViewer v-if="data == 'threads'" :query="getQuery"/>
        </div>
    </v-sheet>
</template>