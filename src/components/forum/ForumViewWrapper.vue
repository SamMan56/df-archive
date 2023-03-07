<script lang="ts">
import { PropType } from 'vue';
import { ForumKey } from '../../types';
import ForumView from './ForumView.vue';

export default { 
    props: {
        lastKey: {
            type: Object as PropType<ForumKey>
        }
    },
    emits: ['nextKey'],
    components: { 
        ForumView 
    } 
}
</script>

<template>
    <Suspense>
        <ForumView :last-key="lastKey" @next-key="next => $emit('nextKey', next)" />
        <template #fallback>
            <div>
                <v-progress-circular indeterminate/>
            </div>
        </template>
    </Suspense>
</template>