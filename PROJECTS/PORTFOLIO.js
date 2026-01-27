let btn=portfolio.querySelector("btn")
let body=portfolio.querySelector("body")
let isdark=true
btn.addEventListener("Mode",function()
{
// body.style.backgroundColor='pink'
// body.style.backgroundColor='plum'
// body.style.backgroundColor='aqua'
// body.style.backgroundColor=' green'
if(isdark)
{
    body.style.backgroundColor='black'
}
else
{
    body.style.backgroundColor='white'

}
isdark=!isdark
}
)