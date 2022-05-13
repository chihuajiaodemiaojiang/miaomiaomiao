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
// sort排序: 默认按照字符串排序
    let sort = data.sort(function (a, b) {
        return a.studentNumber - b.studentNumber;
    });
    get('.dataOut').innerHTML = "";
    applyColoursToADrawing(sort, '.dataOut');
}
//筛选出大于18岁的学生
get('#filter').onclick = function () {
    resetTheData()
    // filter过滤: 筛选满足条件的数组元素,并返回一个新数组
    let filter = data.filter(function (item) {
        return item.age > 18;
    });
    get('.dataOut').innerHTML = "";
    applyColoursToADrawing(filter, '.dataOut');
}
//是否有score低于60的学生
get('#some').onclick = function () {
    resetTheData()
    // some: 判断是否有满足特定条件的元素,只有有一个满足就返回true, 并终止程序运行; 如果都不满足,才会返回false;
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
    // every: 判断是否都满足特定条件; 满足就返回true; 只要有一个不满足就返回false, 并终止程序运行
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
    // map(): 遍历数组,返回对数组元素处理过后组成的新数组
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
    // find查找: 返回满足条件的第一数组元素,并终止程序运行; 没有找到就返回undefined
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





