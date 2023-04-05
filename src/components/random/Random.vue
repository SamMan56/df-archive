<script lang="ts">
import { APIResponse } from '../../types';


export default {
    mounted() {
        document.title = "Loading...";

        fetch("https://europe-west2-df-archive.cloudfunctions.net/randomThread").then(res => {
            res.json().then(json_raw => {
                const json: APIResponse = json_raw;

                if (json.type === "thread" && json.structure === "single") {
                    window.location.href = `#/thread/${json.data.id}`
                } else { // go to home instead
                    window.location.href = `#/`;
                }
            })
        })
    }
}
</script>

<template>
    <v-progress-circular indeterminate/>
</template>

<style scoped>

</style>
