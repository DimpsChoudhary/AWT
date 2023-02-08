let status='delivered'
let  quantity='2'
let productname='books'
let productstatus="Status of the product is";
productstatus+=(status=='delivered')?'green':'red';
let description="I have ordered "+quantity+" "+productname+" from \"amazon\" lastweek "+productstatus;
function estimatedDelivery(){
    return '01-03-2023';
}
let productstat=`Status of the product is ${status=='delivered' ?'green':'red'}`;
let description2=`I have ordered ${quantity} ${productname} from "amazon" last week and estimated delivery for the product is ${estimatedDelivery()} and following is the status : ${productstat}`;
console.log(description);
console.log(description2)