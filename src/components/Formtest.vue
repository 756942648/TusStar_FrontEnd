<template>
  <div class="signup-section ptb-100">
    <label>用户名</label>
    <input
      type="text"
      class="form-control"
      placeholder="Enter Username"
      required
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.signup-form {
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  padding: 50px;
  border-radius: 30px;
}

.signup-form .form-group label {
  font-size: 15px;
  margin-bottom: 5px;
  color: #000;
  padding-left: 20px;
  font-weight: 500;
}

.signup-form .form-group .form-control {
  height: 50px;
  border-radius: 50px;
  padding: 5px 20px;
  background: #f9f6f6;
}

.signup-form .signup-btn {
  margin-top: 40px;
  margin-bottom: 30px;
}

.signup-form .signup-btn button {
  padding: 10px 30px;
  border-radius: 30px;
  background: #001935;
  color: #ffffff;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  font-size: 16px;
}

.signup-form .signup-btn button:hover {
  background: #fd1616;
}

.signup-form .other-signup span {
  color: #001935;
  margin-bottom: 15px;
  display: inline-block;
}

.signup-form .other-signup ul {
  padding-left: 0;
  margin-bottom: 0;
}

.signup-form .other-signup ul li {
  display: inline-block;
}

.signup-form .other-signup ul li a i {
  width: 35px;
  height: 35px;
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  line-height: 35px;
  border-radius: 30px;
  -webkit-transition: 1s;
  transition: 1s;
  margin: 0 3px;
}

.signup-form .other-signup ul li a i:hover {
  background: #001935;
  color: #ffffff;
}

.signup-form .create-btn {
  margin-top: 35px;
}

.signup-form .create-btn a {
  color: #001935;
  -webkit-transition: 0.8s;
  transition: 0.8s;
}

.signup-form .create-btn a:hover {
  color: #fd1616;
}

.signup-form .create-btn a i {
  top: 3px;
  position: relative;
}

.signup-form .create-btn a .bx-fade-right {
  -webkit-animation: fade-right 3s infinite linear;
  animation: fade-right 3s infinite linear;
}
</style>
