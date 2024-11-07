{
  //Problem-3
  function countWordOccurrences(sentence: string, word: string): number {
    const loweredCaseSentence = sentence.toLowerCase();
    const lowerdCaseWord = word.toLowerCase();
    const arrayOfWord = loweredCaseSentence.split(" ");
    console.log(arrayOfWord);
    return arrayOfWord.filter((word: string) => word === lowerdCaseWord).length;
  }
}
