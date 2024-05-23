// Questions and scoring configuration
const questions = [
    {
        question: "Which best describes your relationship with nature?",
        options: [
            { text: "I go outside sometimes, it’s refreshing!", score: 9 },
            { text: "I live in the city so I don’t get out as much as I want to", score: 9 },
            { text: "Always wanting to be outdoors, willing to get wet to get a closer look at an interesting species", score: 10 },
            { text: "I am consciousness itself experiencing itself, I am not separate from nature", score: 10 },
            { text: "I hate nature, a forest has no value until it is cut down", score: 1 }
        ]
    },
    {
        question: "Education?",
        options: [
            { text: "Graduated high school/GED, no college", score: 4 },
            { text: "College is too expensive but I love to learn", score: 9 },
            { text: "I’m currently in college", score: 10 },
            { text: "Living life is the best teacher", score: 10 },
            { text: "Didn’t graduate high school, I don’t plan on going to college", score: 1 },
            { text: "Prefer not to say", score: 5 }
        ]
    },
{
        question: "What best describes your social media usage (Instagram, Facebook, and TikTok)?",
        options: [
            { text: "On social media less than 10 mins a day", score: 10 },
            { text: "On social media 10 mins to 30 mins a day", score: 8 },
            { text: "On social media 30 mins or more a day", score: 6 },
            { text: "On social media for at least an hour a day", score: 4 },
            { text: "I have accounts but I am not really active on them", score: 10 },
            { text: "Off the radar, if the companies want to harvest my data they should be paying me for it!", score: 10 }
        ]
    },
    {
        question: "Weed?",
        options: [
            { text: "Smoke weed everyday", score: 7 },
            { text: "I’ve smoked a few times", score: 8 },
            { text: "Rarely", score: 9 },
            { text: "Special Occasions", score: 10 },
            { text: "Trying to cut back/stop my usage", score: 6 },
            { text: "Used to, not anymore", score: 10 },
            { text: "Never", score: 8 },
            { text: "Prefer not to say", score: 5 }
        ]
    },
    {
        question: "How often do you drink alcohol?",
        options: [
            { text: "Everyday", score: 1 },
            { text: "On the weekends", score: 2 },
            { text: "Special occasions", score: 9 },
            { text: "Very rarely", score: 10 },
            { text: "Never", score: 10 },
            { text: "Prefer not to say", score: 6 }
        ]
    },
    {
        question: "The most important characteristic of your dream car",
        options: [
            { text: "I want something mean looking with a v8 engine", score: 1 },
            { text: "Fully self driving, why would I want to drive when I could be doing something else?", score: 10 },
            { text: "I don't really care, as long as it gets me from point A to B and has good gas mileage", score: 9 },
            { text: "#VanLife", score: 9 },
            { text: "Don’t want a car", score: 10 },
            { text: "Pick-up truck/SUV", score: 3 },
            { text: "Prefer not to say", score: 6 }
        ]
    },
    {
        question: "How often do you meditate?",
        options: [
            { text: "Every day", score: 20 },
            { text: "It goes in phases, sometimes I do it like every day and sometimes not at all for awhile", score: 15 },
            { text: "Every other day", score: 16 },
            { text: "A few times a month", score: 12 },
            { text: "A few times a year", score: 10 },
            { text: "Whenever I feel like it", score: 7 },
            { text: "I’ve never tried it, no interest to either", score: 1 },
            { text: "I’ve never tried it but it seems very interesting", score: 5 },
            { text: "Get away from me hippie", score: 1 },
            { text: "This question is meaningless because there is never a moment where I am not in meditation because the whole universe is in meditation.", score: 20 }
        ]
    },
    {
        question: "How often do you exercise?",
        options: [
            { text: "5 or more times a week", score: 10 },
            { text: "3 or more times a week", score: 10 },
            { text: "I am inconsistent, sometimes I’ll go workout almost every day and other times I won't workout for many days on end", score: 6 },
            { text: "I do enough physical work at my job that I believe keeps me fit enough to not need to exercise", score: 10 },
            { text: "I work out a few times a month", score: 3 },
            { text: "I very rarely exercise", score: 1 }
        ]
    },
    {
        question: "Would you ever like to have children one day?",
        options: [
            { text: "Yes!", score: 10 },
            { text: "I’m open to it", score: 9 },
            { text: "Absolutely not", score: 2 },
            { text: "Maybe", score: 5 },
            { text: "Not with you, weirdo", score: 1 },
            { text: "I already have kids, and I want more", score: 6 },
            { text: "I already have kids, and I don't want anymore", score: 2 }
        ]
    },
    {
        question: "Which of the following best describes what Heisenberg's uncertainty principle is?",
        options: [
            { text: "A principle stating that particles can exist in two places at once.", score: 1 },
            { text: "A principle stating that the position and velocity of an object cannot both be precisely measured at the same time.", score: 5 },
            { text: "A principle that explains the wave-particle duality of light.", score: 1 },
            { text: "A principle stating that energy can be created and destroyed under certain conditions.", score: 1 }
        ]
    },
    {
        question: "Do you use Nicotine?",
        options: [
            { text: "I smoke cigarettes", score: 1 },
            { text: "I chew", score: 3 },
            { text: "I vape", score: 4 },
            { text: "All of the above", score: 1 },
            { text: "Never", score: 10 },
            { text: "Making serious efforts to quit", score: 6 },
            { text: "Prefer not to say", score: 6 }
        ]
    }

];

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('question');

        const questionText = document.createElement('h3');
        questionText.innerText = q.question;
        div.appendChild(questionText);

        q.options.forEach((option, idx) => {
            const labelContainer = document.createElement('div');
            labelContainer.classList.add('label-container');

            const label = document.createElement('label');
            label.innerText = option.text;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option.text;

            label.prepend(input);
            labelContainer.appendChild(label);
            div.appendChild(labelContainer);
        });

        container.appendChild(div);
    });
}

function calculateScore() {
    let totalScore = 0;
    let maxScore = 0;
    const userResponses = {};

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            totalScore += q.options.find(option => option.text === selectedOption.value).score;
            userResponses[`question${index + 1}`] = selectedOption.value;
        }
        maxScore += Math.max(...q.options.map(o => o.score));
    });

    const scorePercentage = (totalScore / maxScore) * 100;
    let message = `Your score is ${scorePercentage.toFixed(2)}%. `;
    if (scorePercentage > 90) {
        message += "Contact me at: 407-223-8033";
    } else if (scorePercentage > 75) {
        message += "Contact me at: peacefulporter@proton.me";
    } else {
        message += "Match rating too low, must score higher to get my contact information!";
    }
    alert(message);

    saveResults(scorePercentage, userResponses);
}

function saveResults(score, responses) {
    const form = document.getElementById('surveyForm');

    for (const [question, answer] of Object.entries(responses)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = question;
        input.value = answer;
        form.appendChild(input);
    }

    const scoreInput = document.createElement('input');
    scoreInput.type = 'hidden';
    scoreInput.name = 'score';
    scoreInput.value = score.toFixed(2);
    form.appendChild(scoreInput);

    form.submit();
}

document.addEventListener('DOMContentLoaded', renderQuestions);
