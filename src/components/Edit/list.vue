<template>
    <BeginEditToolBarItem>
        <template #title>
            <i class="MarkDownIcon icon-liebiao"
                @click="Insert('- ')" title="无序列表"></i>
            <i class="MarkDownIcon icon-youxuliebiao"
                @click="Insert('1. ')" title="无序列表"></i>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject } from 'vue'
import "../../style/ItemList.scss";
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const IsShow = ref(false);
const Mk = inject('BeginEditTool');
const Insert = (item)=>{
    IsShow.value = !IsShow.value;   
    if(Mk.IsRepeat(item,'', true) == false){
        Mk.insert(`${item}`);
    }
}

</script>