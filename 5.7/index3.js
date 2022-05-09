"use strict";
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
let timer1 = null;
let timer2 = null;
// 遍历video获取每个video元素
video.forEach(function (item, index) {
    let theWidth = item.offsetWidth;

    //视频结束时结束定时器
    item.onended = function () {
        img[index].src = './video/1.png';
        flag = true;
        clearInterval(timer);
        clearInterval(timer1);
        clearInterval(timer2);
    };
    // 给图片绑定点击事件控制播放暂停
    img[index].addEventListener('click', function () {
        if (flag) {
            video[index].play();
            img[index].src = './video/2.png';
            flag = false;
            // 设置周期定时器,视频开始播放后,如果出现图片,则3秒后隐藏图片.
            let num = 3;
            timer = setInterval(function () {
                    console.log(111)
                    if (img[index].style.display === 'block') {
                        num--;
                    }
                    if (num === 0) {
                        img[index].style.display = 'none';
                        num = 3;
                    }
                }
                , 1000);
        } else {
            item.pause();
            img[index].src = './video/1.png';
            flag = true;
            clearInterval(timer);
            clearInterval(timer1);
            clearInterval(timer2);
        }
    });
    //绑定点击事件,点击视频时出现暂停或者播放按钮
    item.addEventListener('click', function () {
        if (img[index].style.display === 'block') {
            img[index].style.display = 'none';
        } else {
            img[index].style.display = 'block';
        }
    });
    // 设置进度条动画
    item.onplay = function () {
        img[index].style.display = 'none';
        timer1 = setInterval(function () {
                now[index].style.width = (item.currentTime / item.duration) * theWidth + 'px';
            }
            , 15);
        timer2 = setInterval(function () {
                span[index].style.left = (video[index].currentTime / video[index].duration) * theWidth + 'px';
            }
            , 15);
    };
    //设置通过span拖动进度条
    span[index].addEventListener('touchstart', function (e) {
        console.log(888)
        let x = e.targetTouches[0].clientX;
        let left = span[index].offsetLeft;
        let width = span[index].offsetWidth;
        let duration = video[index].duration;
        document.addEventListener('touchmove', function (e) {
            let moveX = e.targetTouches[0].clientX;
            let moveLeft = moveX - x + left;
            if (moveLeft < 0) {
                moveLeft = 0;

            }
            if (moveLeft > theWidth - width) {
                moveLeft = theWidth - width;

            }
            span[index].style.left = moveLeft + 'px';
            video[index].currentTime = (moveLeft / theWidth) * duration;
        });
        document.addEventListener('touchend', function (e) {
            console.log(666)
            document.removeEventListener('touchmove', null);
            document.removeEventListener('touchend', null);
        });
    });
});

// 遍历progressBar获取每个progressBar元素,绑定点击事件获取点击位置,设置播放进度.
progressBar.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
            let theWidth = item.offsetWidth;
            let theX = e.offsetX;
            video[index].currentTime = theX / theWidth * video[index].duration;
        }
    )
});

















