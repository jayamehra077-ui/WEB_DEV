let btn=document.querySelector("button")
let body=document.querySelector("body")
let isdark=true
btn.addEventListener("click",function()
{
// body.style.backgroundColor='pink'
// body.style.backgroundColor='plum'
// body.style.backgroundColor='aqua'
// body.style.backgroundColor=' green'
if(isdark)
{
    body.style.backgroundColor='plum'
}
else
{
    body.style.backgroundColor='aqua'

}
isdark=!isdark
}
)