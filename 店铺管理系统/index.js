function get(s) {
    return document.querySelector(s);
}

let btn = get('#btn');
let modal = get('.modal');
let modalBox = get('.modal-box');
btn.addEventListener('click', function () {
    modal.style.display = 'block';
    modalBox.style.display = 'block';
});
let Close = get('.close');
Close.addEventListener('click', function () {
    modal.style.display = 'none';
    modalBox.style.display = 'none';
});
let add = get('#add');
add.addEventListener('click', function () {
    let name = get('#name').value
    if (!/^[\u4e00-\u9fa5]{2,4}$/.test(name)) {
        alert('请输入正确的姓名');
        return;
    }
    let names = get('#names').value
    let business = get('#business').value
    let tel = get('#tel').value
    if (!/^1[34578]\d{9}$/.test(tel)) {
        alert('请输入正确的手机号');
        return;
    }
    if (name === '' || names === '' || business === '' || tel === '') {
        alert('请输入完整信息');
        return;
    }
    let html = `
            <tr>
               <td>${names}</td>
                <td>${name}</td>
                <td>${tel}</td>
                <td>${business}</td>
             
                <td><button type="button" id ="Delete">删除</button></td>
            </tr>
        `;
    get('tbody').innerHTML += html;
    get('#name').value = '';
    get('#names').value = '';
    get('#business').value = '';
    get('#tel').value = '';
    modal.style.display = 'none';
    modalBox.style.display = 'none';
});
let table = get('table');
table.addEventListener('click', function (e) {
    if (e.target.id === 'Delete') {
        e.target.parentNode.parentNode.remove();
    }
});