<script lang="ts">
import ThreadTitle from './ThreadTitle.vue';
import ThreadView from './ThreadView.vue';

export default {
    components: {
        ThreadView,
        ThreadTitle
    },

    mounted() {
        // replaced by thread title in suspense
        document.title = "Loading Thread..."
    }
}
</script>

<template>
    <Suspense>
        <ThreadTitle/>
        <template  #fallback>
            <div></div>
        </template>
    </Suspense>
    <Suspense>
        <ThreadView/>
        <template  #fallback>
            <v-progress-circular indeterminate/>
        </template>
    </Suspense>
</template>