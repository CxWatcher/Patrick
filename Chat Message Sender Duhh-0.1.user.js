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

    // Hardcoded message
    var messageToSend = "[emote:37231:PatrickBoo]";

    // Function to simulate typing a message
    function typeMessage() {
        // Find the chat input element by ID (replace with the actual selector)
        var chatInput = document.getElementById('message-input');

        // Simulate typing each character with a delay
        if (chatInput) {
            var index = 0;

            function typeCharacter() {
                // Simulate typing a character
                chatInput.innerText += messageToSend[index];

                // Move to the next character
                index++;

                // If all characters are typed, simulate pressing the "Enter" key and exit
                if (index === messageToSend.length) {
                    simulateEnterKey();
                } else {
                    // Otherwise, call the function again after a delay
                    setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds per character)
                }
            }

            // Start typing
            typeCharacter();
        }
    }

    // Function to simulate pressing the "Enter" key
    function simulateEnterKey() {
        var event = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            which: 13,
            keyCode: 13,
            bubbles: true
        });

        // Find the target element (replace with the actual selector)
        var targetElement = document.getElementById('message-input');

        // Dispatch the keyboard event on the target element
        if (targetElement) {
            targetElement.dispatchEvent(event);

            // After pressing Enter, call the typeMessage function again after a delay for the next iteration
            setTimeout(typeMessage, 4200); // Adjust the delay between messages
        }
    }

    // Call the typeMessage function after a delay (adjust as needed)
    setTimeout(typeMessage, 2000);

})();
