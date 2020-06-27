function getNumber(num){
    // document.form.textview.value=document.form.textview.value+num;
    var result=document.getElementById("result");
    result.value += num;

}

function clearResult(){
    var result=document.getElementById("result");
    result.value="";
}

function getResult(){
    var result=document.getElementById("result");
    if(result){
    result.value = eval(result.value);
    }
}


// ascii code:
// var a ="A";
//  a.charCodeAt()
// output: 65 