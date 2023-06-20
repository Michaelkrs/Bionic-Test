<script>
import { mapState } from 'pinia';
import JobCard from '../components/JobCard.vue';
import { mapActions } from 'pinia';
import { useJobsStore } from '../stores/store'

export default {
  name: "HomePage",
  components: { JobCard },
  data() {
    return {
      formData: {
        displayName: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
        ptJobApplyType: 'APPLICATION',
        isActive: false,
        ptJobPost: { 'id': null }
      }
    }
  },
  computed: {
    ...mapState(useJobsStore, ['jobs', 'jobDetail'])
  },
  methods: {
    ...mapActions(useJobsStore, ['fetchJobs', 'fetchJobDetail', 'postForm']),

    formHandler() {
      this.formData.subject = this.jobDetail.title
      this.formData.ptJobPost.id = this.jobDetail.id

      this.postForm(this.formData)
    }
  },
  created() {
    this.fetchJobs()
  }
}
</script>

<template>
  <section class="container my-5 d-flex flex-column">
    <div class="d-flex justify-content-between flex-wrap mb-5">
      <JobCard v-for="(job, index) in jobs" :key="job.id" :job="job" :index="index" @fetchJobDetail="fetchJobDetail" />
    </div>

    <div class="job_detail py-4 px-5">
      <h2 style="color: #4B9741; font-weight: 700;" class="mb-4">{{ jobDetail.title }}</h2>

      <p v-html="jobDetail?.description?.txt"></p>

      <p style="font-weight: 800; font-size: large;">Send Your Job Application</p>
      <form action="" @submit.prevent="formHandler">
        <div class="d-flex flex-row align-items-between gap-4 mb-3">
          <div class="flex-column d-flex" style="width: 630px;">
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" v-model="formData.displayName">
          </div>
          <div class="flex-column d-flex" style="width: 630px;">
            <label for="name">Mobile Number</label>
            <input type="text" id="name" placeholder="Enter your mobile number" v-model="formData.phone" />
          </div>
        </div>
        <div class="d-flex flex-row align-items-between gap-4 mb-3">
          <div class="flex-column d-flex" style="width: 630px;">
            <label for="name">Email Address</label>
            <input type="text" id="name" placeholder="Enter your email" v-model="formData.email">
          </div>
          <div class="flex-column d-flex" style="width: 630px;">
            <label for="name">Write your message here...</label>
            <input type="text" id="name" placeholder="Write your message" v-model="formData.message">
          </div>
        </div>

        <div class="flex-column d-flex mb-3" style="width: 130px;">
          <label for="">File</label>
          <button class="btn p-4" style="background-color: #F09506;">Upload</button>
        </div>

        <button type="submit" class="btn px-3 py-1 btn-secondary" style="color: white; font-weight: 700;">Send
          Message</button>
      </form>
    </div>
  </section>
</template>

<style>
.job_detail {
  background-color: #f0ede5;
}

input {
  border: none;
  border-bottom: 1px solid black;
  background-color: #f0ede5;
}

label {
  font-weight: 700;
  font-size: medium;
  margin-bottom: 10px;
}
</style>