function abbreviateName(name: string): string {
  // Split the name into words
  const words: string[] = name.split(" ");

  // Check if there are at least two words
  if (words.length >= 2) {
    // Take the first character of each word, convert to uppercase, and join with a dot
    const initials: string = words
      .map((word) => word[0].toUpperCase())
      .join(".");
    return initials;
  }

  // If there are not enough words, return the input as is
  return name;
}

console.log(abbreviateName("Sam Harris"));
console.log(abbreviateName("patrick feeney"));
console.log(abbreviateName("John"));
