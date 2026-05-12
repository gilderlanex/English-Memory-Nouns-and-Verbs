document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    // Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    
    // Dictionary
    const verbListContainer = document.getElementById('verb-list-container');
    const categoryFilter = document.getElementById('category-filter');
    
    // Exercise
    const exerciseCategory = document.getElementById('exercise-category');
    const scoreCount = document.getElementById('score-count');
    const flashcard = document.getElementById('flashcard');
    const ptHint = document.getElementById('pt-hint');
    const sentenceEn = document.getElementById('sentence-en');
    const verbInput = document.getElementById('verb-input');
    const answerForm = document.getElementById('answer-form');
    const feedbackMsg = document.getElementById('feedback-msg');
    
    // Back of card
    const correctVerbDisplay = document.getElementById('correct-verb-display');
    const sentencePt = document.getElementById('sentence-pt');
    const nextBtn = document.getElementById('next-btn');

    // --- State ---
    let score = 0;
    let currentVerbIndex = null;
    let exerciseList = [...verbData];

    // --- Initialize ---
    function init() {
        populateCategories();
        renderVerbList('all');
        setupNavigation();
        loadNextExercise();
    }

    // --- Navigation Logic ---
    function setupNavigation() {
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update buttons
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update views
                const targetViewId = btn.getAttribute('data-target');
                views.forEach(v => {
                    v.classList.remove('active-view');
                    if (v.id === targetViewId) {
                        v.classList.add('active-view');
                    }
                });
            });
        });
    }

    // --- Dictionary Logic ---
    function populateCategories() {
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });

        categoryFilter.addEventListener('change', (e) => {
            renderVerbList(e.target.value);
        });
    }

    function renderVerbList(category) {
        verbListContainer.innerHTML = '';
        
        const filteredVerbs = category === 'all' 
            ? verbData 
            : verbData.filter(v => v.category === category);

        filteredVerbs.forEach(verb => {
            const card = document.createElement('div');
            card.className = 'verb-card';
            card.innerHTML = `
                <span class="category-tag">${verb.category}</span>
                <h3 style="margin-top: 10px;">${verb.infinitive}</h3>
                <p><strong>Tradução:</strong> ${verb.translation}</p>
                <p style="font-size: 0.85rem; color: #94a3b8; font-style: italic;">
                    Ex: "${verb.sentences[0].english.replace('___', verb.sentences[0].answer)}"
                </p>
            `;
            verbListContainer.appendChild(card);
        });
    }

    // --- Exercise Logic ---
    function getRandomVerb() {
        if (exerciseList.length === 0) {
            exerciseList = [...verbData]; // Reset if all verbs used
        }
        const randomIndex = Math.floor(Math.random() * exerciseList.length);
        const verb = exerciseList[randomIndex];
        // Remove from list so it doesn't repeat immediately
        exerciseList.splice(randomIndex, 1);
        return verb;
    }

    function loadNextExercise() {
        const verb = getRandomVerb();
        currentVerbIndex = verbData.findIndex(v => v.id === verb.id);
        const sentenceObj = verb.sentences[0]; // Currently using the first sentence
        
        // Reset Card State
        flashcard.classList.remove('flipped');
        feedbackMsg.textContent = '';
        feedbackMsg.className = 'feedback';
        verbInput.value = '';
        verbInput.focus();

        // Populate Front
        exerciseCategory.textContent = verb.category;
        ptHint.textContent = verb.translation;
        sentenceEn.innerHTML = sentenceObj.english.replace('___', '<strong>___</strong>');
        
        // Populate Back
        correctVerbDisplay.textContent = sentenceObj.answer;
        sentencePt.textContent = sentenceObj.translation;
    }

    answerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const verbObj = verbData[currentVerbIndex];
        const correctAnswer = verbObj.sentences[0].answer.toLowerCase();
        const userAnswer = verbInput.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            // Correct
            score++;
            scoreCount.textContent = score;
            feedbackMsg.textContent = 'Correto! 🎉';
            feedbackMsg.className = 'feedback correct';
            
            // Wait a moment, then flip card
            setTimeout(() => {
                flashcard.classList.add('flipped');
            }, 600);
            
        } else {
            // Wrong
            feedbackMsg.textContent = 'Incorreto. Tente novamente.';
            feedbackMsg.className = 'feedback wrong';
            verbInput.value = ''; // Clear input
            verbInput.focus();
        }
    });

    nextBtn.addEventListener('click', () => {
        loadNextExercise();
    });

    // Start App
    init();
});
