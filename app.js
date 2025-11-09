function getInput(){
    var n1 = prompt("Enter the first number")
    var n2 = prompt("Enter the second number")
    var op = prompt("Enter the Operator")
    var checkType = checkNum(n1,n2)
    if(checkType == true){
        var result = opCheck(Number(n1),Number(n2),op)
        if(result != null){
            document.writeln(`Number 1 : ${n1} <br>`)
            document.writeln(`Number 2 : ${n2} <br>`)
            document.writeln(`Result : ${n1} ${op} ${n2} = ${result}`)
        }
    }
    else{
        alert("Enter only number")
    }
}
function checkNum(a,b){
    if(isNaN(a) || isNaN(b) || a == "" || b == ""){
        return false;
    }
    else{
        return true
    }

}
function opCheck(a,b,op){
    if(op == "+"){
        return Add(a,b)
    }
    else if(op == "-"){
        return Sub(a,b)
    }
    else if(op == "*"){
        return Prod(a,b)
    }
    else if(op == "/"){
        return Div(a,b)
    }
    else{
        return null
    }
}
function Add(a,b){
    return a+b
}
function Sub(a,b){
    return a-b
}
function Prod(a,b){
    return a*b
}
function Div(a,b){
    return a/b
}

getInput()


function Fact(){
    var result = 1
    var num = prompt("Enter any number: ")
    for (i = num ; i>0 ; i--){
        result = result * i
    }
    console.log(result)
}
Fact()