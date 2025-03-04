function check() {
    const risposte = [
        document.getElementById("input1").value,
        document.getElementById("input2").value,
        document.getElementById("input3").value,
        document.getElementById("input4").value
    ];

    const corrette = [
        "two weeks since I last saw",
        "suggested going",
        "have been playing the guitar",
        "such an interesting book that"
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



