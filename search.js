const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("parent-container")
    // Above to get access to the products in it

    const product = document.querySelectorAll(".pro")
   //Above to select all the classes in id='parent-container'

    const Pname = document.getElementsByTagName("b")

    for(var i=0 ; i< Pname.length; i++){
        let match = product[i].getElementsByTagName("b")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{   //If match textvalue doesn't matches with sesrchaBox
                product[i].style.display = "none";
            }
        }
    }
}   