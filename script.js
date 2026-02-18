const categoryProfiles = {
  technology: {
    label: "Technology",
    baselineEducation: "Associate or bachelor's degree in computer science, software engineering, information systems, or a related technical field. A strong project portfolio (GitHub, internships, hackathons) is often as important as coursework.",
    baselineSalary: "$72,000–$175,000 depending on specialization, region, and experience",
    baselineOutlook: "Strong long-term growth as every industry continues digital transformation, automation, and AI adoption.",
    baselineWorkplaces: "Software companies, startups, enterprise IT departments, fintech, healthcare tech, education technology, and remote-first teams.",
    strengths: ["Analytical thinking", "Technical communication", "Debugging and troubleshooting", "Continuous learning"]
  },
  science: {
    label: "Science & Research",
    baselineEducation: "Bachelor's degree for entry-level roles, with master's or PhD often preferred for advanced research positions. Hands-on lab or field experience is highly valuable.",
    baselineSalary: "$58,000–$145,000 depending on discipline and credentials",
    baselineOutlook: "Steady demand in climate science, health research, biotech, and data-driven decision fields.",
    baselineWorkplaces: "Universities, research institutes, government agencies, biotech/pharma, environmental consultancies, and public health labs.",
    strengths: ["Research design", "Data interpretation", "Scientific writing", "Precision and ethics"]
  },
  healthcare: {
    label: "Healthcare",
    baselineEducation: "Pathways range from certificates and associate programs to professional doctorates. Licensure and clinical hours are essential for most patient-care roles.",
    baselineSalary: "$48,000–$235,000 depending on role, licensure, and geography",
    baselineOutlook: "Very strong due to aging populations, preventive care emphasis, and expanded access to health services.",
    baselineWorkplaces: "Hospitals, private clinics, rehabilitation centers, community health organizations, schools, and telehealth services.",
    strengths: ["Empathy", "Clinical reasoning", "Attention to protocol", "Team-based communication"]
  },
  business: {
    label: "Business & Finance",
    baselineEducation: "Bachelor's degree in business, finance, economics, or management is common. Certifications and internships significantly improve job readiness.",
    baselineSalary: "$55,000–$190,000 depending on function and performance-based incentives",
    baselineOutlook: "Consistent demand across operations, finance, strategy, analytics, and marketing leadership.",
    baselineWorkplaces: "Corporations, consulting firms, banks, startups, nonprofits, government agencies, and hybrid/remote teams.",
    strengths: ["Decision-making", "Stakeholder communication", "Commercial awareness", "Planning and execution"]
  },
  creative: {
    label: "Creative & Media",
    baselineEducation: "Certificate, diploma, or bachelor's routes all work. Portfolios, internships, and real published work are usually the most decisive hiring factors.",
    baselineSalary: "$45,000–$140,000 depending on niche, reputation, and freelance/client mix",
    baselineOutlook: "Growing opportunities in digital media, content strategy, product design, and creator economy roles.",
    baselineWorkplaces: "Agencies, product companies, media studios, publishing firms, in-house brand teams, and freelance/contract ecosystems.",
    strengths: ["Creative ideation", "Audience empathy", "Visual/story communication", "Iterative feedback handling"]
  },
  service: {
    label: "Service, Education & Community",
    baselineEducation: "Bachelor's degree is common, with role-specific licenses/certifications for counseling, legal, safety, and public service tracks.",
    baselineSalary: "$42,000–$125,000 depending on sector and credential level",
    baselineOutlook: "Stable to strong demand in education, social support, public safety, and legal/community-facing professions.",
    baselineWorkplaces: "Schools, nonprofits, community agencies, legal offices, municipal organizations, and public institutions.",
    strengths: ["People-centered communication", "Advocacy", "Crisis/problem resolution", "Ethical decision-making"]
  }
};

const careerSeed = [
  ["Software Developer", "technology", "designing and building software features"],
  ["Web Developer", "technology", "creating responsive websites and web applications"],
  ["Mobile App Developer", "technology", "building iOS and Android mobile experiences"],
  ["Frontend Engineer", "technology", "crafting user interfaces and design-system components"],
  ["Backend Engineer", "technology", "developing APIs, databases, and service logic"],
  ["Full-Stack Engineer", "technology", "connecting frontend interfaces with backend systems"],
  ["Data Scientist", "technology", "turning raw data into predictive insights"],
  ["Machine Learning Engineer", "technology", "deploying models into scalable production pipelines"],
  ["AI Engineer", "technology", "building practical AI-powered product features"],
  ["Cybersecurity Analyst", "technology", "monitoring and mitigating digital security threats"],
  ["Information Security Engineer", "technology", "architecting secure systems and access controls"],
  ["Cloud Engineer", "technology", "managing cloud infrastructure and availability"],
  ["DevOps Engineer", "technology", "automating CI/CD and release reliability"],
  ["Site Reliability Engineer", "technology", "improving uptime, performance, and incident response"],
  ["Network Engineer", "technology", "designing and maintaining enterprise networks"],
  ["Database Administrator", "technology", "ensuring data integrity, backups, and tuning"],
  ["IT Support Specialist", "technology", "solving user hardware and software issues"],
  ["Systems Administrator", "technology", "maintaining servers, user access, and IT operations"],
  ["Game Developer", "technology", "developing gameplay systems and performance optimization"],
  ["QA Engineer", "technology", "testing software quality and preventing regressions"],
  ["UX Engineer", "technology", "bridging interaction design with frontend implementation"],
  ["Product Manager", "technology", "defining product roadmaps and user outcomes"],
  ["Blockchain Developer", "technology", "building decentralized apps and smart contracts"],
  ["AR/VR Developer", "technology", "creating immersive augmented and virtual experiences"],
  ["Data Engineer", "technology", "building reliable data platforms and pipelines"],
  ["Robotics Engineer", "technology", "integrating software, sensors, and mechanical systems"],
  ["Computer Vision Engineer", "technology", "teaching machines to interpret images and video"],
  ["Embedded Systems Engineer", "technology", "programming software for hardware devices"],
  ["Solutions Architect", "technology", "designing end-to-end technical solutions for organizations"],
  ["Technical Writer", "technology", "translating complex technical concepts into clear documentation"],

  ["Bioinformatics Analyst", "science", "analyzing biological data through computational methods"],
  ["Biologist", "science", "studying living systems and ecological relationships"],
  ["Chemist", "science", "investigating substances and chemical reactions"],
  ["Physicist", "science", "exploring matter, energy, and physical laws"],
  ["Environmental Scientist", "science", "assessing environmental risks and sustainability solutions"],
  ["Geologist", "science", "examining earth materials and geological processes"],
  ["Astronomer", "science", "researching stars, planets, and cosmic systems"],
  ["Meteorologist", "science", "forecasting weather and atmospheric conditions"],
  ["Marine Biologist", "science", "studying ocean ecosystems and marine life"],
  ["Forensic Scientist", "science", "applying lab analysis to legal investigations"],
  ["Lab Technician", "science", "running laboratory procedures and maintaining records"],
  ["Research Assistant", "science", "supporting studies through experiments and data collection"],
  ["Epidemiologist", "science", "tracking disease patterns and public health trends"],
  ["Statistician", "science", "modeling data to support evidence-based decisions"],
  ["Operations Research Analyst", "science", "optimizing systems through quantitative modeling"],
  ["Clinical Research Coordinator", "science", "managing healthcare and drug trial operations"],
  ["Ecologist", "science", "studying organism-environment interactions"],
  ["Food Scientist", "science", "improving food quality, safety, and innovation"],
  ["Agricultural Scientist", "science", "advancing crop and soil productivity"],
  ["Materials Scientist", "science", "developing and testing advanced materials"],
  ["Hydrologist", "science", "studying water systems, quality, and availability"],
  ["Genetic Counselor", "science", "guiding families through inherited condition risks"],
  ["Wildlife Biologist", "science", "monitoring and protecting animal populations"],
  ["Oceanographer", "science", "analyzing physical and biological ocean processes"],

  ["Nurse", "healthcare", "delivering direct patient care and coordination"],
  ["Doctor (Physician)", "healthcare", "diagnosing conditions and directing treatment"],
  ["Surgeon", "healthcare", "performing operative procedures and critical interventions"],
  ["Dentist", "healthcare", "providing oral health treatment and prevention"],
  ["Pharmacist", "healthcare", "managing medication therapy and safety"],
  ["Physical Therapist", "healthcare", "restoring mobility through rehabilitation plans"],
  ["Occupational Therapist", "healthcare", "helping patients regain functional independence"],
  ["Radiologic Technologist", "healthcare", "capturing diagnostic imaging for clinicians"],
  ["Medical Laboratory Scientist", "healthcare", "processing and interpreting clinical samples"],
  ["Paramedic", "healthcare", "providing emergency pre-hospital treatment"],
  ["Respiratory Therapist", "healthcare", "supporting pulmonary and breathing care"],
  ["Speech-Language Pathologist", "healthcare", "treating speech and swallowing disorders"],
  ["Dietitian", "healthcare", "building nutrition plans for health outcomes"],
  ["Psychiatrist", "healthcare", "treating mental health through medical management"],
  ["Psychologist", "healthcare", "assessing behavior and providing therapeutic care"],
  ["Veterinarian", "healthcare", "treating animals and advising preventive care"],
  ["Healthcare Administrator", "healthcare", "managing healthcare operations and policy compliance"],
  ["Public Health Specialist", "healthcare", "designing community-level health initiatives"],
  ["Physician Assistant", "healthcare", "supporting diagnosis and treatment under physician supervision"],
  ["Occupational Health Specialist", "healthcare", "improving safety and wellbeing in workplaces"],

  ["Financial Analyst", "business", "evaluating investments and financial performance"],
  ["Accountant", "business", "maintaining financial records and compliance"],
  ["Auditor", "business", "examining controls and financial accuracy"],
  ["Investment Banker", "business", "supporting capital raising and strategic transactions"],
  ["Marketing Specialist", "business", "developing campaigns and market positioning"],
  ["Digital Marketer", "business", "optimizing paid and organic digital channels"],
  ["Sales Manager", "business", "leading teams to revenue and client goals"],
  ["Business Analyst", "business", "translating business needs into solutions"],
  ["HR Specialist", "business", "managing recruitment, policy, and employee support"],
  ["Recruiter", "business", "sourcing and hiring top candidates"],
  ["Supply Chain Analyst", "business", "improving logistics and inventory efficiency"],
  ["Operations Manager", "business", "streamlining workflow and delivery quality"],
  ["Project Manager", "business", "coordinating scope, timelines, and stakeholders"],
  ["Management Consultant", "business", "advising organizations on strategic improvements"],
  ["Entrepreneur", "business", "building and scaling new ventures"],
  ["Real Estate Agent", "business", "guiding clients through property transactions"],
  ["Compliance Officer", "business", "ensuring regulatory and policy adherence"],
  ["Actuary", "business", "modeling risk for insurance and finance"],
  ["Customer Success Manager", "business", "driving client value and retention"],
  ["Procurement Specialist", "business", "managing sourcing contracts and vendors"],

  ["Graphic Designer", "creative", "creating visual identity and communication assets"],
  ["UI/UX Designer", "creative", "designing user journeys and product interfaces"],
  ["Animator", "creative", "producing motion graphics and animated narratives"],
  ["Illustrator", "creative", "crafting custom visual storytelling artwork"],
  ["Video Editor", "creative", "editing footage for compelling video content"],
  ["Filmmaker", "creative", "planning and producing cinematic projects"],
  ["Photographer", "creative", "capturing visual stories across formats"],
  ["Journalist", "creative", "researching and reporting public-interest stories"],
  ["Content Writer", "creative", "writing audience-focused educational and marketing content"],
  ["Copywriter", "creative", "crafting persuasive messaging for campaigns"],
  ["Social Media Manager", "creative", "building brand engagement through social strategy"],
  ["Music Producer", "creative", "recording and shaping music productions"],
  ["Interior Designer", "creative", "planning functional and aesthetic interior spaces"],
  ["Fashion Designer", "creative", "conceptualizing and prototyping apparel collections"],
  ["Art Director", "creative", "leading visual direction across campaigns"],
  ["3D Artist", "creative", "creating digital assets for games, film, and ads"],
  ["Podcast Producer", "creative", "developing and editing audio storytelling series"],
  ["Motion Designer", "creative", "combining typography, visuals, and animation"],

  ["Teacher", "service", "delivering instruction and supporting student growth"],
  ["School Counselor", "service", "guiding students academically and emotionally"],
  ["Social Worker", "service", "connecting individuals with critical support systems"],
  ["Lawyer", "service", "providing legal advice and courtroom representation"],
  ["Paralegal", "service", "supporting legal research and case preparation"],
  ["Police Officer", "service", "protecting communities and enforcing laws"],
  ["Firefighter", "service", "responding to emergencies and fire prevention"],
  ["Urban Planner", "service", "designing equitable and sustainable communities"],
  ["Librarian", "service", "curating resources and information literacy programs"],
  ["Nonprofit Program Manager", "service", "running mission-driven community programs"],
  ["Career Counselor", "service", "coaching students and job seekers on pathways"],
  ["Community Health Worker", "service", "bridging healthcare access in local communities"],
  ["Instructional Designer", "service", "creating effective learning experiences and materials"],
  ["Mediator", "service", "resolving conflicts through facilitated dialogue"],
  ["Public Policy Analyst", "service", "evaluating policies and social impact outcomes"],
  ["Probation Officer", "service", "supporting rehabilitation and legal compliance"],
  ["Emergency Management Specialist", "service", "planning community disaster preparedness and response"],
  ["Youth Program Coordinator", "service", "organizing mentorship and enrichment programs for students"],
  ["Academic Advisor", "service", "helping students plan coursework and long-term goals"],
  ["ESL Instructor", "service", "teaching English language learners with inclusive methods"],
  ["Museum Educator", "service", "designing public learning experiences in cultural institutions"],
  ["Special Education Teacher", "service", "adapting instruction for diverse learning needs"],
  ["Rehabilitation Counselor", "service", "supporting clients in career and independent-living planning"]
];

const careers = careerSeed.map(([title, category, focus]) => {
  const profile = categoryProfiles[category];
  return {
    title,
    category,
    focus,
    overview:
      `${title} is a ${profile.label.toLowerCase()} career centered on ${focus}. In this role, you combine domain expertise with practical problem-solving to create measurable impact for people, organizations, or communities. Strong professionals in this path continuously update their skills, collaborate across teams, and translate complex challenges into clear actions and outcomes.`,
    responsibilities: [
      `Plan and execute projects related to ${focus}, including setting priorities, timelines, and measurable goals.`,
      "Collaborate with cross-functional teams, communicate progress clearly, and adapt to stakeholder feedback.",
      "Use relevant tools, data, and professional standards to improve quality, efficiency, and outcomes.",
      "Document work, reflect on results, and propose improvements to processes or services over time."
    ],
    educationPath: profile.baselineEducation,
    salaryRange: profile.baselineSalary,
    growthOutlook: profile.baselineOutlook,
    workEnvironment: profile.baselineWorkplaces,
    keySkills: [...profile.strengths, `Role-specific capability in ${focus}`],
    studentActionPlan: [
      "Take foundational courses and identify which school subjects naturally align with this path.",
      "Build experience early through clubs, volunteering, personal projects, internships, or job shadowing.",
      "Create a portfolio, resume, or evidence tracker that demonstrates real outcomes and applied skills.",
      "Connect with professionals (LinkedIn, school events, alumni networks) and seek targeted mentorship."
    ]
  };
});

const categoryLabel = Object.fromEntries(
  Object.entries(categoryProfiles).map(([key, value]) => [key, value.label])
);

const selectEl = document.getElementById("careerSelect");
const careerSearchEl = document.getElementById("careerSearch");
const categoryFilterEl = document.getElementById("categoryFilter");
const careerSearchStatusEl = document.getElementById("careerSearchStatus");
const careerCardEl = document.getElementById("careerCard");
const careerCountEl = document.getElementById("careerCount");
const quizForm = document.getElementById("quizForm");
const quizResultsEl = document.getElementById("quizResults");

let filteredCareers = [...careers];

function createBulletList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderCareer(career) {
  careerCardEl.innerHTML = `
    <h3>${career.title}</h3>
    <p>${career.overview}</p>

    <div class="meta">
      <span class="tag">${categoryLabel[career.category]}</span>
      <span class="tag">Salary: ${career.salaryRange}</span>
      <span class="tag">Outlook: ${career.growthOutlook}</span>
    </div>

    <h4>What you'll do</h4>
    ${createBulletList(career.responsibilities)}

    <h4>Education pathway</h4>
    <p>${career.educationPath}</p>

    <h4>Work environment</h4>
    <p>${career.workEnvironment}</p>

    <h4>Core skills to build</h4>
    ${createBulletList(career.keySkills)}

    <h4>Student action plan</h4>
    ${createBulletList(career.studentActionPlan)}
  `;
}

function populateCategoryFilter() {
  const categories = Object.entries(categoryLabel);
  categories.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    categoryFilterEl.appendChild(option);
  });
}

function populateCareerSelect(list) {
  selectEl.innerHTML = "";

  list.forEach((career, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = `${career.title} — ${categoryLabel[career.category]}`;
    selectEl.appendChild(opt);
  });
}

function applyExplorerFilters() {
  const query = careerSearchEl.value.trim().toLowerCase();
  const category = categoryFilterEl.value;

  filteredCareers = careers.filter((career) => {
    const matchesCategory = category === "all" || career.category === category;
    const searchableText = `${career.title} ${career.category} ${categoryLabel[career.category]} ${career.focus}`.toLowerCase();
    const matchesQuery = query === "" || searchableText.includes(query);
    return matchesCategory && matchesQuery;
  });

  populateCareerSelect(filteredCareers);

  if (careerCountEl) {
    careerCountEl.textContent = `${careers.length} careers available`;
  }

  if (filteredCareers.length > 0) {
    careerSearchStatusEl.textContent = `Showing ${filteredCareers.length} matching careers.`;
    renderCareer(filteredCareers[0]);
    selectEl.disabled = false;
  } else {
    careerSearchStatusEl.textContent = "No careers match your current search/filter. Try a different keyword or category.";
    selectEl.disabled = true;
    careerCardEl.innerHTML = `
      <h3>No matching careers found</h3>
      <p>Try clearing the search box or switching back to <strong>All categories</strong> to see more options.</p>
    `;
  }
}

selectEl.addEventListener("change", (e) => {
  const picked = filteredCareers[Number(e.target.value)];
  if (picked) renderCareer(picked);
});

careerSearchEl.addEventListener("input", applyExplorerFilters);
categoryFilterEl.addEventListener("change", applyExplorerFilters);

const recommendationRules = {
  technology: ["Software Developer", "Data Engineer", "Cybersecurity Analyst", "Cloud Engineer", "UX Engineer"],
  science: ["Biologist", "Environmental Scientist", "Epidemiologist", "Hydrologist", "Materials Scientist"],
  healthcare: ["Nurse", "Doctor (Physician)", "Physical Therapist", "Public Health Specialist", "Physician Assistant"],
  business: ["Financial Analyst", "Business Analyst", "Operations Manager", "Customer Success Manager", "Entrepreneur"],
  creative: ["UI/UX Designer", "Graphic Designer", "Motion Designer", "Journalist", "Art Director"],
  service: ["Teacher", "School Counselor", "Social Worker", "Career Counselor", "Public Policy Analyst"]
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
  const picks = [...recommendationRules[topAreas[0]], ...recommendationRules[topAreas[1]]].slice(0, 8);

  quizResultsEl.innerHTML = `
    <h3>Your CareerCompass Matches</h3>
    <p>
      Based on your responses, your strongest areas are
      <strong>${categoryLabel[topAreas[0]]}</strong> and
      <strong>${categoryLabel[topAreas[1]]}</strong>.
    </p>
    <p>Suggested careers to explore first:</p>
    <ul>${picks.map((career) => `<li>${career}</li>`).join("")}</ul>
    <p class="quiz-tip">Tip: Open each suggested role in the Career Explorer and compare education requirements, workplace fit, and daily responsibilities.</p>
  `;
});

populateCategoryFilter();
applyExplorerFilters();
