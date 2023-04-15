<template>
    <div class="BeginToolBarItem"
                ref="btn" 
                v-bind="$attrs">
        <slot name="title">
            <i :title="name"
                class="MarkDownIcon"
                :class="icon" 
                @click="ShowModal"></i>
        </slot>
        <div class="BeginToolShade"
            @click="$emit('update:isShowModal',false)"
                v-show="isShowModal">
            <div class="BeginToolBarHover" :style="{top: popupTop, left: popupLeft}"  @click.stop>
                <slot name="content">

                </slot>
            </div> 
        </div>
    </div>
</template>
<script>
export default{
    name:'BeginEditToolBarItem',
    inheritAttrs: false
}
</script>
<script setup>
import { ref, toRefs, onMounted } from 'vue'
const props = defineProps(['icon','name','isShowModal']);
const { isShowModal } = toRefs(props);
const emits = defineEmits(['titleClick','update:isShowModal']);
const btn = ref(null);
// Show
const ShowModal = ()=>{
    emits('titleClick');
}
// 弹窗的定位
const popupTop = ref(0);
const popupLeft = ref(0);
const calculatePopupPosition = ()=>{
    if (!btn.value) {
        return;
    }
    const btnRect = btn.value.getBoundingClientRect();
    console.log(btnRect);
    popupTop.value = btnRect.top + btnRect.height;
    popupLeft.value = btnRect.left / 2 - btnRect.width;
}
onMounted(()=>{
    calculatePopupPosition();
})
</script>
<style lang="scss">
@import "../style/public.scss";

.BeginEditToolbar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding: 0 14px;
    box-sizing: border-box;
    color: $text-night-primary;
    .BeginToolBarItem{
        position: relative;
        min-width: 21px;
        height: 21px;
        margin: 5px 10px 5px 0;
        text-align: center;
    }
}
.MarkDownIcon{
    width: 21px;
    height: 21px;
    font-size: 22px;
    font-weight: bold;
    line-height: 21px;
    transition: all .5s;
    &:hover{
        cursor: pointer;
        transition: all .5s;
        color: $text-primary;
    }
    &::before{
        text-align: center;
    }
}
.BeginToolShade{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    z-index: 999;
    .BeginToolBarHover{
        min-height: 45px;
        border-radius: 3px;
        padding: 7px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 5px $text-second;
        background: $text-color;
        color: white;
    }
}
</style>