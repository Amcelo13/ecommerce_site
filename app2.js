function abc()
{
const Q = document.getElementById('qty1').value;
const Q1 = document.getElementById('qty2').value;

const sub1 = document.getElementById('sub1').innerHTML = 5499*Q;
console.log(sub1);

const sub2 = document.getElementById('sub2').innerHTML = 5999*Q1;
console.log(sub2);



var CartTotal  = sub1 + sub2;

document.getElementById('CartTotal').innerHTML = '₹'+ CartTotal;
document.getElementById('Total').innerHTML = '₹'+ CartTotal;



    const discountCode = "NEW10";
    const code = document.getElementById("coupon1").value.toUpperCase();
     console.log(code);

    if(code === discountCode){
        CartTotal = (CartTotal - 0.1*CartTotal);
        console.log(CartTotal);

        var table = document.getElementById("discount");
        var row = table.insertRow(1);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = "Coupon Discount";
        cell2.innerHTML = '₹'+ Math.floor(0.1*CartTotal);

        // document.getElementById('CartTotal').innerHTML = (CartTotal);
        document.getElementById('Total').innerHTML ='₹'+ Math.floor(CartTotal);
        
    }
}
