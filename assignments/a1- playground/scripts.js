// jquery implementation: initalize the library
$(function () {
    // section 1: each button listens for when it's clicked. when it's clicked, it moves the image in that direction and changes the gif's source using the attr() function
    $("#left-button").on(`click`, function () {
        // when the animation is finished, it returns to the intial falcon gif
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

    // section 2: using animate.css
    $(".wrong-answer").on(`click`, function () {
        // when one of the wrong answers is selected, use the fade out class of animate.css. this erases the button, making it impossilbe to click again
        $(this).addClass('animate__animated animate__fadeOut')
        //also turn the button red
        $(this).css('background-color', 'red')
    })

    $('#correct-answer').on(`click`, function () {
        //when the correct answer is selected, make it green and use the tada animation
        $(this).addClass('animate__animated animate__tada')
        $(this).css('background-color', 'lime')
    })


    //section 3: dvd bounce
    $(window).on("scroll", function () {
        //when the window is scrolled at all, randomly move the dvd image in every direction. this is done slowly, but since the scroll event happens constantly, it takes a long time for the image to stop!
        $('#dvd').animate({
            // the Math.floor() and Math.random() functions are used with the window's current height and width to ensure it travels randomly across the entire page
            "left": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "top": `+${1 + Math.floor(Math.random() * window.innerHeight)}`,
            "right": `+${1 + Math.floor(Math.random() * window.innerWidth)}`,
            "bottom": `+${1 + Math.floor(Math.random() * window.innerHeight)}`
        }, 'slow')
    })

    // declare variables for section 4
    let held = false;
    let miles = 0;

    //function for section 4. I had some help from AI to implement this feature, but I tried to only use code I would have used myself, and typed everything manually
    function deloreanGas() {
        // if held is false, do nothing
        if (!held) return;
        //replace the text of the speedometer to reflect the current value of miles
        $(`#mph`).text(miles + 'MPH')
        //if miles hits 88:
        if (miles >= 88) {
            //use the time travel gif, replace the text, and reset the loop. now, held cannot be set to true and miles cannot be incremented
            $(`#delorean`).attr('src', 'assets/delorean-88.gif')
            $(`#mph`).text("GREAT SCOTT!")
            held = false;
            $(`#delorean`).stop(true);
            return;
        }
        //animate the delorean gif recursively
        $(`#delorean`).animate({ marginLeft: `+=2px` }, 16, "linear", function () {
            //miles is incremented by .25 and the text is updated, while the function loops back on itself. recursion is cool! i barely understand it.
            miles = miles + 0.25
            $(`#mph`).text(miles + 'MPH')
            deloreanGas()
            //side note: i was going to do a recursive choose your own adventure game, but realized that was way out of my scope for time and ability. i will do it someday though, i really want to do that jog around campus.
        })
    }

    //while the button is held down:
    $(`#start-button`).on('mousedown', function () {
        //check if held is true, if not, make it true, change the gif and run the gas function
        if (held) return;
        held = true
        $(`#delorean`).attr('src', 'assets/delorean-move.gif')
        deloreanGas()
    })

    //when the button is released:
    $(`#start-button`).on('mouseup', function () {
        //make held false, run the function to check for the breakpoint, and change the image.
        held = false;
        deloreanGas()
        if (miles <= 88) {
            $(`#delorean`).attr('src', 'assets/delorean.webp')
        } else {
            $(`#delorean`).attr('src', 'assets/delorean-88.gif')
        }
    })

})
