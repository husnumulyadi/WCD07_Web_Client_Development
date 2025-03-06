function getInitialNameUppercase(name) {
    var initials = name.inputName.split(" ").map(function (word) { return word.charAt(0).toUpperCase(); }).join("");
    console.log(initials);
    return initials;
}
var sampleName = { inputName: "john doe" };
document.body.textContent = getInitialNameUppercase(sampleName);
