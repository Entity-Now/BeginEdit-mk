<template>
    <BeginEditToolBarItem>
        <template #title>
            <i class="MarkDownIcon icon-zuoyouduiqi"
                @click="Insert(0)" title="靠左"></i>
            <i class="MarkDownIcon icon-zuoyouduiqi"
                @click="Insert(1)" title="居中"></i>
            <i class="MarkDownIcon icon-zuoyouduiqi" 
                @click="Insert(2)" title="靠右"></i>
        </template>
        <template #content>
            鼠标悬浮后才会显示的内容
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { inject } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';
import "../../style/icon/MarkDownIcon.css";

const AlignList = ['::: BeginEdit-left','::: BeginEdit-center','::: BeginEdit-right'];
const Mk = inject('BeginEditTool');
const Insert = (type)=>{
    let typeStr = AlignList[type];

    let SelectionIndex = Mk.Element.selectionEnd;
    let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
    if((previous == '\n' || previous == '\r')){
        AlignList.forEach(i=>{
            if(i != typeStr){
                Mk.IsRepeat(`${i}\n`,'\n:::',true);   
            }
        })
        Mk.aroundInsert(`${typeStr}\n`,'\n:::');
    }else{
        AlignList.forEach(i=>{
            if(i != typeStr){
                Mk.IsRepeat(`\n${i}\n`,'\n:::',true);   
            }
        })
        Mk.aroundInsert(`\n${typeStr}\n`,`\n:::`);
    }
}
</script>