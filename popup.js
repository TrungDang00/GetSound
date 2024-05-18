
const OpenCC = document.getElementById('captureButton');
OpenCC.addEventListener('click', () => {
    const videoElement = document.querySelectorAll('video');
    console.log("videoElement", videoElement);
    if (videoElement) {
        const mediaStream = videoElement.captureStream();

        const audioTracks = mediaStream.getAudioTracks();

        if (audioTracks.length > 0) {
            const audioTrack = audioTracks[0];

            const audioStream = new MediaStream([audioTrack]);

            const audioElement = document.createElement('audio');
            audioElement.srcObject = audioStream;
            audioElement.controls = true;
            document.body.appendChild(audioElement);

            // Optional: Play the audio
            // audioElement.play();
        } else {
            console.error('Video element not found in the DOM.');
        }
    
    } else {
        console.log('No audio tracks found');
    }

});

