<template>
  <div class="vm-rate">
    <span
        v-for="item in max"
        class="vm-rate__item"
        @mousemove="setCurrentValue(item, $event)"
        @mouseleave="resetCurrentValue"
        @click="selectValue(item)"
        :style="{'cursor': disabled ? 'auto' : 'pointer'}">
      <i
          class="vm-rate__icon"
          :class="[classes[item - 1], { 'hover': hoverIndex === item }]"
          :style="getIconStyle(item)"
      >
          <i
              class="vm-rate__decimal"
              v-if="showDecimalIcon(item)"
              :class="decimalIconClass"
              :style="decimalStyle"></i>
        </i>
    </span><span v-if="showText" class="vm-rate__text" :style="{ color: textColor }" v-html="text"></span>
  </div>
</template>
<script>

  function hasClass (el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') > -1) throw new Error('className should not contain space.')
    if (el.classList) {
      return el.classList.contains(cls)
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
  }

  export default {
    name: 'VmRate',

    componentName: 'VmRate',

    props: {
      value: {
        type: Number,
        default: 0
      },
      size: {
        type: [Number,String],
        default: 18
      },
      max: {
        type: Number,
        default: 5
      },
      lowThreshold: {
        type: Number,
        default: 2
      },
      highThreshold: {
        type: Number,
        default: 4
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowHalf: {
        type: Boolean,
        default: false
      },
      colors: {
        type: Array,
        default () {
          return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
        }
      },
      voidColor: {
        type: String,
        default: '#C6D1DE'
      },
      disabledVoidColor: {
        type: String,
        default: '#EFF2F7'
      },
      iconClasses: {
        type: Array,
        default () {
          return ['vm-icon-star-full', 'vm-icon-star-full', 'vm-icon-star-full']
        }
      },
      voidIconClass: {
        type: String,
        default: 'vm-icon-star-empty'
      },
      disabledVoidIconClass: {
        type: String,
        default: 'vm-icon-star-full'
      },
      showText: {
        type: Boolean,
        default: false
      },
      texts: {
        type: Array,
        default () {
          return ['极差', '失望', '一般', '满意', '惊喜']
        }
      },
      textTemplate: {
        type: String,
        default: '{value}'
      },
      textColor: {
        type: String,
        default: '#1f2d3d'
      },
      textType: {
        type: String,
        default: 'text'
      }
    },

    data () {
      return {
        colorMap: {},
        classMap: {},
        pointerAtLeftHalf: true,
        currentValue: this.value,
        hoverIndex: -1
      }
    },

    watch: {
      value (val) {
        this.value = val
        this.$emit('change', val)
      }
    },

    computed: {
      text () {
        let result = ''
        if (this.disabled || this.textType === 'number') {
          result = this.textTemplate.replace(/\{\s*value\s*\}/, `${ '<i>' + this.currentValue + '</i>' }`)
        } else {
          result = this.texts[Math.ceil(this.currentValue / (this.max / this.texts.length)) - 1]
        }
        return result
      },
      voidClass () {
        return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass
      },
      activeClass () {
        return this.getValueFromMap(this.currentValue, this.classMap)
      },
      classes () {
        let result = []
        let i = 0
        let threshold = this.currentValue
        if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
          threshold--
        }
        for (; i < threshold; i++) {
          result.push(this.activeClass)
        }
        for (; i < this.max; i++) {
          result.push(this.voidClass)
        }
        return result
      },
      activeColor () {
        return this.getValueFromMap(this.currentValue, this.colorMap)
      },
      valueDecimal () {
        return this.value * 100 - Math.floor(this.value) * 100
      },
      decimalIconClass () {
        return this.getValueFromMap(this.value, this.classMap)
      },
      decimalStyle () {
        let width = ''
        if (this.disabled) {
          width = `${ this.allowHalf ? this.valueDecimal : 0 }%`
        }
        if (this.allowHalf && !this.disabled) {
          width = '50%'
        }
        return {
          color: this.activeColor,
          width
        }
      }
    },

    methods: {
      getValueFromMap (value, map) {
        let result = ''
        if (value <= this.lowThreshold) {
          result = map.lowColor || map.lowClass
        } else if (value >= this.highThreshold) {
          result = map.highColor || map.highClass
        } else {
          result = map.mediumColor || map.mediumClass
        }
        return result
      },
      showDecimalIcon (item) {
        let showWhenDisabled = this.disabled && this.valueDecimal && item - 1 < this.value && item > this.value
        let showWhenAllowHalf =
            this.allowHalf
            && this.pointerAtLeftHalf
            && this.currentValue < item
            && this.currentValue >= item - 0.5
        return showWhenDisabled || showWhenAllowHalf
      },
      getIconStyle (item) {
        let voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
        const UNITS = ['%', 'in', 'cm', 'mm', 'em', 'ex', 'pt', 'pc', 'px', 'rem']

        return {
          color: item <= this.currentValue ? this.activeColor : voidColor,
          fontSize: `${this.size +
            (
              typeof this.size === 'string'
              && UNITS.indexOf(this.size.replace(/\d*\.*\d*/, '')) > -1
              ? '' : 'px'
            )
          }`
        }
      },
      selectValue (value) {
        if (this.disabled) {
          return;
        }
        if (this.allowHalf && this.pointerAtLeftHalf) {
          this.$emit('input', this.currentValue)
        } else {
          this.$emit('input', value)
        }
      },
      setCurrentValue (value, event) {
        if (this.disabled) {
          return;
        }

        if (this.allowHalf) {
          let target = event.target
          if (hasClass(target, 'vm-rate__item')) {
            target = target.querySelector('.vm-rate__icon')
          }
          if (hasClass(target, 'vm-rate__decimal')) {
            target = target.parentNode
          }
          this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth
          this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
        } else {
          this.currentValue = value
        }
        this.hoverIndex = value
      },
      resetCurrentValue () {
        if (this.disabled) {
          return;
        }

        if (this.allowHalf) {
          this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
        }

        this.currentValue = this.value
        this.hoverIndex = -1
      }
    },

    created () {

      if (!this.value) {
        this.$emit('input', 0)
      }

      this.colorMap = {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }

      this.classMap = {
        lowClass: this.iconClasses[0],
        mediumClass: this.iconClasses[1],
        highClass: this.iconClasses[2],
        voidClass: this.voidIconClass,
        disabledVoidClass: this.disabledVoidIconClass
      }
    }
  }
</script>