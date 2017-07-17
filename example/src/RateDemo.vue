<template>
  <div class="rate-demo">
    <div class="rate-demo__item">
      <h2 id="rate-ping-fen">
        <a href="#rate-ping-fen" aria-hidden="true" class="header-anchor">¶</a>
        Rate 评分
      </h2>
      <p>评分组件 （<a href="http://element.eleme.io/#/zh-CN/component/rate#rate-ping-fen" target="_blank">Element Rate 评分</a>）</p>
    </div>
    <div class="rate-demo__item">
      <h3 id="ji-chu-yong-fa">
        <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
        基础用法
      </h3>
      <demo :multiple="true">
        <template slot="source">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <vm-rate v-model="valueA1"></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <vm-rate
                v-model="valueA2"
                :colors="colorsA2">
            </vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">指定大小，默认单位px</span>
            <vm-rate
              v-model="valueA3"
              :size="36">
            </vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">指定大小，单位rem</span>
            <vm-rate
              v-model="valueA4"
              size="2rem">
            </vm-rate>
          </div>
        </template>
        <template slot="description">
          评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过 <code>colors</code> 属性设置，而它们对应的两个阈值则通过 <code>low-threshold</code>
          和 <code>high-threshold</code> 设定。<i class="new">（<code>low-threshold</code> 和 <code>high-threshold</code> 作用于
          <code>colors</code> 和 <code>iconClasses</code>，用来显示不同的颜色和图标）</i>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeA"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="fu-zhu-wen-zi">
        <a href="#fu-zhu-wen-zi" aria-hidden="true" class="header-anchor">¶</a>
        辅助文字
      </h3>
      <p>用辅助文字直接地表达对应分数</p>
      <demo :multiple="true">
        <template slot="source">
          <div class="block">
            <span class="demonstration">辅助文字数组</span>
            <vm-rate
                v-model="valueB1"
                show-text
                :texts="['极差', '失望', '一般', '满意', '惊喜']"></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">辅助文字模板 <i class="new">(新增特性，新增示例)</i></span>
            <vm-rate
                v-model="valueB2"
                :show-text="true"
                text-type="number"
                text-template="{value}星"></vm-rate>
          </div>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeB"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          为组件设置 <code>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code>texts</code> 可以为每一个分值指定对应的辅助文字。<code>texts</code>
          为一个数组，长度应等于最大值 <code>max</code>。<i class="new">（这里做了一些修改，如果你指定了 <code>text-type="number"</code> 那么将会使用 <code>text-template="{value}"</code>
          显示辅助文字）</i>
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="qi-ta-icon">
        <a href="#qi-ta-icon" aria-hidden="true" class="header-anchor">¶</a>
        其它 icon
      </h3>
      <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
      <demo>
        <template slot="source">
          <vm-rate
              v-model="valueC1"
              :iconClasses="['vm-icon-sad', 'vm-icon-neutral-full', 'vm-icon-smile']"
              voidIconClass="vm-icon-neutral-empty"
              disabledVoidIconClass="vm-icon-neutral-full"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></vm-rate>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeC"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          设置 <code>icon-classes</code> 属性可以自定义对应 3 个不同分段的图标。本例还使用 <code>void-icon-class</code> 指定了未选中时的图标类名。<i
            class="new">（还使用了 <code>disabledVoidIconClass</code>
          指定了禁用时的图表类名）</i>
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="zhi-du">
        <a href="#zhi-du" aria-hidden="true" class="header-anchor">¶</a>
        只读
      </h3>
      <p>只读的评分用来展示分数，允许出现半星</p>
      <demo :multiple="true">
        <template slot="source">
          <div class="block">
            <span class="demonstration">允许出现半星 <i class="new">(修改特性)</i></span>
            <vm-rate
                v-model="valueD1"
                disabled
                :allow-half="true"
                show-text
                text-color="#ff9900"
                text-template="{value}"></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">不允许出现半星 <i class="new">(新增示例)</i></span>
            <vm-rate
                v-model="valueD1"
                disabled
                :allow-half="false"
                show-text
                text-color="#ff9900"
                text-template="{value}❤"></vm-rate>
          </div>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeD"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          为组件设置 <code>disabled</code> 属性表示组件为只读，支持小数分值。此时若设置 <code>show-text</code>，则会在右侧显示目前的分值。可以提供 <code>text-template</code>
          作为显示模板，模板为一个包含了 <code>{value}</code>
          的字符串，<code>{value}</code> 会被解析为分值。<i class="new">（你可以通过 <code>allow-half="true"</code>来指定是否允许出现半星， 你也可以修改
          <code>text-template="{value}❤"</code>的修饰文字）</i>
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="ban-xing">
        <a href="#ban-xing" aria-hidden="true" class="header-anchor">¶</a>
        半星 <i class="new">(新增示例)</i>
      </h3>
      <p>当进行评价时，可以出现 .5 评分</p>
      <demo :multiple="true">
        <template slot="source">
          <div class="block">
            <span class="demonstration">默认半星</span>
            <vm-rate
                v-model="valueE1"
                :allow-half="true"></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">带辅助文字数组</span>
            <vm-rate
                v-model="valueE2"
                :allow-half="true"
                show-text></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">带辅助文字模板</span>
            <vm-rate
                v-model="valueE3"
                :allow-half="true"
                show-text
                text-type="number"
                text-color="#ff9900"
                text-template="{value}❤"></vm-rate>
          </div>
          <div class="block">
            <span class="demonstration">评分星星个数为10</span>
            <vm-rate
                v-model="valueE4"
                :max="10"
                :allow-half="true"
                show-text></vm-rate>
          </div>
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeD"><code class="html javascript"></code></pre>
        </template>
        <template slot="description">
          为组件设置 <code>allow-half</code> 属性表示组件为是否允许半星，支持小数分值。此时若设置 <code>show-text</code>，则会在右侧显示目前的文字等级。也可以提供 <code>text-type="number"</code>
          文字类型 和 <code>text-template</code> 作为显示模板，模板为一个包含了 <code>{value}</code>
          的字符串，<code>{value}</code> 会被解析为分值。为组件设置 <code>:max="10"</code>属性修改星星个数。
        </template>
      </demo>
    </div>
    <div class="rate-demo__item">
      <h3 id="attributes">
        <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
        Attributes
      </h3>
      <table class="table">
        <thead>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
        </thead>
        <tbody>
        <tr>
          <td>size <i class="new">（新增）</i></td>
          <td>评分字体大小</td>
          <td>number / string</td>
          <td>% / in / cm / mm / em / ex / pt / pc / px / rem</td>
          <td>18</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大分值</td>
          <td>number</td>
          <td>—</td>
          <td>5</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否为只读</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>allow-half</td>
          <td>是否允许半选</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>low-threshold</td>
          <td>低分和中等分数的界限值，值本身被划分在低分中</td>
          <td>number</td>
          <td>—</td>
          <td>2</td>
        </tr>
        <tr>
          <td>high-threshold</td>
          <td>高分和中等分数的界限值，值本身被划分在高分中</td>
          <td>number</td>
          <td>—</td>
          <td>4</td>
        </tr>
        <tr>
          <td>colors</td>
          <td>icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色</td>
          <td>array</td>
          <td>—</td>
          <td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
        </tr>
        <tr>
          <td>void-color</td>
          <td>未选中 icon 的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#C6D1DE</td>
        </tr>
        <tr>
          <td>disabled-void-color</td>
          <td>只读时未选中 icon 的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#EFF2F7</td>
        </tr>
        <tr>
          <td>icon-classes</td>
          <td>icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名</td>
          <td>array</td>
          <td>—</td>
          <td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
        </tr>
        <tr>
          <td>void-icon-class</td>
          <td>未选中 icon 的类名</td>
          <td>string</td>
          <td>—</td>
          <td>el-icon-star-off</td>
        </tr>
        <tr>
          <td>disabled-void-icon-class</td>
          <td>只读时未选中 icon 的类名</td>
          <td>string</td>
          <td>—</td>
          <td>el-icon-star-on</td>
        </tr>
        <tr>
          <td>show-text</td>
          <td>是否显示辅助文字</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>辅助文字的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#1F2D3D</td>
        </tr>
        <tr>
          <td>texts</td>
          <td>辅助文字数组</td>
          <td>array</td>
          <td>—</td>
          <td>['极差', '失望', '一般', '满意', '惊喜']</td>
        </tr>
        <tr>
          <td>text-template</td>
          <td>只读时的辅助文字模板</td>
          <td>string</td>
          <td>—</td>
          <td>{value}</td>
        </tr>
        <tr>
          <td>text-type <i class="new">（新增）</i></td>
          <td>辅助文字类型</td>
          <td>string</td>
          <td>number</td>
          <td>text</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="rate-demo__item">
      <h3 id="event">
        <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
        Events
      </h3>
      <table class="table">
        <thead>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
        </thead>
        <tbody>
        <tr>
          <td>change</td>
          <td>分值改变时触发</td>
          <td>改变后的分值</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD } from './template.js'
  import Demo from './Demo.vue'

  export default {
    data () {
      return {
        valueA1: 0,
        valueA2: 0,
        valueA3: 0,
        valueA4: 0,
        colorsA2: ['#99A9BF', '#F7BA2A', '#FF9900'],
        valueB1: 3,
        valueB2: 3,
        valueC1: 0,
        valueD1: 3.7,
        valueD2: 3.7,
        valueE1: 0,
        valueE2: 0,
        valueE3: 0,
        valueE4: 0,
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD
      }
    },
    methods: {
      handleChange (val) {
        console.log(val);
      }
    },
    components: {
      Demo
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .rate-demo {
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
    }
    h2 {
      font-size: 28px;
      margin: 0
    }
    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }
    h3, h2 {
      &:hover {
        a {
          opacity: .4;
        }
      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;
        &:hover {
          opacity: .4;
        }
      }
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;
        &:hover {
          color: #57a3f3;
        }
      }
    }
    .new {
      font-style: normal;
      color: #FF4949;
      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }
    }
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }
      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }
    }
  }
</style>
