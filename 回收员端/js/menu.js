$(document).on('click','.subMenu',function(){
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$("main").append('\
	<div class="menu">\
      <div class="subMenu active">\
          <div><i class="iconfont icon-index"></i></div>\
          <p>首页</p>\
      </div>\
      <div class="subMenu">\
          <div><i class="iconfont icon-order"></i></div>\
          <p>订单</p>\
      </div>\
      <div class="subMenu">\
          <div><i class="iconfont icon-my"></i></div>\
          <p>我的</p>\
      </div>\
    </div>\
')