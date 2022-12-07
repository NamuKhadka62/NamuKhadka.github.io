var temp = '';
function quote(){
    fetch('https://api.quotable.io/random').then(r=>r.json())
    .then(d=>{console.log(d);display_quote(d)})
    .then(document.getElementById('quotebutton').innerHTML = 'Get Another Quote');
}

function display_quote(d){
    document.getElementById('quotespace').innerHTML = d.content;
    document.getElementById('quoteauthor').innerHTML = '-' + d.author;
    document.getElementById('quotehistory').innerHTML = '<p>'+d.content+'<br><i>'+ d.author+'</i></p>' + temp;
    temp = document.getElementById('quotehistory').innerHTML;
}


function history() {
    const targetDiv = document.getElementById("historyarea");
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    } else {
      targetDiv.style.display = "block";
    }
}