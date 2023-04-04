<script lang="ts">
import Page from './Page.vue';

export default { 
    props: {
        lastKey: {
            type: String
        },
        query: String,
        itemType: String,
    },
    emits: ['nextKey'],
    components: { 
        Page: Page 
    } 
}
</script>

<template>
    <Suspense>
        <Page :last-key="lastKey" :query="query" :item-type="itemType" @next-key="next => $emit('nextKey', next)" />
        <template #fallback>
            <div>
                <v-progress-circular indeterminate/>
            </div>
        </template>
    </Suspense>
</template>