function factorialize(num) {
    let n = 1
    for (let i = 1; i <= num; i++) {
        n*=i
        
    }
    return n;
  }
  
  console.log(factorialize(5));