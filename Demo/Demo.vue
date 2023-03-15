<template>
    <div>
        <BeginEdit v-model:Code="Code" v-model:Html="Html"/>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { BeginEdit } from '../lib/main.js'
const Code = ref('');
const Html = ref('');

</script>
<style lang="">
    
</style>