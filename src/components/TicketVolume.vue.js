import { ref } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, } from "chart.js";
import { TrendingUp } from "lucide-vue-next"; // Vue version of lucide-react icon
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const data = [
    { day: "Mon", tickets: 120 },
    { day: "Tue", tickets: 60 },
    { day: "Wed", tickets: 100 },
    { day: "Thu", tickets: 80 },
    { day: "Fri", tickets: 110 },
    { day: "Sat", tickets: 40 },
    { day: "Sun", tickets: 55 },
];
const highlightDay = "Wed";
const percentageChange = 5;
const chartData = ref({
    labels: data.map((d) => d.day),
    datasets: [
        {
            label: "Tickets",
            data: data.map((d) => d.tickets),
            backgroundColor: data.map((d) => d.day === highlightDay ? "#3b82f6" : "#bfdbfe"),
            borderRadius: 6,
            barThickness: 35,
        },
    ],
});
const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: { display: false },
            ticks: { color: "#6b7280", font: { size: 12 } },
        },
        y: {
            display: false,
            grid: { display: false },
        },
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: "white",
            titleColor: "#111827",
            bodyColor: "#111827",
            borderWidth: 0,
            borderRadius: 10,
            boxPadding: 6,
            displayColors: false,
        },
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6 shadow-sm" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center justify-between mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-lg font-semibold text-gray-900 dark:text-white" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-sm text-gray-500" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex items-center text-green-500 font-medium text-sm" },
});
(__VLS_ctx.percentageChange);
// @ts-ignore
[percentageChange,];
const __VLS_0 = {}.TrendingUp;
/** @type {[typeof __VLS_components.TrendingUp, ]} */ ;
// @ts-ignore
TrendingUp;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "ml-1 w-4 h-4" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "ml-1 w-4 h-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = {}.Bar;
/** @type {[typeof __VLS_components.Bar, ]} */ ;
// @ts-ignore
Bar;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    data: (__VLS_ctx.chartData),
    options: (__VLS_ctx.chartOptions),
}));
const __VLS_7 = __VLS_6({
    data: (__VLS_ctx.chartData),
    options: (__VLS_ctx.chartOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[chartData, chartOptions,];
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
