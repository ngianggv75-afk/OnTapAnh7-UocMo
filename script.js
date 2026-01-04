const quizData = [
    { q: "My brother loves _______ photos of beautiful landscapes.", options: ["doing", "taking", "playing", "catching"], correct: 1, hint: "Cụm từ cố định: take photos (chụp ảnh)." },
    { q: "You should eat more vegetables and fruit because they are _______ for your health.", options: ["harmful", "bad", "good", "quick"], correct: 2, hint: "Rau củ quả tốt (good) cho sức khỏe." },
    { q: "Water puppetry _______ in the villages of the Red River Delta.", options: ["played", "moved", "went", "started"], correct: 3, hint: "Múa rối nước bắt đầu (started) tại các làng quê đồng bằng sông Hồng." },
    { q: "The 'Dan Bau' is a Vietnamese traditional musical _______.", options: ["equipment", "instrument", "tool", "device"], correct: 1, hint: "Đàn Bầu là một nhạc cụ (instrument) truyền thống." },
    { q: "How _______ calories are there in an apple?", options: ["many", "much", "some", "any"], correct: 0, hint: "Calories là danh từ đếm được số nhiều, dùng 'How many'." },
    { q: "I don't have _______ butter left to make the cake.", options: ["a", "an", "any", "some"], correct: 2, hint: "Dùng 'any' trong câu phủ định với danh từ không đếm được." },
    { q: "The Temple of Literature _______ by many people every year.", options: ["visit", "is visited", "visits", "visited"], correct: 1, hint: "Câu bị động ở hiện tại đơn: am/is/are + V3/ed." },
    { q: "Last week, we _______ old clothes to help the poor children.", options: ["give", "will give", "giving", "gave"], correct: 3, hint: "Dấu hiệu 'Last week' chia thì quá khứ đơn (gave)." },
    { q: "My hobby is different _______ yours.", options: ["with", "as", "from", "than"], correct: 2, hint: "Cấu trúc: be different from (khác với...)." },
    { q: "'Would you like some lemonade?' - '__________'", options: ["No, I don't.", "Yes, please.", "Yes, I do.", "Certainly."], correct: 1, hint: "Đáp lại lời mời một cách lịch sự dùng 'Yes, please'." },
    { q: "I didn't go to school yesterday ________ I had a high fever.", options: ["and", "because", "but", "so"], correct: 1, hint: "Dùng 'because' để chỉ nguyên nhân (vì bị sốt cao)." },
    { q: "I need _______ apple and _______ rice.", options: ["a - some", "an - any", "a - any", "an - some"], correct: 3, hint: "An + danh từ bắt đầu bằng nguyên âm; some + danh từ không đếm được." },
    { q: "I have decided to ride to school _____ it is a good way to protect the environment.", options: ["so", "because", "but", "although"], correct: 1, hint: "Dùng 'because' để giải thích lý do." },
    { q: "We often have diner _______ 8.30 _______ the evening.", options: ["in – at", "on – in", "at – in", "on – at"], correct: 2, hint: "At + giờ cụ thể; In + buổi trong ngày." },
    { q: "She has bought different kinds of _______ instruments.", options: ["music", "musical", "musician", "musically"], correct: 1, hint: "Musical instruments: nhạc cụ." },
    { q: "Peter wants to become an _______ because he is good at drawing.", options: ["artisan", "artist", "artistic", "art"], correct: 1, hint: "Artist (họa sĩ) là người giỏi vẽ tranh." },
    { q: "This book is _______ interesting_______ the one I read last week.", options: ["as – as", "from – as", "as – than", "as – to"], correct: 0, hint: "Cấu trúc so sánh bằng: as + adj + as." },
    { q: "I do not have _______ oranges, but I have _______ apples.", options: ["any – any", "some – any", "a – some", "any – some"], correct: 3, hint: "Any dùng cho câu phủ định, some dùng cho câu khẳng định." },
    { q: "_______ water do you drink every day? – Two litters.", options: ["How", "How many", "How much", "What"], correct: 2, hint: "Water là danh từ không đếm được, dùng 'How much'." },
    { q: "You can see the music room ____the third floor of the building over there.", options: ["at", "on", "in", "to"], correct: 1, hint: "Dùng giới từ 'on' cho tầng nhà (on the floor)." },
    { q: "We need calories or ________ to do the things every day.", options: ["food", "sleep", "drink", "energy"], correct: 3, hint: "Cơ thể cần calo hoặc năng lượng (energy) để hoạt động." },
    { q: "We walk to school or _______ a bike to school", options: ["ride", "come", "drive", "walk"], correct: 0, hint: "Cụm từ: ride a bike (đi xe đạp)." },
    { q: "It’s difficult _______ us to calculate.", options: ["in", "with", "for", "about"], correct: 2, hint: "Cấu trúc: It is difficult for somebody to do something." },
    { q: "If people want to keep _______, they should remember that everyone should have between 1600 and 2500 calories a day.", options: ["health", "fit", "active", "energy"], correct: 1, hint: "Cụm từ: keep fit (giữ dáng, khỏe mạnh)." },
    { q: "If we get too much food and don’t take part _______ any activities, we can get fat quickly.", options: ["with", "on", "of", "in"], correct: 3, hint: "Cụm từ: take part in (tham gia vào)." },
    { q: "Nam and many of his friends ________ a book fair in his neighbourhood.", options: ["joined", "donated", "were"], correct: 0, hint: "Joined: tham gia một hội chợ sách." },
    { q: "The book fair is... donating them ________ poor students in his community.", options: ["to", "with", "about"], correct: 0, hint: "Cụm từ: donate something to somebody (quyên góp cho ai)." },
    { q: "There ________ also some interesting competitions in the book fair...", options: ["were", "was", "been"], correct: 0, hint: "Chủ ngữ số nhiều 'competitions' nên dùng 'were'." },
    { q: "The ________ received various gifts like handmade cards...", options: ["winners", "runner", "competitors"], correct: 0, hint: "Người chiến thắng (winners) nhận được quà." },
    { q: "Unluckily, Nam didn’t win any games, ________ he still felt very happy.", options: ["but", "and", "so"], correct: 0, hint: "Dùng 'but' (nhưng) để chỉ sự đối lập." }
];

let currentIdx = 0;
let scoreCorrect = 0;
let scoreWrong = 0;

function init() { loadQuestion(); }

function loadQuestion() {
    if (currentIdx >= quizData.length) { showResult(); return; }
    const data = quizData[currentIdx];
    document.getElementById('current-pos').innerText = currentIdx + 1;
    document.getElementById('question').innerText = data.q;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = `${String.fromCharCode(65+idx)}. ${opt}`;
        btn.onclick = () => handleAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(choice) {
    const correct = quizData[currentIdx].correct;
    const msg = document.getElementById('owl-message');
    if (choice === correct) {
        scoreCorrect++;
        document.getElementById('score-correct').innerText = scoreCorrect;
        msg.innerText = "Giỏi quá! 👏 " + quizData[currentIdx].hint;
        msg.style.borderColor = "var(--success-color)";
    } else {
        scoreWrong++;
        document.getElementById('score-wrong').innerText = scoreWrong;
        msg.innerText = "Hãy lưu ý: " + quizData[currentIdx].hint;
        msg.style.borderColor = "var(--error-color)";
    }
    currentIdx++;
    setTimeout(loadQuestion, 2000);
}

function showResult() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    const finalScore = (scoreCorrect / quizData.length * 10).toFixed(1);
    document.getElementById('final-stats').innerHTML = `Đúng: ${scoreCorrect} | Sai: ${scoreWrong} <br> <b>Tổng điểm: ${finalScore}/10</b>`;
    document.getElementById('final-message').innerText = scoreCorrect >= 20 ? 
        "Học sinh THCS ƯỚC MƠ xuất sắc quá! 🌟" : 
        "Cố gắng luyện tập thêm để đạt ước mơ em nhé! 💪";
}

function restartGame() {
    currentIdx = 0; scoreCorrect = 0; scoreWrong = 0;
    document.getElementById('score-correct').innerText = 0;
    document.getElementById('score-wrong').innerText = 0;
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    init();
}

window.onload = init;