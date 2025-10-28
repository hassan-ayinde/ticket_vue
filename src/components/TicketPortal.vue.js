import { ref, computed, watch, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";
import { Search } from "lucide-vue-next";
// shadcn-vue components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import TicketCard from "./TicketCard.vue";
const router = useRouter();
const tickets = ref([]);
const search = ref("");
const isDeleteDialogOpen = ref(false);
const selectedTicket = ref(null);
const isEditing = ref(false);
const editingTicketId = ref(null);
// ✅ Form fields
const form = ref({
    title: "",
    status: "",
    description: "",
});
// ✅ Load tickets
onMounted(() => {
    const saved = localStorage.getItem("ticketapp_session");
    if (saved) {
        try {
            tickets.value = JSON.parse(saved);
        }
        catch (e) {
            console.error("Error loading tickets:", e);
        }
    }
});
// ✅ Save tickets to localStorage
watch(tickets, (val) => {
    localStorage.setItem("ticketapp_session", JSON.stringify(val));
}, { deep: true });
// ✅ Validation errors
const errors = ref({});
function validateForm() {
    errors.value = {};
    if (!form.value.title.trim())
        errors.value.title = "Title is required";
    if (!form.value.status)
        errors.value.status = "Status is required";
    if (form.value.description.length > 300)
        errors.value.description = "Max 300 characters allowed";
    return Object.keys(errors.value).length === 0;
}
// ✅ Handle submit
function handleSubmit() {
    if (!validateForm())
        return;
    if (isEditing.value && editingTicketId.value) {
        tickets.value = tickets.value.map((t) => t.id === editingTicketId.value
            ? {
                ...t,
                title: form.value.title,
                status: form.value.status,
                description: form.value.description,
            }
            : t);
        toast.success("Ticket updated successfully!");
        isEditing.value = false;
        editingTicketId.value = null;
    }
    else {
        const newTicket = {
            id: uuidv4(),
            title: form.value.title,
            status: form.value.status,
            description: form.value.description,
        };
        tickets.value.unshift(newTicket);
        toast.success("Ticket created successfully!");
    }
    form.value = { title: "", status: "", description: "" };
}
function handleEdit(ticket) {
    isEditing.value = true;
    editingTicketId.value = ticket.id;
    form.value = {
        title: ticket.title,
        status: ticket.status,
        description: ticket.description || "",
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function confirmDelete(ticket) {
    selectedTicket.value = ticket;
    isDeleteDialogOpen.value = true;
}
function handleDelete() {
    if (selectedTicket.value) {
        tickets.value = tickets.value.filter((t) => t.id !== selectedTicket.value?.id);
        toast.success(`"${selectedTicket.value.title}" deleted successfully!`);
        isDeleteDialogOpen.value = false;
        selectedTicket.value = null;
    }
}
const filteredTickets = computed(() => tickets.value.filter((t) => t.title.toLowerCase().includes(search.value.toLowerCase())));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "mb-6" },
});
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "bg-gray-200 w-full" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-[75%] mx-auto py-4 flex items-center justify-between" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-lg font-semibold" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({});
const __VLS_0 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "bg-gray-700 text-white px-5 py-2 rounded-md" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    ...{ class: "bg-gray-700 text-white px-5 py-2 rounded-md" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.router.push('/');
            // @ts-ignore
            [router,];
        } });
const { default: __VLS_7 } = __VLS_3.slots;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex gap-6 w-[75%] mx-auto mt-6 flex-col md:flex-row" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-lg font-semibold mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-sm text-gray-500 mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.handleSubmit) },
    ...{ class: "flex flex-col gap-4" },
});
// @ts-ignore
[handleSubmit,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_8 = {}.Label;
/** @type {[typeof __VLS_components.Label, typeof __VLS_components.Label, ]} */ ;
// @ts-ignore
Label;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    for: "title",
    ...{ class: "mb-2" },
}));
const __VLS_10 = __VLS_9({
    for: "title",
    ...{ class: "mb-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const { default: __VLS_12 } = __VLS_11.slots;
var __VLS_11;
const __VLS_13 = {}.Input;
/** @type {[typeof __VLS_components.Input, ]} */ ;
// @ts-ignore
Input;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    id: "title",
    modelValue: (__VLS_ctx.form.title),
    placeholder: "Ticket title",
}));
const __VLS_15 = __VLS_14({
    id: "title",
    modelValue: (__VLS_ctx.form.title),
    placeholder: "Ticket title",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
// @ts-ignore
[form,];
if (__VLS_ctx.errors.title) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.title);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_18 = {}.Label;
/** @type {[typeof __VLS_components.Label, typeof __VLS_components.Label, ]} */ ;
// @ts-ignore
Label;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    for: "status",
    ...{ class: "mb-2" },
}));
const __VLS_20 = __VLS_19({
    for: "status",
    ...{ class: "mb-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_22 } = __VLS_21.slots;
var __VLS_21;
const __VLS_23 = {}.Select;
/** @type {[typeof __VLS_components.Select, typeof __VLS_components.Select, ]} */ ;
// @ts-ignore
Select;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    modelValue: (__VLS_ctx.form.status),
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.form.status),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
const { default: __VLS_27 } = __VLS_26.slots;
// @ts-ignore
[form,];
const __VLS_28 = {}.SelectTrigger;
/** @type {[typeof __VLS_components.SelectTrigger, typeof __VLS_components.SelectTrigger, ]} */ ;
// @ts-ignore
SelectTrigger;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ class: "w-full" },
}));
const __VLS_30 = __VLS_29({
    ...{ class: "w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const { default: __VLS_32 } = __VLS_31.slots;
const __VLS_33 = {}.SelectValue;
/** @type {[typeof __VLS_components.SelectValue, ]} */ ;
// @ts-ignore
SelectValue;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    placeholder: "Select status",
}));
const __VLS_35 = __VLS_34({
    placeholder: "Select status",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
var __VLS_31;
const __VLS_38 = {}.SelectContent;
/** @type {[typeof __VLS_components.SelectContent, typeof __VLS_components.SelectContent, ]} */ ;
// @ts-ignore
SelectContent;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
const { default: __VLS_42 } = __VLS_41.slots;
const __VLS_43 = {}.SelectGroup;
/** @type {[typeof __VLS_components.SelectGroup, typeof __VLS_components.SelectGroup, ]} */ ;
// @ts-ignore
SelectGroup;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_47 } = __VLS_46.slots;
const __VLS_48 = {}.SelectItem;
/** @type {[typeof __VLS_components.SelectItem, typeof __VLS_components.SelectItem, ]} */ ;
// @ts-ignore
SelectItem;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    value: "open",
}));
const __VLS_50 = __VLS_49({
    value: "open",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_52 } = __VLS_51.slots;
var __VLS_51;
const __VLS_53 = {}.SelectItem;
/** @type {[typeof __VLS_components.SelectItem, typeof __VLS_components.SelectItem, ]} */ ;
// @ts-ignore
SelectItem;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    value: "in_progress",
}));
const __VLS_55 = __VLS_54({
    value: "in_progress",
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
const { default: __VLS_57 } = __VLS_56.slots;
var __VLS_56;
const __VLS_58 = {}.SelectItem;
/** @type {[typeof __VLS_components.SelectItem, typeof __VLS_components.SelectItem, ]} */ ;
// @ts-ignore
SelectItem;
// @ts-ignore
const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({
    value: "closed",
}));
const __VLS_60 = __VLS_59({
    value: "closed",
}, ...__VLS_functionalComponentArgsRest(__VLS_59));
const { default: __VLS_62 } = __VLS_61.slots;
var __VLS_61;
var __VLS_46;
var __VLS_41;
var __VLS_26;
if (__VLS_ctx.errors.status) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.status);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_63 = {}.Label;
/** @type {[typeof __VLS_components.Label, typeof __VLS_components.Label, ]} */ ;
// @ts-ignore
Label;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    for: "description",
    ...{ class: "mb-2" },
}));
const __VLS_65 = __VLS_64({
    for: "description",
    ...{ class: "mb-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
const { default: __VLS_67 } = __VLS_66.slots;
var __VLS_66;
const __VLS_68 = {}.Textarea;
/** @type {[typeof __VLS_components.Textarea, ]} */ ;
// @ts-ignore
Textarea;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    id: "description",
    modelValue: (__VLS_ctx.form.description),
    placeholder: "Type your message here...",
    ...{ class: "resize-none" },
}));
const __VLS_70 = __VLS_69({
    id: "description",
    modelValue: (__VLS_ctx.form.description),
    placeholder: "Type your message here...",
    ...{ class: "resize-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
// @ts-ignore
[form,];
if (__VLS_ctx.errors.description) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.description);
    // @ts-ignore
    [errors,];
}
const __VLS_73 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    type: "submit",
    ...{ class: "cursor-pointer mt-2 text-white" },
    ...{ class: (__VLS_ctx.isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-600') },
}));
const __VLS_75 = __VLS_74({
    type: "submit",
    ...{ class: "cursor-pointer mt-2 text-white" },
    ...{ class: (__VLS_ctx.isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-600') },
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
const { default: __VLS_77 } = __VLS_76.slots;
// @ts-ignore
[isEditing,];
(__VLS_ctx.isEditing ? "Update Ticket" : "Submit Ticket");
// @ts-ignore
[isEditing,];
var __VLS_76;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-full md:w-2/3" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "relative w-full max-w-lg mx-auto mb-4" },
});
const __VLS_78 = {}.Search;
/** @type {[typeof __VLS_components.Search, ]} */ ;
// @ts-ignore
Search;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
    ...{ class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" },
    size: (18),
}));
const __VLS_80 = __VLS_79({
    ...{ class: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" },
    size: (18),
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
const __VLS_83 = {}.Input;
/** @type {[typeof __VLS_components.Input, ]} */ ;
// @ts-ignore
Input;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
    type: "text",
    placeholder: "Search tickets...",
    modelValue: (__VLS_ctx.search),
    ...{ class: "pl-9" },
}));
const __VLS_85 = __VLS_84({
    type: "text",
    placeholder: "Search tickets...",
    modelValue: (__VLS_ctx.search),
    ...{ class: "pl-9" },
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
// @ts-ignore
[search,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid grid-cols-1 md:grid-cols-2 gap-5" },
});
for (const [ticket] of __VLS_getVForSourceType((__VLS_ctx.filteredTickets))) {
    // @ts-ignore
    [filteredTickets,];
    /** @type {[typeof TicketCard, ]} */ ;
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(TicketCard, new TicketCard({
        ...{ 'onDelete': {} },
        ...{ 'onEdit': {} },
        key: (ticket.id),
        ticket: (ticket),
    }));
    const __VLS_89 = __VLS_88({
        ...{ 'onDelete': {} },
        ...{ 'onEdit': {} },
        key: (ticket.id),
        ticket: (ticket),
    }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    let __VLS_91;
    let __VLS_92;
    const __VLS_93 = ({ delete: {} },
        { onDelete: (...[$event]) => {
                __VLS_ctx.confirmDelete(ticket);
                // @ts-ignore
                [confirmDelete,];
            } });
    const __VLS_94 = ({ edit: {} },
        { onEdit: (...[$event]) => {
                __VLS_ctx.handleEdit(ticket);
                // @ts-ignore
                [handleEdit,];
            } });
    var __VLS_90;
}
if (__VLS_ctx.filteredTickets.length === 0) {
    // @ts-ignore
    [filteredTickets,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-center text-gray-500 mt-10" },
    });
}
const __VLS_96 = {}.Dialog;
/** @type {[typeof __VLS_components.Dialog, typeof __VLS_components.Dialog, ]} */ ;
// @ts-ignore
Dialog;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
    open: (__VLS_ctx.isDeleteDialogOpen),
}));
const __VLS_98 = __VLS_97({
    open: (__VLS_ctx.isDeleteDialogOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
const { default: __VLS_100 } = __VLS_99.slots;
// @ts-ignore
[isDeleteDialogOpen,];
const __VLS_101 = {}.DialogContent;
/** @type {[typeof __VLS_components.DialogContent, typeof __VLS_components.DialogContent, ]} */ ;
// @ts-ignore
DialogContent;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    ...{ class: "max-w-sm" },
}));
const __VLS_103 = __VLS_102({
    ...{ class: "max-w-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
const { default: __VLS_105 } = __VLS_104.slots;
const __VLS_106 = {}.DialogHeader;
/** @type {[typeof __VLS_components.DialogHeader, typeof __VLS_components.DialogHeader, ]} */ ;
// @ts-ignore
DialogHeader;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({
    ...{ class: "text-center" },
}));
const __VLS_108 = __VLS_107({
    ...{ class: "text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
const { default: __VLS_110 } = __VLS_109.slots;
const __VLS_111 = {}.DialogTitle;
/** @type {[typeof __VLS_components.DialogTitle, typeof __VLS_components.DialogTitle, ]} */ ;
// @ts-ignore
DialogTitle;
// @ts-ignore
const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({
    ...{ class: "text-lg font-semibold mt-2" },
}));
const __VLS_113 = __VLS_112({
    ...{ class: "text-lg font-semibold mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_112));
const { default: __VLS_115 } = __VLS_114.slots;
var __VLS_114;
const __VLS_116 = {}.DialogDescription;
/** @type {[typeof __VLS_components.DialogDescription, typeof __VLS_components.DialogDescription, ]} */ ;
// @ts-ignore
DialogDescription;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({
    ...{ class: "text-gray-500 mt-2" },
}));
const __VLS_118 = __VLS_117({
    ...{ class: "text-gray-500 mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
const { default: __VLS_120 } = __VLS_119.slots;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "font-semibold text-black" },
});
(__VLS_ctx.selectedTicket?.title);
// @ts-ignore
[selectedTicket,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-red-500" },
});
var __VLS_119;
var __VLS_109;
const __VLS_121 = {}.DialogFooter;
/** @type {[typeof __VLS_components.DialogFooter, typeof __VLS_components.DialogFooter, ]} */ ;
// @ts-ignore
DialogFooter;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({
    ...{ class: "flex flex-row justify-center gap-4 mt-4" },
}));
const __VLS_123 = __VLS_122({
    ...{ class: "flex flex-row justify-center gap-4 mt-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_122));
const { default: __VLS_125 } = __VLS_124.slots;
const __VLS_126 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({
    ...{ 'onClick': {} },
    variant: "outline",
    ...{ class: "w-24" },
}));
const __VLS_128 = __VLS_127({
    ...{ 'onClick': {} },
    variant: "outline",
    ...{ class: "w-24" },
}, ...__VLS_functionalComponentArgsRest(__VLS_127));
let __VLS_130;
let __VLS_131;
const __VLS_132 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.isDeleteDialogOpen = false;
            // @ts-ignore
            [isDeleteDialogOpen,];
        } });
const { default: __VLS_133 } = __VLS_129.slots;
var __VLS_129;
const __VLS_134 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({
    ...{ 'onClick': {} },
    ...{ class: "bg-red-600 hover:bg-red-700 text-white w-24" },
}));
const __VLS_136 = __VLS_135({
    ...{ 'onClick': {} },
    ...{ class: "bg-red-600 hover:bg-red-700 text-white w-24" },
}, ...__VLS_functionalComponentArgsRest(__VLS_135));
let __VLS_138;
let __VLS_139;
const __VLS_140 = ({ click: {} },
    { onClick: (__VLS_ctx.handleDelete) });
const { default: __VLS_141 } = __VLS_137.slots;
// @ts-ignore
[handleDelete,];
var __VLS_137;
var __VLS_124;
var __VLS_104;
var __VLS_99;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[75%]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[75%]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['resize-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-2/3']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-9']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-24']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-red-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-24']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
