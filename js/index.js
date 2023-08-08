var prodactName = document.getElementById("prodactName"); // da keda 4ayel el enput kolo
var prodactPrice = document.getElementById("prodactPrice"); // da keda 4ayel el enput kolo
var prodactCategory = document.getElementById("prodactCategory"); // da keda 4ayel el enput kolo
var prodactDesc = document.getElementById("prodactDesc"); // da keda 4ayel el enput kolo
var addBtn = document.getElementById("addBtn");
var ubdateBtn = document.getElementById("ubdateBtn");
// var searchInput = document.getElementById("searchInput");
// var tableBody = document.getElementById('tableBody')
var indexUbdate = 0;

localStorage.setItem('name' ,'kamal');
// localStorage.getItem('name')
// alert(localStorage.getItem('name'))
// console.log(localStorage.getItem('name'));
// localStorage.removeItem("name")
// localStorage.clear()
// localStorage.length()
// localStorage.key()

// JSON.stringify()


// AHMED .toLowerCase() ===>ahmed 

// console.log('Samsung Note 8 '.toLowerCase().includes ("note".toLowerCase()));
// console.log('Samsung Note 8 '.includes ("Note"));








var prodactContanier = [];

if (localStorage.getItem("prodacs") !=null ) //zebon 2adem we leh data 3andy we me7tag a3redhalo
// de ma3naha en ba2olo law ro7t local storage la2eto mesh b null (y3ny la2et fe contant mn el a5er)
{
    prodactContanier =JSON.parse( localStorage.getItem("prodacs"))
    desplayProdact(prodactContanier)
}
function addProdact()
{
    var prodact =  {
        name :prodactName.value,
        price:prodactPrice.value,
        category:prodactCategory.value,
        desc:prodactDesc.value
    }
    prodactContanier.push(prodact)
    localStorage.setItem('prodacs',JSON.stringify( prodactContanier) )
    desplayProdact (prodactContanier)
clearForm()
}

function clearForm(){
    prodactName.value = ""
    prodactPrice.value = ""
    prodactCategory.value = ""
    prodactDesc.value = ""
}


function desplayProdact (prodactContanier)
{
    var cartona = ''
    for (var i = 0; i < prodactContanier.length; i++) {
        cartona += `
        <tr>
        <td>${prodactContanier[i].name}</td>
        <td>${prodactContanier[i].price}</td>
        <td>${prodactContanier[i].category}</td>
        <td>${prodactContanier[i].desc}</td>
        <td><button onclick="setFormForUbdate(${i})" class="btn btn-outline-primary btn-sm ">ubdate</button></td>
        <td><button onclick="deleteProdact(${i})" class="btn btn-outline-danger btn-sm ">delete</button></td>
        <td></td>
    </tr>
        `;
        // tableBody.innerHTML=cartona
    }


    document.getElementById('tableBody').innerHTML = cartona
}


// function deleteProdact (prodactIndex =3){
function deleteProdact (prodactIndex )
{
    prodactContanier.splice(prodactIndex,1)
    localStorage.setItem('prodacs',JSON.stringify( prodactContanier) )
    desplayProdact (prodactContanier)
}


function searshProdacts (term)
{
    var matchProdacts = []
    for (var i = 0; i<prodactContanier.length; i++) {
        if (prodactContanier[i].name.toLowerCase().includes(term.toLowerCase()) == true) 
        {
            matchProdacts.push(prodactContanier[i])
            console.log(i);
        }
        else if(prodactContanier[i].category.toLowerCase().includes(term.toLowerCase()) == true)
        {
            matchProdacts.push(prodactContanier[i])
            console.log(i);
        }
        else if (prodactContanier[i].price.toLowerCase().includes(term.toLowerCase()) == true)
        {
            matchProdacts.push(prodactContanier[i])
            console.log(i);
        }
        
        else if (prodactContanier[i].desc.toLowerCase().includes(term.toLowerCase()) == true)
        {
            matchProdacts.push(prodactContanier[i])
            console.log(i);
        }

    }
    console.log(matchProdacts);
    desplayProdact(matchProdacts)
}


function setFormForUbdate (index)
{
    indexUbdate = index
    addBtn.classList.replace('d-block' , 'd-none')
    ubdateBtn.classList.replace('d-none' , 'd-block')
    prodactName.value = prodactContanier[index].name
    prodactPrice.value = prodactContanier[index].price
    prodactCategory.value = prodactContanier[index].category
    prodactDesc.value = prodactContanier[index].desc
}
// searshProdacts(searchInput.value)


function ubdateProdact()
{
    var newProdact =  {
        name :prodactName.value,
        price:prodactPrice.value,
        category:prodactCategory.value,
        desc:prodactDesc.value
    }
// console.log(indexUbdate);
    prodactContanier.splice(indexUbdate,1,newProdact)
    // console.log(prodactContanier);
    localStorage.setItem('prodacs',JSON.stringify( prodactContanier) )

    desplayProdact(prodactContanier)

    addBtn.classList.replace('d-none' , 'd-block')
    ubdateBtn.classList.replace('d-block' , 'd-none')
    clearForm()

}