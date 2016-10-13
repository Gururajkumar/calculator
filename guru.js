function c(val)
{
document.getElementById("id").value=val;
}
function v(val)
{
document.getElementById("id").value+=val;
}
function e() 
{ 
try 
{ 
c(eval(document.getElementById("id").value)) 
} 
catch(e) 
{
c('Error') 
} 
}