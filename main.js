
  function notifyReadMore() {
    alert("Redirecting to detailed Blog...");}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
   const btn = document.getElementById("togglebtn");
   btn.innerHTML = btn.innerHTML.includes("Dark")? "Light <br> Mode": "Dark <br> Mode";
   }


  const tips = [
     "Charge your phone between 20% and 80% for better battery health.",
    "Keep your software up to date for better security.",
    "Use strong, unique passwords for every website.",
    "Clear browser cache regularly to improve speed.",
    "Use a cooling pad for heavy laptop usage."
  ];

document.getElementById("techTip").innerHTML =
    tips[Math.floor(Math.random() * tips.length)];


   const hour = new Date().getHours();
  let message;
  if (hour < 12) {
    message = "Good Morning!";
  } else if (hour < 18) {
    message = "Good Afternoon!";
  } else {
    message = "Good Evening!";
  }
  document.getElementById("greeting").textContent = message + " Welcome to Gadgets Guru!";

  function toggleDetails(id) {
    const paragraph = document.getElementById(id);
    paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
  }

  function toggleBtn() {
   const btn = document.getElementById("DetailBtn");
   btn.innerHTML = btn.innerHTML.includes("Show")? "Hide Details": "Show Details";
   }


   function Quiz() {
      let score = 0;

  
      const answer1 = document.querySelector('input[name="q1"]:checked');
      const answer2 = document.querySelector('input[name="q2"]:checked');
      const answer3 = document.querySelector('input[name="q3"]:checked');
      const answer4 = document.querySelector('input[name="q4"]:checked');
      const answer5 = document.querySelector('input[name="q5"]:checked');
      const answer6 = document.querySelector('input[name="q6"]:checked');
      const answer7 = document.querySelector('input[name="q7"]:checked');
      const answer8 = document.querySelector('input[name="q8"]:checked');
      const answer9 = document.querySelector('input[name="q9"]:checked');
      const answer10 = document.querySelector('input[name="q10"]:checked');

   
      if (answer1 && answer1.value === "b") score++;
      if (answer2 && answer2.value === "c") score++;
      if (answer3 && answer3.value === "a") score++;
      if (answer4 && answer4.value === "c") score++;
      if (answer5 && answer5.value === "b") score++;
      if (answer6 && answer6.value === "a") score++;
      if (answer7 && answer7.value === "b") score++;
      if (answer8 && answer8.value === "b") score++;
      if (answer9 && answer9.value === "a") score++;
      if (answer10 && answer10.value === "c") score++;
     

      // Show result
      document.getElementById("result").textContent = "You scored " + score + "/10";
    }