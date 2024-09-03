// For Loop 
let category = ["Nirob","Shanto","Ratul","Sonjoy","Pijush"];

for(var i = 0;i<category.length;i++)
{
    document.write(category[i] + "<br>");
}



// For IN Loop
let Name = ["Nirob","Shanto","Ratul","Sonjoy","Pijush"];

for(var item in Name)
{
    document.write(category[item] + "<br>");
}



// For IN Loop Over Object
let Person = {
    name : "Nirob",
    age : 23,
    city : "Dhaka"
};

for(var item in Person)
{
    document.write(Person.item + "<br>");   // OutPut : Just Item name Ex - Name,age,city
}



// 
let Man = {
    name : "Nirob",
    age : 23,
    city : "Dhaka"
};

for(var item in Man)
{
    document.write(Man[item]+"<br>");   // OutPut : value - Nirob,23,Dhaka
}
