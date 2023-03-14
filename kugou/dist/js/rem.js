function remSize() {
  // 获取设备宽度
  var deviceW = document.documentElement.clientWidth || window.innerWidth;
  if (deviceW >= 780) {
    deviceW = 780;
  } else if(deviceW<=320){
    deviceW = 320;
  }
  // 390px-->1rem=50px
  document.documentElement.style.fontSize = (deviceW / 7.8) + 'px';
  // 设置字体大小
  document.querySelector('body').style.fontSize = 0.3 + 'rem';
  // var deviceH = document.documentElement.clientHeight;
}
// 当窗口发生变化则适配
remSize()
window.onresize = function () {
  remSize();

}
