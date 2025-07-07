document.getElementById("careerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const interests = getCheckedValues("interest");
  const skills = getCheckedValues("skill");
  const learning = getCheckedValues("learning");
  const env = getCheckedValues("env");
  const values = getCheckedValues("value");
  const subject = getCheckedValues("subject");
  const tools = getCheckedValues("tools");
  const type = getCheckedValues("type");
  const goal = getCheckedValues("goal");
  const personality = getCheckedValues("personality");

  let userData = {
  interests, skills, learning, env, values,
  subject, tools, type, goal, personality
};

  const careerRules = [
  {
    title: "Data Scientist",
    match: (d) =>
      d.skills.includes("analytical") &&
      d.subject.includes("math") &&
      d.type.includes("data"),
    description:
      "You enjoy patterns, logic, and data — Data Scientists uncover insights and power decisions in every industry.",
  },
  {
    title: "UX Designer",
    match: (d) =>
      d.interests.includes("design") &&
      d.tools.includes("drawing") &&
      d.learning.includes("visual"),
    description:
      "You’re visual and creative — UX Designers craft smooth digital experiences through empathy and design thinking.",
  },
  {
    title: "Software Developer",
    match: (d) =>
      d.tools.includes("coding") &&
      d.skills.includes("technical") &&
      d.type.includes("data"),
    description:
      "You love logic and building things — Software Developers create apps and systems that shape the world.",
  },
  {
    title: "Psychologist",
    match: (d) =>
      d.skills.includes("communication") &&
      d.values.includes("impact") &&
      d.personality.includes("empathetic"),
    description:
      "You’re empathetic and a good listener — Psychologists help people understand themselves and improve mental health.",
  },
  {
    title: "Teacher / Educator",
    match: (d) =>
      d.tools.includes("public-speaking") &&
      d.type.includes("people") &&
      d.goal.includes("impact"),
    description:
      "You care about people and knowledge — Educators shape young minds and make a lasting difference.",
  },
  {
    title: "Environmentalist / Sustainability Expert",
    match: (d) =>
      d.values.includes("impact") &&
      d.subject.includes("biology") &&
      d.env.includes("outdoor"),
    description:
      "You care about the Earth — Environmentalists protect nature, create policies, and innovate for sustainability.",
  },
  {
    title: "Business Analyst",
    match: (d) =>
      d.skills.includes("analytical") &&
      d.type.includes("data") &&
      d.goal.includes("money"),
    description:
      "You mix business sense with data — Business Analysts find smarter ways to improve processes and profits.",
  },
  {
    title: "Entrepreneur",
    match: (d) =>
      d.skills.includes("leadership") &&
      d.goal.includes("freedom") &&
      d.values.includes("innovation"),
    description:
      "You like autonomy and vision — Entrepreneurs create value, solve problems, and lead from the front.",
  },
  {
    title: "Writer / Journalist",
    match: (d) =>
      d.tools.includes("writing") &&
      d.subject.includes("literature") &&
      d.skills.includes("communication"),
    description:
      "You’re expressive and observant — Writers and Journalists inform, inspire, and influence through words.",
  },
  {
    title: "Graphic Designer / Illustrator",
    match: (d) =>
      d.tools.includes("drawing") &&
      d.interests.includes("design") &&
      d.personality.includes("creative"),
    description:
      "You think in colors and visuals — Graphic Designers turn ideas into eye-catching media and branding.",
  },
  {
    title: "Civil Engineer / Architect",
    match: (d) =>
      d.subject.includes("math") &&
      d.type.includes("things") &&
      d.tools.includes("drawing"),
    description:
      "You’re precise and visual — Civil Engineers and Architects shape the world physically and aesthetically.",
  },
  {
    title: "Social Worker / NGO Professional",
    match: (d) =>
      d.values.includes("impact") &&
      d.type.includes("people") &&
      d.skills.includes("empathetic"),
    description:
      "You have heart — Social workers uplift communities, help the vulnerable, and create positive change.",
  },
  {
    title: "Biotechnologist / Researcher",
    match: (d) =>
      d.subject.includes("biology") &&
      d.skills.includes("analytical") &&
      d.goal.includes("prestige"),
    description:
      "You’re curious and scientific — Biotechnologists push boundaries in medicine, genetics, and innovation.",
  },
  {
    title: "Marketing Strategist",
    match: (d) =>
      d.skills.includes("communication") &&
      d.goal.includes("money") &&
      d.type.includes("people"),
    description:
      "You’re persuasive and people-smart — Marketing Strategists craft campaigns that influence and sell.",
  },
  {
    title: "General Explorer",
    match: () => true, // fallback if no matches
    description:
      "You have a unique mix of traits! Try volunteering, internships, and exploring options that excite you.",
  }
];

let suggestions = careerRules
  .filter((rule) => rule.match(userData))
  .map(
    (r) => `<li><strong>${r.title}</strong>: ${r.description}</li>`
  );

if (suggestions.length === 0) {
  suggestions.push("<li>No matches found. Try selecting more varied responses!</li>");
}

resultBox.innerHTML = `
  <h3>Suggested Careers:</h3>
  <ul>${suggestions.join("")}</ul>
`;

  extrasBox.style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);

  window.lastCareerSuggestions = suggestions;
});

// Helper to get checked values
function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
}
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const progress = document.getElementById("progress");

function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = i === index ? "block" : "none";
  });

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.style.display = index === steps.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = index === steps.length - 1 ? "inline-block" : "none";

  // Progress bar update
  const progressPercent = ((index + 1) / steps.length) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Event listeners
nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);
