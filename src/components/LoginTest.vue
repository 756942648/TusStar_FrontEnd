<template>
  <div>
    <h1 class="my">{{ message }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginTest",
  data() {
    return {
      message: "我是主页"
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

<style scoped>
.my {
  text-align: center;
  color: rebeccapurple;
  font-size: 90px;
}
</style>
