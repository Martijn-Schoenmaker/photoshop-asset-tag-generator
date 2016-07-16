window.onload = function() {
  userInput.focus();
};

var userInput, btnGenerate, generatedCode, assetTag, btnAttribute, copyMessage, cleanCode;

userInput = document.getElementById('asset-tag-name');
btnGenerate = document.getElementById('btn-generate');
generatedCode = document.getElementById('generated-code');
copyMessage = document.getElementById('copy-message');
history = document.getElementById('history');

function getInput(){
   assetTag = userInput.value;
   filler( assetTag );
}

function filler( layerName ) {
  var strongLayer = '<span>' + layerName + '</span>';
  var strongCode = strongLayer + '.png, 200% ' + strongLayer + '@2x.png, 300% ' + strongLayer + '@3x.png';
  cleanCode = layerName + '.png, 200% ' + layerName + '@2x.png, 300% ' + layerName + '@3x.png';

  generatedCode.innerHTML = strongCode;
  document.getElementById('btn-generate').dataset.clipboardText = cleanCode;

}

function enterPress(e){
  if(e.keyCode === 13){
    btnGenerate.click();

  }
  return false;
}

function success() {
    console.log('Copied!');
}

function fail(err) {
    console.error('Error!', err);
}

var cpb = clipboardButton('#btn-generate', success, fail);

function message(){
  if (userInput.value === '') {
    copyMessage.innerHTML = "Nothing to copy!";
    copyMessage.style.opacity = "1";
      window.setTimeout(function(){
        copyMessage.style.opacity = "0";
    }, 1000);
  } else {
    copyMessage.innerHTML = "Copied!";
    copyMessage.style.opacity = "0.5";
      window.setTimeout(function(){
        copyMessage.style.opacity = "0";

    }, 1000);
  }
}

function generate() {
  document.getElementById('history').innerHTML += cleanCode;
  document.getElementById('history').innerHTML += '<br>';
  document.getElementById('asset-tag-name').focus();
  message();
}

function checkFocus() {
  if (document.hasFocus() === false && userInput.value !== '') {
    userInput.value = '';
    generatedCode.innerHTML = 'Generated Code';
  }
}

setInterval(checkFocus, 200);
