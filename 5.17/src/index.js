let timer = null
let n = 0
timer = setInterval(function () {
    n++
    if (n >= 3) {
        n = 0
    }
    console.log(111)
}, 1000)
require('./index.less')
