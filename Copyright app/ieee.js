//IEEExplore ieee.org
var node1 = document.createElement("p");
node1.id = "copyleft";
	var title = document.querySelector(".u-pb-1.stats-document-abstract-publishedIn a").innerText;
	var text1 = document.createTextNode("© 20xx IEEE. This is an author produced version of a paper published in " + title + ". Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works. Uploaded in accordance with the publisher's self-archiving policy.");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

	var h = document.querySelector(".document-title");
    h.insertBefore(node1, h.childNodes[0])

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });