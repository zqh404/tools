<template>
    <div class="form-item"
         :class="[{
            'is-required': isRequired || required,
            'is-error': errorStatus === 'is-error',
            'is-success': errorStatus === 'is-success'
        }]">
        <label class="form-item-label"
               v-if="labelText">
            <span>{{labelText}}</span>
        </label>

        <div class="form-input">
            <slot></slot>
            <!--<transition name="el-zoom-in-top" v-if="errorStatus === 'is-error'">-->
                <div class="error-message">{{errorMessage}}</div>
            <!--</transition>-->
        </div>
    </div>
</template>

<script>
    import Validation from '../validation'

    export default {
        name: "form-item",
        inject: ['JKForm'],
        props: {
            ruleName: String,
            rules: [Object, Array],
            labelText: String,
            required: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                rule: null,
                errorMessage: '',
                errorStatus: '',
            }
        },
        mounted() {
            this.rule = this.getCurRules()
            this.$on('blur', this.validationBlur)
            this.$on('formValue', this.setForm)
        },
        computed: {
            form() {
                let rules = this.JKForm.rules
                //obtain the rules from parent form to current form-item
                if (rules && Object.prototype.toString.call(rules) === "[object Object]" && Object.keys(rules).length) {
                    return {rules: rules[this.ruleName]}
                }
                return {rules: null}
            },
            isRequired() {
                let rule = this.getCurRules()
                for (let i = 0, len = rule.length; i < len; i++) {
                    if (rule[i].required) {
                        return true
                    }
                }
            }
        },
        methods: {
            //get rules form the props of parent form
            //or get rules form yourself
            getCurRules() {
                let formRules = this.form.rules
                let rules = this.rules
                if (!formRules && !rules) {
                    console.error('[error: the rules of parent form is no defined]')
                }
                return formRules || rules
            },

            validationBlur(v) {
                let that = this
                let text = v.target.value
                let rules = this.getCurRules()

                that.errorStatus = ''
                that.errorMessage = ''

                rules.forEach(v => {
                    if (v.required && !text) {
                        that.errorStatus = 'is-error'
                        that.errorMessage = v.message
                        return
                    }

                    if (v.type && text) {
                        //validation failure
                        if (!Validation.vType(v.type, text)) {
                            that.errorStatus = 'is-error'
                            that.errorMessage = v.message
                        } else {  //validation successful
                            that.errorStatus = 'is-success'
                        }
                    }
                })


            },

            setForm(v, aim){
                this.$set(this.JKForm.model, aim, v)
            }
        }
    }
</script>

<style scoped>

</style>
