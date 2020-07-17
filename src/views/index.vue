<template>
  <div>
    <daohanglan></daohanglan>
    <div class="banner-section">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="banner-content text-center">
              <p>Find Jobs, Employment & Career Opportunities</p>
              <h1 class="wow fadeInUp" data-wow-duration="2s">
                快速寻找一个适合自己的工作岗位
              </h1>

              <form class="banner-form wow fadeInDown" data-wow-duration="2s">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Keyword:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Job Title"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleInputEmail2">Location:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail2"
                        placeholder="City or State"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <button type="submit" class="find-btn">
                      Find A Job
                      <i class="bx bx-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="categories-section pt-100 pb-70">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h1 class="title title-line pb-5">职位信息</h1>
              <p class="text-muted para-desc mx-auto mb-1">
                根据工作类型，快速选择一批符合您需求的工作岗位（暂未开放）
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <zhiweixinxi
            v-for="(zhiweixinxiname, i) in zhiweixinxinames"
            :key="i"
            :zhiweixinxinames="zhiweixinxinames[i]"
          ></zhiweixinxi>
        </div>
      </div>
    </section>
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title title-line pb-5">推荐的职位</h4>
              <p class="text-muted para-desc mx-auto mb-1">
                启迪之星精心为各位求职者推荐的优质企业
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tab-content mt-2" id="pills-tabContent">
              <everyjob
                v-for="(job, i) in jobs"
                :key="i"
                :jobs="jobs[i]"
              ></everyjob>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      zhiweixinxinames: [
        "技术类",
        "产品类",
        "设计类",
        "运营类",
        "销售类",
        "媒体类",
        "金融类",
        "教育类",
        "服务业类"
      ]
    };
  },

  methods: {
    // 获得推荐职位列表
    getjoblist() {
      this.axios
        .get("http://47.95.195.192:8081/user/jobList")
        .then(res => {
          //this.company.push(sessionStorage.getItem(res.data))
          this.jobs = res.data;
          // this.jobs.push(res.data[0])
          console.log(this.jobs);
          console.log(this.jobs[0]);
          console.log("id:" + this.jobs[0].id, "name:" + this.jobs[0].name);
        })
        .catch(error => {
          console.log("无数据" + error);
        });
    },
    // 获得推荐职位列表结束

    parentFn(payload) {
      this.jobs.push(payload);
      console.log("子过来的数据" + this.jobs);
    }
  },

  mounted: function() {
    this.getjoblist();
  }
};
</script>

<style scoped>
/*导航栏和顶部的CSS样式*/
.container {
  padding: 30px 0;
}
.banner-section {
  height: 600px;
  background-image: url(../assets/img/bg-home.jpg);
  background-position: center center;
  background-size: cover;
  position: relative;
  z-index: 0;
}

.banner-section::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 4, 44, 0.6);
  top: 0;
  left: 0;
  z-index: -1;
}

.banner-section::after {
  position: absolute;
  content: "";
  background-image: url(../assets/img/white-shape.png);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 350px;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.banner-section .banner-content p {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
}

.banner-section .banner-content h1 {
  font-size: 65px;
  font-weight: 700;
  color: #ffffff;
  max-width: 715px;
  margin: 0 auto 40px;
  text-transform: capitalize;
}

.banner-section .banner-content .banner-form {
  background: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 45px;
}

.banner-section .banner-content .banner-form .form-group {
  margin-bottom: 0;
  line-height: 1;
  text-align: left;
}

.banner-section .banner-content .banner-form .form-group label {
  font-size: 20px;
  color: #5c5a5a;
  font-weight: 800;
  padding-left: 5px;
}

.banner-section .banner-content .banner-form .form-group .form-control {
  height: 60px;
  border-radius: 10px;
  padding: 5px 20px 10px;
}

.banner-section
  .banner-content
  .banner-form
  .form-group
  ::-webkit-input-placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #8e8d8d;
}

.banner-section
  .banner-content
  .banner-form
  .form-group
  :-ms-input-placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #8e8d8d;
}

.banner-section
  .banner-content
  .banner-form
  .form-group
  ::-ms-input-placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #8e8d8d;
}

.banner-section .banner-content .banner-form .form-group ::placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #8e8d8d;
}

.banner-section .banner-content .banner-form .find-btn {
  background: #fd1616;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  color: #ffffff;
  border-radius: 10px;
  top: 32px;
  position: relative;
  padding: 16px 20px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.banner-section .banner-content .banner-form .find-btn:hover {
  background: #001935;
}

.banner-section .banner-content .banner-form .find-btn i {
  left: 10px;
  top: 2px;
  position: relative;
}

.banner-section .banner-content .keyword {
  padding-left: 0;
  margin-bottom: 0;
}

.banner-section .banner-content .keyword li {
  display: inline-block;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
}

.banner-section .banner-content .keyword li a {
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
}

.banner-section .banner-content .keyword li a:hover {
  color: #fd1616;
}
.d-table {
  width: 100%;
  height: 100%;
}

.d-table-cell {
  display: table-cell;
  vertical-align: middle;
}
/*导航栏和顶部的CSS样式结束*/

/*职位信息文字CSS*/
.section-title {
  position: relative;
}

.section-title .title {
  letter-spacing: 0.5px;
  font-size: 40px;
}

.section-title .title.title-line:before {
  content: "";
  position: absolute;
  height: 2px;
  width: 80px;
  left: 50%;
  top: 60px;
  text-align: center;
  background: #2f55d4;
  margin-left: -42px;
}

.section-title .title.title-line:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  left: 50%;
  top: 56px;
  z-index: 1;
  text-align: center;
  background: #284bc1;
  margin-left: -7px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

/*岗位块块的CSS*/
.popu-category-box {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.popu-category-box i {
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: #edf0fb;
}

.popu-category-box .popu-category-content .title {
  font-size: 18px;
}

.popu-category-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
}
</style>
