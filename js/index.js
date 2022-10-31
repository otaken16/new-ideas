const animationTargetElements = document.querySelectorAll('.text_animation');
for( let i = 0 ; i < animationTargetElements.length ; i++){
  const targetElement =  animationTargetElements[i],
  texts = targetElement.textContent,//i番目のテキストが配列で入ってる
  textsArray = [];
  targetElement.textContent = "";

  for( let j = 0 ; j < texts.split("").length ; j++ ){
    if( texts.split("")[j] === " " ){
      textsArray.push(" ");
    }else{
      textsArray.push('<span class="text-up" style="animation-delay: ' + ((j*0.1)+0.2) + 's;">' + texts.split("")[j] + '</span>');
    }
  }
  for( let k = 0 ; k < textsArray.length ; k++ ){
      targetElement.innerHTML += textsArray[k];
    }
  }