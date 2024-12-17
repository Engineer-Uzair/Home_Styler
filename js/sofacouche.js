fetch('json/data.json') // Start fetching the data from 'data.json'
	.then(response => response.json()) // Convert the response to JSON
	.then(result => { // Once the JSON is received
		const cardsContainer = document.getElementById("cards"); // Get the element to insert the fsac cards into
		localStorage.setItem("CATGnAME", "fsac")
		for (let fsac of result.fsac) { // Loop through each fsac in the array
			cardsContainer.innerHTML += `
		   <div class="col-md-4">
			<div class="shop_1r1l border_1 m-3">
			  <div class="shop_1r1l1 position-relative">
				<div class="shop_1r1l1i">
				  <div class="grid clearfix">
					 <figure class="effect-jazz mb-0">
					   <a"><img src="${fsac.images}" class="w-100" alt="abc"></a>
					 </figure>
				 </div>
				</div>
				<div class="shop_1r1l1i1 position-absolute top-0 text-end w-100 p-4 h-100">
				  <ul class="mb-0">
				   <li><a class="border_1 rounded-circle text-center" href="detail.html"><i class="fa fa-heart-o"></i></a></li>
					<li class="mt-2"><a class="border_1 rounded-circle text-center" href="detail.html"><i class="fa fa-eye"></i></a></li>
					 <li class="mt-2"><a class="border_1 rounded-circle text-center" href="detail.html"><i class="fa fa-share-alt"></i></a></li>
				  </ul>
				</div>
			  </div>
			  <div class="shop_1r1l2 text-center p-4">
			   <span class="col_yell font_14">
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
				<i class="fa fa-star"></i>
			   </span>
			   <h5 class="fw-bold mt-2">${fsac.title}</h5>
			   <h4 class="col_yell">${fsac.price}</h4>
			   <h6 class="mb-0 mt-3"><a class="button_1" href="detail.html?${fsac.id}">READ MORE <i class="fa fa-long-arrow-right ms-1"></i></a></h6>
			  </div>
			</div>
		   </div>
        `;
		}
	})
	.catch(error => console.error('Error fetching the fsac data:', error)); // Log any errors that occur during fetch
