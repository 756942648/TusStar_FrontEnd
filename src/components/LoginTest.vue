<template>
  <div>
    <h1>{{ message }}</h1>
    <home></home>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{ user }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import home from "../views/TEST";
export default {
  components: {
    home
  },
  data() {
    return {
      message: "真帅啊!!!",
      users: ["盲僧", "瞎子", "李青"]
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
  font-size: 20px;
}
</style>
