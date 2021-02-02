let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/** 
 * 你好，我是一名前端新人！
 * 我想使用JS动态的画一个太极图 
 **/
#div1{
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border-radius:50%;
    width: 200px;
    height: 200px;
    border:1px solid red;
}
/**
 * 太极图是一黑一白
 **/
#div1{
    border:none;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
/**
 * 再来两个神秘的小球
 **/ 
#div1::after,#div1:before{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
}
#div1::after{
    top:0;
}
#div1:before{
    bottom:0;
}
/**
 * 在小球中间画两个点
 **/
#div1::after{
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::before{
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ""
let n = 0
//用递归的方法实现setInterval
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        //当高度不够时，页面随着文字一起滚动向下
        window.scrollTo(0, 999999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 0)
}
step();
