var color;
function insert(){
var x = document.getElementById("myTextarea").value;
document.getElementById("demo").innerHTML = x;
}
var count=0;

function ax() {
    
    var vc= document.getElementById('checkBoxes');
    var vc1= document.getElementById('check').value;
    var check_value;
    check_value = vc1;
    var cor, p, br;
    cor=document.createElement("input");
    cor.id="a"+count;
    cor.type="checkbox";
    cor.check=null;
    cor.onclick = function () {
        var id1 = this.id;
        if(cor.check==true){
            cor.check=false;
            var ele = document.getElementById("1"+id1);
            ele.style.setProperty("text-decoration", "none"); 
            
        }
        else if(cor.check==null ||cor.check==false){
            cor.check=true;
            var ele = document.getElementById("1"+id1);
            ele.style.setProperty("text-decoration", "line-through");
        }
        ;
    };
    p =document.createElement("span");
    p.id="1a"+count;
    p.innerHTML =" " +check_value;
    br =document.createElement("br");
    vc.appendChild(cor);
    vc.appendChild(p);
    vc.appendChild(br);
    count=count+1;
}


