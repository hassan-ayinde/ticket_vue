import { DialogRoot, useForwardPropsEmits } from "reka-ui";
const props = defineProps();
const emits = defineEmits();
const forwarded = useForwardPropsEmits(props, emits);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.DialogRoot;
/** @type {[typeof __VLS_components.DialogRoot, typeof __VLS_components.DialogRoot, ]} */ ;
// @ts-ignore
DialogRoot;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    dataSlot: "dialog",
    ...(__VLS_ctx.forwarded),
}));
const __VLS_2 = __VLS_1({
    dataSlot: "dialog",
    ...(__VLS_ctx.forwarded),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[forwarded,];
var __VLS_6 = {};
var __VLS_3;
// @ts-ignore
var __VLS_7 = __VLS_6;
const __VLS_base = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_export = {};
export default {};
