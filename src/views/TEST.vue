<template>
  <div>
    <!--    <xzh class="my">1212212</xzh>-->
    <div v-for="(user, i) in users" :key="i">
      <h1>{{ user.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    send() {
      this.axios
        .get("http://rap2.taobao.org:38080/app/mock/261105/user")
        .then(res => {
          this.users.push(res.data);
          console.log("错误信息" + this.users.name);
        })
        .catch(error => {
          console.log("错误信息" + error);
        });
    }
  },
  mounted() {
    this.send();
  }
};
</script>
<style>
.my {
  font-size: 120px;
  background-color: black;
}
</style>
