<script setup lang="ts">
import { Forum } from '../../types';

const forum_id = window.location.hash.slice(2).split("/")[1]
const res = await fetch(`https://uur2hszs56s6tcpevofalli5na0qaucv.lambda-url.eu-west-2.on.aws/?forum_id=${forum_id}`);
const post_raw: Forum = (await res.json())[0];
const post = 
    {
        title: post_raw.forum_name
    };
document.title = post.title;
</script>

<template>
    <h1>{{ post.title }}</h1>
</template>