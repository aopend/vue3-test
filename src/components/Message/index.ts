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
    console.log(container)
    document.body.appendChild(container)
    let time = 0;
    const close = () => {
        time && clearTimeout(time)
        console.log(container)
        document.body.removeChild(container)
    }

    time = setTimeout(() => {
        console.log('close')
        close()
    }, 3000);

    return close

}


export { message }