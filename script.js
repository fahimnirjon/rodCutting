function calculateProfit() {
    const input = document.getElementById("input").value.trim();
    const values = input.split(","); // Split input into an array
  
    if (values.length < 2) {
      alert("Invalid input. Please enter rod length and prices separated by commas.");
      return;
    }
  
    const rodLength = parseInt(values[0]);
    const prices = values.slice(1).map(parseFloat); // Extract prices as numbers
  
    if (rodLength <= 0 || prices.some(price => isNaN(price) || price < 0)) {
      alert("Invalid input. Please enter positive values only.");
      return;
    }
  
    const maxProfit = cutRod(prices);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Maximum profit obtainable by cutting the rod: ${maxProfit}`;
  }
  
  function cutRod(prices) {
    const n = prices.length;
    let maxProfit = 0;
  
    // Iterate through possible cutting lengths (1 to n-1)
    for (let i = 1; i < n; i++) {
      const currentProfit = prices[i - 1] + cutRod(prices.slice(i)); // Recursive call with remaining prices
      maxProfit = Math.max(maxProfit, currentProfit);
    }
  
    return maxProfit;
  }
