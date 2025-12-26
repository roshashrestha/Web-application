//item1
const item1=document.getElementsByClassName("item1")[0];
item1.addEventListener("mouseenter",function(){
    item1.style.backgroundColor="pink";
    item1.innerText="I'm pink";
    item1.style.color="white";
    center(item1);
});
item1.addEventListener("mouseleave",function(){
    item1.style.backgroundColor = "white";
    item1.innerText="";
});

//item2
const item2=document.getElementsByClassName("item2")[0];
item2.addEventListener("mouseenter",function(){
    item2.style.backgroundColor="black";
    item2.innerText="I'm black";
    item2.style.color="white";
    center(item2);
});
item2.addEventListener("mouseleave",function(){
    item2.style.backgroundColor="white";
    item2.innerText="";
});

//item3
const item3 = document.getElementsByClassName("item3")[0];
item3.addEventListener("mouseenter",function(){
    item3.style.backgroundColor = "midnightblue";
    item3.innerText="I'm midnightblue";
    item3.style.color="white";
    center(item3);
});
item3.addEventListener("mouseleave", function () {
    item3.style.backgroundColor = "white";
    item3.innerText="";
});

//item4
const item4 = document.getElementsByClassName("item4")[0];
item4.addEventListener("mouseenter", function () {
    item4.style.backgroundColor = "darkred";
    item4.innerText="I'm darkred";
    item4.style.color="white";
    center(item4);
});
item4.addEventListener("mouseleave", function () {
    item4.style.backgroundColor = "white";
    item4.innerText="";
});

//centralise
function center(x)
{
    x.style.display="flex";
    x.style.alignItems="center";//vertically centralised
    x.style.justifyContent="center";//horizontally centralised
    x.style.fontSize="40px";
}
