$('#click').on('click',function () {
    const text = $("#text").val();
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
})