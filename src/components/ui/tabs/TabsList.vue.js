import { reactiveOmit } from "@vueuse/core";
import { TabsList } from "reka-ui";
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
const __VLS_0 = {}.TabsList;
/** @type {[typeof __VLS_components.TabsList, typeof __VLS_components.TabsList, ]} */ ;
// @ts-ignore
TabsList;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    dataSlot: "tabs-list",
    ...(__VLS_ctx.delegatedProps),
    ...{ class: (__VLS_ctx.cn('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', props.class)) },
}));
const __VLS_2 = __VLS_1({
    dataSlot: "tabs-list",
    ...(__VLS_ctx.delegatedProps),
    ...{ class: (__VLS_ctx.cn('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', props.class)) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[delegatedProps, cn,];
var __VLS_6 = {};
var __VLS_3;
// @ts-ignore
var __VLS_7 = __VLS_6;
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
});
const __VLS_export = {};
export default {};
