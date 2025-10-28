<script setup lang="ts">
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import TicketCard from "./TicketCard.vue";

interface Ticket {
  id: string;
  title: string;
  status: "open" | "in_progress" | "closed";
  description?: string;
}

const router = useRouter();

const tickets = ref<Ticket[]>([]);
const search = ref("");
const isDeleteDialogOpen = ref(false);
const selectedTicket = ref<Ticket | null>(null);
const isEditing = ref(false);
const editingTicketId = ref<string | null>(null);

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
    } catch (e) {
      console.error("Error loading tickets:", e);
    }
  }
});

// ✅ Save tickets to localStorage
watch(
  tickets,
  (val) => {
    localStorage.setItem("ticketapp_session", JSON.stringify(val));
  },
  { deep: true }
);

// ✅ Validation errors
const errors = ref<Record<string, string>>({});

function validateForm() {
  errors.value = {};
  if (!form.value.title.trim()) errors.value.title = "Title is required";
  if (!form.value.status) errors.value.status = "Status is required";
  if (form.value.description.length > 300)
    errors.value.description = "Max 300 characters allowed";
  return Object.keys(errors.value).length === 0;
}

// ✅ Handle submit
function handleSubmit() {
  if (!validateForm()) return;

  if (isEditing.value && editingTicketId.value) {
    tickets.value = tickets.value.map((t: Ticket) =>
      t.id === editingTicketId.value
        ? {
            ...t,
            title: form.value.title,
            status: form.value.status as "open" | "in_progress" | "closed",
            description: form.value.description,
          }
        : t
    );
    toast.success("Ticket updated successfully!");
    isEditing.value = false;
    editingTicketId.value = null;
  } else {
    const newTicket: Ticket = {
      id: uuidv4(),
      title: form.value.title,
      status: form.value.status as "open" | "in_progress" | "closed",
      description: form.value.description,
    };
    tickets.value.unshift(newTicket);
    toast.success("Ticket created successfully!");
  }

  form.value = { title: "", status: "", description: "" };
}

function handleEdit(ticket: Ticket) {
  isEditing.value = true;
  editingTicketId.value = ticket.id;
  form.value = {
    title: ticket.title,
    status: ticket.status,
    description: ticket.description || "",
  };
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function confirmDelete(ticket: Ticket) {
  selectedTicket.value = ticket;
  isDeleteDialogOpen.value = true;
}

function handleDelete() {
  if (selectedTicket.value) {
    tickets.value = tickets.value.filter(
      (t) => t.id !== selectedTicket.value?.id
    );
    toast.success(`"${selectedTicket.value.title}" deleted successfully!`);
    isDeleteDialogOpen.value = false;
    selectedTicket.value = null;
  }
}

const filteredTickets = computed(() =>
  tickets.value.filter((t: Ticket) =>
    t.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <section class="mb-6">
    <!-- Header -->
    <header class="bg-gray-200 w-full">
      <div class="w-[75%] mx-auto py-4 flex items-center justify-between">
        <h1 class="text-lg font-semibold">Ticket Management Portal</h1>
        <nav>
          <Button
            class="bg-gray-700 text-white px-5 py-2 rounded-md"
            @click="router.push('/')"
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>

    <!-- Layout -->
    <div class="flex gap-6 w-[75%] mx-auto mt-6 flex-col md:flex-row">
      <!-- FORM -->
      <div class="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold mb-2">Create New Ticket</h2>
        <p class="text-sm text-gray-500 mb-4">
          Fill in the details below to create a new support ticket.
        </p>

        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <!-- Title -->
          <div>
            <Label for="title" class="mb-2">Title</Label>
            <Input id="title" v-model="form.title" placeholder="Ticket title" />
            <p v-if="errors.title" class="text-red-500 text-xs mt-1">
              {{ errors.title }}
            </p>
          </div>

          <!-- Status -->
          <div>
            <Label for="status" class="mb-2">Status</Label>
            <Select v-model="form.status">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p v-if="errors.status" class="text-red-500 text-xs mt-1">
              {{ errors.status }}
            </p>
          </div>

          <!-- Description -->
          <div>
            <Label for="description" class="mb-2">Description</Label>
            <Textarea
              id="description"
              v-model="form.description"
              placeholder="Type your message here..."
              class="resize-none"
            />
            <p v-if="errors.description" class="text-red-500 text-xs mt-1">
              {{ errors.description }}
            </p>
          </div>

          <Button
            type="submit"
            class="cursor-pointer mt-2 text-white"
            :class="
              isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-600'
            "
          >
            {{ isEditing ? "Update Ticket" : "Submit Ticket" }}
          </Button>
        </form>
      </div>

      <!-- Ticket List -->
      <div class="w-full md:w-2/3">
        <!-- Search -->
        <div class="relative w-full max-w-lg mx-auto mb-4">
          <Search
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            :size="18"
          />
          <Input
            type="text"
            placeholder="Search tickets..."
            v-model="search"
            class="pl-9"
          />
        </div>

        <!-- Ticket Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TicketCard
            v-for="ticket in filteredTickets"
            :key="ticket.id"
            :ticket="ticket"
            @delete="confirmDelete(ticket)"
            @edit="handleEdit(ticket)"
          />
          <p
            v-if="filteredTickets.length === 0"
            class="text-center text-gray-500 mt-10"
          >
            No tickets found.
          </p>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Dialog -->
    <Dialog v-model:open="isDeleteDialogOpen">
      <DialogContent class="max-w-sm">
        <DialogHeader class="text-center">
          <DialogTitle class="text-lg font-semibold mt-2"
            >Delete Ticket</DialogTitle
          >
          <DialogDescription class="text-gray-500 mt-2">
            Are you sure you want to delete
            <span class="font-semibold text-black"
              >“{{ selectedTicket?.title }}”</span
            >? This action is <span class="text-red-500">irreversible</span>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="flex flex-row justify-center gap-4 mt-4">
          <Button
            variant="outline"
            class="w-24"
            @click="isDeleteDialogOpen = false"
          >
            Cancel
          </Button>
          <Button
            class="bg-red-600 hover:bg-red-700 text-white w-24"
            @click="handleDelete"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </section>
</template>
