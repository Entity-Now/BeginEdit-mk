<template>
    <div class="BeginEdit-Box">
        <div class="BeginEdit-header">
            <div class="BeginEditToolbar">
                <div class="Begin-Toolbar-list" v-for="item in ListToolbar">
                    <component :is='item'></component>
                </div>
            </div>
        </div>
        <div class="BeginEdit-content">
            <textarea
                ref="BeginEditMarkValue"
                class="BeginEditMarkValue"
                placeholder="请输入内容..."
                spellcheck="false"
                v-model="value"
                @keydown.enter="ContentEnterEvent"
                @keyup.space="Click_Space"></textarea>
            <div v-if="BeginEditRenderShow"
                class="BeginEditRenderHtml5 markdown-body"
                v-html="Html">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'BeginEdit'
}
</script>
<script setup>
import { ref, toRefs, shallowRef, onMounted, provide, computed} from 'vue'
import { BeginningEdit } from '../utils/BeginEditConfig.js'
import "../style/icon/MarkDownIcon.css"
import "../style/BeginEdit_Style.scss"
import 'highlight.js/styles/github-dark-dimmed.css';
import "github-markdown-css/github-markdown.css"

const props = defineProps(['Code','Html']);

const emits = defineEmits(['update:Code','update:Html']);
const BeginEditRenderShow = ref(false);
const BeginEditMarkValue = ref(null);
// 浅引用
const ListToolbar = shallowRef();
const Mk = new BeginningEdit('');
// 注入方法以提供toolbar使用
provide('BeginEditTool',Mk);
provide('BeginEditRenderShow',BeginEditRenderShow);
onMounted(()=>{
    Mk.init(BeginEditMarkValue.value);
    ListToolbar.value = Mk.getToolbar();
})

const value = computed({
    get(){
        return props.Code;
    },
    set(value){
        emits('update:Code', value);
        emits('update:Html', Mk.getRender);
    }
});

// 回车事件
const ContentEnterEvent = (event)=>{
    // 获取当前光标前第一个换行符
    let { start, end } = Mk.getSelectionIndex();
    let frontText = Mk.Slice(0, start);
    let lineFeedIndex =  frontText.split('\n').pop();
    if(lineFeedIndex.match(/^\s*(?:[0-9]+\.|-)\s+\S+/) != null){
        let list = lineFeedIndex.match(/^\s*(?:[0-9]\.|-)\s/).shift();
        // 阻止事件
        event.preventDefault();
        Mk.insert(`\n${list}`);

    }else{
        let EmptyLine = lineFeedIndex.match(/^\s*(?:[0-9]\.|-)\s/);
        if(EmptyLine != null){
            // 跳出列表
            // 阻止事件
            event.preventDefault();
            Mk.delete(start-EmptyLine.shift().length, end);
        }
    }

}
// 暴露属性，可以使用ref调用暴露的属性
defineExpose({
    EditConfig:Mk,
    ListToolbar,
    BeginEditRenderShow
});
</script>

<style lang="scss">
@import "../style/public.scss";

    .BeginEdit-Box{
        width: 100%;
        height: auto;
        border: 1px solid $text-second;
        display: flex;
        position: relative;
        flex-direction: column;
        overflow-y: scroll;
        .BeginEdit-header{
            position: sticky;
            z-index: 2;
            top: 0;
            border-bottom: 1px solid $text-primary;
            background: $back-night;
        }
        .BeginEdit-content{
            position: relative;
            width: 100%;
            min-height: 500px;
            .BeginEditMarkValue{
                vertical-align: middle;
                position: absolute;
                padding: 7px;
                min-height: 100%;
                min-width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                // 可以拖动大小
                resize:none;
                font-size: 22px;
            }
            .BeginEditRenderHtml5{
                position: absolute;
                left: 0;
                top: 0;
                min-height: 100%;
                min-width: 100%;
                max-width: 100%;
                width: 100%;
                padding: 7px;
                z-index: 1;
                background: $back-night;
                box-sizing: border-box;
                border: 1px solid $text-primary;
            }
        }
    }
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
    }
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }
    
    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>