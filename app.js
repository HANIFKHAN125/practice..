function add(){
    let first=document.getElementById("fn").value
    let last=document.getElementById("fn").value
    let output=parseFloat(first)+parent(last)
    document.getElementById("output").innerHTML=output
}
function sub(){
    let first=document.getElementById("fn").value
    let last=document.getElementById("fn").value
    let output=parseFloat(first)-parent(last)
    document.getElementById("output").innerHTML=output
}
function mul(){
    let first=document.getElementById("fn").value
    let last=document.getElementById("fn").value
    let output=parseFloat(first)*parent(last)
    document.getElementById("output").innerHTML=output
}
function div(){
    let first=document.getElementById("fn").value
    let last=document.getElementById("fn").value
    let output=parseFloat(first)/parent(last)
    document.getElementById("output").innerHTML=output
}