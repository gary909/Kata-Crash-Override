function aliasGen(a, b){
    let fN = a[0].toUpperCase();
    let lN = b[0].toUpperCase();
    let regexTest = new RegExp('[A-Z]');
      if (! regexTest.test(fN) || ! regexTest.test(lN)) {
      return "Your name must start with a letter from A - Z.";
    } else {
      return firstName[fN] + " " + surname[lN]
    }
}

console.log(aliasGen("Mike", "Millington")); // "Malware Mike"
console.log(aliasGen("Fahima", "Tash")); // "Function T-Rex"
console.log(aliasGen("Daisy", "Petrovic")); // "Data Payload"
console.log(aliasGen("7393424", "Anumbha")); // "Your name must start with a letter from A - Z."
console.log(aliasGen("Anuddanumbha", "23200")); // "Your name must start with a letter from A - Z."
