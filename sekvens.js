var antalKlik
var erAlleKlikket = false

$(window).on("load", skaermEt);


function skaermEt() {

    console.log("skaerm et");

    $("#skaerm2").hide();
    $("#skaerm3").hide();
    $("#skaerm4").hide();

    setTimeout(skaermTo, 5000);

}

function skaermTo() {

    console.log("skaerm to");



    $("#skaerm2").fadeIn();
    $("#skaerm3").hide();
    $("#skaerm4").hide();

    setTimeout(skaermTre, 5000);
}

function skaermTre() {

    console.log("skaerm tre");

    $("#skaerm3").fadeIn();
    $("#skaerm4").hide();


    setTimeout(skaermFire, 5000);
}

function skaermFire() {

    console.log("skaerm fire");

    $("#skaerm4").fadeIn();

}
