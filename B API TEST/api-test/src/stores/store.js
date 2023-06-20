import { defineStore } from "pinia";
import axios from "axios";

export const useJobsStore = defineStore("job", {
  state: () => ({ jobs: [], jobDetail: {} }),
  actions: {
    async fetchJobs() {
      try {
        const { data } = await axios.get(
          "https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth"
        );

        this.jobs = data;
      } catch (error) {
        alert(error);
      }
    },

    async fetchJobDetail(index) {
      try {
        await this.fetchJobs();
        const currentDetail = this.jobs[index];
        this.jobDetail = currentDetail;
      } catch (error) {
        alert(error);
      }
    },

    async postForm(data) {
      try {
        console.log(data);
        const res = await axios.post(
          "https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth",
          data
        );

        console.log(res);
      } catch (error) {
        alert(error);
      }
    },
  },
});
