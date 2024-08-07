
   /*
   var input = document.getElementsByName("input");
    var output = document.getElementsByName("output"); 
    var inputtype = document.getElementsByName("inputtype");
    var outputtype = document.getElementsByName("outputtype");
 
    var inputvalue;
    var outputvalue;
     
    input.addEventListener("keyup",convert);
    inputtype.addEventListener("change",convert);
    outputtype.addEventListener("change",convert);

    inputvalue=inputtype.value;
    outputvalue=outputtype.value;



function convert()
{
    inputvalue=inputtype.value;
    outputvalue=outputtype.value;
       
    if(inputvalue==="kilometer" && outputvalue==="meter"){
        output.value=Number(input.value)*1000;
    }
    if(inputvalue==="kilometer" && outputvalue==="centimeter"){
        output.value=Number(input.value)*100000;
    }
    if(inputvalue==="kilometer" && outputvalue==="millimeter"){
        output.value=Number(input.value)*1000000;
    }

    if(inputvalue==="meter" && outputvalue==="kilometer"){
        output.value=Number(input.value)*0.001;
    }
    if(inputvalue==="meter" && outputvalue==="centimeter"){
        output.value=Number(input.value)*100;

    }
    if(inputvalue==="meter" && outputvalue==="millimeter"){
        output.value=Number(input.value)*1000;
    }

    if(inputvalue==="centimeter" && outputvalue==="meter"){
        output.value=Number(input.value)*0.01;
    }
    if(inputvalue==="centimeter" && outputvalue==="kilometer"){
        output.value=Number(input.value)*0.00001;
    }
    if(inputvalue==="centimeter" && outputvalue==="millimeter"){
        output.value=Number(input.value)*10;
    }
    if(inputvalue==="millimeter" && outputvalue==="kilometer"){
        output.value=Number(input.value)*0.000001;
    }
    if(inputvalue==="millimeter" && outputvalue==="meter"){
        output.value=Number(input.value)*0.001;
    }
    if(inputvalue==="millimeter" && outputvalue==="centimeter"){
        output.value=Number(input.value)*0.1;
    }
    if(inputvalue==="meter" && outputvalue==="meter"){
        output.value=Number(input.value);
    }

    if(inputvalue==="centimeter" && outputvalue==="centimeter"){
        output.value=Number(input.value);
    }
    if(inputvalue==="millimeter" && outputvalue==="millimeter"){
        output.value=Number(input.value);
    }
    if(inputvalue==="kilometer" && outputvalue==="kilometer"){
        output.value=Number(input.value);
    }
    if(inputvalue==="miles" && outputvalue==="miles"){
        output.value=Number(input.value);
    }
    if(inputvalue==="kilomiles" && outputvalue==="kilomiles"){
        output.value=Number(input.value);

    }

}
*/
    
function convert(m){
    x=document.getElementById("miles");
    y=document.getElementById("km");
    m=parseInt(x.value);
    y.value=m*1.609;

}