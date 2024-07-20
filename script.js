let btn = document.getElementById("speech");
let voiceSelect = document.getElementById("voiceSelect");

function populateVoices() {
    let voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Populate voices when they are loaded
populateVoices();
speechSynthesis.onvoiceschanged = populateVoices;

btn.addEventListener('click', () => {
    let textArea = document.getElementById("textArea").value;
    let utterance = new SpeechSynthesisUtterance(textArea);

    // Set the selected voice
    let voices = speechSynthesis.getVoices();
    utterance.voice = voices[voiceSelect.value];

    speechSynthesis.speak(utterance);
});

