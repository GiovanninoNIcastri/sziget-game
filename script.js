// Variabili globali
let currentStep = 0;
let selectedLanguage = 'en';
let selectedGender = '';
let selectedActivity = '';
let selectedPerson = '';

// Funzione per selezionare la lingua
function selectLanguage(language) {
    selectedLanguage = language;
    
    // Aggiungi effetto visivo
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(btn => btn.style.transform = 'scale(1)');
    
    const selectedBtn = event.target.closest('.language-btn');
    selectedBtn.style.transform = 'scale(1.05)';
    
    // Aggiorna tutti i testi
    updateAllTexts();
    
    // Passa al prossimo step dopo un breve delay
    setTimeout(() => {
        nextStep();
    }, 500);
}

// Funzione per aggiornare tutti i testi
function updateAllTexts() {
    // Aggiorna i titoli e sottotitoli
    document.getElementById('languageTitle').textContent = getTranslation('languageTitle', selectedLanguage);
    document.getElementById('languageSubtitle').textContent = getTranslation('languageSubtitle', selectedLanguage);
    
    // Aggiorna i testi del gender selection
    const genderTitle = document.querySelector('#step1 .header h1');
    const genderSubtitle = document.querySelector('#step1 .header p');
    const maleBtn = document.querySelector('.gender-btn.male .text');
    const maleSubtitle = document.querySelector('.gender-btn.male .subtitle');
    const femaleBtn = document.querySelector('.gender-btn.female .text');
    const femaleSubtitle = document.querySelector('.gender-btn.female .subtitle');
    
    if (genderTitle) genderTitle.textContent = getTranslation('genderTitle', selectedLanguage);
    if (genderSubtitle) genderSubtitle.textContent = getTranslation('genderSubtitle', selectedLanguage);
    if (maleBtn) maleBtn.textContent = getTranslation('maleButton', selectedLanguage);
    if (maleSubtitle) maleSubtitle.textContent = getTranslation('maleSubtitle', selectedLanguage);
    if (femaleBtn) femaleBtn.textContent = getTranslation('femaleButton', selectedLanguage);
    if (femaleSubtitle) femaleSubtitle.textContent = getTranslation('femaleSubtitle', selectedLanguage);
    
    // Aggiorna i testi dell'activity selection
    const activityTitle = document.querySelector('#step2 .header h2');
    const activitySubtitle = document.querySelector('#step2 .header p');
    const generateBtn = document.querySelector('#activityBtn .btn-text');
    const continueBtn = document.querySelector('.next-btn');
    
    if (activityTitle) activityTitle.textContent = getTranslation('activityTitle', selectedLanguage);
    if (activitySubtitle) activitySubtitle.textContent = getTranslation('activitySubtitle', selectedLanguage);
    if (generateBtn) generateBtn.textContent = getTranslation('generateButton', selectedLanguage);
    if (continueBtn) continueBtn.textContent = getTranslation('continueButton', selectedLanguage);
    
    // Aggiorna i testi della person selection
    const personTitle = document.querySelector('#step3 .header h2');
    const personSubtitle = document.querySelector('#step3 .header p');
    const selectRandomBtn = document.querySelector('#personBtn .btn-text');
    
    if (personTitle) personTitle.textContent = getTranslation('personTitle', selectedLanguage);
    if (personSubtitle) personSubtitle.textContent = getTranslation('personSubtitle', selectedLanguage);
    if (selectRandomBtn) selectRandomBtn.textContent = getTranslation('selectRandomButton', selectedLanguage);
    
    // Aggiorna i testi del risultato finale
    const finalTitle = document.querySelector('#step4 .header h2');
    const challengeLabel = document.querySelector('#step4 .challenge-card h3');
    const withLabel = document.querySelector('#step4 .challenge-card h4');
    const rewardTitle = document.querySelector('#step4 .reward-card h3');
    const rewardText = document.querySelector('#step4 .reward-card p');
    const restartBtn = document.querySelector('.restart-btn');
    
    if (finalTitle) finalTitle.textContent = getTranslation('finalTitle', selectedLanguage);
    if (challengeLabel) challengeLabel.textContent = getTranslation('challengeLabel', selectedLanguage);
    if (withLabel) withLabel.textContent = getTranslation('withLabel', selectedLanguage);
    if (rewardTitle) rewardTitle.textContent = getTranslation('rewardTitle', selectedLanguage);
    if (rewardText) rewardText.textContent = getTranslation('rewardText', selectedLanguage);
    if (restartBtn) restartBtn.textContent = getTranslation('restartButton', selectedLanguage);
    
                // I nomi delle persone rimangono sempre gli stessi in tutte le lingue
    const personNames = document.querySelectorAll('.person-name');
    const realNames = ['Giovannino', 'Alessandro', 'Francesco', 'Mattia'];
    personNames.forEach((name, index) => {
        name.textContent = realNames[index];
    });
}

// Database delle attività
const activities = {
    male: [
        {
            title: "🕺 Ballo Improvvisato",
            description: "Balla per 30 secondi come se fossi in discoteca!"
        },
        {
            title: "🎤 Karaoke Estremo",
            description: "Canta a squarciagola una canzone per 1 minuto!"
        },
        {
            title: "🤪 Faccia Buffa",
            description: "Fai la faccia più buffa possibile per 20 secondi!"
        },
        {
            title: "💪 Flessioni",
            description: "Fai 10 flessioni in 30 secondi!"
        },
        {
            title: "🎭 Imitazione",
            description: "Imita un animale per 30 secondi!"
        },
        {
            title: "🕴️ Posa da Modello",
            description: "Fai 3 pose da modello per 10 secondi ciascuna!"
        },
        {
            title: "🎪 Acrobazia",
            description: "Fai una capriola o un salto mortale!"
        },
        {
            title: "🎵 Beatbox",
            description: "Fai beatbox per 30 secondi!"
        },
        {
            title: "🤸 Stretching",
            description: "Fai 5 esercizi di stretching!"
        },
        {
            title: "🎯 Bersaglio",
            description: "Lancia qualcosa e colpisci un bersaglio!"
        }
    ],
    female: [
        {
            title: "💋 Bacio sulla Guancia",
            description: "Dai un bacio sulla guancia alla persona selezionata!"
        },
        {
            title: "💝 Complimento Dolce",
            description: "Fai un complimento romantico alla persona!"
        },
        {
            title: "💕 Abbraccio Caloroso",
            description: "Abbraccia la persona per 10 secondi!"
        },
        {
            title: "👀 Sguardo Intenso",
            description: "Guarda negli occhi la persona per 30 secondi!"
        },
        {
            title: "💃 Ballo Sensuale",
            description: "Balla in modo sensuale con la persona per 1 minuto!"
        },
        {
            title: "💋 Bacio Virtuale",
            description: "Manda un bacio virtuale alla persona!"
        },
        {
            title: "💝 Messaggio Dolce",
            description: "Sussurra un messaggio dolce alla persona!"
        },
        {
            title: "💕 Tenersi per Mano",
            description: "Tieni la mano della persona per 1 minuto!"
        },
        {
            title: "👄 Sussurro",
            description: "Sussurra qualcosa di dolce all'orecchio della persona!"
        },
        {
            title: "💋 Bacio sulla Mano",
            description: "Bacia la mano della persona come un gentiluomo!"
        }
    ]
};

// Funzione per selezionare il genere
function selectGender(gender) {
    selectedGender = gender;
    
    // Aggiungi effetto visivo
    const buttons = document.querySelectorAll('.gender-btn');
    buttons.forEach(btn => btn.style.transform = 'scale(1)');
    
    const selectedBtn = event.target.closest('.gender-btn');
    selectedBtn.style.transform = 'scale(1.05)';
    
    // Passa al prossimo step dopo un breve delay
    setTimeout(() => {
        nextStep();
    }, 500);
}

// Funzione per generare un'attività random
function generateActivity() {
    const activityList = getActivities(selectedGender, selectedLanguage);
    const randomIndex = Math.floor(Math.random() * activityList.length);
    selectedActivity = activityList[randomIndex];
    
    // Mostra il risultato
    document.getElementById('activityTitle').textContent = selectedActivity.title;
    document.getElementById('activityDescription').textContent = selectedActivity.description;
    document.getElementById('activityResult').classList.remove('hidden');
    
    // Aggiungi effetto al bottone
    const activityBtn = document.getElementById('activityBtn');
    activityBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        activityBtn.style.transform = 'scale(1)';
    }, 150);
}

// Funzione per selezionare una persona in modo randomico
function selectPersonRandom() {
    // Usa sempre i nomi reali per semplicità
    const people = [
        'Giovannino',
        'Alessandro', 
        'Francesco',
        'Mattia'
        
    ];
    const randomIndex = Math.floor(Math.random() * people.length);
    selectedPerson = people[randomIndex];
    
    // Mostra l'animazione di selezione randomica
    showRandomSelection(people, randomIndex);
}

// Funzione per mostrare l'animazione di selezione randomica
function showRandomSelection(people, finalIndex) {
    const displays = document.querySelectorAll('.person-display');
    let currentIndex = 0;
    
    // Nascondi tutti i display inizialmente
    displays.forEach(display => {
        display.classList.remove('active', 'selected');
    });
    
    // Animazione di selezione randomica
    const interval = setInterval(() => {
        // Reset tutti i display
        displays.forEach(display => {
            display.classList.remove('active', 'selected');
        });
        
        // Evidenzia il display corrente
        if (displays[currentIndex]) {
            displays[currentIndex].classList.add('active');
            // Aggiungi vibrazione per feedback tattile
            vibrate();
        }
        
        currentIndex = (currentIndex + 1) % people.length;
        
        // Ferma l'animazione quando raggiunge l'ultimo giro
        if (currentIndex === finalIndex) {
            clearInterval(interval);
            
            // Evidenzia la selezione finale
            setTimeout(() => {
                displays.forEach(display => {
                    display.classList.remove('active', 'selected');
                });
                
                if (displays[finalIndex]) {
                    displays[finalIndex].classList.add('selected');
                    // Vibrazione più forte per la selezione finale
                    vibrate();
                    setTimeout(() => vibrate(), 200);
                }
                
                // Passa al prossimo step dopo un delay
                setTimeout(() => {
                    nextStep();
                }, 1500);
            }, 500);
        }
    }, 200);
}

// Funzione per passare al prossimo step
function nextStep() {
    // Nascondi lo step corrente
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Passa al prossimo step
    currentStep++;
    
    // Mostra il nuovo step
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    // Se siamo al step finale, mostra i risultati
    if (currentStep === 4) {
        document.getElementById('finalActivity').textContent = selectedActivity.title + ': ' + selectedActivity.description;
        
        // Controlla che selectedPerson non sia vuoto
        if (!selectedPerson) {
            console.error('selectedPerson is empty');
            return;
        }
        
        // Imposta l'immagine della persona selezionata
        console.log('Selected person:', selectedPerson);
        
        // Mostra il nome nel risultato finale
        document.getElementById('finalPerson').textContent = selectedPerson;
        
        console.log('Language:', selectedLanguage);
        console.log('Selected person name:', selectedPerson);
        const finalPersonImage = document.getElementById('finalPersonImage');
        const finalEmojiFallback = document.querySelector('.final-emoji-fallback');
        
        if (!finalPersonImage) {
            console.error('finalPersonImage element not found');
            return;
        }
        
        // Mappa dei nomi delle immagini reali
        const imageNames = {
            'Giovannino': 'giovannino.jpg',
            'Alessandro': 'alessandro.jpg', 
            'Francesco': 'francesco.jpg',
            'Mattia': 'mattia.jpg'
        };
        
        if (!imageNames[selectedPerson]) {
            console.error('Invalid person name:', selectedPerson);
            return;
        }
        
        const imagePath = `images/${imageNames[selectedPerson]}?t=${Date.now()}`;
        
        console.log('Loading image:', imagePath);
        console.log('Selected person:', selectedPerson);
        
        // Nascondi il fallback emoji
        if (finalEmojiFallback) {
            finalEmojiFallback.style.display = 'none';
        }
        
        // Imposta il src dell'immagine
        finalPersonImage.src = imagePath;
        
        // Mostra l'immagine immediatamente
        finalPersonImage.style.display = 'block';
        
        // Forza il ricaricamento dell'immagine
        finalPersonImage.style.opacity = '0';
        setTimeout(() => {
            finalPersonImage.style.opacity = '1';
        }, 100);
        
        // Controlla se l'immagine esiste
        const img = new Image();
        img.onload = function() {
            console.log('Image exists and can be loaded:', imagePath);
            console.log('Image dimensions:', img.width, 'x', img.height);
        };
        img.onerror = function() {
            console.log('Image does not exist:', imagePath);
            // Se l'immagine non esiste, mostra il fallback
            finalPersonImage.style.display = 'none';
            if (finalEmojiFallback) {
                finalEmojiFallback.style.display = 'flex';
            }
        };
        img.src = imagePath;
        
        // Aggiungi anche un controllo diretto sull'immagine finale
        finalPersonImage.onload = function() {
            console.log('Final image loaded successfully:', this.src);
            console.log('Final image dimensions:', this.naturalWidth, 'x', this.naturalHeight);
        };
        
        finalPersonImage.onerror = function() {
            console.log('Final image failed to load:', this.src);
        };
    }
}

// Funzione per ricominciare il gioco
function restartGame() {
    // Reset delle variabili
    currentStep = 0;
    selectedLanguage = 'en';
    selectedGender = '';
    selectedActivity = '';
    selectedPerson = '';
    
    // Nascondi tutti gli step
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));
    
    // Mostra il primo step
    document.getElementById('step1').classList.add('active');
    
    // Nascondi il risultato dell'attività
    document.getElementById('activityResult').classList.add('hidden');
    
    // Reset dell'immagine finale
    const finalPersonImage = document.getElementById('finalPersonImage');
    const finalEmojiFallback = document.querySelector('.final-emoji-fallback');
    if (finalPersonImage) {
        finalPersonImage.src = '';
        finalPersonImage.style.display = 'none';
    }
    if (finalEmojiFallback) {
        finalEmojiFallback.style.display = 'none';
    }
    
    // Reset degli effetti visivi
    const buttons = document.querySelectorAll('.gender-btn');
    buttons.forEach(btn => btn.style.transform = 'scale(1)');
    
    // Reset dei display delle persone
    const displays = document.querySelectorAll('.person-display');
    displays.forEach(display => {
        display.classList.remove('active', 'selected');
        // Reset anche delle immagini
        const images = display.querySelectorAll('.person-image');
        images.forEach(img => {
            img.style.transform = 'scale(1)';
        });
    });
}

// Aggiungi effetti sonori (opzionale)
function playSound(type) {
    // Qui potresti aggiungere effetti sonori
    // Per ora è solo un placeholder
    console.log(`Playing ${type} sound`);
}

// Aggiungi vibrazione (se supportata)
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

// Event listeners per effetti aggiuntivi
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi effetti hover migliorati
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            vibrate();
        });
    });
    
    // Aggiungi effetto di caricamento iniziale
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
    }, 100);
});

// Funzione per condividere il risultato (opzionale)
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: 'Festival Game - La mia sfida!',
            text: `Ho ottenuto la sfida: ${selectedActivity.title} con ${selectedPerson}! 🎉`,
            url: window.location.href
        });
    }
}

// Aggiungi supporto per la tastiera
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && currentStep === 2) {
        generateActivity();
    }
});

// Funzione per animare il bottone dell'attività
function animateActivityButton() {
    const btn = document.getElementById('activityBtn');
    btn.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        btn.style.animation = '';
    }, 500);
}

// Aggiungi CSS per l'animazione pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style); 