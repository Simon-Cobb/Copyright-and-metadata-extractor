//chrome.runtime.onMessage.addListener(
 //function(request, sender, sendResponse) {
 //console.log(sender.tab ?
 //              "from a content script:" + sender.tab.url :
 //           "from the extension");
//  if (request.message !== null) 
 //  sendResponse({farewell: "oooh golly gosh!"});
 //     else
 //    sendResponse({}); // snub them.
 // });
//chrome.runtime.sendMessage({from:"wrro"});

//var text = document.createTextNode("© 20xx [HOLDER]. This is an author produced version of a paper published in [JOURNAL]. Uploaded in accordance with the publisher's self-archiving policy.","color: green; font-size: large");
//	node.appendChild(text);
//document.querySelector('textarea#c206_note').appendChild(text);


//var text = global.localStorage.getItem("myData");
//document.querySelector('textarea#c206_note').appendChild(text);
//(function (global) {
//	document.getElementById("output1").value = global.localStorage.getItem("myData");
//}(window));

chrome.storage.local.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);       
		  var text = document.createTextNode(result.key);
document.querySelector('textarea#c206_note').appendChild(text);
});

document.querySelector('textarea#c206_note').onclick = function() {copyFunction()};
function copyFunction() {
  /* Get the text field */
  var copyText = document.querySelector('textarea#c206_note');
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");
  /* Alert the copied text */
//  alert("Copied the text: " + copyText.value);
}

document.querySelector('textarea#c206_note').ondblclick = function() {changeFunction()};
function changeFunction() {
  document.querySelector('textarea#c206_note').innerText = "© 20xx [HOLDER]. This is an author produced version of a paper published in [JOURNAL]. Uploaded in accordance with the publisher's self-archiving policy.";
}
