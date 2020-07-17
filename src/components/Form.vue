<template>
  <div class="signup-section ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
          <form class="">
            <div class="form-group">
              <Formname :mcs="MINGCHENGS"></Formname>
              <Formkuang></Formkuang>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["MINGCHENGS"]
};
</script>

<style scoped>
.signup-form {
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.07);
  padding: 10px;
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
</style>
