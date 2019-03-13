//BMJ - bmj.com
var x = document.querySelector('.icon-article-info');
if(x)
{
   x.click();
}
var str = document.querySelector(".nlm-copyright-statement").innerText;

if (str !== null) {
	var copyright = str;
	}
	
	var node1 = document.createElement("p");
	node1.id = "copyleft";
	
	var title = document.querySelector(".highwire-cite-metadata-journal.highwire-cite-metadata").innerText;
	var text1 = document.createTextNode(copyright + " This is an author produced version of a paper published in " + title + ". Reuse of this manuscript version (excluding any databases, tables, diagrams, photographs and other images or illustrative material included where a another copyright owner is identified) is permitted strictly pursuant to the terms of the Creative Commons Attribution-Non-Commercial 4.0 International (CC-BY-NC 4.0) - https://creativecommons.org/licenses/by-nc/4.0/.");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
	
var h = document.querySelector(".highwire-cite-title");
    h.insertBefore(node1, h.childNodes[0]);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });