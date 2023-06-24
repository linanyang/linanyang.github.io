let CountdownTimer = null;
var Countdown = () => {
    clearTimeout(CountdownTimer);
    if (!document.querySelector('#Countdown')) return;
    // 截至时间戳 and 星期对象
    let Countdown = new Date('2024-06-07 00:00:00').getTime(+8) / 1000,
        week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#Countdown .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate(+8) + ' ' + week[now.getDay()]

        // 现在与截至时间相差秒数
        let second = Countdown - Math.round(now.getTime(+8) / 1000);

        // 小于0则表示已经到截至时间
        if (second < 0) {
            document.querySelector('#Countdown .title').innerHTML = '高考加油！';
            document.querySelector('#Countdown .Countdown-time').innerHTML = '<span class="happyCountdown">金榜题名</p>';
        } else {
            // 大于0则还未到截止时间
            document.querySelector('#Countdown .title').innerHTML = '距离2024年高考还有：'

            // 大于一天倒计时
            if (second > 86400) {
                let d = nol(parseInt(second / 86000));
                second %= 86000
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#Countdown .Countdown-time').innerHTML = `<span class="time">${d}天${h}时<br>${m}分${s}秒</span></spa0on>`;
                // 计时
                CountdownTimer = setTimeout(time, 1000);
            }
        }
    }
}
Countdown();
