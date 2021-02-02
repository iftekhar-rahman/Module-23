/*
==Falsy
1. false
2. 0
3. ""
4. undefined
5. null
6. NaN
==Truthy
'0', ' ', {}, []
*/ 
const name = undefined;
if(name){
    console.log("Condition is True");
} else{
    console.log("Condition is False");
}