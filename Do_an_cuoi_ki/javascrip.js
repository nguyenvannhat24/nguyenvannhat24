var select = document.getElementsByClassName("selectlc1");
// quan tâm đến các nút select
// muốn dùng đc sự kiện onclick thì phải chỉ một duy nhất một đôi tươngj được chọn đến

for (let i = 0; i < select.length; i++) {
  // gán sự kiện onclick cho tất các các seclect vì khi một trong tất cả đc chọn thì phải mờ tất cả còn lại

  select[i].onclick = function () {
    for (let j = 0; j < select.length; j++) {
      select[j].style.opacity = "0.5";
    }
    // chính đối tượng đang được chọn sẽ là this
    // this.style.opacity = "1";

    select[i].style.opacity = "1";
  };
}
