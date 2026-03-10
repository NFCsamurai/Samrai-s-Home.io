const platforms = [
  { prefix: "YouTube: ", number: "64", element: "youtube-count" }, 
  { prefix: "Instagram: ", number: "65", element: "instagram-count" }, 
  { prefix: "Twitch: ", number: "12", element: "twitch-count" },

];

const quotes = [
  "\"Obssed with being me. Why Should I Be Scared?\"",
  "\"Just Being Me. You Know How It Is\"",
  "\"Love You Guys You Mean A Lot.\"",
  "\"Making Sh*t Up Right Now.\"",
  "\"Creative At Work Always. Brain Overloading\"",
];

let currentIndex = 0;
let i = 0;
let typingPrefix = true;
let typingQuote = false;
let selectedQuote = "";

function typeWriter() {
  if (currentIndex < platforms.length) {
    const current = platforms[currentIndex];
    if (typingPrefix) {
      if (i < current.prefix.length) {
        document.getElementById(current.element).innerHTML += current.prefix.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Start typing number
        typingPrefix = false;
        i = 0;
        setTimeout(typeWriter, 50); // Slight pause
      }
    } else {
      if (i < current.number.length) {
        document.getElementById(current.element).innerHTML += "<span class='number'>" + current.number.charAt(i) + "</span>";
        i++;
        setTimeout(typeWriter, 50);
      } else {
        // Move to next platform
        currentIndex++;
        i = 0;
        typingPrefix = true;
        setTimeout(typeWriter, 50); // Pause before next
      }
    }
  } else if (!typingQuote) {
    // Select random quote
    selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    typingQuote = true;
    i = 0;
    setTimeout(typeWriter, 1000); // Pause before quote
  } else {
    if (i < selectedQuote.length) {
      document.getElementById('about-quote').innerHTML += selectedQuote.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else {
      // Show video after quote
      document.getElementById('video-container').classList.add('show');
      document.getElementById('quote-hr').style.display = 'block';
      // Show footer after a short delay
      setTimeout(() => {
        document.getElementById('footer-card').style.display = 'block';
      }, 1000);
    }
  }
}

window.addEventListener('load', typeWriter);
