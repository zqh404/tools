import Image from './src/image'

Image.install = function (Vue) {
    Vue.components(Image.name, Image)
}

export default Image