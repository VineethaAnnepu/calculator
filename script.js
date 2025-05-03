const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "RESET") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        // Evaluate with JS-compatible operators
        const sanitizedInput = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        currentInput = eval(sanitizedInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      // Replace × and ÷ for display, but use JS symbols in logic
      let inputChar = value;
      if (value === "×") inputChar = "*";
      if (value === "÷") inputChar = "/";

      currentInput += inputChar;
      display.textContent = currentInput.replace(/\*/g, "×").replace(/\//g, "÷");
    }
  });
});
