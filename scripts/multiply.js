console.log("multiply.js has loaded");

function promptTable(){
	let rows = prompt("Enter number of rows:");
	let cols = prompt("Enter number of columns:");

	if (rows !== null && cols !== null){
		rows == parseInt(rows);
		rows = (isNaN(rows) || rows == 0) ? randomInt(12) : Math.abs( rows );

		cols == parseInt(cols);
		cols = (isNaN(cols) || cols == 0) ? randomInt(12) : Math.abs( cols );

		showTables(rows, cols);
		
	}

}
/**
 * Create a table with specified rows and columns
 * 
 * @param {Number} rows Number of rows in the table
 * @param {Number} cols Number of cols in the table
 */
function showTables(rows,cols) {
    //create table
    let newTable = document.createElement("table");
    newTable.style = "border: 1px solid black; border-collapse: collapse;";
    //loop to create rows
    for (let i = 0; i < rows; i++) {
        let newRow = document.createElement("tr");
        //loop to create columns
        for (let j = 0; j < cols; j++) {
            let newCols = document.createElement("td");
						newCols.style.border = "1px solid black";
            
						let colText = document.createTextNode( ( i+1 ) * ( j+1 ) );
            newCols.appendChild(colText);
            newRow.appendChild(newCols);
        }
        newTable.appendChild(newRow);
    }
    //add table to box
    document.getElementsByTagName('body')[0].appendChild(newTable);
}


/**
 * Generates a random number form 1 to MAX inclusive
 * 
 * @param {Number} max is the maximum number you can randomly generate.
 * @return {Number} returns randomly generated number.
 */
 function randomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}
