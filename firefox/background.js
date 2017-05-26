browser.commands.onCommand.addListener(function(command) {
  let move = 1
  let newIndex = undefined
  if(command === "move-left") move = -1
  if(command === "move-first") newIndex = 0
  if(command === "move-last") newIndex = -1
  browser.tabs.query( {active: true, currentWindow: true}).then( ([currentTab]) => {
    if(newIndex != undefined){
      browser.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      return
    }
    if(currentTab){
      browser.tabs.query({currentWindow: true}).then( (tabs)=> {
          newIndex = currentTab.index + move
          if(newIndex >= tabs.length) newIndex = 0
          browser.tabs.move(currentTab.id, {windowId:currentTab.windowId, index: newIndex})
      })
    }
  })
})
