import { ref } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "vue-sonner";
const router = useRouter();
useRoute();
// --- Reactive state ---
const loginForm = ref({ email: "", password: "" });
const registerForm = ref({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
});
const errors = ref({
    email: "",
    password: "",
    emailReg: "",
    passwordReg: "",
    confirmPassword: "",
    terms: "",
});
// --- LOGIN ---
function handleLogin() {
    errors.value = {
        email: "",
        password: "",
        emailReg: "",
        passwordReg: "",
        confirmPassword: "",
        terms: "",
    };
    if (!loginForm.value.email)
        errors.value.email = "Email is required";
    if (!loginForm.value.password)
        errors.value.password = "Password is required";
    if (errors.value.email || errors.value.password)
        return;
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
        toast.error("No account found. Please register first.");
        return;
    }
    const user = JSON.parse(storedUser);
    if (user.email === loginForm.value.email &&
        user.password === loginForm.value.password) {
        const fakeToken = btoa(`${loginForm.value.email}:${Date.now()}`);
        localStorage.setItem("authToken", fakeToken);
        toast.success("Login successful!");
        setTimeout(() => router.push("/dashboard"), 1000);
    }
    else {
        toast.error("Invalid email or password!");
    }
}
// --- REGISTER ---
function handleRegister() {
    errors.value = {
        email: "",
        password: "",
        emailReg: "",
        passwordReg: "",
        confirmPassword: "",
        terms: "",
    };
    if (!registerForm.value.email)
        errors.value.emailReg = "Email is required";
    if (!registerForm.value.password)
        errors.value.passwordReg = "Password is required";
    if (registerForm.value.password.length < 6)
        errors.value.passwordReg = "Password must be at least 6 characters";
    if (registerForm.value.password !== registerForm.value.confirmPassword)
        errors.value.confirmPassword = "Passwords must match";
    if (!registerForm.value.terms)
        errors.value.terms = "You must accept the terms";
    if (errors.value.emailReg ||
        errors.value.passwordReg ||
        errors.value.confirmPassword ||
        errors.value.terms)
        return;
    const existingUser = localStorage.getItem("user");
    if (existingUser &&
        JSON.parse(existingUser).email === registerForm.value.email) {
        toast.error("Email already registered!");
        return;
    }
    const newUser = {
        email: registerForm.value.email,
        password: registerForm.value.password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Account created successfully!");
    registerForm.value = {
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    };
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "grid md:flex gap-5" },
});
const __VLS_0 = {}.Toaster;
/** @type {[typeof __VLS_components.Toaster, ]} */ ;
// @ts-ignore
Toaster;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    position: "top-right",
}));
const __VLS_2 = __VLS_1({
    position: "top-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "bg-[#E3E8E7]" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-[75%] mx-auto flex justify-center items-center h-96" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-center" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center gap-4 justify-center mb-3" },
});
const __VLS_5 = {}.BsTicket;
/** @type {[typeof __VLS_components.BsTicket, ]} */ ;
// @ts-ignore
BsTicket;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "text-xl" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "text-xl" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "font-semibold text-lg" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "font-bold text-3xl mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-gray-700" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "w-[75%] mx-auto md:w-full flex justify-center items-center h-96" },
});
const __VLS_10 = {}.Tabs;
/** @type {[typeof __VLS_components.Tabs, typeof __VLS_components.Tabs, ]} */ ;
// @ts-ignore
Tabs;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    defaultValue: "login",
    ...{ class: "w-fit md:w-full" },
}));
const __VLS_12 = __VLS_11({
    defaultValue: "login",
    ...{ class: "w-fit md:w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
const __VLS_15 = {}.TabsList;
/** @type {[typeof __VLS_components.TabsList, typeof __VLS_components.TabsList, ]} */ ;
// @ts-ignore
TabsList;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ class: "bg-transparent mx-auto w-72 border-b border-gray-300 rounded-none pb-0 px-0" },
}));
const __VLS_17 = __VLS_16({
    ...{ class: "bg-transparent mx-auto w-72 border-b border-gray-300 rounded-none pb-0 px-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_19 } = __VLS_18.slots;
const __VLS_20 = {}.TabsTrigger;
/** @type {[typeof __VLS_components.TabsTrigger, typeof __VLS_components.TabsTrigger, ]} */ ;
// @ts-ignore
TabsTrigger;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    value: "login",
    ...{ class: "h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none" },
}));
const __VLS_22 = __VLS_21({
    value: "login",
    ...{ class: "h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_24 } = __VLS_23.slots;
var __VLS_23;
const __VLS_25 = {}.TabsTrigger;
/** @type {[typeof __VLS_components.TabsTrigger, typeof __VLS_components.TabsTrigger, ]} */ ;
// @ts-ignore
TabsTrigger;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    value: "register",
    ...{ class: "h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none" },
}));
const __VLS_27 = __VLS_26({
    value: "register",
    ...{ class: "h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_29 } = __VLS_28.slots;
var __VLS_28;
var __VLS_18;
const __VLS_30 = {}.TabsContent;
/** @type {[typeof __VLS_components.TabsContent, typeof __VLS_components.TabsContent, ]} */ ;
// @ts-ignore
TabsContent;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    value: "login",
}));
const __VLS_32 = __VLS_31({
    value: "login",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
const { default: __VLS_34 } = __VLS_33.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-center mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-xl font-semibold" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-gray-500" },
});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.handleLogin) },
    ...{ class: "max-w-sm mx-auto space-y-3" },
});
// @ts-ignore
[handleLogin,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "email",
    ...{ class: "block text-sm font-medium text-gray-900 mb-1" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "email",
    type: "email",
    placeholder: "name@example.com",
    ...{ class: "border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" },
});
(__VLS_ctx.loginForm.email);
// @ts-ignore
[loginForm,];
if (__VLS_ctx.errors.email) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.email);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "password",
    ...{ class: "block text-sm font-medium text-gray-900 mb-1" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "password",
    type: "password",
    ...{ class: "border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" },
});
(__VLS_ctx.loginForm.password);
// @ts-ignore
[loginForm,];
if (__VLS_ctx.errors.password) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.password);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex justify-between items-center mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "remember",
    type: "checkbox",
    ...{ class: "w-4 h-4 border-gray-300" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "remember",
    ...{ class: "ml-2 text-sm text-gray-700" },
});
const __VLS_35 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    to: "/",
    ...{ class: "text-blue-600 text-sm hover:underline" },
}));
const __VLS_37 = __VLS_36({
    to: "/",
    ...{ class: "text-blue-600 text-sm hover:underline" },
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const { default: __VLS_39 } = __VLS_38.slots;
var __VLS_38;
const __VLS_40 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    type: "submit",
    ...{ class: "w-full bg-blue-700 text-white hover:bg-blue-800" },
}));
const __VLS_42 = __VLS_41({
    type: "submit",
    ...{ class: "w-full bg-blue-700 text-white hover:bg-blue-800" },
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const { default: __VLS_44 } = __VLS_43.slots;
var __VLS_43;
var __VLS_33;
const __VLS_45 = {}.TabsContent;
/** @type {[typeof __VLS_components.TabsContent, typeof __VLS_components.TabsContent, ]} */ ;
// @ts-ignore
TabsContent;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    value: "register",
}));
const __VLS_47 = __VLS_46({
    value: "register",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const { default: __VLS_49 } = __VLS_48.slots;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.handleRegister) },
    ...{ class: "max-w-sm mx-auto space-y-3" },
});
// @ts-ignore
[handleRegister,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "reg-email",
    ...{ class: "block text-sm font-medium text-gray-900 mb-1" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "reg-email",
    type: "email",
    placeholder: "name@example.com",
    ...{ class: "border border-gray-300 text-sm rounded-lg w-full p-2.5" },
});
(__VLS_ctx.registerForm.email);
// @ts-ignore
[registerForm,];
if (__VLS_ctx.errors.emailReg) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.emailReg);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "reg-password",
    ...{ class: "block text-sm font-medium text-gray-900 mb-1" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "reg-password",
    type: "password",
    ...{ class: "border border-gray-300 text-sm rounded-lg w-full p-2.5" },
});
(__VLS_ctx.registerForm.password);
// @ts-ignore
[registerForm,];
if (__VLS_ctx.errors.passwordReg) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.passwordReg);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "reg-confirm",
    ...{ class: "block text-sm font-medium text-gray-900 mb-1" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "reg-confirm",
    type: "password",
    ...{ class: "border border-gray-300 text-sm rounded-lg w-full p-2.5" },
});
(__VLS_ctx.registerForm.confirmPassword);
// @ts-ignore
[registerForm,];
if (__VLS_ctx.errors.confirmPassword) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mt-1" },
    });
    (__VLS_ctx.errors.confirmPassword);
    // @ts-ignore
    [errors,];
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-start" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    id: "terms",
    type: "checkbox",
    ...{ class: "w-4 h-4 border-gray-300 rounded-sm bg-gray-50" },
});
(__VLS_ctx.registerForm.terms);
// @ts-ignore
[registerForm,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "terms",
    ...{ class: "ml-2 text-sm text-gray-900" },
});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#",
    ...{ class: "text-blue-600 hover:underline" },
});
if (__VLS_ctx.errors.terms) {
    // @ts-ignore
    [errors,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 text-xs mb-3" },
    });
    (__VLS_ctx.errors.terms);
    // @ts-ignore
    [errors,];
}
const __VLS_50 = {}.Button;
/** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
    type: "submit",
    ...{ class: "w-full bg-blue-700 text-white hover:bg-blue-800" },
}));
const __VLS_52 = __VLS_51({
    type: "submit",
    ...{ class: "w-full bg-blue-700 text-white hover:bg-blue-800" },
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
const { default: __VLS_54 } = __VLS_53.slots;
var __VLS_53;
var __VLS_48;
var __VLS_13;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#E3E8E7]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[75%]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[75%]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-96']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-72']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:border-b-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:border-b-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['h-9']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:border-b-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:border-b-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['data-[state=active]:shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-800']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
