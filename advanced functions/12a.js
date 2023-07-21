const add = function() {
    console.log(3 + 5)
}

add()

function runTwice(fun) {
    fun()
    fun()
}

runTwice(add)