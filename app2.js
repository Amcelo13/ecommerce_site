function abc()
{
const Q = document.getElementById('qty1').value;
const Q1 = document.getElementById('qty2').value;

const sub1 = document.getElementById('sub1').innerHTML = 5499*Q;
console.log(sub1);
const sub2 = document.getElementById('sub2').innerHTML = 5999*Q1;
console.log(sub2);

var CartTotal  = sub1 + sub2;
console.log(CartTotal);

document.getElementById('CartTotal').innerHTML = '₹'+ CartTotal;
document.getElementById('Total').innerHTML = '₹'+ CartTotal;
}

