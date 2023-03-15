<template>
    <BeginEditToolBarItem icon="icon-zitidaxiao"
        name="标题"
        v-model:isShowModal="IsShow"
        @titleClick="Show">
        <template #content>
            <div class="BeginEdit_ItemList">
                <div class="item"
                    @click="insert(item.value)"
                    v-for="item in HeaderList">
                    {{ item.title }}
                </div>
            </div>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject } from 'vue'
import "../../style/ItemList.scss";
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const IsShow = ref(false);
const Mk = inject('BeginEditTool');
const HeaderList = ref([
    { title: 'H1', value: '# '},
    { title: 'H2', value: '## '},
    { title: 'H3', value: '### '},
    { title: 'H4', value: '#### '},
    { title: 'H5', value: '##### '},
    { title: 'H6', value: '###### '},
])
const Show = ()=>{
    IsShow.value = !IsShow.value;   
}
const insert = (item)=>{
    IsShow.value = !IsShow.value;   
    Mk.insert(`${item}`);
}

</script>