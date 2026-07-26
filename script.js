document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll('#wave-text .wave-line');
    if (!lines.length == 0) return;

    let delay = 0;

    lines.forEach((line, lineIndex) => {
    const Text = line.textContainer.trim();
    line.innerHTML = ''; // Clear the line content to insert span


    const characters = Text.split('');

           
        characters.forEach(char => {
            const span = document.createElement('span');
            
            if (char === ' '|| char === '\u00A0') {
                span.innerHTML = '&nbsp;'; 
            } else {
                span.innerText = char;
                span.style.animationDelay = `${delay}s`;
                delay += 0.03; 
            }
            line.appendChild(span);
        });
    });
});
