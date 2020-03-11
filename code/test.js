const loginEvent = new Events();
const header = {
  setAvatar: function() {
    console.log("设置header模块的头像");
  }
};
const nav = {
  setAvatar: function() {
    console.log("设置导航模块的头像");
  }
};
const message = {
  refresh: function() {
    console.log("刷新消息列表");
  }
};
loginEvent.listen("loginSuccess", header.setAvatar);
loginEvent.listen("loginSuccess", nav.setAvatar);
loginEvent.listen("loginSuccess", message.refresh);
$.ajax("http://xxx.com/login", data => {
  loginEvent.trigger("loginSuccess", data); // 发布登陆成功消息
});
