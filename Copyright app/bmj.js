//bmj.com
var x = document.querySelector('.icon-article-info');
if(x)
{
   x.click();
}
var gatheredNodes1 = document.querySelector(".nlm-copyright-statement").innerText;
   var card_id1 = gatheredNodes1;
      console.log(card_id1);
if (card_id1 !== null) {
	var cardId1 = card_id1;
	}
	
	var node1 = document.createElement("p");
	node1.id = "copyleft";
	var title = document.querySelector(".highwire-cite-metadata-journal.highwire-cite-metadata").innerText;
	var text1 = document.createTextNode(cardId1 + " This is an author produced version of a paper published in " + title + ". Reuse of this manuscript version (excluding any databases, tables, diagrams, photographs and other images or illustrative material included where a another copyright owner is identified) is permitted strictly pursuant to the terms of the Creative Commons Attribution-Non-Commercial 4.0 International (CC-BY-NC 4.0) - https://creativecommons.org/licenses/by-nc/4.0/.","color: green; font-size: large");
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
document.querySelector(".highwire-cite-title").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });