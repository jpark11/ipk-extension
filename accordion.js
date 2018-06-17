//this script creates the accordion-style drop down menus of the chrome extension

$(document).ready(function($) {
            $('#scoreBreakdown').find('.accordion-toggle').click(function() {

                //Expand or collapse this panel
                $(this).next().slideToggle('fast');

                //Hide the other panels
                $(".accordion-content").not($(this).next()).slideUp('fast');

            });
        });