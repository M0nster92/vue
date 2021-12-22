<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'JobDetails', params: {id:job.id}}">{{ job.name }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        { id: 1, name: "Vue Developer", description: "Vue developer jobs" },
        {
          id: 2,
          name: "Angular Developer",
          description: "Angular developer jobs",
        },
        { id: 3, name: "React Developer", description: "React developer jobs" },
      ],
    };
  },
};
</script>

<style></style>
