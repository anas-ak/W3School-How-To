function sortTable(n) 
{
        var table, rows, switching, i, x, y, 
        shouldSwitch, dir, switchCount = 0;

        table = document.getElementById("myClientTable");
        switching = true;

        /*Set sorting direction to 'asc'*/
        dir = "asc";

        /*Make a loop that will continue until no switching 
        has been done*/

        while (switching) 
        {
            switching = false;
            rows = table.rows;

            for(i=1; i< (rows.length-1); i++) 
            {
                shouldSwitch = false;

                /*Get the 2 elements you want to compare,
                one from current row and one from the next*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i+1].getElementsByTagName("TD")[n];

                /*Check if the 2 rows should switch places, 
                based on the direction, asc or desc*/
                if(dir == "asc") 
                {
                    if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                    {
                        /*If so, mark as a switch, and break the loop*/
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc")
                {
                    if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
                    {
                        /*If so, mark as a switch and break the loop*/
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) 
            {
                /*If a switch has been marked, make the switch and 
                mark that a switch has been done*/
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                switching = true;

                /*Each time a switch is done, increase this count by 1*/
                switchCount++;
            }
            else 
            {
                /*If no switching has been done AND the direction is
                'asc', set the direction to 'desc', and run the 
                while loop again*/
                if(switchCount == 0 && dir == "asc")
                {
                    dir = 'desc';
                    switching = true;
                }
            }
        }
}