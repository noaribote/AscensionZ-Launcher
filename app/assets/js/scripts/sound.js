(() => {
    const audio = document.getElementById('backgroundMusic');
    const muteCheckbox = document.getElementById('checkbox1IDENTIFY');

    if (!audio || !muteCheckbox) {
        console.error('Audio de fond ou checkbox introuvable', { audio, muteCheckbox });
        return;
    }

    // The settings switch means "music enabled": checked = play, unchecked = mute.
    muteCheckbox.checked = localStorage.getItem('musicEnabled') !== 'false';

    async function syncPlayback() {
        if (!muteCheckbox.checked) {
            audio.pause();
            return;
        }

        try {
            await audio.play();
            console.log('Lecture audio démarrée', audio.currentSrc);
        } catch (error) {
            // A user gesture may be required by Chromium's autoplay policy.
            console.warn('Lecture automatique refusée ou audio indisponible :', error);
        }
    }

    muteCheckbox.addEventListener('change', () => {
        localStorage.setItem('musicEnabled', String(muteCheckbox.checked));
        syncPlayback();
    });

    audio.addEventListener('error', () => {
        console.error('Erreur de chargement audio :', {
            page: window.location.href,
            declaredSrc: audio.getAttribute('src'),
            src: audio.currentSrc,
            code: audio.error?.code,
            message: audio.error?.message
        });
    });

    audio.addEventListener('loadedmetadata', () => {
        console.log('Source audio chargée', {
            src: audio.currentSrc,
            duration: audio.duration,
            mp3Supported: audio.canPlayType('audio/mpeg')
        });
    });

    // If autoplay is blocked, the first interaction with the launcher can start it.
    document.addEventListener('click', syncPlayback, { once: true });
    syncPlayback();
})();
