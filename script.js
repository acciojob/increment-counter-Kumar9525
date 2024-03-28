//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Increment Counter</title>
</head>
<body>

<p id="counter">0</p>
<button id="incrementBtn">Increment</button>

<script>
  // Get references to the counter paragraph and the increment button
  const counterParagraph = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementBtn');

  // Add click event listener to the increment button
  incrementButton.addEventListener('click', function() {
    // Get the current value of the counter
    let counterValue = parseInt(counterParagraph.textContent);
    
    // Display alert with the current value before incrementing
    alert("Current Counter Value: " + counterValue);
    
    // Increment the counter value
    counterValue++;
    
    // Update the counter paragraph with the new value
    counterParagraph.textContent = counterValue;
  });
</script>

</body>
</html>
