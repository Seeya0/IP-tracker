<template>
  <div>
    <v-col
      sm="12"
      md="12"
      lg="12"
    >
      <v-text-field
        v-model="field.text"
        :label="field.label"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts" setup>
defineProps(['field'])
</script>