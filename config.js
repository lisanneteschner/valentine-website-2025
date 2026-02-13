const CONFIG = {
    valentineName: "Vini",
    pageTitle: "Will You Be My Valentine? ❤️🦎",

    
    floatingEmojis: {
        hearts: ['❤️', '💕', '💗', '💓'],  
        animals: ['🦎', '🐸','🐉']                     
    },

    
    questions: {
        first: {
            text: "Você gosta de mim?",                                  
            yesBtn: "Sim",                                             
            noBtn: "Não",                                              
            secretAnswer: "Gosto não… amo demais minha ovelinha 🐑❤️"          
        },
        second: {
            text: "Quanto você me ama 👀?",                          
            startText: "Esse tanto!",                                  
            nextBtn: "Próximo ❤️"                                        
        },
        third: {
            text: "text: "Você aceita ser meu Valentine no dia 14 de fevereiro de 2026? 🌹", 
            yesBtn: "Sim!",                                             
            noBtn: "Não"                                                 
        }
    },

    
    loveMessages: {
        extreme: "UAUUU Você me ama esse tanto? 🥰🐑❤️",  
        high: "Ao infinito e além! 🚀❤️",             
        normal: "Muitoo! 🥰"                           
    },

   
    celebration: {
        title: "SIM! Não acredito na minha sorte! 🎉💖💝💓",
        message: "Agora vem buscar seu presente… um abraço demorado e um beijo que não acaba 😏💋!",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#a82323",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

   
   
    animations: {
        floatDuration: "15s",           
        floatDistance: "50px",          
        bounceSpeed: "0.5s",           
        heartExplosionSize: 1.5        
    },

    
    const audio = new Audio(
  "https://res.cloudinary.com/dsprnqsmo/video/upload/v1770989753/L-O-V-E_zjvhmp.mp3"
);

audio.volume = 0.5;
audio.loop = true;

let hasPlayed = false;

const startMusic = () => {
  if (!hasPlayed) {
    audio.play().catch(() => {});
    hasPlayed = true;

    
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
    document.removeEventListener("keydown", startMusic);
  }
};


document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
document.addEventListener("keydown", startMusic);



window.VALENTINE_CONFIG = CONFIG; 
