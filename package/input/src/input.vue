<template>
    <div>
        <input :type="type"
               :style="styles"
               :placeholder="placeholder"
               v-model="inputValue"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"/>
    </div>
</template>

<script>
    // import './index.scss'
    export default {
        name: "my-input",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            width: [Number, String],
            height: [Number, String],
            placeholder: String,
            modelName: String,
            value: [String, Number]
        },
        data() {
            return {
                inputValue: null,
            }
        },
        watch: {
            inputValue(v) {
                this.$emit('update:value', v)
                // if(this.$parent){
                //     this.$parent.$emit('formValue', v, this.modelName)
                // }
            }
        },
        computed: {
            styles() {
                let that = this
                let obj = {}
                if (that.width) {
                    obj.width = that.getParamsType(that.width) === '[object String]' ? that.width : that.width + 'px'
                }
                if (that.height) {
                    obj.height = that.getParamsType(that.height) === '[object String]' ? that.height : that.height + 'px'
                }
                return obj
            }
        },
        methods: {
            getParamsType(v) {
                return Object.prototype.toString.call(v)
            },
            handleInput(evt) {
                // this.$parent.$emit('blur', evt)
                //console.log('handleInput: ' + evt.target.value)
            },
            handleFocus(evt) {
                //console.log('handleFocus: ' + evt.target.value)
            },
            handleBlur(evt) {
                this.$parent.$emit('blur', evt)
            },
        }
    }
</script>

<style scoped>

</style>
