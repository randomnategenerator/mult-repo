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

    $(".wrong-answer").on(`click`, function(){
        $(this).addClass('animate__animated animate__fadeOut')
    })

    $('#correct-answer').on(`click`, function(){
        $(this).addClass('animate__animated animate__tada')
        $(this).css('color', 'green')
    })
})

