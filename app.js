let word92837533 = '';
let wordArr1923804221 = [];

fetch("wordlist.lst")
    .then(response => response.text())
    .then(text => {
        const words = text
            .split("\n")
            .map(w => w.trim().toUpperCase())
            .filter(w => w.length === 5 && /^[A-Z]+$/.test(w));

        word92837533 = words[Math.floor(Math.random() * words.length)];
        wordArr1923804221 = word92837533.split("");

        // console.log("Kata yang dipilih:", word92837533);

    })
    .catch(error => {
        console.error("Gagal memuat wordlist:", error);
    });

function getColor(answerArr) {
    if (wordArr1923804221.length !== 5) {
        console.error("Kata belum siap!");
        return ["", "", "", "", ""];
    }

    let result = new Array(5).fill("Red");
    let targetCount = {};

    wordArr1923804221.forEach((char) => {
        targetCount[char] = (targetCount[char] || 0) + 1;
    });

    for (let i = 0; i < 5; i++) {
        if (answerArr[i] === wordArr1923804221[i]) {
            result[i] = "Green";
            targetCount[answerArr[i]] -= 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === "Green") continue;

        if (wordArr1923804221.includes(answerArr[i]) && targetCount[answerArr[i]] > 0) {
            result[i] = "Yellow";
            targetCount[answerArr[i]] -= 1;
        }
    }

    return result;
}


// View HTML
const input = document.getElementById("hiddenInput1");
let currentRow = 1;

function updateBoxes() {
    const val = input.value.toUpperCase().replace(/\s/g, "");
    const row = document.getElementById(currentRow.toString());
    const boxes = row.querySelectorAll(".box");

    boxes.forEach((box, i) => {
        box.textContent = val[i] || "";
    });
}

document.addEventListener("keydown", (e) => {
    input.focus();

    if (e.key === " ") {
        e.preventDefault();
    }

    const val = input.value.toUpperCase().replace(/\s/g, "");

    if (e.key === "Enter") {
        if (val.length === 5) {
            const row = document.getElementById(currentRow.toString());
            const boxes = row.querySelectorAll(".box");

            const colorResult = getColor(val.split(""));

            const classMap = {
                Green: "correct",
                Yellow: "present",
                Red: "absent"
            };

            colorResult.forEach((color, i) => {
                boxes[i].classList.add(classMap[color]);
            });


            row.classList.add("disabled");
            input.value = "";
            currentRow++;

            const nextRow = document.getElementById(currentRow.toString());
            if (!nextRow || val === word92837533) {
                input.disabled = true;
                if (val === word92837533) {
                    setTimeout(() => alert("Selamat! Kamu berhasil."), 300);
                } else if (!nextRow) {
                    setTimeout(() => alert(`Maaf Kamu Gagal, Jawaban: ${word92837533}`), 300);
                }
            }
        }
    }
});