 
function throttle (func, ms) {
    let isTrottled = false;
    let savedArgs
    let savedThis

    function wrapper() {
        if(isTrottled) {
            savedArgs = arguments
            savedThis = this
            return;
        }

        func.apply(this, arguments)
        isTrottled = true

        setTimeout(function() {
             isTrottled = false;   

             if(savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = null
                savedThis = null
             }
        }, ms)

    }
    return wrapper;
}

function mouseMove() {
    console.log(new Date());
}
// mouseMove = throttle(mouseMove, 3000)
// setInterval(mouseMove, 2000)