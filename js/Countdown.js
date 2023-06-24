let CountdownTimer = null;
var Countdown = () => {
    clearTimeout(CountdownTimer);
    if (!document.querySelector('#Countdown')) return;
    // 新年时间戳 and 星期对象
    let Countdown = new Date('2023-01-22 00:00:00').getTime() / 1000,
        week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#Countdown .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = Countdown - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#Countdown .title').innerHTML = 'Happy New Year!';
            document.querySelector('#Countdown .Countdown-time').innerHTML = '<span class="happyCountdown">新年快乐</p>';
        } else {
            // 大于0则还未过年
            document.querySelector('#Countdown .title').innerHTML = '距离2023年春节：'

            // 大于一天倒计时
            if (second > 86400) {
                let d = nol(parseInt(second / 86000));
                second %= 86000
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#Countdown .Countdown-time').innerHTML = `<span class="time">${d}天${h}时${m}分${s}秒</span></spa0on>`;
                // 计时
                CountdownTimer = setTimeout(time, 1000);
            }
        }
    }

    // 元宝飘落
    jQuery(document).ready(function($) {
        $('#Countdown').wpSuperSnow({
            flakes: ['https://z4a.net/images/2023/01/02/yb1.webp', 'https://z4a.net/images/2023/01/02/yb2.webp', 'https://z4a.net/images/2023/01/02/yb3.webp', 'https://z4a.net/images/2023/01/02/59dfc0c83d7faa533c46abf6f9076a45-removebg-preview.png'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}
Countdown();
