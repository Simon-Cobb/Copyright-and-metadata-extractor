//MDPI
window.onload = function() {myFunction()};
function myFunction() {
if(document.URL.indexOf("#")==-1)
        {
			  window.open(window.location.href + "/htm#")
        }
}
	var node1 = document.createElement("p");
	node1.id = "copyleft";
var cr = document.querySelector("setion#html-copyright").innerText;
	var text1 = document.createTextNode(cr);
	node1.appendChild(text1);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"

	var h = document.querySelector("div#html-article-title");
    h.insertBefore(node1, h.childNodes[0])
	
var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });
