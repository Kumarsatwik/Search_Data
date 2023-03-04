var cartData={};
fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then(res=>{
	// console.log(res.products);
	str_body="";
	cartData=res.products;
	res.products.forEach(r=>{

		str_body+=`
		<div class="product">
			<img src=${r.images[0]} alt="">
			<div class="p-details">
				<h2>${r.title}</h2>
				<h3>${r.price}</h3>
			</div>
		</div>
		`
	});
	// console.log(cartData);
	document.getElementById("product-list").innerHTML=str_body;
})

function search(){
	let searchbox=document.getElementById("search-item").value.toUpperCase();
	if (searchbox==="")
		return ;
	console.log(searchbox)
	var str_body="";
	for(let i=0;i<cartData.length;i++)
	{
		if(cartData[i].title.toUpperCase() === searchbox)
		{
			
			str_body+=`
				<div class="product">
					<img src=${cartData[i].images[0]} alt="">
					<div class="p-details">
						<h2>${cartData[i].title}</h2>
						<h3>${cartData[i].price}</h3>
					</div>
				</div>
			`
			document.getElementById("product-list").innerHTML=str_body;
			return ;

		}
	}
	if (str_body==="")
	document.getElementById("product-list").innerHTML="<h2>Data Not Found</h2>";

}

