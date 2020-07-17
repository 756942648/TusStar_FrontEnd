<template>
  <div
    class="tab-pane fade show active"
    id="recent-job"
    role="tabpanel"
    aria-labelledby="recent-job-tab"
  >
    <div class="row">
      <div class="col-lg-12">
        <div
          class="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden"
        >
          <div class="lable text-center pt-2 pb-2">
            <ul class="list-unstyled best text-white mb-0 text-uppercase">
              <li class="list-inline-item"><i class="mdi mdi-star"></i></li>
            </ul>
          </div>
          <div class="p-4">
            <div class="row align-items-center">
              <div class="col-md-2">
                <div class="mo-mb-2">
                  <img
                    src="@/assets/img/img-1.png"
                    alt=""
                    class="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div>
                  <h5 class="f-18">
                    <a href="#" class="text-dark">{{ jobs.name }}</a>
                  </h5>
                  <p class="text-muted mb-0">1111111</p>
                </div>
              </div>
              <div class="col-md-3">
                <div>
                  <p class="text-muted mb-0">
                    <i class="mdi mdi-map-marker text-primary mr-2"></i
                    >{{ jobs.workLocation }}
                  </p>
                </div>
              </div>
              <div class="col-md-2">
                <div>
                  <p class="text-muted mb-0 mo-mb-2">
                    <span class="text-primary">￥</span>1
                  </p>
                </div>
              </div>
              <div class="col-md-2">
                <div>
                  <p class="text-muted mb-0">{{ jobs.nature }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 bg-light">
            <div class="row">
              <div class="col-md-4">
                <div>
                  <p class="text-muted mb-0 mo-mb-2">
                    <span class="text-dark">工作经验:</span
                    >{{ jobs.experience }}
                  </p>
                </div>
              </div>
              <div class="col-md-2">
                <div>
                  <a>立即申请 <i class="mdi mdi-chevron-double-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<script>
export default {
  props: ["jobs"]
};
</script>

<style scoped></style>
