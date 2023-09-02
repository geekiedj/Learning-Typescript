function abbreviateName(name) {
  // Split the name into words
  const words = name.split(" ");

  // Check if there are at least two words
  if (words.length >= 2) {
    // Take the first character of each word, convert to uppercase, and join with a dot
    const initials = words.map((word) => word[0].toUpperCase()).join(".");
    return initials;
  }

  // If there are not enough words, return the input as is
  return name;
}

console.log(abbreviateName("Sam Harris")); // Output: "S.H"
console.log(abbreviateName("patrick feeney")); // Output: "P.F"
console.log(abbreviateName("John")); // Output: "John" (Not enough words)
