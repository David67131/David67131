var items = [
    { type: 3, name: "green apple" },
    { type: 2, name: "yellow banana" },
    { type: 2, name: "orange" },
    { type: 4, name: "red apple" },
    { type: 5, name: "big banana" },
];

var groupedItems = items.reduce(function (acc, item) {
    var key = item.type;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(item);
    return acc;
}, {});

console.log([].fil)
