document.getElementById("stopBtn").disabled = true; 

document.getElementById("startBtn").onclick = function() {
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false; 
}

document.getElementById("stopBtn").onclick = function() {
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").disabled = false; 
}

document.getElementById("font-size").onchange = function() {
    var selector = document.getElementById("font-size"); 
    var fontSize = selector.options[selector.selectedIndex].value;

    console.log(fontSize)
    console.log(document.getElementById("textarea").style.fontSize)
    document.getElementById("textarea").style.fontSize = fontSize + "px";
}