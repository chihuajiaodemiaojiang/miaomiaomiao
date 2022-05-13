let data = [
    {studentNumber: '003', name: '小源', age: '20', hobby: '篮球、足球、乒乓球', score: '59'},
    {studentNumber: '001', name: '小明', age: '22', hobby: 'html、css', score: '80'},
    {studentNumber: '002', name: '小红', age: '17', hobby: '篮球,乒乓球', score: '70'},
];

function resetTheData() {
    data = [
        {studentNumber: '003', name: '小源', age: '20', hobby: '篮球、足球、乒乓球', score: '59'},
        {studentNumber: '001', name: '小明', age: '22', hobby: 'html、css', score: '80'},
        {studentNumber: '002', name: '小红', age: '17', hobby: '篮球,乒乓球', score: '70'},
    ];
}

function get(e) {
    return document.querySelector(e);
}

function applyColoursToADrawing(a, b) {
    a.forEach(function (item) {
        get(b).innerHTML += `<tr>
					<td>${item.studentNumber}</td>
					<td>${item.name}</td>
					<td>${item.age}</td>
					<td>${item.hobby}</td>
					<td>${item.score}</td>
					</tr>`;
    })
}

function applyColoursToADrawing2(e) {
    get('.dataOut').innerHTML += `<tr>
                    <td>${e.studentNumber}</td>
                    <td>${e.name}</td>
                    <td>${e.age}</td>
                    <td>${e.hobby}</td>
                    <td>${e.score}</td>
                    </tr>`;
}

applyColoursToADrawing(data, '.originalData');
//按照学号排序
get('#sort').onclick = function () {
    resetTheData()
    let sort = data.sort(function (a, b) {
        return a.studentNumber - b.studentNumber;
    });
    get('.dataOut').innerHTML = "";
    applyColoursToADrawing(sort, '.dataOut');
}
//筛选出大于18岁的学生
get('#filter').onclick = function () {
    resetTheData()
    let filter = data.filter(function (item) {
        return item.age > 18;
    });
    get('.dataOut').innerHTML = "";
    applyColoursToADrawing(filter, '.dataOut');
}
//是否有score低于60的学生
get('#some').onclick = function () {
    resetTheData()
    let some = data.some(function (item) {
            return item.score < 60;
        }
    );
    get('.dataOut').innerHTML = "";
    if (some) {
        // 输出这个学生的信息
        data.forEach(function (item) {
                if (item.score < 60) {
                    applyColoursToADrawing2(item)
                }
            }
        )
    }
}
//是否所有学生都满18岁
get('#every').onclick = function () {
    resetTheData()
    let every = data.every(function (item) {
        return item.age > 18;
    });
    get('.dataOut').innerHTML = "";
    if (every) {
        get('.dataOut').innerHTML = "所有学生都满18岁";
    } else {
        data.forEach(function (item) {
            if (item.age < 18) {
                applyColoursToADrawing2(item)
            }
        })
    }
}
//把所有学生年龄加1
get('#map').onclick = function () {
    resetTheData()
    let map = data.map(function (item) {
            item.age++;
            return item;
        }
    );
    console.log(map)
    get('.dataOut').innerHTML = "";
    applyColoursToADrawing(map, '.dataOut');
}
// 找出第一个分数大于80的学生
get('#find').onclick = function () {
    resetTheData()
    let find = data.find(function (item) {
            return item.score > 80;
        }
    );
    get('.dataOut').innerHTML = "";
    if (find) {
        data.forEach(function (item) {
            if (item.score > 80) {
                applyColoursToADrawing2(item)
            }
        })
    } else {
        get('.dataOut').innerHTML = "没有找到";
    }
}





