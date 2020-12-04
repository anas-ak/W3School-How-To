function sortTable()
{
            /*Declare 7 variables*/
            var table, rows, switching, i, x, y, shouldSwitch;

            /*variable 'table' will import the table element*/
            table = document.getElementById("myCustomerTable");

            /*Set switching to TRUE*/
            switching = true;

            /*Make a loop that will continue until no 
            switching has been done*/
            while (switching) 
            {
                /*start by saying switching is false*/
                switching = false;

                /*set 'rows' to the rows of the table element*/
                rows = table.rows;

                /*Loop through all table rows (except the first
                which contains the table headers*/
                for(i=1; i < (rows.length-1); i++)
                {
                    /*start by saying there should be no switching*/
                    shouldSwitch = false;

                    /*Get the 2 elements you want to compare,
                    one from current row and one from the next row*/
                    x = rows[i].getElementsByTagName("TD")[0];
                    y = rows[i + 1].getElementsByTagName("TD")[0];

                    /*Check if the two rows should switch places*/
                    if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                    {
                        /*If so, mark as a switch and break the loop*/
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch)
                {
                    /*If a switch has been marked, make the switch and mark
                    that a switch has been done*/
                    rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                    switching = true;
                }
            }
}