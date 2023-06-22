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
            return `https://europe-west2-df-archive.cloudfunctions.net/topUsers?category=posts`;
        }
    },

//     data () {
//         return {
//             data: "threads",
//         }
//     },
}
</script>

<template>
    <v-sheet border rounded class>
        <div class="pa-4">
            <InfiniteScroll :query="query" infinite/>
        </div>
    </v-sheet>
</template>