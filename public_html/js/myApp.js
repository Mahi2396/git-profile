/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {


    $(".openNav").click(function () {
        $(".header-menu").toggleClass("active-menu");
        $(".top-menu-style").toggleClass("hide-menu");
//do something
    });
    $(".top-menu-style").click(function () {
        $(".header-menu").removeClass("active-menu");
    });



    $(window).resize(function () {
        let leftNavWidth = document.getElementsByClassName("right-side-container")[0].clientWidth;
        var elem = document.getElementById("navID");
        elem.style.width = leftNavWidth - 32 + "px";

        let leftContainerWidth = document.getElementById("leftContainer").clientWidth;
        var leftContainerElem = document.getElementById("profileOnscroll");
        leftContainerElem.style.width = leftContainerWidth - 32 + "px";
    });
    $(window).scroll(function () {
        let leftNavWidth = document.getElementsByClassName("right-side-container")[0].clientWidth;
        var elem = document.getElementById("navID");
        elem.style.width = leftNavWidth - 32 + "px";

        let leftContainerWidth = document.getElementById("leftContainer").clientWidth;
        var leftContainerElem = document.getElementById("profileOnscroll");
        leftContainerElem.style.width = leftContainerWidth - 32 + "px";

        if (window.scrollY < 94) {
            var elem = document.getElementById("navID");
            elem.style.position = "static";
            let elem1 = document.getElementById("pinnedRepositoriesContainerID");

            elem1.style.margin = "0 0 24px 0";
        } else {
            var elem = document.getElementById("navID");
            elem.style.position = "fixed";
            let elem1 = document.getElementById("pinnedRepositoriesContainerID");

            elem1.style.margin = "74px 0 24px 0";
        }

        var profileElem = document.getElementById("profileName");
        if (window.scrollY >= profileElem.offsetTop + 94) {
            var elem = document.getElementById("profileOnscroll");
            elem.style.display = "block";
            $(".show-on-scroll").addClass("dividerafter");
        } else {
            var elem = document.getElementById("profileOnscroll");
            elem.style.display = "none";
        }


    });
});