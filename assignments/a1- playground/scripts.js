// import { animate } from 'https://esm.sh/animejs';

$(function () {
    $("#left-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginLeft": "-500px" }, 500).animate({ "marginLeft": "0px" }, 1500, "swing", function () {
            $(`#falcon-gif`).attr("src", "assets/falcon-center.gif")
        })
        $(`#falcon-gif`).attr("src", "assets/falcon-left.gif")
    })

    $("#up-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginTop": "-250px" }, 500).animate({ "marginTop": "0px" }, 1500, "swing", function () {
            $(`#falcon-gif`).attr("src", "assets/falcon-center.gif")
        })
        $(`#falcon-gif`).attr("src", "assets/falcon-up.gif")
    })

    $("#right-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginRight": "-500px" }, 500).animate({ "marginRight": "0px" }, 1500, "swing", function () {
            $(`#falcon-gif`).attr("src", "assets/falcon-center.gif")
        })
        $(`#falcon-gif`).attr("src", "assets/falcon-right.gif")
    })

    $("#down-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginBottom": "-250px" }, 500).animate({ "marginBottom": "0px" }, 1500, "swing", function () {
            $(`#falcon-gif`).attr("src", "assets/falcon-center.gif")
        })
        $(`#falcon-gif`).attr("src", "assets/falcon-down.gif")
    })



    $(".wrong-answer").on(`click`, function () {
        $(this).addClass('animate__animated animate__fadeOut')
        $(this).css('background-color', 'red')
    })

    $('#correct-answer').on(`click`, function () {
        $(this).addClass('animate__animated animate__tada')
        $(this).css('background-color', 'lime')
    })


    $(window).on("scroll", function () {
        $('#dvd').animate({
            "left": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "top": `+${1 + Math.floor(Math.random() * window.innerHeight)}`,
            "right": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "bottom": `+${1 + Math.floor(Math.random() * window.innerHeight)}`
        }, 'slow')
    })


    $('#start-button').on('click', function () {
        $(this).css(`display`, `none`)
        $(`#choose-your-own-adventure`).append(`<img id="pacman" src="assets/pacman.png">`, `<img class="ghost" src="assets/ghost-1.png">`, `<img class="ghost" src="assets/ghost-2.png">`, `<img class="ghost" src="assets/ghost-3.png">`, `<img class="ghost" src="assets/ghost-4.png">`, `<img id="pellet" src="assets/pellet.webp">`)
        // $(`#choose-your-own-adventure`).on('mousemove', function () {
        //     $(`.ghost`).animate({
        //         "marginLeft": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
        //         "marginTop": `+${1 + Math.floor(Math.random() * window.innerHeight)}`,
        //         "marginRight": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
        //         "marginBottom": `+${1 + Math.floor(Math.random() * window.innerHeight)}`
        //     }, 1500)

            // $(this).animate({
            //     "marginLeft": `+${$(`#choose-your-own-adventure`).width() + (Math.floor(Math.random() * $(`#choose-your-own-adventure`).width()))}`,
            //     "marginTop": `+${$(`#choose-your-own-adventure`).height() + (Math.floor(Math.random() * $(`#choose-your-own-adventure`).height()))}`,
            //     "marginRight": `+${$(`#choose-your-own-adventure`).width() + (Math.floor(Math.random() * $(`#choose-your-own-adventure`).width()))}`,
            //     "marginBottom": `+${$(`#choose-your-own-adventure`).width() + (Math.floor(Math.random() * $(`#choose-your-own-adventure`).height()))}`

            // }, 1500)
        })
    })
})

