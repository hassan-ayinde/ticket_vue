import { reactiveOmit } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
import { SelectScrollDownButton, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";
const props = defineProps();
const delegatedProps = reactiveOmit(props, "class");
const forwardedProps = useForwardProps(delegatedProps);
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
const __VLS_0 = {}.SelectScrollDownButton;
/** @type {[typeof __VLS_components.SelectScrollDownButton, typeof __VLS_components.SelectScrollDownButton, ]} */ ;
// @ts-ignore
SelectScrollDownButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    dataSlot: "select-scroll-down-button",
    ...(__VLS_ctx.forwardedProps),
    ...{ class: (__VLS_ctx.cn('flex cursor-default items-center justify-center py-1', props.class)) },
}));
const __VLS_2 = __VLS_1({
    dataSlot: "select-scroll-down-button",
    ...(__VLS_ctx.forwardedProps),
    ...{ class: (__VLS_ctx.cn('flex cursor-default items-center justify-center py-1', props.class)) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[forwardedProps, cn,];
var __VLS_6 = {};
const __VLS_8 = {}.ChevronDown;
/** @type {[typeof __VLS_components.ChevronDown, ]} */ ;
// @ts-ignore
ChevronDown;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "size-4" },
}));
const __VLS_10 = __VLS_9({
    ...{ class: "size-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['size-4']} */ ;
// @ts-ignore
var __VLS_7 = __VLS_6;
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
