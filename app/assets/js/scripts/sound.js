// document.addEventListener('DOMContentLoaded', function() {
//   const audio = new Audio('https://noaribote.fr/public/playback.mp3');
//     audio.volume = 1.00;
//     audio.loop = true;
//     audio.play();
// });

document.addEventListener('DOMContentLoaded', () => {
    // Chemin relatif à la page HTML chargée
    const audio = new Audio('./assets/sounds/playback.mp3');
    audio.volume = 1.0;

    const checkbox1 = document.getElementById('checkbox1IDENTIFY');
    const checkbox2 = document.getElementById('checkbox2IDENTIFY');

    if (!checkbox1 || !checkbox2) {
        console.error('Checkbox introuvable dans le DOM', {
            checkbox1,
            checkbox2
        });
        return;
    }

    checkbox1.checked = localStorage.getItem('checkbox1') === 'true';
    checkbox2.checked = localStorage.getItem('checkbox2') === 'true';

    async function playAudio(loop) {
        audio.loop = loop;

        try {
            await audio.play();
            console.log('Lecture audio démarrée');
        } catch (error) {
            console.error('Impossible de lire le MP3 :', error);
        }
    }

    function updateAudio() {
        if (checkbox1.checked) {
            audio.pause();
            audio.loop = false;
        } else if (checkbox2.checked) {
            playAudio(false);
        } else {
            playAudio(true);
        }
    }

    checkbox1.addEventListener('change', () => {
        localStorage.setItem('checkbox1', checkbox1.checked);
        updateAudio();
    });

    checkbox2.addEventListener('change', () => {
        localStorage.setItem('checkbox2', checkbox2.checked);
        updateAudio();
    });

    audio.addEventListener('error', () => {
        console.error('Erreur de chargement audio :', {
            src: audio.currentSrc,
            code: audio.error?.code,
            message: audio.error?.message
        });
    });

    updateAudio();
});
