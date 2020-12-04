function sortListDir() {
    var list, i, switching, b, 
    shouldSwitch, dir, switchCount = 0;

    list = document.getElementById("id01");
    switching = true;

    //Set the sorting direction to ascending
    dir = "asc";

    /*Make a loop that will continue until no switching
    has been done*/
    while (switching) 
    {
        //start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        //Loop through all list-items
        for(i=0; i<(b.length -1); i++) 
        {
            //start by saying there should be no switching
            shouldSwitch = false;

            /*check if the next item should switch places
            with the current item, based on the sorting 
            direction (asc or desc)*/
            if(dir == "asc")
            {
                if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLocaleLowerCase())
                {
                    /*If next item is alphabetically LOWER than current item,
                    mark as a switch and break the loop*/
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == 'desc')
            {
                if(b[i].innerHTML.toLowerCase() < b[i+1].innerHTML.toLocaleLowerCase()) 
                {
                    /*If next item is alphabetically HIGHER than current item,
                    mark as a switch and break the loop*/
                    shouldSwitch = true;
                    break;
                }
            } 
        }
        if (shouldSwitch)
        {
            /*If a switch has been marked, make the 
            switch and mark that a switch has been done*/
            b[i].parentNode.insertBefore(b[i+1], b[i]);
            switching = true;
            /*Each time a switch is done, increase 
            switchcount by 1*/
            switchCount++;
        }
        else 
        {
            /*If no switching has been done AND the 
            direction is "asc", set the direction
            to "desc" and run the while loop again*/
            if(switchCount == 0 && dir == "asc")
            {
                dir = "desc";
                switching = true;
            }
        }
    }

}