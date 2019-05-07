<template>
    <div @click.stop>
        <header>
            <div class="dialog-title">{{config.title || 'my-dialog'}}</div>
            <div class="dialog-btn-1">
                <i class="iconfont close" @click="close"></i>
            </div>
        </header>

        <component :is="config.component" v-if="config.component"></component>

    </div>
</template>

<script>
    export default {
        name: "v-modal",
        props: {
            config: Object
        },
        methods: {
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>