import Icon from "./Icon.vue";
import type { IconProps } from "vuetify";
import {h} from "vue"

const custom = {
    // just render df logo no matter what
    component: (props: IconProps) => { return h(Icon) } 
}

export { custom }