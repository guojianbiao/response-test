(function(doc, win) {
    // document文档对象
    var docEl = doc.documentElement,
    // 窗口旋转或者大小改变事件     
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            // 页面宽度
            var clientWidth = docEl.clientWidth;
           
            if (!clientWidth) return;
            // 根据页面宽度设置页面html根元素的字体大小
            if (clientWidth >= 768) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
            }
        };
    // 如果不支持addEventListener方法（老版本IE）就退出当前函数
    if (!doc.addEventListener) return;
    // 绑定窗口变化事件（设置根字体）
    win.addEventListener(resizeEvt, recalc, false);
    // 绑定页面装载成功事件（设置根字体）
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);
 
var btn = false;
$('.btn').click(function(){
    if(!btn){
        $('.section_1 nav').stop().animate({
            top:'.8rem'
        },500);
        btn = true;
    }else{
         $('.section_1 nav').stop().animate({
            top:'-3rem'
        },500);
         btn = false;
    }
})