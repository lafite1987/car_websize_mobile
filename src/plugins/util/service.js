import Vue from "vue";
import axios from "axios"; //加载数据请求
import util from "./util"; //加载ui js
axios.defaults.baseURL = util.serviceUrl + "/gateWay/pubCtrl.do"; //
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.Invok = function(funNo, param, callback, is_msg) {
  axios.defaults.baseURL = util.serviceUrl + "/gateWay/pubCtrl.do"; //
  /*var station_id = sessionStorage.getItem("station_id"+util.projectOnlyName), //专营店ID
      station_id = (typeof(station_id) == "undefined" || station_id === null || station_id === "") ? "" : station_id;*/
  var device_id = localStorage.getItem("device_id"), //设备唯一标识
    device_id =
      typeof device_id == "undefined" || device_id === null || device_id === ""
        ? ""
        : device_id;
  var session_id = localStorage.getItem("session_id" + util.projectOnlyName), //ssionid
    session_id =
      typeof session_id == "undefined" ||
      session_id === null ||
      session_id === "" ||
      session_id == "undefined"
        ? ""
        : session_id;
  var user_id = localStorage.getItem("user_id" + util.projectOnlyName); //用户ID
  user_id =
    typeof user_id == "undefined" || user_id === null || user_id === ""
      ? ""
      : user_id;
  var this_data = {
    msg: {
      session_id: session_id,
      cmdid: funNo,
      device_id: device_id, //设备唯一标识
      // "station_id": station_id,
      //  "identity_type":localStorage.getItem("role_id")||"",
      user_id: user_id,
      plate_ind: "C"
    },
    data: param
  };
  if (is_msg) {
    //不需要 session_id user_id
    this_data.msg = {
      session_id: "",
      user_id: "",
      cmdid: funNo,
      device_id: device_id //设备唯一标识
    };
  }
  this_data = JSON.stringify(this_data);
  axios({
    method: "POST",
    timeout: 30000, //30s超时
    data: this_data
  }).then(
    response => {
      var a = this;
      var setData = {};
      var data = response.data;
      if (!data) {
        data = {};
        data["code"] = "-1";
        data["msg"] = "请求结果为空";
      } else {
        if (data.error) {
          if (data.error.fields.length > 0) {
            var list = data.error.fields[0];
            setData["code"] = list.code; //2002 登陆超时
            if (list.code == "2002") {
              util.cancellation_clear();
              location.href =
                window.location.href.split("#")[0] +
                "#/?redirect=" +
                this.$route.fullPath; //跳转登录
            }
            setData["msg"] = list.info;
          }
        } else {
          if (data.code && data.code != "0") {
            setData["code"] = data.code; //成功
            setData["msg"] = data.msg;
          } else {
            setData["code"] = "0"; //成功
            setData["msg"] = data.msg;
            setData["success"] = data.success;
          }
        }
      }
      if (callback) {
        //回调
        callback(setData);
      }
    },
    response => {
      if (callback) {
        var data = {};
        data["code"] = "-1";
        if (window.navigator.onLine == true) {
          data["msg"] = "请求失败，请稍后再试";
        } else {
          data["msg"] = response.message;
        }
        callback(data);
      }
    }
  );
};
Vue.prototype.Invok2 = function(param, callback) {
  axios.defaults.baseURL = util.interfaceUrl; //
  var this_data = JSON.stringify(param);
  axios({
    method: "POST",
    timeout: 30000, //30s超时
    data: this_data
  }).then(
    response => {
      var data = response.data;
      if (callback) {
        //回调
        callback(data);
      }
    }
  ).catch(function(error) {
  console.log(error);
});
};