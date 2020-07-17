<template>
  <div>
    <h4 class="mb-4 text-center" style="margin-top: 40px;">普通用户注册</h4>
    <div class="signup-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="zhanghao">
          <el-input v-model="ruleForm.zhanghao"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"></el-input>
        </el-form-item>
        <el-form
          :inline="true"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item>
            <el-input v-model="ruleForm.youxiangyangzhengma"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="fayanzhengma"
              >获取验证码</el-button
            >
          </el-form-item>
        </el-form>
        <el-form-item label="登录密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认您的密码" prop="querenpassword">
          <el-input
            type="password"
            v-model="ruleForm.querenpassword"
          ></el-input>
        </el-form-item>

        <div class="showYZM_div">
          <input
            type="text"
            v-model="check_yzm"
            @blur="checkYZM"
            @keyup.enter="$event.target.blur"
            placeholder="请输入验证码"
          />
          <div class="yzm_picture_div">
            <span>{{ yzm_code }}</span>
          </div>
          <div class="yzm_text_div">
            <a href="javascript:void(0);" @click="changeYZM"
              >看不清，换一张试试？</a
            >
          </div>
        </div>

        <!--        <el-form-item label="输入验证码" prop="yanzhengma">-->
        <!--          <el-input v-model="ruleForm.yanzhengma"></el-input>-->
        <!--        </el-form-item>-->
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
          <router-link to="./SignupCompany" class="text-dark font-weight-bold"
            >登录</router-link
          >
        </p>
      </div>
    </div>
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
    return {
      yzm_code: "axaz",
      ruleForm: {
        name: "",
        zhanghao: "",
        youxiang: "",
        youxiangyangzhengma: "",
        password: "",
        querenpassword: "",
        yanzhengma: ""
      },
      rules: {
        zhanghao: [
          { required: true, message: "请填写账号", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        youxiang: [
          { required: true, message: "请填写邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        querenpassword: [{ validator: validatePass2, trigger: "blur" }],
        yanzhengma: [
          { required: true, message: "请填写验证码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    changeYZM() {
      let yzm_code = ""; //点击更换时-初始验证码
      let yzm_code_length = this.yzm_code_length; //验证码长度获取
      let codeChars = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //候选字符
      //通过循环获取yzm_code_length位codeChars中的字符下标，并通过下标获取指定字符，最后拼接
      for (let i = 0; i < yzm_code_length; i++) {
        let charNum = Math.floor(Math.random() * 62); //获取随机验证码下标
        yzm_code += codeChars[charNum]; //根据下标获取指定字符并拼接
      }
      console.log("修改后验证码---" + yzm_code);
      return (this.yzm_code = yzm_code);
    },
    checkYZM() {
      if (this.check_yzm == "") {
        this.ErrorMessage = "验证码不能为空";
        this.showErrorMssage = true;
        return;
      } else if (this.check_yzm.toUpperCase() != this.yzm_code.toUpperCase()) {
        console.log("待校验验证码---" + this.check_yzm.toUpperCase());
        console.log("正确验证码---" + this.yzm_code.toUpperCase());
        this.ErrorMessage = "验证码输入有误";
        this.showErrorMssage = true;
        return;
      } else {
        this.ErrorMessage = "";
        this.showErrorMssage = false;
        this.check_yzm_status = true;
      }
    },
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
  /*margin可以设置表单框体的宽度*/
  margin: 20px 600px;
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
