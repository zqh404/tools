<template>
    <div @click.stop>
        <header>
            <div class="dialog-title">{{config.title || 'my-dialog'}}</div>
            <div class="dialog-btn-1">
                <i class="iconfont close" @click="close"></i>
            </div>
        </header>

        <section class="alert-box">
            <i class="icon-style" :class="[config.messageType || 'message']"></i>
            <div class="message-context">{{config.message}}</div>
        </section>

        <footer class="alert-btn">
            <button class="cancel" v-if="config.isCancel" @click="cancel">cancel</button>
            <button class="ok" v-if="config.isOk" @click="ok">ok</button>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "v-alert",
        props: {
            config: Object
        },
        methods: {
            close() {
                this.$emit('close')
            },
            ok() {
                this.config.ok('ok')
                this.close()
            },
            cancel() {
                this.config.cancel('cancel')
                this.close()
            }
        }

    }
</script>

<style scoped>

</style>