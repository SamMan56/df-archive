<script lang="ts">
import ForumTitle from './ForumTitle.vue';
import ForumView from './ForumView.vue';

export default {
    components: {
    ForumView: ForumView,
    ForumTitle
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