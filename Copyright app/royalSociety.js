//The Royal Society
var str = document.querySelector(".copyright-statement").innerText;
if (str !== null) {
	var copyright = str;
}
var str = document.querySelector(".license-p").innerText;
var res = str.replace(". All rights reserved.", ".");
var license = res;

	var node1 = document.createElement("p");
	node1.id = "copyleft";
	var title = document.getElementsByName("citation_journal_title")[0].content;
	var text1 = document.createTextNode(copyright + ". " + license + " This is an author produced version of a paper published in " + title + ". Uploaded in accordance with the publisher's self-archiving policy.");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

var h = document.querySelector("h1");
    h.insertBefore(node1, h.childNodes[0]);	

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });
