let data = [
    {studentNumber: '003', name: '小源', age: '20', hobby: '篮球、足球、乒乓球', score: '59'},
    {studentNumber: '001', name: '小明', age: '22', hobby: 'html、css', score: '81'},
    {studentNumber: '002', name: '小红', age: '17', hobby: '篮球,乒乓球', score: '70'},
];
function get(e) {
    return document.querySelector(e);
}
function render(arr,dom) {
    let html = '';
    arr.forEach(item => {
        html += `
            <tr>
                <td>${item.studentNumber}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.hobby}</td>
                <td>${item.score}</td>
            </tr>
        `;
    });
    dom.innerHTML = html;
}
render(data,get('.originalData'));
//按照学号排序
get('#sort').addEventListener('click',function () {
    let arr=data.sort(function (a,b) {
        return a.studentNumber-b.studentNumber;
    })
    render(arr,get('.dataOut'))
})
//删选出大于18的学生
get('#filter').addEventListener('click',function () {
    let arr=data.filter(function (item) {
        return item.age>18
    })
    render(arr,get('.dataOut'))
})
//是否有不及格的学生,输出这个学生的信息
get('#some').addEventListener('click',function () {
    let flag=data.some(function (item) {
        return item.score<60
    })
    if (flag){
        let html = '';
        data.forEach(item => {
            if (item.score<60){
                html += `
                    <tr>
                        <td>${item.studentNumber}</td>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.hobby}</td>
                        <td>${item.score}</td>
                    </tr>
                `;
                get('.dataOut').innerHTML = html;
            }
        });
    }
    })
//是否都满18岁的学生
get('#every').addEventListener('click',function () {
    let flag=data.every(function (item) {
        return item.age>18
    })
    if (flag){
        let html = '';
        data.forEach(item => {
            if (item.age>18){
                html += `
                    <tr>
                        <td>${item.studentNumber}</td>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.hobby}</td>
                        <td>${item.score}</td>
                    </tr>
                `;
                get('.dataOut').innerHTML = html;
            }
        });
    }
    })
// 所有学生年龄加1
get('#map').addEventListener('click',function () {
    let newData=JSON.parse(JSON.stringify(data));
    let arr=newData.map(function (item) {
        item.age++;
        return item;
    })
    render(arr,get('.dataOut'))
})
//第一个大于80分
get('#find').addEventListener('click',function () {
    let arr=data.find(function (item) {
        return item.score>80
    })
    render([arr],get('.dataOut'))
})



