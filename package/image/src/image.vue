<template>
    <div class="do-ui-image" :style="styles">
        <template v-if="src">
            <!--<slot name="loading" v-if="isLoading"></slot>-->
            <!--<slot name="error" v-else-if="isError"></slot>-->
            <i class="image-loading" v-if="isLoading"></i>
            <i class="image-error" v-else-if="isError"></i>
            <img :src="src"
                 :style="{'object-fit': fitType}"
                 v-else/>
        </template>
       <template v-else>
           <div class="no-image">no image</div>
       </template>
    </div>
</template>

<script>
    import '../index.scss'

    export default {
        name: "myImage",
        props: {
            src: String,
            width: [String, Number],
            height: [String, Number],
            fitType:{
                type: String,
                default: 'contain'
            }
        },

        data() {
            return {
                isError: false,
                isLoading: true,
                // isShow: true
            }
        },
        computed: {
            styles() {
                let t = this
                let width, height

                if (typeof t.width === "number" && t.width.includes('px')) {
                    width = t.width
                } else if (typeof t.width === 'number') {
                    width = t.width + 'px'
                } else {
                    width = '100px'
                }

                if (typeof t.height === "number" && t.height.includes('px')) {
                    height = t.height
                } else if (typeof t.height === 'number') {
                    height = t.height + 'px'
                } else {
                    height = '100px'
                }

                return {width, height}
            }
        },

        watch: {
            src: {
                handler(val) {
                    // this.isShow &&
                    this.imageLoad(val)
                },
                immediate: true
            },
        },

        methods: {
            imageLoad(value){
                let t = this
                t.isLoading = true
                t.isError = false

                // setTimeout(function () {
                    var image = new Image()
                    image.onload = t.handlerLoading.bind(t)
                    image.onerror = t.handlerError.bind(t)
                    image.src = value
                // }, 3000)

            },
            handlerLoading(evt){
                this.isLoading = false
                this.$emit('load', evt)
            },
            handlerError(evt){
                this.isLoading = false
                this.isError = true
                this.$emit('error', evt)
            }
        }
    }
</script>

<style scoped>

</style>