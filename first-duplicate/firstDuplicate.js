function firstDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = 0; j < i; j++) {
        let num2 = array[j];
        if (num1 === num2) {
            return num1;
        }
    }
  }
  return -1;
}
