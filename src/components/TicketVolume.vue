<template>
  <div class="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 p-6 shadow-sm">
    <!-- Header -->
    <div class="flex items-center justify-between mb-2">
      <div>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">
          Ticket Volume
        </p>
        <p class="text-sm text-gray-500">Last 7 days</p>
      </div>

      <div class="flex items-center text-green-500 font-medium text-sm">
        +{{ percentageChange }}%
        <TrendingUp class="ml-1 w-4 h-4" />
      </div>
    </div>

    <!-- Chart -->
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
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
      backgroundColor: data.map((d) =>
        d.day === highlightDay ? "#3b82f6" : "#bfdbfe"
      ),
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
</script>

<style scoped>
/* Set fixed chart height */
div > canvas {
  height: 180px !important;
}
</style>
