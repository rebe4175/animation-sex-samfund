var billeder
var erAlleKlikket = false

$(window).on("load", titelBillede);


function titelBillede() {

    console.log("titelbillede vises");

    $("#skaerm1").hide();
    $("#tekst_1").hide();
    $("#tekst_2").hide();
    $("#skaerm2").hide();
    $("#skaerm3").hide();
    $("#skaerm4").hide();
    $("#knap1").hide();
    $("#knap2").hide();
    $("#stopdeling").hide();
    $("#fuldskaerm").hide();
    $("#hjaelpcille").hide();
    $("#slutningA").hide();
    $("#slutningB").hide();
    $("#nummer1").hide();
    $("#nummer2").hide();
    $("#nummer3").hide();
    $("#privatsnak").hide();
    $("#nogen").hide();
    $("#nogen2").hide();


    $("#titelbillede").on("click", skaermEt);

}

function skaermEt() {

    console.log("skaerm et");

    // $("#baggrundslyd")[0].play();
    $("#skaerm1").fadeIn();
    $("#titelbillede").hide();
    $("#tekst_1").fadeIn();
    $("#baggrundslyd")[0].play();

    $("#scene").on("animationend", skaermTo);
}

function skaermTo() {

    console.log("skaerm to");

    $("#scene").off("animationend", skaermTo);

    $("#skaerm2").fadeIn();
    $("#tekst_1").fadeOut();
    $("#knap1").delay(2000).fadeIn();
    $("#knap2").delay(2000).fadeIn();
    $("#nogen").show();

    $("#modtag6")[0].play();

    $("#knap1").on("click", skaermTre);
    $("#knap2").on("click", videresendIkke);

}

function videresendIkke() {

    console.log("videresend ikke");

    $("#knap1").fadeOut();
    $("#knap2").fadeOut();
    $("#tekst_2").show();

    $("#nogen").hide();

    $("#tekst2_container").addClass("tekst2_move");
    $("#tekst_2").addClass("tekst2_sprite");

    $("#scene").on("animationend", privatSnakA);
}


function skaermTre() {

    console.log("skaerm tre");

    $("#skaerm3").fadeIn();

    $("#knap1").hide();
    $("#knap2").hide();
    $("#nogen").hide();

    $("#nummer1").fadeIn();

    $("#modtag")[0].play();
    setTimeout(sms2, 1000);

}


function sms2() {

    console.log("sms 2");

    $("#nummer2").fadeIn();
    $("#modtag2")[0].play();
    setTimeout(sms3, 1000);
}

function sms3() {

    console.log("sms 3");

    $("#nummer3").fadeIn();
    $("#modtag3")[0].play();

    setTimeout(skaermFire, 2000);
}

function skaermFire() {

    $("#nummer1").hide();
    $("#nummer2").hide();
    $("#nummer3").hide();
    $("#nogen2").fadeIn();

    console.log("skaerm fire");

    $("#skaerm4").fadeIn();

    $("#betina_sprite").addClass("reaktion");

    $("#modtag4")[0].play();

    setTimeout(trykStart, 5000);
}

function trykStart() {

    console.log("tryk på start");

    $("#hjaelpcille").show();
    $("#stopdeling").show();
    $("#nogen2").hide();

    $("#stopdeling").on("click", fuldSkaerm);
}

function fuldSkaerm() {

    console.log("stor skaerm");

    $("#hjaelpcille").hide();
    $("#stopdeling").hide();
    $("#titelbillede").hide();
    $("#fuldskaerm").fadeIn();

    $("#baggrundslyd")[0].pause();

    $("#countdown")[0].play();

    klikIgen();

}

function klikIgen() {
    console.log("klik på billede igen");
    $(".billede").addClass("puls");
    $(".billede").on("click", klikPaaBillede);
    setTimeout(tidenergaaet, 6000);
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


    $(".billede").removeClass("puls");
    $(".billede").off("click", klikPaaBillede);

    $("#countdown")[0].pause();
    $("#lose")[0].play();

    setTimeout(privatSnakB, 5000);

}

function privatSnakA() {

    console.log("slutning A");

    $("#scene").off("animationend", privatSnakA);
    $(".billede").on("click", klikPaaBillede);

    $("#tekst_2").hide();
    $("#slutningA").show();
    $("#privatsnak").show();


}

function privatSnakB() {

    console.log("slutning b");

    $("#fuldskaerm").hide();
    $(".billede").removeClass("puls");
    $(".billede").off("click", klikPaaBillede);

    $("#slutningB").show();
    $("#privatsnak").show();



}
