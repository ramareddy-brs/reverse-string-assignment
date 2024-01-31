function reverseString() {
    var inputElement = document.getElementById("inputText");
    var outputElement = document.getElementById("output");

    // Get the input value and reverse it
    var inputValue = inputElement.value;
    let result = "";
    for(let i=inputValue.length-1; i>=0; i--){
        result +=inputValue[i];
    }

    // Display the reversed string
    outputElement.textContent = "Reversed String: " + result;
}
