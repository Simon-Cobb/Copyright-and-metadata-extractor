var node1 = document.createElement("p");
node1.id = "copyleft";
	var title = document.querySelector("h1").innerText;
	var text1 = document.createTextNode("© 20xx Informa UK Limited, trading as Taylor & Francis Group. This is an author produced version of a paper published in " + title + ". Uploaded in accordance with the publisher's self-archiving policy.","color: green; font-size: large");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
document.querySelector(".NLM_article-title.hlFld-title").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });