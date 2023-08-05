const correctAnswer = ['A', 'A', 'A', 'A', 'A',];
const form = document.querySelector('.quiz-form');


form.addEventListener('submit', event => {
    event.preventDefault();

    const removal = document.querySelector('.result');
    removal.classList.remove('hide');

    let score  = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,form.q5.value];

    userAnswers.forEach((answer, index) => {

        if(answer === correctAnswer[index]) {
            score += 1;

            const rightColor = document.querySelectorAll('.question')[index];
            rightColor.classList.add('correct');
        } else {
            const rightColor = document.querySelectorAll('.question')[index];
            rightColor.classList.add('wrong');
        }
        
    
    });

    // const resultDisplay = document.querySelector('.resultDisplay').innerHTML = `You scored ${score}/5`;
    // console.log(score);
    // console.log(userAnswers);
});

const tryAgain = () => {
    location.reload();
}