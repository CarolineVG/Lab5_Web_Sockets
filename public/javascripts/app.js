var url = "/";
var val1 = 0;
var val2 = 0;
var total = 0;

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
});

document.querySelector(".a1").addEventListener("click", function (e) {
    console.log("click"); 
    primus.write("a");
    e.preventDefault();
});

document.querySelector(".a2").addEventListener("click", function (e) {
    primus.write("b");
    e.preventDefault();
});

primus.on("data", function message(data) {
        // get procent 
        getProcent(data); 

});

function getProcent(answer) {

    console.log('in functie');

    total += 1;

    if (answer == "a") {
        val1 += 1;
    } else if (answer == "b") {
        val2 += 1;
    }

    /* show percentage */
    document.getElementById("procent1").innerHTML = Math.round((val1 / total) * 100).toFixed(0);
    document.getElementById("procent2").innerHTML = Math.round((val2 / total) * 100).toFixed(0);
}