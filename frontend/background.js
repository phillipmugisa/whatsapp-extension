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

var backend_url = 'http://localhost//';

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

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  if (tab.url && tab.url.includes("web.whatsapp.com/")) {
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