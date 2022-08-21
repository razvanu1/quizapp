var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:attachment/text,' + encodeURI(document.documentElement.innerText);
hiddenElement.target = '_blank';
hiddenElement.download = 'myResults.txt';
hiddenElement.click();