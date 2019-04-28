<template>
    <div class="do-ui-img" :class="[{'no-img-url': !src}]" :style="styles">
        <template v-if="src">
            <img :src="src" @load="imgSuccess" @error="imgError($event)" v-if="isShow"/>
            <i class="img-error" v-else></i>
        </template>
    </div>
</template>

<script>
    import './index.scss'

    export default {
        name: "image-view",
        props: {
            width: {
                type: [Number, String],
                default: 100
            },
            height: {
                type: [Number, String],
                default: 100
            },
            src: {
                type: String,
                required: true
            }
        },
        computed: {
            styles() {
                let that = this
                let width, height

                if (that.getParamType(that.width) === '[object Number]') {
                    width = that.width + 'px'
                } else if (that.getParamType(that.width) === '[object String]') {
                    width = that.width
                }

                if (that.getParamType(that.height) === '[object Number]') {
                    height = that.height + 'px'
                } else if (that.getParamType(that.height) === '[object String]') {
                    height = that.height
                }

                return {width, height}
            }
        },
        data() {
            return {
                isShow: true,
            }
        },
        methods: {
            imgSuccess() {
                this.isShow = true
            },
            imgError() {
                this.isShow = false
            },
            getParamType(v) {
                return Object.prototype.toString.call(v)
            }
        }
    }
</script>

<style scoped>

</style>
