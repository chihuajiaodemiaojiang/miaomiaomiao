'use strict'
let search = document.querySelector('#search')
let seek = document.querySelector('.seek')
let arr = JSON.parse(localStorage.getItem('search')) || [];
let ul = document.querySelector('ul')
render()
seek.onclick = function () {
    localStorage.setItem('search', search.value)
    let searchValue = search.value
    if (!searchValue) {
        alert('请输入搜索内容')
        return false
    }
    arr.unshift(searchValue)
    localStorage.setItem('search', JSON.stringify(arr))
    render()
}

function render() {
    let str = ''
    arr.forEach(item => {
        str += `<li>${item}</li>`
    })
    ul.innerHTML = str
}

let span = document.querySelector('span')
span.onclick = function () {
    localStorage.removeItem('search')
    search.value = ''
    ul.innerHTML = ''
}
ul.addEventListener('click', function (e) {
    console.log(111)
    if (e.target.tagName === 'LI') {
        search.value = e.target.innerHTML
    }
})

