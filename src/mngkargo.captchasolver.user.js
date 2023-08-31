// ==UserScript==
// @name         Mng Kargo Captcha Bypasser 
// @namespace    *.mngkargo.com.tr/*
// @version      0.1
// @description  It bypass MNG's Captch System.
// @author       Ömürcan Kaya
// @match        https://*.mngkargo.com.tr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mngkargo.com.tr
// @grant        none
// @downloadURL  https://github.com/omurcankaya/mngkargo-captcha-bypasser/raw/main/src/mngkargo.captchasolver.user.js
// @updateURL    https://github.com/omurcankaya/mngkargo-captcha-bypasser/raw/main/src/mngkargo.captchasolver.user.js
// ==/UserScript==
const getCaptcha = () => {
    if (document.getElementById('captcha1')) {
        document.getElementById('captcha1').children[1].value = document.getElementById('captcha1').children[0].children[1].textContent.split(' ').join('');
    }
    if (document.getElementById('captcha2')) {
        document.getElementById('captcha2').children[1].value = document.getElementById('captcha2').children[0].children[1].textContent.split(' ').join('');
    }

}

getCaptcha();
if (document.getElementById('captcha1')) {
    document.getElementById('captcha1').children[2].addEventListener('click', getCaptcha);
}
if (document.getElementById('captcha2')) {
    document.getElementById('captcha2').children[2].addEventListener('click', getCaptcha);
}
