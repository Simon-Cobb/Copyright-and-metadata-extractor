//BMC
//https://*.biomedcentral.com/
var str = document.querySelector("p.Copyright").innerText;

if (str !== null) {
	var copyright = str;
}
	var node1 = document.createElement("p");
	node1.id = "copyleft";
	var license = document.querySelector(".License").innerText;
	var text1 = document.createTextNode(copyright + ". " + license);
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

var h = document.querySelector(".ArticleTitle");
    h.insertBefore(node1, h.childNodes[0]);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });
