<template>
  <div class="demo">
    <div class="source" :style="{ padding: multiple ? '0px': '24px' }">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" ref="description">
        <slot name="description"></slot>
      </div>
      <div class="highlight" ref="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="control" 
      @click="handleShowMeta" 
      @mousemove="showText = true" 
      @mouseleave="showText = false">
        <i :class="['icon', (showMeta ? 'icon-circle-up' : 'icon-circle-down'), {'hovering': showText}]"></i>
        <transition name="text-slide">
          <span v-if="showText">{{ showMeta ? '隐藏代码' : '显示代码' }}</span>
        </transition>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showMeta: false,
        showText: false
      }
    },
    methods: {
      handleShowMeta () {
        if (this.showMeta) {
          this.$refs.meta.style.height = 0
        } else {
          this.$refs.meta.style.height = Math.max(this.$refs.highlight.clientHeight, this.$refs.description.clientHeight) + 'px'
        }
        this.showMeta = !this.showMeta
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "./styles/less/style.less";

  .demo {
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
    .block {
      float: left;
      width: 50%;
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;
      border-bottom: 1px solid #eff2f6;
      box-sizing: border-box;
      &:nth-child(2n) {
        border-right: none;
      }
      &:nth-last-child(2), &:nth-last-child(1) {
        border-bottom: none;
      }
      .demonstration {
        display: inline-block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
    .meta {
      background-color: #f9fafc;
      border-top: 1px solid #eaeefb;clear: both;
      overflow: hidden;
      height: 0;
      transition: height .2s;
      .description {
        float: right;
        width: 40%;
        padding: 18px 24px;
        font-size: 14px;
        line-height: 1.8;
        color: #5e6d82;
        word-break: break-word;
        border-left: 1px solid #eaeefb;
        box-sizing: border-box;
        p {
          margin: 0 0 12px;
          line-height: 1.8;
          font-size: 14px;
          color: #5e6d82;
        }
        code {
          color: #5e6d82;
          background-color: #e6effb;
          margin: 0 4px;
          display: inline-block;
          padding: 1px 5px;
          font-size: 12px;
          border-radius: 3px;
          height: 18px;
          line-height: 18px;
        }
      }
      .highlight {
        width: 60%;
        border-right: 1px solid #eaeefb;
        pre {
          margin: 0;
          code {
            &.hljs {
              max-height: none;  
              margin: 0;
              padding: 18px 24px;
              line-height: 1.8;
              font-size: 12px;  
              background-color: #f9fafc;
              border: none;
              border-radius: 0;
              -webkit-font-smoothing: auto;
            }
          }
        }
      }
    }
    .control {
      position: relative;
      height: 36px;
      margin-top: -1px;
      text-align: center;
      color: #d3dce6;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      transition: .2s;
      &:hover {
        color: #20a0ff;
        background-color: #f9fafc;
      }
      i {
        display: inline-block;
        font-size: 12px;
        line-height: 36px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }
      span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 36px;
        transition: .3s;
      }
      .text-slide-enter, .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px)
      }
    }
  }
  .hljs {
    display: block;
    overflow-x: auto;
    padding: .5em;
    background: #fff
  }
  .hljs, .hljs-subst {
    color: #000
  }
  .hljs-addition, .hljs-meta, .hljs-string, .hljs-symbol, .hljs-template-tag, .hljs-template-variable {
    color: #756bb1
  }
  .hljs-comment, .hljs-quote {
    color: #636363
  }
  .hljs-bullet, .hljs-link, .hljs-literal, .hljs-number, .hljs-regexp {
    color: #31a354
  }
  .hljs-deletion, .hljs-variable {
    color: #88f
  }
  .hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type {
    color: #3182bd
  }
  .hljs-emphasis {
    font-style: italic
  }
  .hljs-attribute {
    color: #e6550d
  }
</style>