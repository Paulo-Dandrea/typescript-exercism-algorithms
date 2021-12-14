function insertionSort2(n: number, arr: number[]) {
  for (let i = 1; i < n; i++) {
      const currentValue = arr[i]
      const previous = arr[i-1]
      const next = arr[i+1]
    while (!(previous < currentValue && currentValue < next)) {
        arr[i-1] = currentValue
        arr[i] = previous
        console.log(arr);
    }
    
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
