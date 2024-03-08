import Msg from "./index.vue";
import { h, createVNode, render } from "vue";

export interface Option {
    seed: number,
    title: string,
    content: string,
    onOk?: () => void,
    onCancel?: () => void
}
let seed = 0
const message = (option: Option) => {
    console.log(option)
    const container = document.createElement('div')
    const vm = h(Msg, { seed: seed++, ...option })


    render(vm, container)
    document.body.appendChild(container.firstElementChild!)

    const close = () => {
        container.remove()
    }


    setTimeout(() => {
        close()
    }, 3000);

    return close

}


export { message }