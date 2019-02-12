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
        "济南-爱上做饭的你，爱上了你做的饭",
        "神户-一生一世的承诺，终生相守的誓言",
        "京都-和最喜欢的人去最喜欢的景点",
        "大阪-带老婆吃好吃的",
        "大阪-和老婆一起出去玩的日子好幸福啊",
        "北京-雾霾再浓也掩盖不了我们的爱",
        "济南-定亲宴上的交杯酒",
        "济南-在天悦作比翼鸟，在地愿比小心心",
        "济南-老婆~我会永远爱你的",
        "济南-长长的小路，终点是属于我们的幸福",
        "北京-子曰：爱之，能勿抱乎?",
        "美国-隔着时空和你对望",
        "时间不停，爱你不止，携子之手，白头偕老"
    );


    var start = function() {
        var index = 0;
        var rate = 6200;
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
