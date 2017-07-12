export const sourcecodeA = `<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <vm-rate v-model="valueA1"></vm-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <vm-rate
      v-model="valueA2"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </vm-rate>
</div>

<script>
  export default {
    data () {
      return {
        valueA1: 0,
        valueA2: 0
      }
    }
  }
</script>`

export const sourcecodeB = `<div class="block">
  <span class="demonstration">辅助文字数组</span>
  <vm-rate
      v-model="valueB1"
      show-text
      :texts="['极差', '失望', '一般', '满意', '惊喜']"></vm-rate>
</div>
<div class="block">
  <span class="demonstration">辅助文字模板</span>
  <vm-rate
      v-model="valueB2"
      show-text
      text-type="number"
      text-template="{value}星"></vm-rate>
</div>

<script>
  export default {
    data () {
      return {
        valueB1: 3,
        valueB2: 3
      }
    }
  }
</script>`

export const sourcecodeC = `<vm-rate
  v-model="valueC1"
  :iconClasses="['vm-icon-sad', 'vm-icon-neutral-full', 'vm-icon-smile']"
  voidIconClass="vm-icon-neutral-empty"
  disabledVoidIconClass="vm-icon-neutral-full"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</vm-rate>

<script>
  export default {
    data () {
      return {
        valueC1: 0,
      }
    }
  }
</script>`

export const sourcecodeD = `<div class="block">
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

<script>
  export default {
    data () {
      return {
        valueE1: 0,
        valueE2: 0,
        valueE3: 0,
        valueE4: 0
      }
    }
  }
</script>`

