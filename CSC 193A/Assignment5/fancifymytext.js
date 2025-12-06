function makeBigger(){
    alert("Hello, World!");

    document.getElementById("textArea").style.fontSize = "24pt";
}

function moo(){
    let textArea = document.getElementById("textArea");
    text = textArea.value.toUpperCase();

    let parts = text.split(".");
    
    for (let i = 0; i < parts.length; i++){
        parts[i] = parts[i].trim();
        if (parts[i].length > 0){
            parts[i] += "-MOO"; 
        } 
    }
    textArea.value = parts.join(". ");
}

function fancyShmancy(){
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}

function boringBetty(){
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
}