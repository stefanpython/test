function countToTen() {
    let count = 1;
    
    const interval = setInterval(() => {
      console.log(count);
      
      if (count === 10) {
        clearInterval(interval);
      }
      
      count++;
    }, 1200);
  }
  
  countToTen();