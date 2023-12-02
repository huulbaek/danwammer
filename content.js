const offensiveList = [
  "dan jørgensen",
  "thorborg",
  "wammen",
  "jarlov"
];
const match = offensiveList.join("|");

const doStuff = () => {
  const lis = document.querySelectorAll("li");
  Array.from(lis).forEach(function(li) {
    const r = li.textContent.match(new RegExp(match, "gi"));
    if (r !== null) {
      li.style.display = "none";
    }
  });
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'TabUpdated') {
     doStuff();
  }
});
