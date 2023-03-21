// event to run execute.js content when extension's button is clicked
// chrome.action.onClicked.addListener(execScript);
chrome.action.onClicked.addListener(onClick);

var tabURI;

async function onClick() {
  const tabId = await getTabId();
  chrome.tabs.sendMessage(tabId, {
    type: "RENDER_EXTUI"
  });
}

var backend_url = 'https://app.wa-my.com/';
var whatsapp_tad;

async function getTabId() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});
  return (tabs.length > 0) ? tabs[0].id : null;
}

const onAllowedSite = (tabId, source_name) => {
  chrome.storage.sync.set({ "extensionPage": tabId }, function(){});

  chrome.tabs.sendMessage(tabId, {
    type: "RENDER_EXTUI",
  });
}

function switchToTab(url) {
  chrome.tabs.query({url: url}, function(tabs) {
    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, {active: true});
    } else {
      chrome.tabs.create({
        url: `https://web.whatsapp.com/`,
        selected: true,
      })
    }
  });
}

function isPhoneNumber(text) {
  const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneRegex.test(text);
}

chrome.contextMenus.create({
  title: "Wamy Send Message",
  id: "wamyextensionoption",
  contexts: ["selection"]
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "wamyextensionoption") {

      // check if text is a phone number
      // redirect to whatsapp tab and send message   
      if (isPhoneNumber(info.selectionText)) {
        switchToTab("https://web.whatsapp.com/");
        chrome.tabs.sendMessage(tabId, {
          type: "SEND_MESSAGE_FROM_OUTSITE",
          number: info.selectionText
        });
  
      } else {
        return;
      }
   
    }
  });


  if (tab.url && tab.url.includes("web.whatsapp.com/")) {
    whatsapp_tad = tabId;
    onAllowedSite(tabId);
  }

  if (changeInfo.status == 'complete') {
    // detect backend user login
    tabURI = tab.url;
    let urlToUse = tabURI.includes(`${backend_url}`) ? tabURI : backend_url
    if (tab.url && tab.url === urlToUse) {
      chrome.cookies.get({ url: `${urlToUse}`, name: 'user_logged_out' },
        function (cookie) {
          if (cookie) {
            // user logged out via backend
            chrome.storage.sync.remove(["access_token","refresh_token"],function() {})
          }
          else {
            chrome.cookies.get({ url: `${urlToUse}`, name: 'access' },
              function (cookie) {
                if (cookie) {
                  // set access token
                  chrome.storage.sync.set({ "access_token": cookie.value }, function(){
                    chrome.cookies.get({ url: `${urlToUse}`, name: 'refresh' },
                      function (cookie) {
                        // set access token
                        chrome.storage.sync.set({ "refresh_token": cookie.value }, function(){
                        });
                      }
                    );
                  });
                }
              }
            );
          }
      })
      // close tab and return
      // chrome.tabs.remove(tab.id, function() {});
    }

  }
})

function openTab(url) {
  chrome.tabs.create({
    url: `${backend_url}${url}`,
    selected: true,
  })
}

async function messageListener(request, sender, sendResponse) {
  if (request.type === 'LOGIN') {
    openTab("auth/login/");
  }
  else if (request.type === 'REGISTER') {
    openTab("auth/register/");
  }
  else if (request.type === "EXTENSION_OPENED") {
    const tabId = await getTabId();

    chrome.tabs.sendMessage(tabId, {
      type: "RENDER_EXTUI"
    });
  }
  else if (request.type === "NEWNUMBER") {
    chrome.tabs.create({
      url: request.url,
      selected: true,
    })
  }
  else if (request.type === "UPGRADE") {
    openTab(`pricings/`);
  }
  else if (request.type === "NEWTAB") {
    openTab(`/`);
  }
  sendResponse();
}

chrome.runtime.onMessage.addListener(messageListener);