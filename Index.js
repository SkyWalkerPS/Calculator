//////////////TOOOLSSSSS///////////
var num = document.getElementsByClassName("num");
var operator = document.getElementsByClassName("operator");



function printOutputPresent(num){
    document.getElementById("present").innerText = num;
}
function getPresent(){
    return document.getElementById("present").innerText;
}



function printOutputPast(num){
    document.getElementById("past").innerText = num;
}
function getPast(){
    return document.getElementById("past").innerText;
}


function getFormat(num){
    if(num=="-")return "";
    var n = Number(num);
    n = n.toLocaleString("en");
    return n;
}

function revGetFormat(num){
    return num.replace(/,/g,'');
}




///////////////////Operations/////////////////////
for(var i=0;i<num.length; i++){
    num[i].addEventListener('click', function(){
        var output = revGetFormat(getPresent()) + this.id;
        printOutputPresent(getFormat(output));
    })


}

for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printOutputPast("");
            printOutputPresent("");
        }
        else if(this.id=="backspace"){
            var n=revGetFormat(getPresent());
            n = n.substr(0, n.length-1);
            printOutputPresent(getFormat(n));
        }
        else if(this.id=="="){
            if(getPresent()!="" && getPast()!=""){
                var n=getPast() + revGetFormat(getPresent());
                n=eval(n);
                printOutputPast("");
                printOutputPresent(getFormat(n));
            }
        }
        else {
            if(getPresent()!=""){
            var n = revGetFormat(getPresent());
            n = eval(getPast()+n);
            n = n+this.id;
            printOutputPresent("");
            printOutputPast(n);
        }}
    })


}