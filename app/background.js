chrome.commands.onCommand.addListener(function(command) {
  let move = 1
  let newIndex = undefined
  if(command === "move-left") move = -1
  if(command === "move-one") newIndex = 0
  chrome.tabs.query( {active: true, currentWindow: true},([currentTab]) => {
    if(currentTab){
      if(newIndex != undefined){
        chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      }else{
        chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: currentTab.index + move})
      }

    }
  })

})
// chrome.tabs.getCurrent
// chrome.tabs.move(integer or array of integer tabIds, object moveProperties, function callback)
