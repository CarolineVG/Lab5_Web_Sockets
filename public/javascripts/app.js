var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

document.querySelector(".submit").addEventListener("click", function(e) {
    primus.write({ click: "Clicked" });
    e.preventDefault();
    
});

primus.on("data", function(data) {
    //alert("data received");
    var title = document.querySelector(".title.live");
    
    if( title ) {
        var a1 = document.getElementById("answer1").value;
        title.innerHTML = a1;
    }
    
});