function guessNumber() {
    var randomNumber;
    var x;

    while (true) {
        if (!randomNumber) {
            randomNumber = Math.floor(Math.random() * 10) + 1;
        }

        x = parseInt(prompt("Hãy đoán xem số là từ 1 đến 10:"));

        if (x === randomNumber) {
            alert("Chúc mừng! Bạn đã đoán đúng số.");
            break; 
        } else {
            alert("Số " + x + " không chính xác. Hãy đoán lại!");
        }
    }
}

guessNumber();