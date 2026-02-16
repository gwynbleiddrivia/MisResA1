console.log("load.js is connected")

const url = "https://fakestoreapi.com/products"



const trendingItems = (data) =>{
    const container = document.getElementById("trendingItems")
    container.innerHTML = ""
    data.forEach((single)=>{
        const div = document.createElement('div')
        div.className = "bg-white p-2 rounded shadow flex justify-between"
        div.innerHTML = `
        <div class="flex flex-col m-2">
        <img class="w-fill bg-gray-300 rounded-md" src=${single.image}\>
        <div class="flex justify-between">
            <div>${single.category}</div>
            <div>${single.rating?.rate}(${single.rating?.count})</div>
        </div>
        <span>${single.title}</span>
        </div>
        `;
        container.appendChild(div);
    })

}








const getProducts = async() => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    trendingItems(data)
}
getProducts()
