function cleanText() {
    x = document.getElementById("input-textarea").value;
    if(x == ""){
        document.getElementById("cleaned-text").style.display = "block";
        document.getElementById("cleaned-text").innerText = ":(";
        document.getElementById('copy').style.display = "none";
    }else{
        document.getElementById("cleaned-text").style.display = "block";
        x = x.replace(/[\r\s\n]+/g, " ");
        console.log(x);
        document.getElementById("cleaned-text").innerText = x;
        document.getElementById('copy').style.display = "block";
    }
}

function clearText() {
    console.log(document.getElementById("input-textarea").value);
    document.getElementById('input-textarea').value = "";
    document.getElementById("copied-check").innerText = "";
    document.getElementById("check").style.display = "none";
    document.getElementById("cleaned-text").style.display = "none";
    document.getElementById('copy').style.display = "none";
}

function copia(text) {
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
function copyToClipboard() {
    var result = copia(document.getElementById("input-textarea").value);
    console.log("copied:", result);
    document.getElementById("check").style.display = "block";
    document.getElementById("copied-check").innerText = " Copied!";
}
