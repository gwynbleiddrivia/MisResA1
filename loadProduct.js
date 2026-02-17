console.log("loadProductjs connected")



const cardDesign = (data) => {
    
          const container = document.getElementById('productItems');
          if (container) {
            container.innerHTML = '';
            data.forEach(single => {
              const div = document.createElement('div');
              div.innerHTML=`
                            
                        <div class="flex flex-col m-2 gap-2">
                        <img class="bg-gray-300 rounded-lg w-full h-full object-cover md:p-12" src=${single.image}\>
                        <div class="flex justify-between">
                            <div class="bg-violet-200 text-violet-500 rounded-lg px-2">${single.category}</div>
                            <div>${single.rating?.rate}(${single.rating?.count})</div>
                        </div>
                        <span class="font-bold">${single.title}</span>
                        <div class="flex justify-between">
                            <button command="show-modal" commandfor=${single.id} class="flex justify-between gap-2 border-1 border-purple-500 rounded-lg px-1 py-1">
                                <img class="w-6 h-6" src="asset/eye.png"\>
                                <p class="text-sm">Details</p>
                            </button>

                                    <el-dialog>
                                    <dialog id=${single.id} aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                                        <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                                        <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                                        <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                                            <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
       
                                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 id=${single.id} class="text-base font-semibold text-white">${single.title}</h3>
                                                <div class="mt-2">
                                                    <p class="text-sm text-gray-400">${single.description}</p>
                                                </div>
                                                <div class="flex justify-between">

                                                        <div class="mt-2">
                                                            <p class="text-sm text-gray-400">Price: ${single.price}</p>
                                                        </div>
                                                        <div class="mt-2">
                                                            <p class="text-sm text-gray-400">Rating:${single.rating?.rate}</p>
                                                        </div>

                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="button" command="close" commandfor=${single.id} class="inline-flex w-full justify-center rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-400 sm:ml-3 sm:w-auto">Add to Cart</button>
                                            <button type="button" command="close" commandfor={single.id} class="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 bg-blue-500 hover:bg-blue-400 sm:mt-0 sm:w-auto">Buy Now</button>
                                            </div>
                                        </el-dialog-panel>
                                        </div>
                                    </dialog>
                                    </el-dialog>





                            <button class="flex justify-between gap-2 border-1 rounded-lg px-2 py-1 bg-blue-500 text-white">
                                <img class="w-6 h-6" src="asset/cart.png"\>
                                <p class="text-sm">Add</p>
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
