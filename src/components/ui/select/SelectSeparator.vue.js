import { reactiveOmit } from "@vueuse/core";
import { SelectSeparator } from "reka-ui";
import { cn } from "@/lib/utils";
const props = defineProps();
const delegatedProps = reactiveOmit(props, "class");
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.SelectSeparator;
/** @type {[typeof __VLS_components.SelectSeparator, ]} */ ;
// @ts-ignore
SelectSeparator;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    dataSlot: "select-separator",
    ...(__VLS_ctx.delegatedProps),
    ...{ class: (__VLS_ctx.cn('bg-border pointer-events-none -mx-1 my-1 h-px', props.class)) },
}));
const __VLS_2 = __VLS_1({
    dataSlot: "select-separator",
    ...(__VLS_ctx.delegatedProps),
    ...{ class: (__VLS_ctx.cn('bg-border pointer-events-none -mx-1 my-1 h-px', props.class)) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
// @ts-ignore
[delegatedProps, cn,];
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
