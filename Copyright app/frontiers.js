var str = document.querySelector(".AbstractSummary p:nth-child(6)").innerText;
var res = str.replace("Copyright ©", "©");
var card_id1 = res;
if (card_id1 !== null) {
	var cardId1 = card_id1;
}
	var node1 = document.createElement("p");
	node1.id = "copyleft";
	var text1 = document.createTextNode(cardId1,"color: green; font-size: large");
	
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
document.querySelector(".JournalAbstract h1").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });