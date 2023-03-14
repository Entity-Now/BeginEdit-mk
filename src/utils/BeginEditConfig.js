import { defineAsyncComponent } from 'vue'
import MarkdownIt  from 'markdown-it'
import hljs from 'highlight.js/lib/core'
import emoji from 'markdown-it-emoji/light'
import languages from '../utils/SustainLanguages.json'
import MarkdownItContainer from 'markdown-it-container'

import javascript from 'highlight.js/lib/languages/javascript'
import cpp from 'highlight.js/lib/languages/cpp'
import csharp from 'highlight.js/lib/languages/csharp'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import shell from 'highlight.js/lib/languages/shell'
import java from 'highlight.js/lib/languages/java'
import kotlin from 'highlight.js/lib/languages/kotlin'
hljs.registerLanguage('javascript',javascript);
hljs.registerLanguage('cpp',cpp);
hljs.registerLanguage('csharp',csharp);
hljs.registerLanguage('xml',xml);
hljs.registerLanguage('json',json);
hljs.registerLanguage('css',css);
hljs.registerLanguage('sql',sql);
hljs.registerLanguage('shell',shell);
hljs.registerLanguage('java',java);
hljs.registerLanguage('kotlin',kotlin);

export function CreateHighlight(){
    let md = new MarkdownIt({
        html:true, // 支持html
        xhtmlOut: false, // 支持‘/’闭合标签 <br/>
        breaks: true, // 段落中的'\n'转换为换行符
        linkify: false, // 自动将url地址转换为链接
        typographer:true, // 请用引号美化'‘’'
        quotes:'“”',
        highlight:function(str, lang){
            if (lang && hljs.getLanguage(lang)) {
                try {

                    return '<pre class="hljs"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                } catch (__) {}
            }
          
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });
    // use
    md.use(emoji);
    md.use(MarkdownItContainer);
    md.use(MarkdownItContainer, 'BeginEdit-left');
    md.use(MarkdownItContainer, 'BeginEdit-center');
    md.use(MarkdownItContainer, 'BeginEdit-right');
    return md
}
export class BeginningEdit{
    constructor(source){
        this.MkIt = CreateHighlight();
        this.Element = null;
        this.toolBarList = [];
        this.toolBar = [
            'html',
            'bold',
            'italic', // 斜体
            'underline',
            'quote-left',
            'emoji',
            'code',
            'header',
            'link',
            'alignment',
            'list',
            'picture',// 图片
            'video'
        ];
        this.Source = source;
        this.Render = source && this.MkIt.render(source);
    }
    get getRender(){
        return this.MkIt.render(this.getValue);
    }
    get getValue(){
        return this.Element.value;
    }
    set setValue(val){
        this.Element.value = val;
    }
    // 判断是否最后一个字符
    get getLastLength(){
        let { end } = this.getSelectionIndex();
        // 不是最后要给字符
        if(this.getValue.length > end){
            return false;
        }else{
            return true;
        }
    }
    // 获取toobar
    getToolbar(){
        this.toolBar.forEach(item=>{
            let component = defineAsyncComponent(()=>
                import(`../components/Edit/${item}.vue`)
            )
            this.toolBarList.push(component)
        })
        return this.toolBarList;
    }

    // 获取光标位置
    getSelectionIndex(){
        // 改变selectionEnd的值即可移动光标
        let start = this.Element.selectionStart;
        let end = this.Element.selectionEnd;
        // 判断是否选中文本
        let isSelection = false;
        if(start < end){
            isSelection = true;
        }
        return {
            start,
            end,
            isSelection
        }
    }
    // 判断是否重复插入
    IsRepeat(front, behind, IsSlice = false){
        let { start, end } = this.getSelectionIndex();
        let startIndex = start - front.length;
        let endIndex = end + behind.length;
        let FrontText = this.Slice(startIndex, start);
        let BehindText = this.Slice(end, endIndex);
        if(FrontText == front && BehindText == behind){
            if(IsSlice){
                let Front = this.Slice(0,startIndex);
                let Behind = this.Slice(endIndex);
                let center = this.Slice(start, end);
                this.setValue =  `${Front}${center}${Behind}`;
                // 移动光标
                this.Element.selectionStart = `${Front}`.length;
                this.Element.selectionEnd = `${Front}${center}`.length;
            }
            return true;
        }else{
            return false;
        }
    }
    // 截取文本
    Slice(...arg){
        return this.getValue.slice(...arg);
    }
    // 选中的文本前后插入
    aroundInsert(front, behind){
        this.Element.focus();
        let { start, end } = this.getSelectionIndex();
        let frontText = this.Slice(0, start);
        let behindText = this.Slice(end);
        let centerText = this.Slice(start,end);
        if(this.IsRepeat(front, behind, true)){
            return;
        }

        this.setValue =  `${frontText}${front}${centerText}${behind}${behindText}`;
        // 移动光标
        this.Element.selectionStart = `${frontText}${front}`.length;
        this.Element.selectionEnd = `${frontText}${front}${centerText}`.length;
    }
    // 中心插入
    centreInsert(value , MoveSelectionIndexEnd = false){
        this.Element.focus();
        let { start, end } = this.getSelectionIndex();
        let frontText = this.Slice(0, start);
        let behindText = this.Slice(end);
        let content = `${frontText}${value}${behindText}`;
        this.setValue =  content;
        // 移动光标
        if(!MoveSelectionIndexEnd){
            let totalLength = content.length - behindText.length - Math.floor((value.length / 2));
            this.Element.selectionEnd = totalLength;
        }else{
            this.Element.selectionEnd = frontText.length + value.length;
        }
    }
    // 插入图片
    insertImage(art = 'alt属性', src = '图片链接'){
        this.Element.focus();
        let str = `![${art}](${src})`;
        if(this.getLastLength){
            str = '\n' + str;
        }
        this.centreInsert(str);
    }
    delete(start, end){
        this.Element.focus();
        let frontText = this.Slice(0, start);
        let behindText = this.Slice(end);
        let content = `${frontText}${behindText}`;
        this.setValue =  content;
        // 移动光标
        this.Element.selectionEnd = content.length;
    }
    insert(value){
        this.Element.focus();
        let { start, end } = this.getSelectionIndex();
        let frontText = this.Slice(0, start);
        let behindText = this.Slice(start,end);
        let content = `${frontText}${value}${behindText}`;
        this.setValue =  content;
        // 移动光标
        this.Element.selectionEnd =  `${frontText}${value}`.length;

    }
    // 在onMounted里面调用
    init(element){
        this.Element = element;
        this.setValue = this.Source;
    }

}