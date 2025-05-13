import {doc,updateDoc,arrayUnion,getDoc} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
import { db ,authentication} from "./fbConfig.js";
import {signOut} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"


document.addEventListener("DOMContentLoaded",()=>{


  let logoutBtn=document.getElementById("logout")

  logoutBtn.addEventListener("click",async()=>{
    alert("logout bt cliked")
   const loggedout= await signOut(authentication)
   console.log(loggedout,"loggedout")

   if(loggedout){
     location.href="sellerDashBoard.html"
   }else{
    localStorage.removeItem("sellerCredentails")
    location.href="./Login.html"
    alert("loggoedout")
   }
  })
    let loggediNSeller=JSON.parse(localStorage.getItem("sellerCredentails"))
    console.log(loggediNSeller)

    let sellername=document.getElementById("sellername");
    sellername.innerHTML=loggediNSeller.nameSeller;


    let addPBtn=document.getElementById("addP");
    addPBtn.addEventListener("click",()=>{
          let addProductModal=document.getElementById("addProductModal");
          const showModal=new bootstrap.Modal(addProductModal)
          showModal.show()

          let submitAddProductForm=document.getElementById("submitAddProductForm")
          submitAddProductForm.addEventListener("click",async()=>{
            let pName=document.getElementById("productName").value;
            let pImg=document.getElementById("productImg").value;
            let pPrice=document.getElementById("price").value;
            let pCategory=document.getElementById("category").value;
            let pDescription=document.getElementById("description").value;

            const newProduct={
                pName,pImg,pPrice,pCategory,pDescription
            }

          const docRef=  doc(db,"sellers",loggediNSeller.nameSeller)

         try{
             await updateDoc(docRef,{
            products:arrayUnion(newProduct)
          })

          alert("new prodict added successfully!!!")
         }
         catch(err){
            console.log(err)
         }
  showModal.hide()
          })
    })

// let FinlProducts;

    let myProducts=document.getElementById("myProducts")
    myProducts.addEventListener("click",async()=>{
      // alert("products fetched!!")
         const sellerDocRef=doc(db,"sellers",loggediNSeller.nameSeller)
         console.log(sellerDocRef,"seller doc ref")  
         
       const sellerDocFinalDraft=await  getDoc(sellerDocRef)
       console.log(sellerDocFinalDraft)

       if(sellerDocFinalDraft.exists()){
        // const products=sellerDocFinalDraft._document.data.value.mapValue.fileds.products;
        const products=sellerDocFinalDraft.data();
      let  FinlProducts=products.products


      localStorage.setItem("productsList",JSON.stringify(FinlProducts))

        if(FinlProducts.length>0){
          renderPrdocucts(FinlProducts)
        }else{
          alert("no any products!!")
        }

        console.log(FinlProducts,"products")
       }

    })

let productListContainer=document.getElementById("productListContainer")

let FinlProducts=JSON.parse(localStorage.getItem("productsList"))

    function renderPrdocucts(abc){
      productListContainer.innerHTML=""
      console.log(abc,"abc")
      // console.log(abc,"abc data")
      abc.forEach((product)=>{
        let productCard=document.createElement("div");

      productCard.innerHTML=`
      <img src=${product.pImg} alt="" width="300"/>
      `

      productListContainer.append(productCard)
      })
    }

    renderPrdocucts(FinlProducts)



})