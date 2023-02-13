function getInputValueById(inputId){
    const  inputField=document.getElementById(inputId);
    const inputFieldString=inputField.value
    const inputFieldAmount=parseFloat(inputFieldString);
    inputField.value=''
    if(isNaN(inputFieldAmount)){
        alert("Please give the dight");
        return;
    }
    
    return  inputFieldAmount;
}

function getElementValuebyId(elementById){
  const element=document.getElementById(elementById);
  const elementValueString=element.innerText;
  const textElement_value=parseFloat(elementValueString);
  return textElement_value; 
}


function setTextElementValueById(elementId,newValue){
    const text_Element=document.getElementById(elementId);
    text_Element.innerText=newValue;
}

