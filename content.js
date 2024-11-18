const offensiveList = [
  "dan jørgensen",
  "thorborg",
  "wammen",
  "jarlov",
  "tesfaye",
  "jakob engel-schmidt",
  "lars løkke",
  "trump"
];
const match = offensiveList.join("|");

const doStuff = () => {
  const lis = document.querySelectorAll('li, [role="listitem"]');
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
