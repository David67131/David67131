var quotations = [
    {
        "qty": 1,
        "item": "Product A",
        "price": 200.51,
        "discount": 20.51,
    },
    
    {
        "qty": 2,
        "item": "Product B",
        "price": 300.62,
        "discount": 40.62,
    },
    
    {
        "qty": 3,
        "item": "Product C",
        "price": 400.73,
        "discount": 100.73,
    },
    
]

function addToQuotation() {

    let quotationObj = {
        qty: $('#quantity1').val(),
        item: $('#products').val(),
        price: $('#price1').val(),
        discount: $('#discount1').val(),
    }

    $('#quotationBody').html("")

    quotations.push(quotationObj)
    loadData1()
}

function deleteQuotation(index) {
    console.log("DELETE",index)
    delete quotations[index]  
    $('#quotationBody').html("")
    loadData1()
}

function deleteAllQuotation(){
    quotations = []
    $('#quotationBody').html("")
    loadData1()
}

function loadData1() {
    let allRows = ""
    let gross = 0
    let alldiscount = 0
    for (let p in quotations) {
        let cellQuantity = `<td><img class='icon' src='icon-delete.png' onclick='deleteQuotation("${p}")' style='width:20px;height:20px;'> ` + quotations[p].qty + "</td>"
        let cellProduct = '<td class="text-right">' + quotations[p].item + "</td>"
        let cellPrice = '<td class="text-right">' + quotations[p].price + "</td>"
        let cellDiscount = '<td class="text-right">' + quotations[p].discount + "</td>"
        let total = quotations[p].qty * quotations[p].price - quotations[p].discount
        gross += total
        alldiscount += parseFloat(quotations[p].discount)
        let cellTotal = '<td class="text-right">' + total.toFixed(2) + "</td>"
        let row = `<tr>${cellQuantity}${cellProduct}${cellPrice}${cellDiscount}${cellTotal}</tr>`
        allRows += row
    }
    $('#quotationBody').html(allRows)

    $("#gross").html(gross.toFixed(2))
    $("#alldiscount").html(alldiscount.toFixed(2))
}
