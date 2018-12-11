$(document).ready(function () {
    // found next line on stack overflow
    var crystalNums = [];
    var random;

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    reset();
    //gotten from stack overflow
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random);
        $(".target").text(random);
        crystalNums[0] = Math.floor(Math.random() * 12 + 1);
        crystalNums[1] = Math.floor(Math.random() * 12 + 1);
        crystalNums[2] = Math.floor(Math.random() * 12 + 1);
        crystalNums[3] = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $(".score").text(userTotal);
    }

    function winner() {
        alert("You Won!!");
        wins++;
        $(".wins").text(wins);
        reset();
    }

    function loser() {
        alert("You Lose!!!");
        losses++;
        $(".losses").text(losses);
        reset();
    }

    $(".crystal-btn").on("click", function () {
        var crystalIndex = $(this).val();
        console.log(crystalIndex);

        var value = crystalNums[crystalIndex];
        userTotal = userTotal + value;
        console.log("New userTotal" + userTotal);
        $(".score").text(userTotal);

        if (userTotal === random) {
            winner()
        }
        else if (userTotal > random) {
            loser()
        }
    })
});