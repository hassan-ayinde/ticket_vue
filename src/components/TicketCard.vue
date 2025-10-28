<template>
  <div
    class="py-3 gap-2 text-sm lg:text-md hover:shadow-md transition-shadow duration-200 rounded-lg border border-gray-200 bg-white dark:bg-gray-800"
  >
    <!-- Header -->
    <div class="flex flex-col gap-1 p-4 pb-0">
      <div class="flex justify-between w-full items-center">
        <h2 class="font-semibold text-gray-900 dark:text-white">
          {{ ticket.title }}
        </h2>
        <span
          class="text-white capitalize px-2 py-1 rounded-md text-xs font-medium"
          :class="getStatusColor(ticket.status)"
        >
          {{ ticket.status.replace("_", " ") }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="px-4 py-2 text-gray-700 dark:text-gray-300">
      <p>{{ ticket.description || "No description provided." }}</p>
    </div>

    <!-- Footer -->
    <div class="flex justify-end gap-4 px-4 py-2 text-xl text-gray-600">
      <Edit
        class="cursor-pointer hover:text-blue-500"
        @click="onEdit && onEdit()"
      />
      <Trash2
        class="cursor-pointer hover:text-red-500"
        @click="onDelete && onDelete()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Edit, Trash2 } from "lucide-vue-next";

interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: string;
}

defineProps<{
  ticket: Ticket;
  onEdit?: () => void;
  onDelete: () => void;
}>();

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "open":
      return "bg-green-500";
    case "in_progress":
    case "in progress":
      return "bg-yellow-500";
    case "closed":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
</script>
