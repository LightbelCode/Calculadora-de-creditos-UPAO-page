function calculateCredits() {
    const credits = parseInt(document.getElementById('creditsInput').value);
    const resultDiv = document.getElementById('result');
    let message = '';

    if (credits > 0 && credits <= 210) {
        const cycles = [
            { threshold: 21, credits: 21 },
            { threshold: 42, credits: 21 },
            { threshold: 65, credits: 23 },
            { threshold: 86, credits: 21 },
            { threshold: 111, credits: 25 },
            { threshold: 135, credits: 24 },
            { threshold: 160, credits: 25 },
            { threshold: 181, credits: 21 },
            { threshold: 199, credits: 18 },
            { threshold: 210, credits: 11 }
        ];

        const cycle = cycles.find(c => credits <= c.threshold);
        message = `Tus créditos actuales indican que tendrás asignado los créditos de ciclo ${cycles.indexOf(cycle) + 1} con ${cycle.credits} créditos.`;
    } else if (credits > 210) {
        message = 'El número de créditos actual excede el máximo esperado para los ciclos definidos.';
    } else {
        message = 'Ingresaste un número de créditos incorrecto, vuelve a ingresar los datos correctamente.';
    }

    resultDiv.innerHTML = `<p>${message}</p>`;
}
