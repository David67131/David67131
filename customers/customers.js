var customers = [
    {
        "name": "Copen",
        "email": "Copen@gv.com",
        "phone": "091-123-4567"
    },
    {
        "name": "Gunvolt",
        "email": "Gunvolt@gv.com",
        "phone": "092-123-4567"
    },
    {
        "name": "kirin",
        "email": "Kirin@gv.com",
        "phone": "093-123-4567"
    },
    {
        "name": "Aximov",
        "email": "Aximov@gv.com",
        "phone": "094-123-4567"
    }
]

function addToCustomer() {

    let customerObj = {
        name: $('#name1').val(),
        email: $('#email1').val(),
        phone: $('#phone1').val()
    }

    $('#customerBody').html("")

    customers.push(customerObj)
    loadData1()
}

function deleteCustomer(index) {
    console.log("DELETE",index)
    delete customers[index]  
    $('#customerBody').html("")
    loadData1()
}

function loadData1() {
    let allRows = ""
    for (let p in customers) {
        let cellName = `<td><img class='icon' src='icon-delete.png' onclick='deleteCustomer("${p}")' style='width:20px;height:20px;'> ` + customers[p].name + "</td>"
        let cellEmail = '<td class="text-right">' + customers[p].email + "</td>"
        let cellPhone = '<td class="text-right">' + customers[p].phone + "</td>"
        let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
        allRows += row
    }
    $('#customerBody').html(allRows)
}
