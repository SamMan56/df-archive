<script lang="ts">
import Head from './Head.vue';
import { USERNAMES } from './usernames';

type Head = {
    x: number,
    username: string
}

export default {
    data() {
        return {
            heads: [{ x: 0, username: "" }],
            heads2: [{ x: 0, username: "" }],
            headCount: 0,
            animationRef: -1,
            usernames: [""]
        };
    },
    methods: {
        tick() {
            const currentCount = Math.floor(window.innerWidth / 128);
            if (this.headCount != currentCount) {
                this.usernames = [];
                this.heads = [...Array(currentCount).keys()].map(i => this.generateHead(i / currentCount));
                this.heads2 = [...Array(currentCount).keys()].map(i => this.generateHead(i / currentCount));
                this.headCount = currentCount;
            }
            this.heads = this.heads
                .filter(head => {
                    if (head.x < 0) {
                        this.usernames = this.usernames.filter(username => username !== head.username);
                        return false;
                    }

                    return true;
                })
                .map(head => { return { ...head, x: head.x - 0.0005 }; });
            if (this.heads.length < this.headCount) {
                this.heads.push(this.generateHead(1));
            }

            this.heads2 = this.heads2
                .filter(head => {
                    if (head.x < 0) {
                        this.usernames = this.usernames.filter(username => username !== head.username);
                        return false;
                    }

                    return true;
                })
                .map(head => { return { ...head, x: head.x - 0.0005 }; });
            if (this.heads2.length < this.headCount) {
                this.heads2.push(this.generateHead(1));
            }
            this.animationRef = requestAnimationFrame(this.tick);
        },

        generateHead(x: number): Head {
            var username = USERNAMES[Math.floor(Math.random()*USERNAMES.length)];

            if (this.usernames.includes(username)) {
                username = USERNAMES[Math.floor(Math.random()*USERNAMES.length)];
            }

            this.usernames.push(username);

            return { x: x, username: username };
        }
    },
    mounted() {
        this.animationRef = requestAnimationFrame(this.tick);
    },
    unmounted() {
        if (this.animationRef >= 0)
            cancelAnimationFrame(this.animationRef);
    },
    components: { Head }
}
</script>

<template>
    <div class="carosel carosel1">
        <Head v-for="head in heads" :username="head.username" :x="head.x"/>
    </div>

    <div class="carosel carosel2">
        <Head v-for="head in heads2" :username="head.username" :x="head.x"/>
    </div>
</template>

<style scoped>
.carosel {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    position: absolute;
    right: 0;
}

.carosel1 {
    top: 12vh;
}
.carosel2 {
    bottom: 12vh;
}
</style>