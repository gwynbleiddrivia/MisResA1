console.log("load.js is connected")

const url = "https://fakestoreapi.com/products"



const trendingItems = (data) =>{
    const container = document.getElementById("trendingItems")
    container.innerHTML = ""
    data = data.slice(0,3)
    data.forEach((single)=>{
        const div = document.createElement('div')
        div.className = "bg-white p-0 m-0 rounded shadow flex justify-between flex-col border-0 w-full gap-2"
        div.innerHTML = `
        <div class="flex flex-col m-2 gap-2">
        <img class="bg-gray-300 rounded-lg w-screen md:p-12" src=${single.image}\>
        <div class="flex justify-between">
            <div class="bg-violet-200 text-violet-500 rounded-lg px-2 font-bold">${single.category}</div>
            <div>${single.rating?.rate}(${single.rating?.count})</div>
        </div>
        <span class="font-bold">${single.title}</span>
        <div class="flex justify-between">
            <button class="flex justify-between gap-1 border-1 rounded-lg px-3 py-1">
                <img class="w-6 h-6" src="asset/eye.png"\>
                <p>Details</p>
            </button>
            <button class="flex justify-between gap-1 border-1 rounded-lg px-3 py-1 bg-blue-500 text-white">
                <img class="w-6 h-6" src="asset/cart.png"\>
                <p>Add</p>
            </button>
        </div>
        </div>
        `;
        container.appendChild(div);
    })

}








const renderTrending = async() => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    trendingItems(data)
}
renderTrending()
