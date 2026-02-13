const CONFIG = {
    valentineName: "Vini",
    pageTitle: "Will You Be My Valentine? ❤️🦎",

    floatingEmojis: {
        hearts: ['❤️', '💕', '💗', '💓'],
        bears: ['🦎', '🐸','🐉']
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
            text: "Você aceita ser meu Valentine no dia 14 de fevereiro de 2026? 🌹",
            yesBtn: "Sim!",
            noBtn: "Não"
        }
    },

    loveMessages: {
        extreme: "UAUUUUUUUUU Você me ama esse tanto? 🥰🐑❤️",
        high: "Ao infinito e além! 🚀❤️",
        normal: "Muitoo! 🥰"
    },

    celebration: {
        title: "SIMM! Não acredito na minha sorte! 🎉💖💝💓",
        message: "Agora vem buscar seu presente… um abraço demorado e um beijo que não acaba 😏💋!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#f57799",
        backgroundEnd: "#bdc9a2",
        buttonBackground: "#6d9e51",
        buttonHover: "#f26076",
        textColor: "#222222"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

  music: {
        enabled: true,                    
        autoplay: true,                    
        musicUrl: "https://res.cloudinary.com/dsprnqsmo/video/upload/v1770989753/L-O-V-E_zjvhmp.mp3", 
        startText: "🎵 Play Music",       
        stopText: "🔇 Stop Music",      
        volume: 0.5                       
    }
};

window.VALENTINE_CONFIG = CONFIG;
