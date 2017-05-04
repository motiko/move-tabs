chrome.commands.onCommand.addListener(function(command) {
  let move = 1
  let newIndex = undefined
  if(command === "move-left") move = -1
  if(command === "move-first") newIndex = 0
  if(command === "move-last") newIndex = -1
  chrome.tabs.query( {active: true, currentWindow: true},([currentTab]) => {

    if(currentTab){
      if(newIndex != undefined){
        console.log(newIndex)
        chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      }else{
        chrome.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: currentTab.index + move})
      }

    }
  })

})
