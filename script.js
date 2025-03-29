const questions = [
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
