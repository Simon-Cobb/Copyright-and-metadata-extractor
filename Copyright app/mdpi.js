window.onload = function() {myFunction()};
function myFunction() {
if(document.URL.indexOf("/htm#")==-1)
        {
			  window.open(window.location.href + "/htm#", "_self")
        }
}
	var node1 = document.createElement("p");
	node1.id = "copyleft";
var cardId1 = document.querySelector("setion#html-copyright").innerText;
	var text1 = document.createTextNode(cardId1);
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
document.querySelector("div#html-article-title").appendChild(node1);

var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });