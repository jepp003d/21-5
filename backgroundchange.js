var test = document.getElementById("forside_section_2");
//var test2 = document.getElementById("forside_section_2");
let curSection;
let prevSection;

document.onscroll = function () {

    scrollTop = document.documentElement.scrollTop;
    //    test.innerHTML = scrollTop;

    allSections = document.getElementsByTagName('section');

    for (i = 0; i < allSections.length; i++) {
        prevSection = curSection;
        curSection = allSections[i];

        console.log("prev", prevSection);

        console.log("curSection", curSection);



        //  Ændrer baggrundsfarve når man skroller forbi 2/3 del af den forrige sektion
        heightBefore = 0;
        if (i > 0) {
            heightBefore = allSections[i - 1].offsetHeight / 3;
        }

        if (scrollTop > curSection.offsetTop - heightBefore) {
            curColor = curSection.getAttribute("data-color");
            prevColor = "#C95D43";
            curSection.style.background = curColor;
            prevSection.style.background = prevColor;



        }




    };

}
