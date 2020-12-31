import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setAnswer] = useState("");
  function checkPalindrome(event) {
    var string = event.target.value;
    var num = 0;

    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        num = num + 1;
      }
    }
    if (num === 0) {
      setAnswer("It is a palindrome");
    } else {
      setAnswer("It is not a Palindrome");
    }
  }

  return (
    <div className="App">
      <h1>Palindrome Finder</h1>
      <textarea
        onChange={checkPalindrome}
        placeholder="Enter the number or the word"
      ></textarea>
      <h2>{answer}</h2>
    </div>
  );
}
