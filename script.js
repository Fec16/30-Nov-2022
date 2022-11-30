var selectedRow = null


function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["code"] = document.getElementById("code").value;
    formData["type"] = document.getElementById("type").value;
    formData["name"] = document.getElementById("name").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.code;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.type;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.name;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("type").value = selectedRow.cells[1].innerHTML;
    document.getElementById("name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.code;
    selectedRow.cells[1].innerHTML = formData.type;
    selectedRow.cells[2].innerHTML = formData.name;
    selectedRow.cells[3].innerHTML = formData.price;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("code").value = '';
    document.getElementById("type").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    selectedRow = null;
}