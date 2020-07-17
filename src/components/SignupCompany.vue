<template>
  <div>
    <h4 class="mb-4 text-center" style="margin-top: 40px;">企业用户注册</h4>
    <div class="signup-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="企业名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="公司简介" prop="introduction">
          <el-input v-model="ruleForm.introduction"></el-input>
        </el-form-item>
        <el-form
          :inline="true"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item label="企业类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择">
              <el-option label="有限责任公司" value="shanghai"></el-option>
              <el-option label="股份有限公司" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业规模(人)" prop="scale">
            <el-select v-model="ruleForm.scale" placeholder="请选择">
              <el-option label="2000人以上" value="shanghai"></el-option>
              <el-option label="500-2000人" value="beijing"></el-option>
              <el-option label="200-500人" value="beijing"></el-option>
              <el-option label="50-200人" value="beijing"></el-option>
              <el-option label="15-50人" value="beijing"></el-option>
              <el-option label="1-15人" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form-item label="所在地区" prop="area">
          <el-input v-model="ruleForm.area"></el-input>
        </el-form-item>
        <el-form-item label="注册资金（元）" prop="fund">
          <el-input v-model.number="ruleForm.fund"></el-input>
        </el-form-item>
        <el-form
          :inline="true"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item label="是否上市" prop="listed">
            <el-select v-model="ruleForm.listed" placeholder="请选择">
              <el-option label="是" value="shanghai"></el-option>
              <el-option label="否" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业" prop="industry">
            <el-select v-model="ruleForm.industry" placeholder="请选择">
              <el-option label="互联网/游戏/软件" value="shanghai"></el-option>
              <el-option
                label="广告/传媒/公关/展览"
                value="beijing"
              ></el-option>
              <el-option
                label="房产/家居/物业/建筑"
                value="beijing"
              ></el-option>
              <el-option label="教育/培训" value="beijing"></el-option>
              <el-option label="农林牧渔" value="beijing"></el-option>
              <el-option label="其他" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form-item label="负责人手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="公司邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="querenpassword">
          <el-input
            type="password"
            v-model="ruleForm.querenpassword"
          ></el-input>
        </el-form-item>
        <el-form-item label="官方网站" prop="website">
          <el-input v-model="ruleForm.website"></el-input>
        </el-form-item>
        <el-form-item label="总部位置" prop="headquarters">
          <el-input v-model="ruleForm.headquarters"></el-input>
        </el-form-item>

        <!--        <el-upload-->
        <!--        class="upload-demo"-->
        <!--        ref="upload"-->
        <!--        action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--        :on-preview="handlePreview"-->
        <!--        :on-remove="handleRemove"-->
        <!--        :file-list="fileList"-->
        <!--        :auto-upload="false">-->
        <!--          <el-button slot="trigger" size="big" type="primary">选取文件</el-button>-->
        <!--          <el-button style="margin-left: 10px;" size="big" type="success" @click="submitUpload">上传到服务器</el-button>-->
        <!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--        </el-upload>-->

        <br />
        <el-button
          type="primary"
          class="btn btn-primary w-100 "
          @click="submitform()"
          >注册</el-button
        >
      </el-form>
      <div class="mx-auto">
        <p class="mb-0 mt-3">
          <small class="text-dark mr-2">我已经有账号?</small>
          <router-link to="" class="text-dark font-weight-bold"
            >登录</router-link
          >
        </p>
      </div>
    </div>
    <el-backtop target="_top">
      <div>
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.querenpassword !== "") {
          this.$refs.ruleForm.validateField("querenpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checknum = (rule, value, callback) => {
      setTimeout(() => {
        if (!value) {
          callback();
        } else if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 100);
    };
    return {
      ruleForm: {
        name: "",
        type: "",
        scale: "",
        area: "",
        fund: "",
        industry: "",
        phone: "",
        email: "",
        introduction: "",
        listed: "",
        headquarters: "",
        website: "",
        password: "",
        registertime: ""
      },
      rules: {
        zhanghao: [
          { required: true, message: "请填写账号", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          { required: false, message: "请填写密码", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
        fund: [{ validator: checknum, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        querenpassword: [{ validator: validatePass2, trigger: "blur" }],
        yanzhengma: [
          { required: true, message: "请填写验证码", trigger: "blur" }
        ]
      },
      fileList: []
    };
  },
  methods: {
    submitform() {
      this.axios
        .post(
          "http://47.95.195.192:8081/user/register",
          qs.stringify({
            phone: this.ruleForm.zhanghao,
            name: this.ruleForm.name,
            email: this.ruleForm.youxiang,
            password: this.ruleForm.password
          })
        )
        .then(function(data) {
          console.log(data);
        })
        .catch(error => {
          console.log("错误信息" + error);
        });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted() {
    this.submitform();
  }
};
</script>

<style scoped>
.mx-auto {
  width: fit-content;
  margin: 0 auto;
}

.signup-form {
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.07);
  margin: 20px 520px;
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

.banner-section {
  height: 800px;
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
</style>
