<script>
export default {
  name: 'JobCard',
  props: ['job', 'index'],
  emits: ['fetchJobDetail']
}
</script>

<template>
  <div class="border rounded-4 shadow p-3 d-flex justify-content-between align-items-center job_card mb-3">
    <div style="color: #4B9741; font-weight: 700;">{{ job?.title }}</div>
    <button class="btn px-3 py-1" style="background-color: #F09506; color: white; font-weight: 700;"
      @click.prevent="this.$emit('fetchJobDetail', index)">See Job</button>
  </div>
</template>

<style>
.job_card {
  background-color: #f0ede5;
  width: 630px;
}
</style>