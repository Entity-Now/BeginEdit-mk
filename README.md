# BeginEdit-MK
一款基于[MarkDown-it](https://github.com/markdown-it/markdown-it)的编辑器，MarkDown样式使用[github-markdown-css](https://github.com/sindresorhus/github-markdown-css).

## install（安装）
```sh
npm i beginedit-mk@latest
```

## 公开方法
- BeginEdit
    - 编辑器
- BeginEditToolBarItem
    - 编辑器的toolbar工具栏
- BeginEditConfig
    - 编辑器的配置
> 待完善

## 引入到项目
demo.vue
```html
<template>
    <div>
        <BeginEdit v-model:Code="Code" v-model:Html="Html"/>
    </div>
</template>
<script setup>
import { ref } from "vue"
// 引入编辑器
import { BeginEdit } from 'beginedit-mk'
// 引入样式
import "beginedit-mk/Style"
// Markdown的源码
const Code = ref('');
// HTML源码
const Html = ref('');
</script>
```
MarkDown内容
![效果图](/Blog/img/example.png)
渲染后的HTML视图
![效果图](/Blog/img/example_1.png)


有任何疑问请联系[2966388213@qq.com](2966388213@qq.com)