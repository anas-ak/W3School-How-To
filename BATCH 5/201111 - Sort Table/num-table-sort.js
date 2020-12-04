function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;

    table = document.getElementById("myTable");

    /*Set switching to TRUE*/
    switching = true;

    while(switching) {

        /*Set switching to FALSE*/
        switching = false;
        
        rows = table.rows;

        for(i = 1; i< (rows.length - 1); i++) {
            shouldSwitch = false;

            /*Get the two elements you want to compare,
            one from current row and one from the next*/

            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i+1].getElementsByTagName("TD")[0];

            /*Check if the 2 rows should switch places*/

            if(Number(x.innerHTML) > Number(y.innerHTML))
            {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the 
            switch and mark that a switch has been done*/
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
}