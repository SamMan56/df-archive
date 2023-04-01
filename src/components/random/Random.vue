<script lang="ts">

export default {
    mounted() {
        document.title = "Loading...";

        fetch("https://europe-west2-df-archive.cloudfunctions.net/randomThread").then(res => {
            res.json().then(threads => {
                window.location.href = `#/thread/${threads.id}`
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
