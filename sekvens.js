var billeder
var erAlleKlikket = false

$(window).on("load", skaermEt);


function skaermEt() {

    console.log("skaerm et");

    $("#skaerm2").hide();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();

    setTimeout(skaermTo, 2000);

}

function skaermTo() {

    console.log("skaerm to");

    $("#skaerm2").fadeIn();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();

    setTimeout(skaermTre, 2000);
}

function skaermTre() {

    console.log("skaerm tre");

    $("#skaerm3").fadeIn();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();

    setTimeout(skaermFire, 1000);
}

function skaermFire() {

    console.log("skaerm fire");

    $("#skaerm4").fadeIn();
    $("#fuldskaerm").hide();



    $("#betina_sprite").addClass("reaktion");

    setTimeout(fuldSkaerm, 7000);

}

function fuldSkaerm() {

    console.log("stor skaerm");

    $("#fuldskaerm").fadeIn();

    klikIgen();

}


function klikIgen() {
    console.log("klik på billede igen");
    $(".billede").addClass("puls");
    $(".billede").on("click", klikPaaBillede);
    setTimeout(tidenergaaet, 5000);
}


function klikPaaBillede() {
    console.log("klik på billede");

    $(".billede").removeClass("puls");
    $(".billede").off("click", klikPaaBillede);
    $(this).fadeOut();
    billeder++;

    faerdig();
}


function faerdig() {

    console.log("færdig med klik");


    if (billeder >= 10) {
        erAlleKlikket = false;


    } else {
        console.log("klik på billede igen");
        klikIgen();
    }

}

function tidenergaaet() {

    console.log("tiden er gaaet");

    if (erAlleKlikket == false) {

        privatSnakB();

    }
}


function privatSnakB() {

    console.log("slutning B");
    $(".billede").removeClass("puls");
    $(".billede").off("click", klikPaaBillede);
    $(".slutning_a").addClass("slutningA");

}
