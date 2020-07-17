<template>
  <div class="col-lg-3 col-md-6 mt-4 pt-2">
    <a href="javascript:void(0)">
      <div class="popu-category-box bg-light rounded text-center p-4">
        <div class="popu-category-icon mb-3">
          <img
            src="@/assets/img/logo.png"
            class="mdi mdi-account d-inline-block rounded-pill h3 text-primary"
          />
        </div>
        <div class="popu-category-content">
          <h5 class="mb-2 text-dark title">{{ zhiweixinxinames }}</h5>
          <p class="text-success mb-0 rounded">780个岗位</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["zhiweixinxinames"]
};
</script>

<style scoped></style>
