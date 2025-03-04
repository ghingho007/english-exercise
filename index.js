function newExercises() {
    const esercizi = [
        {
            domanda: "1. I have not spoken to my sister since last month.",
            parola: "(HAD)",
            risposta: "It has been a month since I had spoken to my sister."
        },
        {
            domanda: "2. We are going to the beach this weekend.",
            parola: "(LOOKING)",
            risposta: "We are looking forward to going to the beach this weekend."
        },
        {
            domanda: "3. I visited Paris two years ago.",
            parola: "(SINCE)",
            risposta: "I haven't visited Paris since two years ago."
        },
        {
            domanda: "4. She studies English every day.",
            parola: "(FOR)",
            risposta: "She has been studying English for every day."
        },
        {
            domanda: "5. I have never tried sushi.",
            parola: "(EVER)",
            risposta: "I have never ever tried sushi."
        },
        {
            domanda: "6. I forgot my keys this morning.",
            parola: "(NEVER)",
            risposta: "I have never forgotten my keys before."
        },
        {
            domanda: "7. My brother is taller than me.",
            parola: "(MORE)",
            risposta: "My brother is more tall than I am."
        },
        {
            domanda: "8. They have been working here for three years.",
            parola: "(SINCE)",
            risposta: "They have been working here since three years."
        },
        {
            domanda: "9. She invited me to her birthday party.",
            parola: "(ASKED)",
            risposta: "She asked me to come to her birthday party."
        },
        {
            domanda: "10. I finished my homework last night.",
            parola: "(DID)",
            risposta: "I did finish my homework last night."
        }
    ];

    for (let i = 0; i < esercizi.length; i++) {
        document.getElementById(`input${i+1}`).value = '';
        document.querySelectorAll(`.part1`)[i].innerText = esercizi[i].domanda;
        document.querySelectorAll(`.word-1`)[i].innerText = esercizi[i].parola;
    }
}

function check() {
    const risposte = [
        document.getElementById("input1").value,
        document.getElementById("input2").value,
        document.getElementById("input3").value,
        document.getElementById("input4").value,
        document.getElementById("input5").value,
        document.getElementById("input6").value,
        document.getElementById("input7").value,
        document.getElementById("input8").value,
        document.getElementById("input9").value,
        document.getElementById("input10").value
    ];

    const corrette = [
        "It has been a month since I had spoken to my sister.",
        "We are looking forward to going to the beach this weekend.",
        "I haven't visited Paris since two years ago.",
        "She has been studying English for every day.",
        "I have never ever tried sushi.",
        "I have never forgotten my keys before.",
        "My brother is more tall than I am.",
        "They have been working here since three years.",
        "She asked me to come to her birthday party.",
        "I did finish my homework last night."
    ];

    const corretteCount = risposte.filter((risposta, index) => risposta === corrette[index]).length;
    const percentuale = (corretteCount / corrette.length) * 100;

    if (percentuale === 100) {
        alert("100% OF CORRECT ANSWERS, CONGRATULATIONS!");
    } else if (percentuale >= 75) {
        alert("75% OF CORRECT ANSWERS, CONGRATULATIONS!");
    } else if (percentuale >= 50) {
        alert("50% OF CORRECT ANSWERS, CONGRATULATIONS!");
    } else {
        alert("Keep trying! You can do it!");
    }
}
