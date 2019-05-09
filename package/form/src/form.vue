<template>
    <form class="do-mod-form">
        <slot></slot>
    </form>
</template>

<script>
    import '../index.scss'

    export default {
        name: "my-form",
        props: {
            model: Object,
            rules: Object
        },
        provide() {
            return {
                JKForm: this
            };
        },
    }
</script>

<style scoped>

</style>
