const profileByCategory = {
  technology: {
    summary:
      "Technology careers focus on building, securing, and improving digital systems used by people and organizations.",
    education: "Certificate, associate, or bachelor's in CS/IT/software, plus projects",
    salary: "$70k–$160k (varies by specialization)",
    skills: ["Problem solving", "Programming", "Systems thinking"]
  },
  science: {
    summary:
      "Science careers investigate natural systems, test hypotheses, and turn evidence into practical insights.",
    education: "Bachelor's to PhD depending on role",
    salary: "$55k–$140k",
    skills: ["Data analysis", "Research methods", "Lab/field techniques"]
  },
  healthcare: {
    summary:
      "Healthcare careers diagnose, treat, and support patients while improving public health outcomes.",
    education: "Certification through professional doctorate depending on role",
    salary: "$45k–$220k",
    skills: ["Empathy", "Attention to detail", "Clinical judgment"]
  },
  business: {
    summary:
      "Business careers help organizations grow through strategy, operations, finance, and communication.",
    education: "Bachelor's degree and/or industry certifications",
    salary: "$55k–$180k",
    skills: ["Communication", "Planning", "Decision-making"]
  },
  creative: {
    summary:
      "Creative careers use design, storytelling, and media to inform, inspire, and entertain audiences.",
    education: "Portfolio-driven; certificate to bachelor's common",
    salary: "$45k–$130k",
    skills: ["Creativity", "Visual/verbal communication", "Audience awareness"]
  },
  service: {
    summary:
      "Service and community careers support people through education, counseling, safety, and public systems.",
    education: "Bachelor's degree and licenses/certifications when required",
    salary: "$40k–$110k",
    skills: ["Interpersonal skills", "Organization", "Advocacy"]
  }
};

const careerSeed = [
  ["Software Developer", "technology"], ["Web Developer", "technology"], ["Mobile App Developer", "technology"],
  ["Frontend Engineer", "technology"], ["Backend Engineer", "technology"], ["Full-Stack Engineer", "technology"],
  ["Data Scientist", "technology"], ["Machine Learning Engineer", "technology"], ["AI Engineer", "technology"],
  ["Cybersecurity Analyst", "technology"], ["Information Security Engineer", "technology"], ["Cloud Engineer", "technology"],
  ["DevOps Engineer", "technology"], ["Site Reliability Engineer", "technology"], ["Network Engineer", "technology"],
  ["Database Administrator", "technology"], ["IT Support Specialist", "technology"], ["Systems Administrator", "technology"],
  ["Game Developer", "technology"], ["QA Engineer", "technology"], ["UX Engineer", "technology"],
  ["Product Manager", "technology"], ["Blockchain Developer", "technology"], ["AR/VR Developer", "technology"],
  ["Bioinformatics Analyst", "science"], ["Biologist", "science"], ["Chemist", "science"],
  ["Physicist", "science"], ["Environmental Scientist", "science"], ["Geologist", "science"],
  ["Astronomer", "science"], ["Meteorologist", "science"], ["Marine Biologist", "science"],
  ["Forensic Scientist", "science"], ["Lab Technician", "science"], ["Research Assistant", "science"],
  ["Epidemiologist", "science"], ["Statistician", "science"], ["Operations Research Analyst", "science"],
  ["Clinical Research Coordinator", "science"], ["Ecologist", "science"], ["Food Scientist", "science"],
  ["Agricultural Scientist", "science"], ["Materials Scientist", "science"], ["Nurse", "healthcare"],
  ["Doctor (Physician)", "healthcare"], ["Surgeon", "healthcare"], ["Dentist", "healthcare"],
  ["Pharmacist", "healthcare"], ["Physical Therapist", "healthcare"], ["Occupational Therapist", "healthcare"],
  ["Radiologic Technologist", "healthcare"], ["Medical Laboratory Scientist", "healthcare"], ["Paramedic", "healthcare"],
  ["Respiratory Therapist", "healthcare"], ["Speech-Language Pathologist", "healthcare"], ["Dietitian", "healthcare"],
  ["Psychiatrist", "healthcare"], ["Psychologist", "healthcare"], ["Veterinarian", "healthcare"],
  ["Healthcare Administrator", "healthcare"], ["Public Health Specialist", "healthcare"], ["Financial Analyst", "business"],
  ["Accountant", "business"], ["Auditor", "business"], ["Investment Banker", "business"],
  ["Marketing Specialist", "business"], ["Digital Marketer", "business"], ["Sales Manager", "business"],
  ["Business Analyst", "business"], ["HR Specialist", "business"], ["Recruiter", "business"],
  ["Supply Chain Analyst", "business"], ["Operations Manager", "business"], ["Project Manager", "business"],
  ["Management Consultant", "business"], ["Entrepreneur", "business"], ["Real Estate Agent", "business"],
  ["Graphic Designer", "creative"], ["UI/UX Designer", "creative"], ["Animator", "creative"],
  ["Illustrator", "creative"], ["Video Editor", "creative"], ["Filmmaker", "creative"],
  ["Photographer", "creative"], ["Journalist", "creative"], ["Content Writer", "creative"],
  ["Copywriter", "creative"], ["Social Media Manager", "creative"], ["Music Producer", "creative"],
  ["Interior Designer", "creative"], ["Fashion Designer", "creative"], ["Art Director", "creative"],
  ["Teacher", "service"], ["School Counselor", "service"], ["Social Worker", "service"],
  ["Lawyer", "service"], ["Paralegal", "service"], ["Police Officer", "service"],
  ["Firefighter", "service"], ["Urban Planner", "service"], ["Librarian", "service"],
  ["Nonprofit Program Manager", "service"], ["Career Counselor", "service"], ["Community Health Worker", "service"]
];

const careers = careerSeed.map(([title, category]) => {
  const profile = profileByCategory[category];
  return {
    title,
    category,
    summary: `${title} is a ${category} pathway. ${profile.summary}`,
    education: profile.education,
    salary: profile.salary,
    skills: profile.skills
  };
});

const categoryLabel = {
  technology: "Technology",
  science: "Science",
  healthcare: "Healthcare",
  business: "Business",
  creative: "Creative",
  service: "Service & Community"
};

const selectEl = document.getElementById("careerSelect");
const careerCardEl = document.getElementById("careerCard");
const quizForm = document.getElementById("quizForm");
const quizResultsEl = document.getElementById("quizResults");

function renderCareer(career) {
  careerCardEl.innerHTML = `
    <h3>${career.title}</h3>
    <p>${career.summary}</p>
    <div class="meta">
      <span class="tag">${categoryLabel[career.category]}</span>
      <span class="tag">Education: ${career.education}</span>
      <span class="tag">Typical Salary: ${career.salary}</span>
    </div>
    <p><strong>Core skills:</strong> ${career.skills.join(", ")}</p>
  `;
}

function populateCareers() {
  selectEl.innerHTML = "";
  careers.forEach((career, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = career.title;
    selectEl.appendChild(opt);
  });
  renderCareer(careers[0]);
}

selectEl.addEventListener("change", (e) => {
  const picked = careers[Number(e.target.value)];
  if (picked) renderCareer(picked);
});

const recommendationRules = {
  technology: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "Cloud Engineer", "UX Engineer"],
  science: ["Biologist", "Chemist", "Environmental Scientist", "Epidemiologist", "Materials Scientist"],
  healthcare: ["Nurse", "Doctor (Physician)", "Physical Therapist", "Psychologist", "Public Health Specialist"],
  business: ["Financial Analyst", "Marketing Specialist", "Business Analyst", "Operations Manager", "Entrepreneur"],
  creative: ["Graphic Designer", "UI/UX Designer", "Journalist", "Filmmaker", "Art Director"],
  service: ["Teacher", "School Counselor", "Social Worker", "Career Counselor", "Urban Planner"]
};

function deriveFocusAreas(answers) {
  const counts = {
    technology: 0,
    science: 0,
    healthcare: 0,
    business: 0,
    creative: 0,
    service: 0
  };

  if (answers.q1 === "technology") counts.technology += 2;
  if (answers.q1 === "science") counts.science += 2;
  if (answers.q1 === "creative") counts.creative += 2;
  if (answers.q1 === "business") counts.business += 2;
  if (answers.q1 === "service") {
    counts.service += 2;
    counts.healthcare += 1;
  }

  if (answers.q2 === "lab") {
    counts.science += 2;
    counts.healthcare += 1;
  }
  if (answers.q2 === "office") counts.business += 1;
  if (answers.q2 === "remote") counts.technology += 1;
  if (answers.q2 === "field") {
    counts.service += 1;
    counts.science += 1;
  }
  if (answers.q2 === "studio") counts.creative += 2;

  if (answers.q3 === "math") counts.technology += 2;
  if (answers.q3 === "science") {
    counts.science += 2;
    counts.healthcare += 1;
  }
  if (answers.q3 === "humanities") counts.service += 2;
  if (answers.q3 === "arts") counts.creative += 2;
  if (answers.q3 === "economics") counts.business += 2;

  if (answers.q4 === "high") {
    counts.service += 2;
    counts.business += 1;
  }
  if (answers.q4 === "medium") {
    counts.business += 1;
    counts.creative += 1;
  }
  if (answers.q4 === "low") {
    counts.technology += 1;
    counts.science += 1;
  }

  if (answers.q5 === "innovation") counts.technology += 2;
  if (answers.q5 === "health") counts.healthcare += 2;
  if (answers.q5 === "education") counts.service += 2;
  if (answers.q5 === "community") {
    counts.service += 2;
    counts.science += 1;
  }
  if (answers.q5 === "growth") counts.business += 2;

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([area]) => area);
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = {
    q1: document.getElementById("q1").value,
    q2: document.getElementById("q2").value,
    q3: document.getElementById("q3").value,
    q4: document.getElementById("q4").value,
    q5: document.getElementById("q5").value
  };

  const topAreas = deriveFocusAreas(answers);
  const picks = [...recommendationRules[topAreas[0]], ...recommendationRules[topAreas[1]]].slice(0, 6);

  quizResultsEl.innerHTML = `
    <h3>Your CareerCompass Matches</h3>
    <p>Top interest areas: <strong>${categoryLabel[topAreas[0]]}</strong> and <strong>${categoryLabel[topAreas[1]]}</strong>.</p>
    <ul>${picks.map((career) => `<li>${career}</li>`).join("")}</ul>
  `;
});

populateCareers();
