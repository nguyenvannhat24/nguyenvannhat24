var sl = document.getElementsByClassName("sl");

for (let i = 0; i < sl.length; i++) {
  sl[i].onclick = function () {
    for (let j = 0; j < sl.length; j++) {
      sl[j].style.opacity = 0.4;
    }
    this.style.opacity = 1;
    hienthi(i);
  };
}
var theh1 = document.querySelector(".layout h1");
function hienthi(n) {
  switch (n) {
    case 0:
      theh1.innerText = "cái thứ 1";
      break;
    case 1:
      theh1.innerText = "Nguyễn Văn Nhất";
      break;
    case 2:
      theh1.innerText = "Nguyễn Văn DDD";
      break;
    case 3:
      theh1.innerText = "Nguyễn Văn Nam";
      break;
    case 4:
      theh1.innerText = "Nguyễn Văn linh";
      break;
  }
}
