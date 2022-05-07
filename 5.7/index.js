// 渲染页面
let ul = document.querySelector('ul');
let videoData = [
    {src: './video/1.mp4', title: '英雄联盟宣传片', theDateOf: '2019-01-01', author: '英雄联盟'},
    {src: './video/Shift.mp4', title: 'Shift', theDateOf: '2019-01-01', author: 'Shift'},
    {src: './video/大雄兔.webm', title: '大雄兔', theDateOf: '2019-01-01', author: '大雄兔'},
    {src: './video/绝版视频.mp4', title: '绝版视频', theDateOf: '2019-01-01', author: '药水哥'},
];
videoData.forEach(function (item) {
    let html = `
    <li class="player">
        <div class="vid">
            <video src="${item.src}"></video>
        <img alt="" src="./video/1.png">
        </div>
    <div class="progressBar">
        <div class="now">
        <span></span>
    </div>
    </div>
    <h3>${item.title}</h3>
    <p class="theDateOf">${item.theDateOf}</p>
    <p class="author">${item.author}</p>
    </li>
    `;
    ul.innerHTML += html;
});
// 全局变量获取
let video = document.querySelectorAll('video');
let now = document.querySelectorAll('.now');
let img = document.querySelectorAll('img');
let progressBar = document.querySelectorAll('.progressBar')
let span = document.querySelectorAll('span');
let flag = true;
let timer = null;
// 遍历video获取每个video元素,设置进度条定时器.
video.forEach(function (item, index) {
    let theWidth = item.offsetWidth;
    timer = setInterval(function () {
            now[index].style.width = (item.currentTime / item.duration) * theWidth + 'px';
        }
    );
    item.ended = function () {
        img[index].src = './resource/video/1.png';
        flag = true;
        clearInterval(timer);
    };
    //绑定点击事件,点击视频时出现暂停或者播放按钮
    item.addEventListener('click', function () {
        if (img[index].style.display === 'block') {
            img[index].style.display = 'none';
        } else {
            img[index].style.display = 'block';
        }
    });
    item.onplay = function () {
        img[index].style.display = 'none';
    };
});
// 遍历img获取每个img元素,绑定点击事件播放暂停时显示不同图片.
img.forEach(function (item, index) {
        item.addEventListener('click', function () {
            console.log(111);
            if (flag) {
                video[index].play();
                item.src = './video/2.png';
                flag = false;
                // 设置周期定时器,视频开始播放后,如果出现图片,则3秒后隐藏图片.
                let num = 3;
                timer = setInterval(function () {
                        console.log(111)
                        if (item.style.display === 'block') {
                            num--;
                        }
                        if (num === 0) {
                            item.style.display = 'none';
                            num = 3;
                        }
                    }
                    , 1000);
            } else {
                video[index].pause();
                item.src = './video/1.png';
                flag = true;
                clearInterval(timer);
            }
        });


    }
);

// 遍历progressBar获取每个progressBar元素,绑定点击事件获取点击位置,设置播放进度.
progressBar.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
            console.log(111)
            let theWidth = item.offsetWidth;
            let theX = e.offsetX;
            video[index].currentTime = theX / theWidth * video[index].duration;
        }
    )
});
















