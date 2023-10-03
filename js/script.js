const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    // para a página não atualizar quando for enviar os dados
    event.preventDefault();

    // valores de peso e altura
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // calculo do imc (bmi em inglês)
    const bmi = (weight / (height * height / 10000)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    } else if (bmi >= 18.5 && bmi < 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi <= 30) {
        description = "Atenção! Você está com sobrepeso!";
    } else {
        description = "Cuidado! Você está com obesidade!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});