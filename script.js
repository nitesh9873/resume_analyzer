let resumeText = "";

const jobSkills = {

"software engineer":[
"c++","java","python","sql",
"dsa","oop","git","linux"
],

"web developer":[
"html","css","javascript",
"react","node","mongodb",
"bootstrap","api"
],

"frontend developer":[
"html","css","javascript",
"react","bootstrap",
"tailwind"
],

"backend developer":[
"node","express",
"mongodb","sql",
"api","python"
],

"full stack developer":[
"html","css","javascript",
"react","node",
"mongodb","sql"
],

"data analyst":[
"python","sql","excel",
"power bi","tableau",
"pandas"
],

"data scientist":[
"python","machine learning",
"numpy","pandas",
"tensorflow","statistics"
],

"machine learning engineer":[
"python","tensorflow",
"pytorch","machine learning",
"deep learning","numpy"
],

"devops engineer":[
"docker","kubernetes",
"linux","aws",
"jenkins","git"
],

"cyber security analyst":[
"network security",
"ethical hacking",
"wireshark",
"linux",
"cryptography"
]

};

document
.getElementById("resumeFile")
.addEventListener("change", function(){

    const file = this.files[0];

    if(!file){
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){

        resumeText =
        e.target.result.toLowerCase();

        alert(
        "Resume uploaded successfully!"
        );

    };

    reader.readAsText(file);

});

function analyzeResume(){

    if(resumeText.trim() === ""){

        alert(
        "Please upload a TXT resume first."
        );

        return;
    }

    const role =
    document
    .getElementById("role")
    .value;

    const skills =
    jobSkills[role];

    let matched = [];
    let missing = [];

    skills.forEach(skill=>{

        if(
            resumeText.includes(skill)
        ){
            matched.push(skill);
        }
        else{
            missing.push(skill);
        }

    });

    const score =
    Math.round(
    (matched.length /
    skills.length) * 100
    );

    displayResults(
        score,
        matched,
        missing,
        role
    );
}

function displayResults(
    score,
    matched,
    missing,
    role
){

    document
    .getElementById("resultSection")
    .classList.remove("hidden");

    document
    .getElementById("scoreValue")
    .innerText =
    score + "%";

    document
    .getElementById("progressFill")
    .style.width =
    score + "%";

    updateCircle(score);

    let strength = "";

    if(score >= 80){
        strength =
        "🟢 Excellent Resume";
    }
    else if(score >= 60){
        strength =
        "🟡 Good Resume";
    }
    else if(score >= 40){
        strength =
        "🟠 Average Resume";
    }
    else{
        strength =
        "🔴 Weak Resume";
    }

    document
    .getElementById("strength")
    .innerText =
    strength;

    populateSkills(
        matched,
        missing
    );

    analyzeContactInfo();

    analyzeSections();

    analyzeStatistics();

    generateStrengths(
        matched
    );

    generateWeaknesses(
        missing
    );

    generateRecommendation(
        score
    );

    generateFeedback(
        score,
        role,
        missing
    );
}

function populateSkills(
    matched,
    missing
){

    let matchedHTML = "";
    let missingHTML = "";

    matched.forEach(skill=>{
        matchedHTML +=
        `<li>✅ ${skill}</li>`;
    });

    missing.forEach(skill=>{
        missingHTML +=
        `<li>❌ ${skill}</li>`;
    });

    document
    .getElementById("matchedSkills")
    .innerHTML =
    matchedHTML;

    document
    .getElementById("missingSkills")
    .innerHTML =
    missingHTML;
}

function analyzeContactInfo(){

    let result = "";

    const emailRegex =
    /\S+@\S+\.\S+/;

    const phoneRegex =
    /\d{10}/;

    if(emailRegex.test(resumeText)){
        result +=
        "<li>✅ Email Found</li>";
    }
    else{
        result +=
        "<li>❌ Email Missing</li>";
    }

    if(phoneRegex.test(resumeText)){
        result +=
        "<li>✅ Phone Found</li>";
    }
    else{
        result +=
        "<li>❌ Phone Missing</li>";
    }

    if(
        resumeText.includes("linkedin")
    ){
        result +=
        "<li>✅ LinkedIn Found</li>";
    }
    else{
        result +=
        "<li>❌ LinkedIn Missing</li>";
    }

    if(
        resumeText.includes("github")
    ){
        result +=
        "<li>✅ GitHub Found</li>";
    }
    else{
        result +=
        "<li>❌ GitHub Missing</li>";
    }

    document
    .getElementById("contactCheck")
    .innerHTML =
    result;
}

function analyzeSections(){

    const sections = [
        "education",
        "skills",
        "projects",
        "experience",
        "certifications",
        "achievements"
    ];

    let output = "";

    sections.forEach(section=>{

        if(
            resumeText.includes(section)
        ){
            output +=
            `<li>✅ ${section}</li>`;
        }
        else{
            output +=
            `<li>❌ ${section}</li>`;
        }

    });

    document
    .getElementById("sectionCheck")
    .innerHTML =
    output;
}

function analyzeStatistics(){

    const words =
    resumeText
    .split(/\s+/)
    .length;

    let lengthStatus =
    "";

    if(words < 150){

        lengthStatus =
        "Too Short";

    }
    else if(words < 400){

        lengthStatus =
        "Good";

    }
    else{

        lengthStatus =
        "Excellent";
    }

    document
    .getElementById("resumeStats")
    .innerHTML =
    `
    <li>Total Words: ${words}</li>
    <li>Resume Length: ${lengthStatus}</li>
    `;
}

function generateStrengths(
    matched
){

    let html = "";

    if(matched.length >= 5){
        html +=
        "<li>Strong technical profile</li>";
    }

    if(
        resumeText.includes("project")
    ){
        html +=
        "<li>Project experience detected</li>";
    }

    if(
        resumeText.includes("certification")
    ){
        html +=
        "<li>Certifications detected</li>";
    }

    document
    .getElementById("strengthList")
    .innerHTML =
    html;
}

function generateWeaknesses(
    missing
){

    let html = "";

    missing.forEach(skill=>{

        html +=
        `<li>${skill}</li>`;

    });

    document
    .getElementById("weaknessList")
    .innerHTML =
    html;
}

function generateRecommendation(
    score
){

    let recommendation =
    "";

    if(score >= 80){

        recommendation =
        "🟢 Highly Recommended";

    }
    else if(score >= 60){

        recommendation =
        "🟡 Recommended";

    }
    else{

        recommendation =
        "🔴 Needs Improvement";
    }

    document
    .getElementById("recommendation")
    .innerText =
    recommendation;
}

function generateFeedback(
    score,
    role,
    missing
){

    let feedback =
    "";

    if(score >= 80){

        feedback =
        `Excellent profile for ${role}. The resume contains most of the required skills and is likely to perform well in ATS screening.`;

    }
    else if(score >= 60){

        feedback =
        `Good profile for ${role}. Adding a few more relevant skills can improve your ATS ranking.`;

    }
    else{

        feedback =
        `The resume requires improvement for ${role}. Focus on adding technical skills, projects, and certifications.`;

    }

    if(missing.length > 0){

        feedback +=
        ` Missing skills: ${missing.join(", ")}.`;
    }

    document
    .getElementById("feedbackText")
    .innerText =
    feedback;
}

function updateCircle(score){

    const circle =
    document.querySelector(
    ".score-circle"
    );

    const degree =
    score * 3.6;

    circle.style.background =
    `conic-gradient(
        #4CAF50 ${degree}deg,
        #e0e0e0 ${degree}deg
    )`;
}
