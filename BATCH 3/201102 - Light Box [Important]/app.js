
            /*When an img is clicked, launch the modal*/

            function openModal() {
                document.getElementById("myModal").style.display = "block";
            }

            /*When close is clicked, close the modal*/

            function closeModal() {
                document.getElementById("myModal").style.display = "none";
            }

            //By default, set the index to 1 so that it shows the first image
            var slideIndex = 1;
            
            showSlides(slideIndex);

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
                
                var i;


                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("demo");
                var captionText = document.getElementById("caption");
                
                /*Unless n > number of images, show first image*/
                if(n > slides.length) 
                { 
                    slideIndex = 1;
                }

                /*If n < number of images, show last image*/
                if(n < 1) 
                {
                    slideIndex = slides.length;
                }

                /*Loop through images but don't dispay them*/
                for(i=0; i<slides.length; i++)
                {
                    slides[i].style.display = "none";
                }

                /*Loop through demos*/
                for(i=0; i<dots.length; i++)
                {
                    dots[i].className = dots[i].className.replace(" active", "");
                }

                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
                captionText.innerHTML = dots[slideIndex-1].alt;

            }