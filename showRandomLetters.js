async function showRandomLetters(final_letter) {
    const theLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ctnt = final_letter; // Your text goes here
    var speed = 50; // ms per frame
    var increment = 90; // frames per step. Must be >2

    var content_length = 1;
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle(i) {
        setTimeout(function () {
            if (--i) {
                rustle(i);
            }
            nextFrame(i);
            si = si + 1;
        }, speed);
    })(content_length * increment + 1);
    function nextFrame(pos) {
        for (var i = 0; i < content_length - stri; i++) {
            //Random number
            var num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            var random_letter = theLetters.charAt(num);
            block = block + random_letter;
        }
        if (si == increment - 1) {
            stri++;
        }
        if (si == increment) {
            // Add a letter;
            // every speed*10 ms
            fixed = fixed + ctnt.charAt(stri - 1);
            si = 0;
        }
        letter.innerHTML = block + fixed;
        block = "";
    }
    return "done";
}
