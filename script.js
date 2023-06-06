fetch('https://fakestoreapi.com/products?limit=20')
.then((data)=>data.json())
.then (rod=>{console.log(rod[1].title)
    textdata="";

    rod.map((values)=>{
        
        textdata+=`<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.price}</td>
            <td>${values.description}</td>
            <td>${values.category}</td>
            <td><img src=${values.image}></td>
            <td>${values.rating=[values.rating.rate]+"  "+[values.rating.count]}</td>
          </tr>`
    })
document.getElementById("sur").innerHTML=textdata
})



