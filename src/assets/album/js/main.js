function routeAlbum(){
    //设置起始日期
    // countTime('2016/01/30 23:45', 'day', 'hour', 'minute', 'second');
    // var days = $('#day').text();
    //
    // // 设置标题
    // if (parseInt(days / 365) != 0) {
    //     $(document).attr("title", "在一起" + parseInt(days / 365) + "年,感谢相伴。");
    // } else if (parseInt(days / 30) != 0) {
    //     $(document).attr("title", "在一起" + parseInt(days / 30) + "个月,感谢相伴。");
    // } else
    //     $(document).attr("title", "在一起" + days + "天,感谢相伴。");

    //设置每一张图片对应的文字
    var says = new Array(
        "M与M漫长的旅途",
        "北京-我们在一起后的第一张合照",
        "济南-在家长面前我还有点紧张呢，没好意思把你抱紧",
        "济南-小鸟依人的你躲在我背后，以后我保护你",
        "济南-素颜睡衣，乱乱的头发，嫩嫩的脚丫",
        "济南-爱上做饭的你，爱上了你做的饭",
        "台湾-出去玩居然不带我😔",
        "青岛-我一直在你身边哦",
        "最喜欢的照片之一，你真的好美",
        "你送的礼物，一个领带一本书，幸福",
        "美国-隔着时空和你对望",
        "时间不停，爱你不止，携子之手，白头偕老"
    );


    var start = function() {
        var index = 0;
        var rate = 6000;
        $('#say').text(says[(index++) % says.length]);
        var _play = function () {
            $('#say').hide();
            $('#say').text(says[(index++) % says.length]);
            $('#say').fadeToggle();
            $('#carousel').carousel('next');
        };
        setInterval(_play, rate);
    }();

};
