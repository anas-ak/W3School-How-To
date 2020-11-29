            /*Get all elements of Accordion - assign them to 'acc'*/
            var acc = document.getElementsByClassName("accordion");

            /*Declare variable 'i'*/
            var i;

            for(i=0; i<acc.length; i++) {

                // When client clicks on accordion element
                acc[i].addEventListener("click", function() {

                    // activate this element
                    this.classList.toggle("active");

                    /*Declae variable 'panel' as next sibling*/
                    var panel = this.nextElementSibling;

                    
                    if(panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                    else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }