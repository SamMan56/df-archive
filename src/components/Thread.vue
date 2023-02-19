<script lang="ts">
import ThreadView from './ThreadView.vue';

export default {
    components: {
        ThreadView: ThreadView
    }
}
</script>

<template>
    <h1>Thread</h1>
    <Suspense>
        <ThreadView/>
        <template  #fallback>
            Loading...
        </template>
    </Suspense>
</template>