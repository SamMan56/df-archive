<script lang="ts">
import CategoriesView from './CategoriesView.vue';

export default {
    components: {
        CategoriesView
    },

    mounted() {
        document.title = "Forums"
    }
}
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col/>
            <v-col cols="12" md="10" xl="8">
                <h1 class="text-center">Forums</h1>
                <Suspense>
                    <CategoriesView/>
                    <template #fallback>
                        <v-progress-circular indeterminate/>
                    </template>
                </Suspense>
            </v-col>
            <v-col/>
        </v-row>
    </v-container>
</template>