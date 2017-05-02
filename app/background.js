chrome.commands.onCommand.addListener(function(command) {
  let move = 1
  if(command === "move-left") move = -1
  chrome.tabs.query( {active: true, currentWindow: true},([currentTab]) => {
    console.log(currentTab)
    if(currentTab){
      chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: currentTab.index + move})
    }
  })

})
// chrome.tabs.getCurrent
// chrome.tabs.move(integer or array of integer tabIds, object moveProperties, function callback)
