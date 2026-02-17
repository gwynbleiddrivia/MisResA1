console.log("loadProductjs connected")



const cardDesign = (data) => {
    
          const container = document.getElementById('productItems');
          if (container) {
            container.innerHTML = '';
            data.forEach(single => {
              const div = document.createElement('div');
              div.innerHTML=`
                            
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
            });
          }
          
}


const loadAll = () => {


      fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => {
          //console.log('alll', data);
            cardDesign(data);
        });


}
//loadAll();

const initProductButtons = () => {
  const allBtn = document.getElementById('allBtn');
  const electronicsBtn = document.getElementById('electronicsBtn');
  const jewelryBtn = document.getElementById('jewelryBtn');
  const mensBtn = document.getElementById('mensBtn');
  const womensBtn = document.getElementById('womensBtn');

  if (allBtn) {
    allBtn.addEventListener('click', () => {
        loadAll();
    });
  }

  if (electronicsBtn) {
    electronicsBtn.addEventListener('click', () => {
      fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(data => {
            cardDesign(data);
        });
    });
  }


  if (jewelryBtn) {
    jewelryBtn.addEventListener('click', () => {
      fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(data => {
            cardDesign(data);
        });
    });
  }


  if (mensBtn) {
    mensBtn.addEventListener('click', () => {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => res.json())
        .then(data => {
            cardDesign(data);
        });
    });
  }


  if (womensBtn) {
    womensBtn.addEventListener('click', () => {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => res.json())
        .then(data => {
            cardDesign(data);
        });
    });
  }





};

window.initProductButtons = initProductButtons;

if (document.getElementById('allBtn')) {
  initProductButtons();
}
