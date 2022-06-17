function orderBySum(array) {
    let sums = new Map(array.map(row =>
      [row, row.reduce((sum, element) => sum + element, 0)]
    ));
    return array.sort((a, b) => sums.get(a) - sums.get(b));
  }
  
  console.log(orderBySum([[1,3], [4,2], [2,1]]));
  
  