function sortList()
        {
            /*Declare 5 variables*/
            var list, i, switching, b, shouldSwitch;

            /*variable 'list' will import the element */
            list = document.getElementById("numListElement");

            /*set switching to TRUE*/
            switching = true;

            /*Make a WHILE loop that will continue until 
            no switching has been done*/
            while (switching)
            {
                /*Start by saying no switching is done*/
                switching = false;

                /*variable 'b' is a list of numbers*/
                b = list.getElementsByTagName("LI");

                /*Loop through all list-items*/
                for(i=0; i < (b.length-1); i++)
                {
                    /*Start by saying there should be no switching*/
                    shouldSwitch = false;

                    /*Check if the next item should switch places
                    with the current item*/
                    if(Number(b[i].innerHTML) > Number(b[i+1].innerHTML))
                    {
                        /*If next itm is numerically lower than current
                        item, mark as a switch*/
                        shouldSwitch = true;
                        break;
                    }
                }
                if(shouldSwitch)
                {
                    /*If a switch has been marked, make the switch and 
                    mark the switch as done*/
                    b[i].parentNode.insertBefore(b[i+1], b[i]);
                    switching = true;
                }
            }
        }