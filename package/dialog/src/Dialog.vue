<template>
    <div>
        <div class="my-ui-dialog" v-if="myDialogs.length">
            <my-dialog :config="dialog"
                       :dialogType="dialog.type"
                       :dialogKey="dialog.dialogKey"
                       v-for="(dialog, idx) in myDialogs"
                       :key="idx"
                       @click.stop>
            </my-dialog>

            <div class="dialog-mask"></div>
        </div>

    </div>
</template>

<script>
    import myDialog from './modules/index'

    import '../index.scss'

    export default {
        name: "v-my-dialog",
        components: {
            myDialog
        },
        provide() {
            return {
                vMyDialog: this
            }
        },
        data() {
            return {
                prefixName: 'v-my-dialog-', //前缀名
                curKeyNum: 0,
                myDialogs: []
            }
        },

        methods: {
            random() {
                let date = new Date()
                let str = date.getTime().toString()
                return str.length >= 7 ? str.substr(str.length - 7) : str
            },
            dialogKeyConfig(config) {
                let that = this
                let id = that.myDialogs.findIndex(v => {
                    return config.dialogKey === v.dialogKey
                })

                if (id < 0) {
                    let newName = `${that.prefixName}-${that.random()}-${that.curKeyNum++}`
                    config.dialogKey = newName
                    that.myDialogs.push(config)
                }
                return null
            },
            // buildDialogConfig(params) {
            //     let that = this
            //     for (let key in params) {
            //         if (params.hasOwnProperty(key) && (key in that)) {
            //             that[key] = params[key]
            //         }
            //     }
            // },
            addModal(params) {
                // this.buildDialogConfig(params)
                this.dialogKeyConfig(params)
                params.type = 'v-modal'
            },
            addAlert(params) {
                // this.buildDialogConfig(params)
                this.dialogKeyConfig(params)
                params.type = 'v-alert'
            },
            maskClose() {
                // if (this.isClickMask) {
                //this.close()
                // }
            },
            close() {
                if (this.myDialogs.length) {
                    this.myDialogs.pop()
                }
            }
        }
    }
</script>

<style scoped>

</style>