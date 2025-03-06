interface Name {
    inputName: string
}

function getInitialNameUppercase(name: Name): string {
    const initials = name.inputName.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
    console.log(initials);
    return initials;
}

let sampleName: Name = { inputName: "john doe" };

document.body.textContent = getInitialNameUppercase(sampleName);

