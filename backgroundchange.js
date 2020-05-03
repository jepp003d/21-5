//Definerer alle variabler
var test = document.querySelector(".test");
let curSection;
let prevSection;
let heightBefore;
let scrollTop;
let allSections = [];

document.onscroll = function () {
    //Definerer scrollTop for at gøre det muligt at tælle hvor mange px man har scrollet
    scrollTop = document.documentElement.scrollTop;


    //Henter de forskellige sektioner fra html'en og putter dem ind i en variable. Da indholdet er hentet ind i artikler i html'en er det article tagget der definerer en sektion
    allSections = document.getElementsByTagName('article');

    //Laver en index så vi ved hvilken sektion er "current section".
    for (i = 0; i < allSections.length; i++) {
        prevSection = curSection;
        curSection = allSections[i];

        //Her siger vi hvornår farven skal skiftes - Ændrer baggrundsfarven når man har scrollet ned 2/3 del af sektionen
        heightBefore = 0;
        if (i > 0) {
            heightBefore = allSections[i - 1].offsetHeight / 3;
        }

        //Her siger vi hvilke farver current og previous sections skal have når man har scrollet langt nok.
        if (scrollTop > curSection.offsetTop - heightBefore) {
            curColor = curSection.getAttribute("data-color");
            prevColor = "#C95D43";
            curSection.style.background = curColor;
            prevSection.style.background = prevColor;

        }

    };

}
