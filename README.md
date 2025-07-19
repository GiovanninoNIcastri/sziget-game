# 🎪 Festival Game - Sziget

Una web app divertente per creare sfide e attività durante i festival!

## 🎯 Come Funziona

1. **Scansiona il QR Code** - Ti porta direttamente all'app
2. **🌍 Seleziona la lingua** - Scegli tra 5 lingue europee (Inglese, Italiano, Spagnolo, Francese, Tedesco)
3. **Seleziona il tuo sesso** - Determina il tipo di attività (amicizia per ragazzi, flirt per ragazze)
4. **Genera un'attività random** - Premi il bottone per una sfida casuale
5. **Selezione randomica della vittima** - Premi il bottone per scegliere casualmente con chi del gruppo fare l'attività
6. **Completa la sfida** - Se la fai, vinci uno spruzzo di alcol! 🍺

**Esempio**: Se una ragazza scansiona e esce "Dai un bacio", lei deve baciare una delle 4 persone del gruppo (scelta casualmente).

## 🚀 Come Usare

### Sviluppo Locale
1. Apri il file `index.html` nel browser
2. Oppure usa un server locale:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

### Deploy Online
Puoi deployare l'app su:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Firebase Hosting**

## 📱 Caratteristiche

- ✅ **Design Responsive** - Funziona su mobile e desktop
- ✅ **Animazioni Fluide** - Transizioni e effetti visivi
- ✅ **Attività Divertenti** - 10 attività per ogni genere
- ✅ **Interfaccia Intuitiva** - Facile da usare
- ✅ **Supporto Vibrazione** - Effetti tattili su mobile
- ✅ **Multilingua** - 5 lingue europee supportate

## 🎨 Personalizzazione

### Modificare le Attività
Apri `script.js` e modifica l'oggetto `activities`:

```javascript
const activities = {
    male: [
        {
            title: "🕺 Ballo Improvvisato",
            description: "Balla per 30 secondi come se fossi in discoteca!"
        },
        // Aggiungi altre attività...
    ],
    female: [
        // Attività per ragazze...
    ]
};
```

### Cambiare i Colori
Modifica il file `styles.css` per personalizzare i colori e lo stile.

## 🔧 Tecnologie Usate

- **HTML5** - Struttura
- **CSS3** - Styling e animazioni
- **JavaScript** - Logica del gioco
- **Google Fonts** - Tipografia

## 📋 Attività Incluse

### Per Ragazzi (Modalità Amicizia)
- 🕺 Ballo Improvvisato
- 🎤 Karaoke Estremo
- 🤪 Faccia Buffa
- 💪 Flessioni
- 🎭 Imitazione
- 🕴️ Posa da Modello
- 🎪 Acrobazia
- 🎵 Beatbox
- 🤸 Stretching
- 🎯 Bersaglio

### Per Ragazze (Modalità Flirt)
- 💋 Bacio sulla Guancia
- 💝 Complimento Dolce
- 💕 Abbraccio Caloroso
- 👀 Sguardo Intenso
- 💃 Ballo Sensuale
- 💋 Bacio Virtuale
- 💝 Messaggio Dolce
- 💕 Tenersi per Mano
- 👄 Sussurro
- 💋 Bacio sulla Mano

## 🎉 Divertiti al Festival!

L'app è pronta per essere usata! Basta aprire `index.html` nel browser e iniziare a giocare. 

**Buon divertimento! 🎪✨** 