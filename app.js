function  setTitle(myTtile){
    let title = document.getElementById('my-title');
    title.textContent = myTtile;
}
function setDescription(mydes){
    let title = document.getElementById('my-description');
    title.textContent = mydes;
}
function setBackgroundColor(color) {
    document.body.style.background = color;
 }
function setFontColor(txtcolor){
    let content = document.getElementById('content');
    content.style.color = txtcolor;
}
function setTheme(themes){
    if(theme == "light"){
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
    else if(theme == "dark"){
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}