document.addEventListener("DOMContentLoaded", () => {
    function renderUI () {        
        chrome.runtime.sendMessage({
            type: 'EXTENSION_OPENED'
        });
    }
    renderUI();
});