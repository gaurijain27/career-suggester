document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect form responses
  const interests = getCheckedValues("interest");
  const skills = getCheckedValues("skill");
  const learning = getCheckedValues("learning");
  const env = getCheckedValues("env");
  const values = getCheckedValues("value");

  // Save to localStorage
  localStorage.setItem("careerFormData", JSON.stringify({ interests, skills, learning, env, values }));

  // Rule-based logic
  let suggestions = [];

  if (interests.includes("science") && skills.includes("analytical")) suggestions.push("Data Analyst");
  if (interests.includes("design") && skills.includes("creative")) suggestions.push("UX Designer");
  if (interests.includes("writing") && skills.includes("communication")) suggestions.push("Journalist");
  if (interests.includes("business") && skills.includes("leadership")) suggestions.push("Entrepreneur");
  if (interests.includes("technology") && skills.includes("technical")) suggestions.push("Software Developer");
  if (values.includes("impact") && skills.includes("communication")) suggestions.push("NGO Manager");

  document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect responses
  const interests = getCheckedValues("interest");
  const skills = getCheckedValues("skill");
  const learning = getCheckedValues("learning");
  const env = getCheckedValues("env");
  const values = getCheckedValues("value");

  // Validate: if nothing is selected at all
  if (
    interests.length === 0 &&
    skills.length === 0 &&
    learning.length === 0 &&
    env.length === 0 &&
    values.length === 0
  ) {
    alert("Please select at least one option to get suggestions.");
    return;
  }

  // Logic-based suggestions
  let suggestions = [];

  if (interests.includes("science") && skills.includes("analytical")) suggestions.push("Data Analyst");
  if (interests.includes("design") && skills.includes("creative")) suggestions.push("UX Designer");
  if (interests.includes("writing") && skills.includes("communication")) suggestions.push("Journalist");
  if (interests.includes("business") && skills.includes("leadership")) suggestions.push("Entrepreneur");
  if (interests.includes("technology") && skills.includes("technical")) suggestions.push("Software Developer");
  if (values.includes("impact") && skills.includes("communication")) suggestions.push("NGO Manager");

  if (suggestions.length === 0) {
    suggestions.push("No strong matches found. Try selecting more combinations!");
  }

  const resultBox = document.getElementById("result");
  const extrasBox = document.getElementById("extras");

  resultBox.innerHTML = `<h3>We suggest:</h3><ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`;
  extrasBox.style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);

  window.lastCareerSuggestions = suggestions;
});

  const resultBox = document.getElementById("result");
  const extrasBox = document.getElementById("extras");

  resultBox.innerHTML = `<h3>We suggest:</h3><ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`;
  extrasBox.style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);

  // Store for download
  window.lastCareerSuggestions = suggestions;
});

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
}

function copyToClipboard() {
  const text = "Suggested Careers:\n" + window.lastCareerSuggestions.join("\n");
  navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
}

function downloadPDF() {
  const blob = new Blob([window.lastCareerSuggestions.join("\n")], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "career_suggestions.pdf";
  link.click();
}
