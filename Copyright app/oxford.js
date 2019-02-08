var str = document.querySelector("div.copyright.copyright-statement").innerText;
var res = str.replace("All rights reserved. For permissions, please email: journals.permissions@oup.com", "");
var card_id1 = res;
if (card_id1 !== null) {
	var cardId1 = card_id1;
}

	var node1 = document.createElement("p");
	node1.id = "copyleft";
	var title = document.querySelector("#ContentColumn > div.content-inner-wrap > div.widget.widget-ArticleTopInfo.widget-instance-OUP_ArticleTop_Info_Widget > div > div > div.pub-history-wrap.clearfix > div:nth-child(1) > div > em").innerText;
	var text1 = document.createTextNode(cardId1 + " This is an author produced version of a paper published in " + title + ". Uploaded in accordance with the publisher's self-archiving policy.","color: green; font-size: large");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
document.querySelector("#ContentColumn > div.content-inner-wrap > div.widget.widget-ArticleTopInfo.widget-instance-OUP_ArticleTop_Info_Widget > div > div > h1").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });