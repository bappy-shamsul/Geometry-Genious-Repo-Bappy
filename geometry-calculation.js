function setBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  function inputValue(inputId){
    const colorChanger = document.getElementById(inputId);
    const colorChangerStr = colorChanger.value;
    // colorChangerStr = setBg(inputId);
    colorChangerFinal = parseInt(colorChangerStr);
    return colorChangerFinal;
  }

  function textValue(input){
    const textValues = document.getElementById(input);
    const textValuesStr = textValues.innerText;
    textValuesFinal = parseInt(textValuesStr);
    return textValuesFinal;
  }

  // document.getElementById('card-body').addEventListener("click",function(){
  //  const bgcolor = setBg(inputId);
  //  const colorDiffer = inputValue('val-1-card-1');
   

  // });

  document.getElementById('btn-cal-1').addEventListener('click',
  function(){
    const getValue1 = inputValue('val-1-card-1');
    const getValue2 = inputValue('val-2-card-1');

    const finalValue = getArea2(getValue1, getValue2)
    console.log(finalValue)

    const element = document.getElementById('triangle');
    element.innerText = finalValue;
  })


