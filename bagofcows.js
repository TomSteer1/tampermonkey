// ==UserScript==
// @name        Bag of cows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatic Binary Bag Of Cows Solver
// @author       tomsteer1
// @match        http://www.bagofcows.com/binary/*&question_num=*
// @icon         https://tomsteer.me/favicon.ico
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/TomSteer1/tampermonkey/master/bagofcows.js
// @downloadURL  https://raw.githubusercontent.com/TomSteer1/tampermonkey/master/bagofcows.js
// ==/UserScript==

(function() {
    for(let form of document.getElementsByTagName("form"))
    {
        if(form[1].value == "Check")
        {
            form[0].value = unsafeWindow.decode(form[1].getAttribute("onclick").split("'")[1]);
            form[0].className = "answerbox correct";
        }
    }
})();
