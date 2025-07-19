// Sistema di traduzioni per il Festival Game
const translations = {
    en: {
        // Step 1: Language Selection
        languageTitle: "🌍 Choose your language",
        languageSubtitle: "Select your preferred language",
        
        // Step 2: Gender Selection
        genderTitle: "🎪 Festival Game",
        genderSubtitle: "Select your gender to start!",
        maleButton: "Boy",
        maleSubtitle: "Friendship Mode",
        femaleButton: "Girl", 
        femaleSubtitle: "Flirt Mode",
        
        // Step 3: Activity Selection
        activityTitle: "🎯 Choose your challenge!",
        activitySubtitle: "Press the button for a random activity",
        generateButton: "🎲 Generate Activity",
        continueButton: "Continue →",
        
        // Step 4: Person Selection
        personTitle: "👥 Who will be your victim?",
        personSubtitle: "Press the button to randomly choose who to do the activity with",
        selectRandomButton: "🎲 Select Random",
        
        // Step 5: Final Result
        finalTitle: "🎉 Final Result!",
        challengeLabel: "Your challenge:",
        withLabel: "You have to do it with:",
        rewardTitle: "Prize!",
        rewardText: "If you complete the challenge, you win an alcohol spray! 🎯",
        restartButton: "🔄 New Game",
        
        // Person names
        person1: "Giovannino",
        person2: "Alessandro", 
        person3: "Francesco",
        person4: "Mattia",
        
        // Activities - Male
        maleActivities: [
            {
                title: "🕺 Improvised Dance",
                description: "Dance for 30 seconds like you're in a club!"
            },
            {
                title: "🎤 Extreme Karaoke",
                description: "Sing a song at the top of your lungs for 1 minute!"
            },
            {
                title: "🤪 Funny Face",
                description: "Make the funniest face possible for 20 seconds!"
            },
            {
                title: "💪 Push-ups",
                description: "Do 10 push-ups in 30 seconds!"
            },
            {
                title: "🎭 Animal Imitation",
                description: "Imitate an animal for 30 seconds!"
            },
            {
                title: "🕴️ Model Pose",
                description: "Do 3 model poses for 10 seconds each!"
            },
            {
                title: "🎪 Acrobatics",
                description: "Do a somersault or cartwheel!"
            },
            {
                title: "🎵 Beatbox",
                description: "Do beatbox for 30 seconds!"
            },
            {
                title: "🤸 Stretching",
                description: "Do 5 stretching exercises!"
            },
            {
                title: "🎯 Target",
                description: "Throw something and hit a target!"
            }
        ],
        
        // Activities - Female
        femaleActivities: [
            {
                title: "💋 Cheek Kiss",
                description: "Give a kiss on the cheek to the selected person!"
            },
            {
                title: "💝 Sweet Compliment",
                description: "Give a romantic compliment to the person!"
            },
            {
                title: "💕 Warm Hug",
                description: "Hug the person for 10 seconds!"
            },
            {
                title: "👀 Intense Gaze",
                description: "Look into the person's eyes for 30 seconds!"
            },
            {
                title: "💃 Sensual Dance",
                description: "Dance sensually with the person for 1 minute!"
            },
            {
                title: "💋 Virtual Kiss",
                description: "Send a virtual kiss to the person!"
            },
            {
                title: "💝 Sweet Message",
                description: "Whisper a sweet message to the person!"
            },
            {
                title: "💕 Hold Hands",
                description: "Hold the person's hand for 1 minute!"
            },
            {
                title: "👄 Whisper",
                description: "Whisper something sweet in the person's ear!"
            },
            {
                title: "💋 Hand Kiss",
                description: "Kiss the person's hand like a gentleman!"
            }
        ]
    },
    
    it: {
        // Step 1: Language Selection
        languageTitle: "🌍 Scegli la tua lingua",
        languageSubtitle: "Seleziona la tua lingua preferita",
        
        // Step 2: Gender Selection
        genderTitle: "🎪 Festival Game",
        genderSubtitle: "Seleziona il tuo sesso per iniziare!",
        maleButton: "Ragazzo",
        maleSubtitle: "Modalità Amicizia",
        femaleButton: "Ragazza",
        femaleSubtitle: "Modalità Flirt",
        
        // Step 3: Activity Selection
        activityTitle: "🎯 Scegli la tua sfida!",
        activitySubtitle: "Premi il bottone per un'attività random",
        generateButton: "🎲 Genera Attività",
        continueButton: "Continua →",
        
        // Step 4: Person Selection
        personTitle: "👥 Chi sarà la tua vittima?",
        personSubtitle: "Premi il bottone per scegliere casualmente con chi fare l'attività",
        selectRandomButton: "🎲 Seleziona Random",
        
        // Step 5: Final Result
        finalTitle: "🎉 Risultato Finale!",
        challengeLabel: "La tua sfida:",
        withLabel: "Devi farlo con:",
        rewardTitle: "Premio!",
        rewardText: "Se completi la sfida, vinci uno spruzzo di alcol! 🎯",
        restartButton: "🔄 Nuova Partita",
        
        // Person names
        person1: "Giovannino",
        person2: "Alessandro",
        person3: "Francesco",
        person4: "Mattia",
        
        // Activities - Male
        maleActivities: [
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
        
        // Activities - Female
        femaleActivities: [
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
    },
    
    es: {
        // Step 1: Language Selection
        languageTitle: "🌍 Elige tu idioma",
        languageSubtitle: "Selecciona tu idioma preferido",
        
        // Step 2: Gender Selection
        genderTitle: "🎪 Festival Game",
        genderSubtitle: "¡Selecciona tu género para comenzar!",
        maleButton: "Chico",
        maleSubtitle: "Modo Amistad",
        femaleButton: "Chica",
        femaleSubtitle: "Modo Flirteo",
        
        // Step 3: Activity Selection
        activityTitle: "🎯 ¡Elige tu desafío!",
        activitySubtitle: "Presiona el botón para una actividad aleatoria",
        generateButton: "🎲 Generar Actividad",
        continueButton: "Continuar →",
        
        // Step 4: Person Selection
        personTitle: "👥 ¿Quién será tu víctima?",
        personSubtitle: "Presiona el botón para elegir aleatoriamente con quién hacer la actividad",
        selectRandomButton: "🎲 Seleccionar Aleatorio",
        
        // Step 5: Final Result
        finalTitle: "🎉 ¡Resultado Final!",
        challengeLabel: "Tu desafío:",
        withLabel: "Tienes que hacerlo con:",
        rewardTitle: "¡Premio!",
        rewardText: "¡Si completas el desafío, ganas un spray de alcohol! 🎯",
        restartButton: "🔄 Nueva Partida",
        
        // Person names
        person1: "Tú (Persona 1)",
        person2: "Tú (Persona 2)",
        person3: "Tú (Persona 3)",
        person4: "Tú (Persona 4)",
        
        // Activities - Male
        maleActivities: [
            {
                title: "🕺 Baile Improvisado",
                description: "¡Baila durante 30 segundos como si estuvieras en una discoteca!"
            },
            {
                title: "🎤 Karaoke Extremo",
                description: "¡Canta una canción a todo pulmón durante 1 minuto!"
            },
            {
                title: "🤪 Cara Graciosa",
                description: "¡Haz la cara más graciosa posible durante 20 segundos!"
            },
            {
                title: "💪 Flexiones",
                description: "¡Haz 10 flexiones en 30 segundos!"
            },
            {
                title: "🎭 Imitación de Animal",
                description: "¡Imita un animal durante 30 segundos!"
            },
            {
                title: "🕴️ Pose de Modelo",
                description: "¡Haz 3 poses de modelo durante 10 segundos cada una!"
            },
            {
                title: "🎪 Acrobacia",
                description: "¡Haz una voltereta o una rueda!"
            },
            {
                title: "🎵 Beatbox",
                description: "¡Haz beatbox durante 30 segundos!"
            },
            {
                title: "🤸 Estiramiento",
                description: "¡Haz 5 ejercicios de estiramiento!"
            },
            {
                title: "🎯 Objetivo",
                description: "¡Lanza algo y acierta un objetivo!"
            }
        ],
        
        // Activities - Female
        femaleActivities: [
            {
                title: "💋 Beso en la Mejilla",
                description: "¡Da un beso en la mejilla a la persona seleccionada!"
            },
            {
                title: "💝 Complimento Dulce",
                description: "¡Haz un complimento romántico a la persona!"
            },
            {
                title: "💕 Abrazo Cálido",
                description: "¡Abraza a la persona durante 10 segundos!"
            },
            {
                title: "👀 Mirada Intensa",
                description: "¡Mira a los ojos de la persona durante 30 segundos!"
            },
            {
                title: "💃 Baile Sensual",
                description: "¡Baila sensualmente con la persona durante 1 minuto!"
            },
            {
                title: "💋 Beso Virtual",
                description: "¡Envía un beso virtual a la persona!"
            },
            {
                title: "💝 Mensaje Dulce",
                description: "¡Susurra un mensaje dulce a la persona!"
            },
            {
                title: "💕 Tomarse de la Mano",
                description: "¡Toma la mano de la persona durante 1 minuto!"
            },
            {
                title: "👄 Susurro",
                description: "¡Susurra algo dulce al oído de la persona!"
            },
            {
                title: "💋 Beso en la Mano",
                description: "¡Besa la mano de la persona como un caballero!"
            }
        ]
    },
    
    fr: {
        // Step 1: Language Selection
        languageTitle: "🌍 Choisis ta langue",
        languageSubtitle: "Sélectionne ta langue préférée",
        
        // Step 2: Gender Selection
        genderTitle: "🎪 Festival Game",
        genderSubtitle: "Sélectionne ton genre pour commencer !",
        maleButton: "Garçon",
        maleSubtitle: "Mode Amitié",
        femaleButton: "Fille",
        femaleSubtitle: "Mode Flirt",
        
        // Step 3: Activity Selection
        activityTitle: "🎯 Choisis ton défi !",
        activitySubtitle: "Appuie sur le bouton pour une activité aléatoire",
        generateButton: "🎲 Générer Activité",
        continueButton: "Continuer →",
        
        // Step 4: Person Selection
        personTitle: "👥 Qui sera ta victime ?",
        personSubtitle: "Appuie sur le bouton pour choisir aléatoirement avec qui faire l'activité",
        selectRandomButton: "🎲 Sélectionner Aléatoire",
        
        // Step 5: Final Result
        finalTitle: "🎉 Résultat Final !",
        challengeLabel: "Ton défi :",
        withLabel: "Tu dois le faire avec :",
        rewardTitle: "Prix !",
        rewardText: "Si tu complètes le défi, tu gagnes un spray d'alcool ! 🎯",
        restartButton: "🔄 Nouvelle Partie",
        
        // Person names
        person1: "Toi (Personne 1)",
        person2: "Toi (Personne 2)",
        person3: "Toi (Personne 3)",
        person4: "Toi (Personne 4)",
        
        // Activities - Male
        maleActivities: [
            {
                title: "🕺 Danse Improvisée",
                description: "Danse pendant 30 secondes comme si tu étais en boîte !"
            },
            {
                title: "🎤 Karaoké Extrême",
                description: "Chante une chanson à tue-tête pendant 1 minute !"
            },
            {
                title: "🤪 Grimace",
                description: "Fais la grimace la plus drôle possible pendant 20 secondes !"
            },
            {
                title: "💪 Pompes",
                description: "Fais 10 pompes en 30 secondes !"
            },
            {
                title: "🎭 Imitation d'Animal",
                description: "Imite un animal pendant 30 secondes !"
            },
            {
                title: "🕴️ Pose de Mannequin",
                description: "Fais 3 poses de mannequin pendant 10 secondes chacune !"
            },
            {
                title: "🎪 Acrobatie",
                description: "Fais une roulade ou un saut périlleux !"
            },
            {
                title: "🎵 Beatbox",
                description: "Fais du beatbox pendant 30 secondes !"
            },
            {
                title: "🤸 Étirements",
                description: "Fais 5 exercices d'étirement !"
            },
            {
                title: "🎯 Cible",
                description: "Lance quelque chose et touche une cible !"
            }
        ],
        
        // Activities - Female
        femaleActivities: [
            {
                title: "💋 Bisou sur la Joue",
                description: "Donne un bisou sur la joue à la personne sélectionnée !"
            },
            {
                title: "💝 Compliment Doux",
                description: "Fais un compliment romantique à la personne !"
            },
            {
                title: "💕 Câlin Chaud",
                description: "Fais un câlin à la personne pendant 10 secondes !"
            },
            {
                title: "👀 Regard Intense",
                description: "Regarde dans les yeux de la personne pendant 30 secondes !"
            },
            {
                title: "💃 Danse Sensuelle",
                description: "Danse sensuellement avec la personne pendant 1 minute !"
            },
            {
                title: "💋 Bisou Virtuel",
                description: "Envoie un bisou virtuel à la personne !"
            },
            {
                title: "💝 Message Doux",
                description: "Chuchote un message doux à la personne !"
            },
            {
                title: "💕 Se Tenir la Main",
                description: "Tiens la main de la personne pendant 1 minute !"
            },
            {
                title: "👄 Chuchotement",
                description: "Chuchote quelque chose de doux à l'oreille de la personne !"
            },
            {
                title: "💋 Bisou sur la Main",
                description: "Baise la main de la personne comme un gentleman !"
            }
        ]
    },
    
    de: {
        // Step 1: Language Selection
        languageTitle: "🌍 Wähle deine Sprache",
        languageSubtitle: "Wähle deine bevorzugte Sprache",
        
        // Step 2: Gender Selection
        genderTitle: "🎪 Festival Game",
        genderSubtitle: "Wähle dein Geschlecht um zu beginnen!",
        maleButton: "Junge",
        maleSubtitle: "Freundschaftsmodus",
        femaleButton: "Mädchen",
        femaleSubtitle: "Flirtmodus",
        
        // Step 3: Activity Selection
        activityTitle: "🎯 Wähle deine Herausforderung!",
        activitySubtitle: "Drücke den Knopf für eine zufällige Aktivität",
        generateButton: "🎲 Aktivität Generieren",
        continueButton: "Weiter →",
        
        // Step 4: Person Selection
        personTitle: "👥 Wer wird dein Opfer?",
        personSubtitle: "Drücke den Knopf um zufällig zu wählen mit wem du die Aktivität machst",
        selectRandomButton: "🎲 Zufällig Auswählen",
        
        // Step 5: Final Result
        finalTitle: "🎉 Endergebnis!",
        challengeLabel: "Deine Herausforderung:",
        withLabel: "Du musst es machen mit:",
        rewardTitle: "Preis!",
        rewardText: "Wenn du die Herausforderung meisterst, gewinnst du einen Alkoholspray! 🎯",
        restartButton: "🔄 Neues Spiel",
        
        // Person names
        person1: "Du (Person 1)",
        person2: "Du (Person 2)",
        person3: "Du (Person 3)",
        person4: "Du (Person 4)",
        
        // Activities - Male
        maleActivities: [
            {
                title: "🕺 Improvisierter Tanz",
                description: "Tanze 30 Sekunden als wärst du in einem Club!"
            },
            {
                title: "🎤 Extremes Karaoke",
                description: "Singe ein Lied aus voller Kehle für 1 Minute!"
            },
            {
                title: "🤪 Lustiges Gesicht",
                description: "Mache das lustigste Gesicht möglich für 20 Sekunden!"
            },
            {
                title: "💪 Liegestütze",
                description: "Mache 10 Liegestütze in 30 Sekunden!"
            },
            {
                title: "🎭 Tiernachahmung",
                description: "Ahme ein Tier für 30 Sekunden nach!"
            },
            {
                title: "🕴️ Modellpose",
                description: "Mache 3 Modellposen für je 10 Sekunden!"
            },
            {
                title: "🎪 Akrobatik",
                description: "Mache einen Purzelbaum oder eine Rolle!"
            },
            {
                title: "🎵 Beatbox",
                description: "Mache Beatbox für 30 Sekunden!"
            },
            {
                title: "🤸 Dehnübungen",
                description: "Mache 5 Dehnübungen!"
            },
            {
                title: "🎯 Ziel",
                description: "Wirf etwas und triff ein Ziel!"
            }
        ],
        
        // Activities - Female
        femaleActivities: [
            {
                title: "💋 Wangenkuss",
                description: "Gib der ausgewählten Person einen Kuss auf die Wange!"
            },
            {
                title: "💝 Süßes Kompliment",
                description: "Mache der Person ein romantisches Kompliment!"
            },
            {
                title: "💕 Warme Umarmung",
                description: "Umarme die Person für 10 Sekunden!"
            },
            {
                title: "👀 Intensiver Blick",
                description: "Schau der Person 30 Sekunden in die Augen!"
            },
            {
                title: "💃 Sinnlicher Tanz",
                description: "Tanze sinnlich mit der Person für 1 Minute!"
            },
            {
                title: "💋 Virtueller Kuss",
                description: "Schicke der Person einen virtuellen Kuss!"
            },
            {
                title: "💝 Süße Nachricht",
                description: "Flüstere der Person eine süße Nachricht zu!"
            },
            {
                title: "💕 Händchenhalten",
                description: "Halte die Hand der Person für 1 Minute!"
            },
            {
                title: "👄 Flüstern",
                description: "Flüstere der Person etwas Süßes ins Ohr!"
            },
            {
                title: "💋 Handkuss",
                description: "Küsse die Hand der Person wie ein Gentleman!"
            }
        ]
    }
};

// Funzione per ottenere la traduzione
function getTranslation(key, language = 'en') {
    const lang = translations[language] || translations['en'];
    return lang[key] || key;
}

// Funzione per ottenere le attività
function getActivities(gender, language = 'en') {
    const lang = translations[language] || translations['en'];
    return gender === 'male' ? lang.maleActivities : lang.femaleActivities;
} 