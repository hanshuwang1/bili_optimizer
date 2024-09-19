// ==UserScript==
// @name         bili_optimizer
// @namespace    http://tampermonkey.net/
// @version      2024-09-19
// @description  1.自动展开视频简介
// @author       Han Shuwang
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/list/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==
// 添加WEBHOOK
(function() {
    'use strict';

    // Your code here...
    var unfold_flag = 0;
    setTimeout(() => {
        let desciption_unfold = document.getElementsByClassName('toggle-btn');
        if(desciption_unfold&&unfold_flag==0){
            if(desciption_unfold[0].textContent == '展开更多')
            {
                desciption_unfold[0].click();
                unfold_flag = 1;
                console.log("已展开");
            }
        }
    }, 4000);//延时4秒，可自己修改，单位ms
})();