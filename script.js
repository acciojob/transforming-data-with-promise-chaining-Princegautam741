document.getElementById('btn').addEventListener('click', startTransformation);

function startTransformation() {
  // Get the input value
  const inputValue = document.getElementById('ip').value;

  // Create a promise that resolves after 2 seconds with the input value
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  });

  // Chain promises using then to perform the required operations
  firstPromise
    .then((result) => {
      // Print the first result
      document.getElementById('output').textContent = `Result: ${result}`;
      // Create a second promise that multiplies the result by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the second result
      document.getElementById('output').textContent = `Result: ${result}`;
      // Create a third promise that subtracts 3 from the result
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the third result
      document.getElementById('output').textContent = `Result: ${result}`;
      // Create a fourth promise that divides the result by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the fourth result
      document.getElementById('output').textContent = `Result: ${result}`;
      // Create a fifth promise that adds 10 to the result
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((result) => {
      // Print the fifth result
      document.getElementById('output').textContent = `Result: ${result}`;
      // Update the text content of the output div with the final result
      document.getElementById('output').textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      // Handle errors if any promise is rejected
      console.error('Error:', error);
    });
}
