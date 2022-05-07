// 声明常量,search搜索框,btn搜索按钮,ul列表,span清空按钮，声明变量数组ARR，赋值用JSON.parse读取本地存储的字符串并转换为对象,或空数组.
// 设置一个用于读取本地存储函数,声明一个内容为空的变量,遍历arr数组,变量加等于arr数组的值,然后把变量的值通过innerHTML放到ul列表里面.
// 给搜索按钮绑定一个点击事件,点击时获取搜索框的值,push到数组里面并用JSON.stringify转化为字符串保存到本地存储.然后调用函数.
// 给清空按钮绑定一个点击事件,点击时让搜索框的值为空,清空ul列表里面的内容,并把本地存储的值清空.
const search = document.querySelector('#search');
const btn = document.querySelector('#btn');
const ul = document.querySelector('ul');
const span = document.querySelector('span');
let arr = JSON.parse(localStorage.getItem('search')) || [];
render()

function render() {
    let html = '';
    arr.forEach(function (item) {
        html += `<li>${item}</li>`;
    });
    ul.innerHTML = html;
}

btn.onclick = function () {
    if (!search.value) {
        alert('请输入内容');
        return false;
    }
    arr.push(search.value);
    localStorage.setItem('search', JSON.stringify(arr));
    render()
}
span.onclick = function () {
    localStorage.removeItem('search');
    search.value = '';
    ul.innerHTML = '';
}