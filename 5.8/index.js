let menuData = [
    {img: './img/ec560dbf9b82b90b.png!q70.jpg', title: '京东超市', page: 'page1'},
    {img: './img/ccf74d805a059a44.png!q70.jpg', title: '数码电器', page: 'page1'},
    {img: './img/758babcb4f911bf4.png!q70.jpg', title: '京东服饰', page: 'page1'},
    {img: './img/a0d5a68bf1461e6d.png!q70.jpg', title: '京东生鲜', page: 'page1'},
    {img: './img/37c65625d94cae75.png!q70.jpg', title: '京东到家', page: 'page1'},
    {img: './img/d86d463521140bb6.png!q70.jpg', title: '充值缴费', page: 'page1'},
    {img: './img/d15aa650a0ebe596.png!q70.jpg', title: '物流查询', page: 'page1'},
    {img: './img/c5acd2f8454c40e1.png!q70.jpg', title: '领券', page: 'page1'},
    {img: './img/38077313cb9eac4b.png!q70.jpg', title: '锁金贴', page: 'page1'},
    {img: './img/a7d6b66354efb141.png!q70.jpg', title: 'PLUS会员', page: 'page1'},
    {img: './img/c264378678b3cd96.png!q70.jpg', title: '京东国际', page: 'page2'},
    {img: './img/b22054613aa8ae75.png!q70.jpg', title: '京东拍卖', page: 'page2'},
    {img: './img/0f552e380db9cd0e.png!q70.jpg', title: '看病购药', page: 'page2'},
    {img: './img/722840c121d67fc6.png!q70.jpg', title: '玩3C', page: 'page2'},
    {img: './img/a7c213f76e37a8d6.png!q70.jpg', title: '沃尔玛', page: 'page2'},
    {img: './img/37fba58239f3547e.png!q70.jpg', title: '美妆馆', page: 'page2'},
    {img: './img/20acb632f59fbbbd.png!q70.jpg', title: '京东旅行', page: 'page2'},
    {img: './img/f958b896e706008a.png!q70.jpg', title: '拍拍二手', page: 'page2'},
    {img: './img/e48410133b38352d.png!q70.jpg', title: '超燃青年', page: 'page2'},
    {img: './img/3ace51badf80e71b.png!q70.jpg', title: '全部', page: 'page2'},
]
let page1 = document.querySelector('.page1')
let page2 = document.querySelector('.page2')
menuData.forEach(function (v, i) {
    let html = `
    <li>
      <img alt="" src="${v.img}">
       <span>${v.title}</span>
    </li>
    `;
    if (v.page === 'page1') {
        page1.innerHTML += html;
    } else {
        page2.innerHTML += html;
    }
})
let h = document.querySelector('.j_sk_h')
let m = document.querySelector('.j_sk_m')
let s = document.querySelector('.j_sk_s')
let timer = setInterval(function () {
    let now = new Date()
    let ten = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0)
    let time = ten - now
    let hh = Math.floor(time / 1000 / 60 / 60)
    let mm = Math.floor(time / 1000 / 60 % 60)
    let ss = Math.floor(time / 1000 % 60)
    h.innerHTML = hh
    m.innerHTML = mm
    s.innerHTML = ss
    if (hh < 0) {
        h.innerHTML = '0'
        m.innerHTML = '0'
        s.innerHTML = '0'
        clearInterval(timer)
    }
}, 1000)


var mySwiper = new Swiper('.swiper', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 自动播放
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // 切换效果
    effect: 'slide',
})
var mySwiper = new Swiper('.mid-slideshow', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 自动播放
    // 切换效果
    effect: 'slide',
})
