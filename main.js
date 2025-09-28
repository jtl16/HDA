var end = new Date('11/01/2025 12:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = (days >= 10 ? days : '0' + days) + 'd ';
        document.getElementById('countdown').innerHTML = (hours >= 10 ? hours : '0' + hours) + 'h ';
        document.getElementById('countdown').innerHTML = (minutes >= 10 ? minutes : '0' + minutes) + 'd ';
        document.getElementById('countdown').innerHTML = (seconds >= 10 ? seconds : '0' + seconds) + 'd ';


    timer = setInterval(showRemaining, 1000);