1) What is the difference between null and undefined?
null মানে যখন ইচ্ছে করেই variable কে "no value" দেওয়া হয় তখন অই variable টা null, let x = null;
আর undefined মানে যখন কোন variable এর ইচ্ছাকৃত বা ভুলবশত কোন ভ্যালু দেওয়া হয় না, কেবল ডিকলেয়ার করা হয়। এরকম variable কে  যেমন, let x; এইখানে x undefined । 

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
map() একটি Array এর প্রতিটা element কে ট্রান্সফর্ম করে নতুন একটা array রিটার্ন করে। আর forEach() প্রতিটা element এর উপর একটা function রান করে। কোন নতুন array রিটার্ন করে না। 


3) What is the difference between == and ===?
== duita data er moddhe compare korar shomoy only value consider kore. Tai, 5=="5" true hobe
Kintu === duita data er compare korar shomoye value ar type duitai consider kore. Tai 5==="5" false hobe
4) What is the significance of async/await in fetching API data?
async/await diye asynchronous code emon vabe likha jay, dekhle mone hoy synchronous. Ekta Promise resolve howa porjonto eita exection er jonne wait kore, jate API theke data asha porjonto wait kora jay.
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Global scope mane jokhon ekta variable ke code er jekono jayga theke access kora jay, jemon var from ES5. Function scope hoilo jokhon function er vitore variable, oita just function er vitorei access kora jay, baire theke kora jay na. Block scope jemon let, const from ES6, eguli ekta {} block er moddhe access kora jay. 