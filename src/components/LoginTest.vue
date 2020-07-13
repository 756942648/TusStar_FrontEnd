<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginTest",
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    axios
      .get("/login/user", {
        params: {
          userid: 1
        }
      })
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
        console.log(error.message);
      });
  }
};
</script>

<style scoped></style>
