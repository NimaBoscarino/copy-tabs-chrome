chrome.commands.onCommand.addListener(function(command) {
  if (command == "copy-tabs") {
    chrome.tabs.query({ currentWindow: true, highlighted: true }, function(tabs) {
      const tabListMarkdown = tabs.map(tab => {
        return (
          `- [${tab.title}](${tab.url})`
        )
      }).join('\n')

      console.log(tabListMarkdown)

      chrome.tabs.create({
        url: `file://///Users/helloworld123/Documents/copy-tabs/copy.html?text=${encodeURIComponent(tabListMarkdown)}`
      })
    });
  }
});
