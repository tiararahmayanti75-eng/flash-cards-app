// 1. Data Pertanyaan & Jawaban Flash Cards
const flashcardsData = [
    {
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and hoisted. let and const are block-scoped; let allows reassignment, while const does not."
    },
    {
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    },
    {
        question: "What are the primitive data types in JavaScript?",
        answer: "String, Number, BigInt, Boolean, Undefined, Null, and Symbol."
    },
    {
        question: "What is the purpose of array.map()?",
        answer: "It creates a new array populated with the results of calling a provided function on every element in the calling array."
    },
    {
        question: "What is the difference between == and ===?",
        answer: "== compares values after performing type coercion, while === compares both the value and the type strictly."
    }
];

let currentIndex = 0;

// 2. Ambil Elemen DOM
const flashCard = document.getElementById('flash-card');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const progressBar = document.getElementById('progress-bar');
const cardIndicator = document.getElementById('card-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// 3. Fungsi untuk Update Tampilan Kartu
function updateCard() {
    // Pastikan kartu kembali menghadap ke depan sebelum diganti kodenya
    flashCard.classList.remove('flipped');
    
    // Tunggu animasi balik selesai sebentar, baru ganti teksnya
    setTimeout(() => {
        const currentCard = flashcardsData[currentIndex];
        questionText.textContent = currentCard.question;
        answerText.textContent = currentCard.answer;
        
        // Update Indikator (Contoh: 1 of 5)
        cardIndicator.textContent = `${currentIndex + 1} of ${flashcardsData.length}`;
        
        // Update Progress Bar
        const progressPercentage = ((currentIndex + 1) / flashcardsData.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        
        // Atur Status Tombol Navigator
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === flashcardsData.length - 1;
    }, 150);
}

// 4. Event Listener untuk Memutar Kartu (Flip)
flashCard.addEventListener('click', () => {
    flashCard.classList.toggle('flipped');
});

// 5. Event Listener untuk Tombol Navigasi
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < flashcardsData.length - 1) {
        currentIndex++;
        updateCard();
    }
});

// 6. Jalankan pertama kali saat aplikasi dimuat
updateCard();