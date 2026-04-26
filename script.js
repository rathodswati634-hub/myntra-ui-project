const products = [
    {name: "T-Shirt", category: "men", price: 499, rating: 4.2},
    {name: "Dress", category: "women", price: 999, rating: 4.5},
    {name: "Jeans", category: "men", price: 799, rating: 4.0},
    {name: "Kurti", category: "women", price: 699, rating: 4.3},
    {name: "Jacket", category: "men", price: 1499, rating: 4.6},
    {name: "Top", category: "women", price: 399, rating: 4.1}
];

function applyFilters() {
    let category = document.getElementById("category").value;
    let sort = document.getElementById("sort").value;

    let filtered = products.filter(p => {
        return (category === "all" || p.category === category);
    });

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    display(filtered);
}

function display(data) {
    let results = document.getElementById("results");
    results.innerHTML = "";

    data.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>Category: ${p.category}</p>
            <p>Price: ₹${p.price}</p>
            <p>Rating: ⭐${p.rating}</p>
        `;
        results.appendChild(div);
    });
}

// default load
display(products);