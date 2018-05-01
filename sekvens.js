var billeder
var erAlleKlikket = false

$(window).on("load", titelBillede);


function titelBillede() {

    console.log("titelbillede vises");

    $("#skaerm1").hide();
    $("#tekst_1").hide();
    $("#skaerm2").hide();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();

    $("#titelbillede").on("click", skaermEt);

}

function skaermEt() {

    console.log("skaerm et");
    $("#skaerm1").fadeIn();
    $("#skaerm2").hide();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();
    $("#titelbillede").hide();
    $("#tekst_1").fadeIn();


    setTimeout(skaermTo, 11000);

}

function skaermTo() {

    console.log("skaerm to");

    $("#skaerm2").fadeIn();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();
    $("#titelbillede").hide();
    $("#tekst_1").fadeOut();

    // setTimeout(skaermTre, 2000);
}

function skaermTre() {

    console.log("skaerm tre");

    $("#skaerm3").fadeIn();
    $("#skaerm4").hide();
    $("#fuldskaerm").hide();
    $("#titelbillede").hide();

    //  setTimeout(skaermFire, 1000);
}

function skaermFire() {

    console.log("skaerm fire");

    $("#skaerm4").fadeIn();
    $("#fuldskaerm").hide();
    $("#titelbillede").hide();

    $("#betina_sprite").addClass("reaktion");

    //  setTimeout(fuldSkaerm, 6000);

}

function fuldSkaerm() {

    console.log("stor skaerm");

    $("#titelbillede").hide();

    $("#fuldskaerm").fadeIn();

    klikIgen();

}


function klikIgen() {
    console.log("klik på billede igen");
    $(".billede").addClass("puls");
    $(".billede").on("click", klikPaaBillede);
    setTimeout(tidenergaaet, 6200);
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

        $(".billede").removeClass("puls");
        $(".billede").off("click", klikPaaBillede);
    }
}

function privatSnakB() {

    console.log("slutning B");
    $(".billede").removeClass("puls");
    $(".billede").off("click", klikPaaBillede);

    $(".slutning_a").addClass("slutningA");

}
