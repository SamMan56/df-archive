<script lang="ts">
export default {
    props: {
        username: String,
        x: Number
    },

    computed: {
        scale() {
            // const x = this.x || 0;

            // if (x < 0.25) {
            //     return x / 0.25;
            // }
            // if (x > 0.75) {
            //     return (1 - x) / 0.25;
            // }

            return 1;
        },

        opacity() {
            const x = (this.x || 0);

            if (x < 0.3 && x > 0.05) {
                return (x - 0.05) / 0.25;
            }
            if (x < 0.05) return 0;

            if (x > 0.7 && x < 0.95) {
                return (0.95 - x) / 0.25;
            }
            if (x > 0.95) return 0;

            return 1;
        },

        url() {
            return `http://cravatar.eu/helmavatar/${this.username}/128.png`
        },

        style() {
            const size = `${(100 / 128) * 128 * (this.scale || 1)}px`

            return { width: size, height: size, opacity: this.opacity * 0.25, left: `calc(${100 * (this.x || 0)}vw - 50px)` }
        }
    }
}
</script>

<template>
    <v-img :style="style" :src="url" :alt="username" class="head"/>
</template>

<style scoped>
.head {
    position: absolute;
}
</style>