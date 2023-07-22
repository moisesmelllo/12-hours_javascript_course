const add = () => {
    console.log(3 + 5)
}

add()

const double = (fun) => {
    fun()
    fun()
}

double(add)