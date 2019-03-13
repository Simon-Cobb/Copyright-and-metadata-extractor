//Springer - https:link.springer.com
var str = document.querySelector("div.ArticleCopyright").innerText;
if (str !== null) {
	var copyright = str;
}

var node1 = document.createElement("p");
	node1.id = "copyleft";
var title = document.querySelector("div.enumeration span").innerText;
var text1 = document.createTextNode(copyright + ". This is an author produced version of a paper published in " + title + ". Uploaded in accordance with the publisher's self-archiving policy.");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

var h = document.querySelector(".MainTitleSection");
    h.insertBefore(node1, h.childNodes[0]);	

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });
		
var node4 = document.createElement("p");
	node4.id = "betterKWs";
	var str = document.querySelector("div.KeywordGroup").innerHTML;
res = str.trim().replace(/<h2.+<\/h2><span class="Keyword">/,"").split(/<span class="Keyword">/).join("; ").replace(/(<span|<span>|<\/span>)/g,"").replace(/&nbsp;/g,"");

var text4 = document.createTextNode(res);
	node4.appendChild(text4);
	node4.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
	document.querySelector("div.KeywordGroup").appendChild(node4);