<script lang="ts">
import ForumTitle from './ForumTitle.vue';
import ForumView from './ForumView.vue';

export default {
    components: {
        ForumView,
        ForumTitle
    },

    mounted() {
        // replaced by forum title in suspense
        document.title = "Loading Forum..."
    }
}
</script>

<template>
    <Suspense>
        <ForumTitle/>
        <template  #fallback>
            <div></div>
        </template>
    </Suspense>
    <Suspense>
        <ForumView/>
        <template  #fallback>
            <v-progress-circular indeterminate/>
        </template>
    </Suspense>
</template>