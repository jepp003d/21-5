var test = document.querySelector(".forside_sections");
//var test2 = document.getElementById("forside_section_2");
let curSection;
let prevSection;
let heightBefore;

document.onscroll = function () {

    scrollTop = document.documentElement.scrollTop;
    //    test.innerHTML = scrollTop;

    allSections = document.getElementsByTagName('article');

    for (i = 0; i < allSections.length; i++) {
        prevSection = curSection;
        curSection = allSections[i];





        //  Ændrer baggrundsfarve når man skroller forbi 2/3 del af den forrige sektion
        heightBefore = 0;
        if (i > 0) {
            heightBefore = allSections[i - 1].offsetHeight / 2;
        }

        if (scrollTop > curSection.offsetTop - heightBefore) {
            curColor = curSection.getAttribute("data-color");
            prevColor = "#C95D43";

            curSection.style.background = curColor;
            prevSection.style.background = prevColor;



        }




    };

}
