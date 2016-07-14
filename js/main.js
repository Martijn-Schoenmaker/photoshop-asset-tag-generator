var userInput, btnGenerate, generatedCode, assetTag, btnAttribute, copyMessage;

userInput = document.getElementById('asset-tag-name');
btnGenerate = document.getElementById('btn-generate');
generatedCode = document.getElementById('generated-code');
copyMessage = document.getElementById('copy-message');

function getInput(){
   assetTag = userInput.value;
   filler( assetTag );
}

function enterPress(e){
  if(e.keyCode === 13){
    btnGenerate.click();
    window.setTimeout(function(){
          userInput.focus();
  }, 20);

  }

  return false;
}

window.onload = function() {
  userInput.focus();
};

function filler( layerName ) {
  var strongLayer = '<span>' + layerName + '</span>';
  var strongCode = strongLayer + '.png, 200% ' + strongLayer + '@2x.png, 300% ' + strongLayer + '@3x.png';
  var cleanCode = layerName + '.png, 200% ' + layerName + '@2x.png, 300% ' + layerName + '@3x.png';

  generatedCode.innerHTML = strongCode;
  document.getElementById('btn-generate').dataset.clipboardText = cleanCode;

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
    btnGenerate.innerHTML = "Cannot copy nothing!";
    btnGenerate.style.opacity = "0.5";
      window.setTimeout(function(){
        btnGenerate.style.opacity = "1";
        btnGenerate.innerHTML = "Copy to Clipboard";
    }, 1500);
  } else {
    btnGenerate.innerHTML = "Copied!";
    btnGenerate.style.opacity = "0.5";
      window.setTimeout(function(){
        btnGenerate.style.opacity = "1";
        btnGenerate.innerHTML = "Copy to Clipboard";

    }, 1500);
  }

}
