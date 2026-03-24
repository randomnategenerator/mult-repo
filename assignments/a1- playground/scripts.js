// import { animate } from 'https://esm.sh/animejs';

$(function () {
    $("#left-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginLeft": "-500px" }, 500).animate({ "marginLeft": "0px" }, 1500, "swing", function () {
            $(`#falcon-gif`).attr("src", "assets/falcon-center.gif")
        })
        $(`#falcon-gif`).attr("src", "assets/falcon-left.gif")
    })

    $("#up-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginTop": "-500px" }, 500)
        $(`#falcon-gif`).attr("src", "assets/falcon-left.gif")
    })

    $("#right-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginRight": "-500px" }, 500)
        $(`#falcon-gif`).attr("src", "assets/falcon-left.gif")
    })

    $("#down-button").on(`click`, function () {
        $(`#falcon-gif`).animate({ "marginBottom": "-500px" }, 500)
        $(`#falcon-gif`).attr("src", "assets/falcon-left.gif")
    })
})