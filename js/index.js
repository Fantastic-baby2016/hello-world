/**
 * Created by Administrator on 2016/1/9.
 */
$().ready(function(){
    $("#mgj_gwc").mouseover(function(){
        if($(".shop_cart_info").is(":hidden")){
            $(".shop_cart_info").show().css("zIndex",55);
        }
    });
    $("#mgj_gwc").mouseout(function(){
        $(".shop_cart_info").hide();
    });

    $("#mgj_khfw").mouseover(function(){
        if($(".ext_mode").is(":hidden")){
            $(".ext_mode").show();
        }
    });
    $("#mgj_khfw").mouseout(function () {
        $(".ext_mode").hide();
    });
    $(".primary_nav_li").mouseover(function(){
        if($(this).find(".nav_more").is(":hidden")){
            $(this).find(".nav_more").show();
        } /*else if($(this).find(".nav_line_bottom").is(":hidden")){
         $(this).find(".nav_line_bottom").show();
         }*/else if($(this).find(".nav_line_right").is(":hidden")){
            $(this).find(".nav_line_right").show();
        }
    });
    $(".primary_nav_li").mouseleave(function(){
        $(this).find(".nav_more").hide();
//        $(this).find(".nav_line_bottom").hide();
        $(this).find(".nav_line_right").hide();
    });
    $(".selectbox").click(function(){
        if($(".current").is(":hidden")){
            $(".current").show();
        }else{
            $(".current").hide();
        }
    });
    $(".sp").click(function(){
        $(".selected").text("搜商品");
    });
    $(".dp").click(function(){
        $(".selected").text("搜店铺");
    });
    $(".ts_hotword").click(function(){
        var text=$(this).text();
        $(".ts_txt").val(text);
    });
    $(".top-selectbox").click(function(){
        if($(".top-current").is(":hidden")){
            $(".top-current").show();
        }else{
            $(".top-current").hide();
        }
    });
    $(".top-sp").click(function(){
        $(".top-selected").text("搜商品");
    });
    $(".top-dp").click(function(){
        $(".top-selected").text("搜店铺");
    });

//�����ֲ�
    var rows = 1;
// ��ʼ��Ĭ��Ϊ��һ��
    var page = 1;
// Ϊ����button��ť��click�¼�
    $(".msilde_btnl").click(function(){
        // ͼƬ�����ƶ�
        var $parent = $(".mslide_content_box");
        var $list = $parent.children(".mslide_banners");
        // ��ȡִ�ж�����Ԫ��
        var $ul = $list.children("ul");
        // ��ȡ����ͼƬ�ĸ���
        var len = $list.find("li").length;
        // ��ȡ�ƶ��ľ���
        var width = $parent.width();
        // ������ͼƬ�ּ���
        var max = Math.ceil(len/rows);
        // �ж�page�����ֵ
        if(page == max){
            page = 0;
            $list.animate({
                left : -(width*page)
            },"slow");
            page++;
        }else{
            // �����ƶ�
            $list.animate({
                left : -(width*page)
            },"slow");
            page++;
        }
    });
    var lunbo=function(){
        var $parent = $(".mslide_content_box");
        var $list = $parent.children(".mslide_banners");
        // ��ȡִ�ж�����Ԫ��
        var $ul = $list.children("ul");
        // ��ȡ����ͼƬ�ĸ���
        var len = $list.find("li").length;
        // ��ȡ�ƶ��ľ���
        var width = $parent.width();
        // ������ͼƬ�ּ���
        var max = Math.ceil(len/rows);
        if(page == max){
            page = 0;
            $list.animate({
                left : -(width*page)
            },"slow");
            page++;
        }else{
            // �����ƶ�
            $list.animate({
                left : -(width*page)
            },"slow");
            page++;
        }
    }
    time=setInterval(lunbo,5000);
    $(".msilde_btnr").click(function(){
        // ͼƬ�����ƶ�
        var $parent = $(".mslide_content_box");
        var $list = $parent.children(".mslide_banners");
        // ��ȡִ�ж�����Ԫ��
        var $ul = $list.children("ul");
        // ��ȡ����ͼƬ�ĸ���
        var len = $list.find("li").length;
        // ��ȡ�ƶ��ľ���
        var width = $parent.width();
        // ������ͼƬ�ּ���
        var max = Math.ceil(len/rows);
        // �ж�page�����ֵ
        if(page == 1){
            $list.animate({
                left : -(max-1)*width
            },"slow");
            page=max;
        }else{
            // �����ƶ�
            $list.animate({
                left : "+="+width
            },"slow");
            page--;
        }
    });

    //右下角小广告
    $(".msg").animate({bottom:0},3000);
    $(".xx").click(function(){
        $(".msg").animate({
            bottom:-300
        },3000)
    })

    //顶部导航条

    $(function(){
        var winHeight = $(document).scrollTop();

        $(window).scroll(function() {
            var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

            if (scrollY > 550){ //如果滚动距离大于550px则显示，否则删除隐藏类
                $('.top-title').addClass('showed');
            }
            else {
                $('.top-title').addClass('hiddened');
            }

            if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
                $('.top-title').removeClass('hiddened');
            }
            else {
                $('.top-title').addClass('hiddened');
            }

        });
    });

});

//限时抢购倒计时
function calc(){
    var now=new Date();//获得当前时间，保存在now中
    //自定义目标时间对象，封装2015/12/18 18:30，保存在变量target中
    //var target=new Date("2016/1/13 20:30");
    var target=new Date(now.toLocaleDateString()+" 23:59:59");
    var ms=target-now;//target-now，保存在变量ms中
    //找到id为time的span，保存在变量span中

    if(ms>0){//如果ms>0
        //将ms换算成还差h小时m分s秒：
        var h=parseInt(ms/1000/3600);
        var m=parseInt((ms-h*1000*3600)/1000/60);
        var s=parseInt(ms/1000)%60;
        s<10&&(s="0"+s);//如果s<10，就前补0
        m<10&&(m="0"+m);//如果m<10，就前补0
        h<10&&(h="0"+h);//如果h<10，就前补0
        //将span的内容设置为h:m:s
        $(".timer-hh").text(h);
        $(".timer-mm").text(m);
        $(".timer-ss").text(s);
        timer=setTimeout(calc,1000);
    }else{//否则(如果时间晚于target，就不再倒计时)
        //不再启动等待，则自动停止
        timer=null;
        /*span.innerHTML="00:00:00";//设置时间显示为00:00:00*/
    }
}
$().ready(function(){
    calc();
});
