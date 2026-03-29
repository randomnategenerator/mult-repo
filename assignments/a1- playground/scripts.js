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

    let held = false;
    let miles = 0;

    function deloreanGas() {
        if (!held) return;
        $(`#mph`).text(miles + 'MPH')
        if (miles >= 88){
            $(`#delorean`).attr('src', 'assets/delorean-88.gif')
            $(`#mph`).text("GREAT SCOTT!")
            held = false;
            $(`#delorean`).stop(true);
            return;
        }
        $(`#delorean`).animate({ marginLeft: `+=2px` }, 16, "linear", function(){
            miles = miles + 0.25
            $(`#mph`).text(miles + 'MPH')
            deloreanGas()
        })
    }

    $(`#start-button`).on('mousedown', function () {
        if (held) return;
        held = true
        $(`#delorean`).attr('src', 'assets/delorean-move.gif')
        deloreanGas()
    })

    $(`#start-button`).on('mouseup', function () {
        held = false;
        deloreanGas()
        if (miles <= 88) {
            $(`#delorean`).attr('src', 'assets/delorean.webp')
        } else {
            $(`#delorean`).attr('src', 'assets/delorean-88.gif')
        }
    })

})
