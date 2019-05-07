<template>
    <component class="dialog-box "
               :class="[dialogType, dialogKey]"
               :style="styles"
               :is="dialogType"
               :config="config"
               @close="close"
    ></component>
</template>

<script>

    export default {
        name: "v-dialog-instance",
        inject: ['vMyDialog'],
        components: {
            'v-modal': () => import('./modal'),
            'v-alert': () => import('./alert')
        },
        props: {
            dialogType: {
                type: String,
                default: 'v-modal'
            },
            config: Object,
            dialogKey: String
        },
        computed: {
            styles() {
                let that = this
                let obj = {}

                if (that.config.width) {
                    obj.width = that.config.width + 'px'
                }

                if (that.config.height) {
                    obj.height = that.config.height + 'px'
                }

                return obj
            }
        },
        methods: {
            close(v) {
                this.vMyDialog.close()
            }
        },
    }
</script>

<style scoped>

</style>