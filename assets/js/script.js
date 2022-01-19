let score = 0;
function removeClass() {
    var element = document.getElementById("question1");
    element.classList.remove("hidden");
}
function removeClass2() {
    var element = document.getElementById("question2");
    element.classList.remove("hidden");
}
function removeClass3() {
    var element = document.getElementById("question3");
    element.classList.remove("hidden");
}
function removeClass4() {
    var element = document.getElementById("finalScore");
    element.classList.remove("hidden");
}
removeClass()

function addClass1() {
    var element = document.getElementById("question1");
    element.classList.add("hidden");
}

function addClass2() {
    var element = document.getElementById("question2");
    element.classList.add("hidden");
}

function addClass3() {
    var element = document.getElementById("question3");
    element.classList.add("hidden");
}

function finalScoreCalc() {
    scored = (score / 3) * 100;
    finalScore = scored.toFixed(2);
    console.log(finalScore);
    document.querySelector(".finalScore").textContent = `Your final score is: ${finalScore}%`

}

document.querySelector('.option1').addEventListener('click',
    function () {
        document.querySelector('.hidden').classList.remove('hidden');
        console.log("I have been clicked")
        addClass1()
        removeClass2()
    }
)
document.querySelector('.option2').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass2()
        addClass1()
    }
)
document.querySelector('.option3').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass2()
        addClass1()
        score = 1;
        console.log(score);
        return score;
    }
)

document.querySelector('.option4').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass3()
        addClass2()
    }
)
document.querySelector('.option5').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass3()
        addClass2()
    }
)
document.querySelector('.option6').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass3()
        addClass2()
        if (score === 1) {
            score = 2;
        } else if (score === 0) {
            score = 1;
        }
        console.log(score);
        return score;
    }
)

document.querySelector('.option7').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass4()
        addClass3()
        if (score === 1) {
            score = 2
        } else if (score === 2) {
            score = 3
        } else {
            score = 1;
        }
        console.log(score);
        finalScoreCalc()
        return score;
    }
)
document.querySelector('.option8').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass4()
        addClass3()
        console.log(score);
        finalScoreCalc()
    }
)
document.querySelector('.option9').addEventListener('click',
    function () {
        console.log("I have been clicked")
        removeClass4()
        addClass3()
        console.log(score);
        finalScoreCalc()
    }
)
