// primus code

exports.kickstart = function(server) {
    console.log("oke");
    const Primus = require("primus");
    let primus = new Primus(server, {});
    // spark is the new connection
    primus.on("connection", function(spark) {
        console.log("spark connected");

        // do something when we receive data from a client
        spark.on("data", function(data) {
            console.log(data); 
            primus.write(data);
        });
    } );
}