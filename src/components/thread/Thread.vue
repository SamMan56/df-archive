<script lang="ts">
import ThreadTitle from './ThreadTitle.vue';
import ThreadView from './ThreadView.vue';

export default {
    components: {
    ThreadView,
    ThreadTitle
}
}
</script>

<template>
    <Suspense>
        <ThreadTitle/>
    </Suspense>
    <Suspense>
        <ThreadView/>
        <template  #fallback>
            <v-progress-circular indeterminate/>
        </template>
    </Suspense>
</template>