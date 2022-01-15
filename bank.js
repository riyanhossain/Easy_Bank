const startbtn=document.getElementById("start");
startbtn.addEventListener("click",function () {
    let container=document.getElementById('container');
    container.style.display="none";
    let cal=document.getElementById("cal");
    cal.style.display="block";
})
const deposit=document.getElementById("start1");
deposit.addEventListener("click",function () {
    let deposit=document.getElementById("deposit").value;
    deposit=parseFloat(deposit);
    add(deposit,"d1");

    add(deposit,"bal");
    document.getElementById("deposit").value="";
    
});
const wit =document.getElementById("start2");
wit.addEventListener("click",function() {
    let wit=document.getElementById("withdraw").value;
    let wit1=parseFloat(wit);
    add(wit1,"with1");
    add(-1*wit1,"bal");
    document.getElementById("withdraw").value="";
})
function add(deposit,bal) {
    let d1=document.getElementById(bal).innerText;
    d1=parseFloat(d1);
    let totolb=d1+deposit;
    document.getElementById(bal).innerText=totolb;
}
