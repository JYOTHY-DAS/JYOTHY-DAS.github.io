const questions = [
    {q: "I am not alive, but I grow. I don’t have lungs, but I need air. What am I?", a:"Fire"},
    {q:"The more you take, the more you leave behind. What are they?", a: "Footsteps"},
    {q:"What comes once in a minute, twice in a moment, but never in a thousand years?",a:"The letter 'M'"},
    {q:"A man builds a house with all sides facing south. A bear walks past the house. What color is the bear?",a:"White—because the house is at the North Pole."},
    {q:"I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",a:"An echo."},
    {q:"If you’re running in a race and you pass the person in second place, what place are you in?",a:"Second place"},
    {q:"You have a 5-liter and a 3-liter jug. How do you measure exactly 4 liters of water?",a:"Fill the 5-liter jug, pour into the 3-liter jug until it’s full, leaving 2 liters in the 5-liter jug. Then empty the 3-liter jug and pour the 2 liters into it. Finally, refill the 5-liter jug and pour into the 3-liter jug until it’s full again, leaving exactly 4 liters in the 5-liter jug."},
    {q:"I am the beginning of everything, the end of everywhere. I’m the beginning of eternity, the end of time and space. What am I?",a:"The letter 'E'."},
    {q:"How many months have 28 days?",a:"All 12 months have at least 28 days."},
    { q: "I’m tall when I’m young, and I’m short when I’m old. What am I?", a: "A candle" },
    { q: "What is full of holes but still holds water?", a: "A sponge" },
    { q: "What has many keys but can't open a single lock?", a: "A piano" },
    { q: "Where does today come before yesterday?", a: "In a dictionary" },
    { q: "What can you catch but not throw?", a: "A cold" },
    { q: "What has one eye but can’t see?", a: "A needle" },
    { q: "What has hands but can’t clap?", a: "A clock" }
];

// Duplicate the questions to make 100
while (questions.length < 100) {
    questions.push(...questions);
}
questions.length = 100; // Limit it to 100

const questionsPerPage = 25;
let currentPage = 1;

function generateQuestions() {
    let questionContainer = document.getElementById("questions");
    questionContainer.innerHTML = ""; // Clear previous content

    let start = (currentPage - 1) * questionsPerPage;
    let end = Math.min(start + questionsPerPage, questions.length);

    for (let i = start; i < end; i++) {
        let questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `<strong>Q${i + 1}:</strong> ${questions[i].q} <br> 
                                <span class="answer">Answer: ${questions[i].a}</span>`;
        questionContainer.appendChild(questionDiv);
    }
}

function generatePagination() {
    let pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";

    let totalPages = Math.ceil(questions.length / questionsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
        let pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = `${(i - 1) * questionsPerPage + 1}-${i * questionsPerPage}`;
        pageLink.className = i === currentPage ? "active-page" : "";

        pageLink.onclick = function() {
            currentPage = i;
            generateQuestions();
            generatePagination();
        };
        pageNumbers.appendChild(pageLink);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        generateQuestions();
        generatePagination();
    }
}

function nextPage() {
    let totalPages = Math.ceil(questions.length / questionsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        generateQuestions();
        generatePagination();
    }
}

// Initialize
generateQuestions();
generatePagination();
