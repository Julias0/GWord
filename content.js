$(function () {
    // this is to listen for messages from the popup
    chrome.runtime.onMessage.addListener(
        // this will execute for all messages
        function (request, sender, sendResponse) {
            if (request.getMailTitles) {
                // getting all emailNodes which have the data-thread-id
                var emailNodes = document.querySelectorAll('span[data-thread-id]');
                // document.querySelectorAll gives a NodeList which dosnt have map
                // So, casting it to an array is required
                var emailNodesArray = Array.from(emailNodes);
                // Taking out the inner Text from the emailNodes
                var emailArray = emailNodesArray.map(emailNode => emailNode.innerText);
                // passing the message back to the popup.js
                sendResponse({ emailSubjects: emailArray });
            }
        });
});