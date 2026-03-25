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

    //figure out how to make this work like i want

    $(window).on("scroll", function () {
       $('#dvd').animate({
            "marginLeft": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "marginTop": `+${1 + Math.floor(Math.random() * window.innerHeight)}`,
            "marginRight": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "marginBottom": `+${1 + Math.floor(Math.random() * window.innerHeight)}`
        })

        console.log($(`scroll-activated-image`).css('height'))
    })


    // $('#choose-your-own-adventure').on('mousemove', function () {
    //     $('#dvd').animate({
    //         "marginLeft": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
    //         "marginTop": `+${1 + Math.floor(Math.random() * window.innerHeight)}`,
    //         "marginRight": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
    //         "marginBottom": `+${1 + Math.floor(Math.random() * window.innerHeight)}`
    //     })
    // })
})

