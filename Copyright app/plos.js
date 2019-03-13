//PLOS
var str = document.querySelector(".articleinfo").innerText;
var res = str.split("Copyright: ")[1].split(/\n/)[0];
if (res !== null) {
	var copyright = res;
}

	var node1 = document.createElement("p");
	node1.id = "copyleft";	
	
	var text = document.createTextNode(copyright);
	node1.appendChild(text);
	node1.style.cssText="line-height:1.2;font-size:10px;color:#ff0000;border:1px solid #0000ff;background-color:#f0f0f0;"
	
var h = document.querySelector("h1#artTitle");
    h.insertBefore(node1, h.childNodes[0]);
	
var txt = document.getElementById("copyleft").innerText;
chrome.storage.local.set({key: txt}, function() {
          console.log('Copyright statement set to: ' + txt);
        });