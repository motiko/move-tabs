chrome.commands.onCommand.addListener(function(command) {
  let move = 1
  let newIndex = undefined
  if(command === "move-left") move = -1
  if(command === "move-first") newIndex = 0
  if(command === "move-last") newIndex = -1
  chrome.tabs.query( {active: true, currentWindow: true},([currentTab]) => {
    if(newIndex != undefined){
      chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      return
    }
    if(currentTab){
      chrome.tabs.getAllInWindow(currentTab.windowId, (tabs)=> {
          newIndex = currentTab.index + move
          if(newIndex >= tabs.length) newIndex = 0
          chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      })
    }
  })
})
