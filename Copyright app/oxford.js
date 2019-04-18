//Oxford University Press
var str = document.querySelector("div.copyright.copyright-statement").innerText;
var res = str.replace("All rights reserved. For permissions, please email: journals.permissions@oup.com", "");

if (res !== null) {
	var copyright = res;
}

var lic = document.querySelector("div.license").innerText;
var title = document.querySelector("#ContentColumn > div.content-inner-wrap > div.widget.widget-ArticleTopInfo.widget-instance-OUP_ArticleTop_Info_Widget > div > div > div.pub-history-wrap.clearfix > div:nth-child(1) > div > em").innerText;

if (lic !== null) {
	var license = lic;
} else { var license = " This is an author produced version of a paper published in " + title + ". Uploaded in accordance with the publisher's self-archiving policy."; }


var node1 = document.createElement("p");
	node1.id = "copyleft";
	
var text1 = document.createTextNode(copyright + " " + license);
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

var h = document.querySelector("#ContentColumn > div.content-inner-wrap > div.widget.widget-ArticleTopInfo.widget-instance-OUP_ArticleTop_Info_Widget > div > div > h1");
    h.insertBefore(node1, h.childNodes[0]);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });