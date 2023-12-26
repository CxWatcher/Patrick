// ==UserScript==
// @name         Chat Message Sender Duhh
// @namespace    Rishi Big Brain
// @version      0.1
// @description  Patrick
// @author       Rishi Sunak
// @match        kick.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var messageToSend = "[emote:37231:PatrickBoo]";

    function typeMessage() {
        var chatInput = document.getElementById('message-input');

        if (chatInput) {
            var index = 0;

            function typeCharacter() {
                chatInput.innerText += messageToSend[index];
                index++;
                if (index === messageToSend.length) {
                    simulateEnterKey();
                } else {
                    setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds per character)
                }
            }
            typeCharacter();
        }
    }

    function simulateEnterKey() {
        var event = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13,
            bubbles: true
        });

        var targetElement = document.getElementById('message-input');

        if (targetElement) {
            targetElement.dispatchEvent(event);
            setTimeout(typeMessage, 4200); // Adjust the delay between messages
        }
    }
    setTimeout(typeMessage, 2000);

})();
