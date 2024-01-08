function guessNumber() {
    var randomNumber;
    var x;

    while (true) {
        if (!randomNumber) {
            randomNumber = Math.floor(Math.random() * 2);
        }
       x = parseInt(prompt("Hãy đoán xem số 0 hoặc 1:"));

        if (x === randomNumber) {
            alert("Chúc mừng! Bạn đã đoán đúng số.");
            break;
        } else {
            alert("Số " + x + " không chính xác. Hãy đoán lại!");
        }
    }
}

guessNumber();