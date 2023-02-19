<script lang="ts">
import ForumView from './ForumView.vue';

export default {
    components: {
        ForumView: ForumView
    }
}
</script>

<template>
    <h1>Forum</h1>
    <Suspense>
        <ForumView/>
        <template  #fallback>
            Loading...
        </template>
    </Suspense>
</template>