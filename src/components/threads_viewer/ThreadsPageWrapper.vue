<script lang="ts">
import ThreadsPage from './ThreadsPage.vue';

export default { 
    props: {
        lastKey: {
            type: String
        },
        query: String
    },
    emits: ['nextKey'],
    components: { 
        ThreadsPage: ThreadsPage 
    } 
}
</script>

<template>
    <Suspense>
        <ThreadsPage :last-key="lastKey" :query="query" @next-key="next => $emit('nextKey', next)" />
        <template #fallback>
            <div>
                <v-progress-circular indeterminate/>
            </div>
        </template>
    </Suspense>
</template>