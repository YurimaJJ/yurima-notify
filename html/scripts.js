$(function () {
    var sound = new Audio('sound.mp3');
    sound.volume = 0.8;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'open') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.notification').append(`
            <div class="notify-wrapper-${number}">
                <div class="notification_main-${number}">
                    <div class="title-${number}"></div>
                    <div class="text-${number}">
                        ${event.data.message}
                    </div>
                </div>
            </div>`)
            $(`.notify-wrapper-${number}`).css({
                "margin-bottom": "10px",
                "width": "275px",
                "margin": "0 0 8px -180px"
            })
            $('.notification_main-'+number).addClass('main')
            $('.text-'+number).css({
                "font-size": "14px"
            })

            if (event.data.type == 'success') {
                $(`.title-${number}`).html(event.data.title).css({
                    "color": "#47cf73",
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('success-icon')
                $(`.notify-wrapper-${number}`).addClass('success success-border')
                sound.play();
            } else if (event.data.type == 'info') {
                $(`.title-${number}`).html(event.data.title).css({
                    "color": "#58f0fe",
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('info-icon')
                $(`.notify-wrapper-${number}`).addClass('info info-border')
                sound.play();
            } else if (event.data.type == 'error') {
                $(`.title-${number}`).html(event.data.title).css({
                    "color": "#dc3545",
                    "font-size": "16px",
                    "font-weight": "600"
                })
                $(`.notification_main-${number}`).addClass('error-icon')
                $(`.notify-wrapper-${number}`).addClass('error error-border')
                sound.play();
            }
            anime({
                targets: `.notify-wrapper-${number}`,
                translateY: 50,
                duration: 750,
                easing: 'spring(1, 70, 100, 10)',
            })
            setTimeout(function () {
                anime({
                    targets: `.notify-wrapper-${number}`,
                    translateY: -500,
                    duration: 750,
                    easing: 'spring(1, 80, 100, 0)'
                })
                setTimeout(function () {
                    $(`.notify-wrapper-${number}`).remove()
                }, 750)
            }, event.data.duration)
        }
    })
})