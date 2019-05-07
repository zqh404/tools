import Dialog from './src/Dialog'

const Plugin = {
    install(Vue, options = {}) {
        const DialogTmp = Vue.component(Dialog.name, Dialog),
            dlg = new DialogTmp()

        document.body.appendChild(dlg.$mount().$el)

        //vue.use(component, {instance: '自定义句柄'})
        const instance = options.instanceName ? options.instanceName : '$dialog'

        Vue.prototype[instance] = {
            modal(component, params) {
                if (component) {
                    params.component = component
                }
                return dlg.addModal(params)
            },

            alert(params) {
                return dlg.addAlert(params)
            },

            close(component, params) {
                return dlg.close(params)
            }
        }
    }
}

export default Plugin