<template>
  <div class="rounded-lg border border-gray-200 p-6 bg-white shadow-sm dark:bg-gray-800 relative">
    <p class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
      Tickets by Status
    </p>

    <div class="flex justify-center items-center relative">
      <Pie :data="chartData" :options="chartOptions" />

      <!-- Center text -->
      <div class="absolute flex flex-col items-center justify-center">
        <p class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ total >= 1000 ? (total / 1000).toFixed(1) + 'k' : total }}
        </p>
        <p class="text-gray-500 text-sm">Total</p>
      </div>
    </div>

    <!-- Legend -->
    <div class="flex justify-center gap-4 mt-4 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#4ade80]" />
        <span class="text-gray-700 dark:text-gray-300">
          Resolved <b>{{ data[0].value }}</b>
        </span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#facc15]" />
        <span class="text-gray-700 dark:text-gray-300">
          Open <b>{{ data[1].value }}</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface TicketData {
  name: string;
  value: number;
  color: string;
}

const data: TicketData[] = [
  { name: "Resolved", value: 1000, color: "#4ade80" },
  { name: "Open", value: 250, color: "#facc15" },
];

const total = computed(() => data.reduce((acc, cur) => acc + cur.value, 0));

const chartData = ref({
  labels: data.map((d) => d.name),
  datasets: [
    {
      data: data.map((d) => d.value),
      backgroundColor: data.map((d) => d.color),
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%", // creates the "donut" effect
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
/* Fix chart height */
div > canvas {
  height: 180px !important;
  width: 200px !important;
}
</style>
