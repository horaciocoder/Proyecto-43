const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    fill("white");
    textSize(15);
    text(hint1Txt, 100, 40);
    text(hint2Txt, 700, 140);
    text(hint3Txt, 100, 250);
    fill("lightblue");
    text("Hint: Always changing, not constant !", 100, 70);
    text("Hint: Performs a particular task !!", 700, 170);
    text("Hint: Stores all information !!!", 100, 280);
  }
  function mix(array) {
    array = shuffle(array);
    var target = "";
    for (let i = 0; i < array.length; i++) {
      target = target + array[i];
    }
    return target;
  }