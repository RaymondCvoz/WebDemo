function handleEvent(evt) {
    var event = window.event ? window.event : evt;
    var target = event.target ? event.target : event.srcElement;
    for (var i = 0; i < images.length; i++) {
        if (images[i] == target) break;
    }
    setTimeout(function () { go(i); }, 200);
}

function go(i) {
    const src_str = images[i].src.toString();
    const len = src_str.length;
    let bar_src = src_str.substring(0, len - 4);
    bar_src += "_bar.png";
    document.getElementById("showpic").src = bar_src;
    document.getElementById("bar_link").href = links[i].href;

    // document.getElementById("show").style.display = "";
    // var next = (i + 1) % images.length;
    // var prev = (i - 1 + images.length) % images.length;
}

// 记录<img>对象的数组
var images = [];
var links = [];

// 初始化事件处理函数
function init() {
    // 所有的<img>元素
    var imgArr = document.getElementsByTagName("img");
    for (var i = 0; i < imgArr.length; i++) {
        // 找到所有class=img的<img>元素
        if (imgArr[i].className == "img") {
            // 保存在images数组中
            images.push(imgArr[i]);
            // 添加mouseover事件处理函数
            addEventListener(imgArr[i], "mouseover", handleEvent);
        }
    }

    var linkArr = document.getElementsByTagName("a");
    for (var i = 0; i < linkArr.length; i++) {
        // 找到所有class=img的<img>元素
        if (linkArr[i].id == "gallery_link") {
            // 保存在link数组中
            links.push(linkArr[i]);
        }
    }
}

// 添加事件处理函数，实现addEventListener对IE和DOM事件对象兼容
function addEventListener(ele, type, func) {
    if (ele.addEventListener) { 	// DOM兼容浏览器
        ele.addEventListener(type, func, false);
    }
    else { // IE
        ele.attachEvent("on" + type, func);
    }
}
