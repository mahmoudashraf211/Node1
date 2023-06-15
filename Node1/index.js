const fs= require("fs");
const data= JSON.parse(fs.readFileSync("./problem1.json","utf-8"))
console.log(data.name)

data.name = "Rocky";
data.height ="30cm";
data.wight ="4.5kg";

console.log("updated name: " + data.name + "\n Height: " + data.height +"\n Weight: "+ data.wight);


data.catFriends.forEach(element => {
        console.log("name:"+ element.name +"\n"+ " activities: " + "\n"+element.activities)    
});

let totalWeight=0;

data.catFriends.forEach(element =>{
    // console.log(" catFriends names :" + element.name)
    // console.log(" total weight of catFriends:"+element.weight)
    totalWeight+=element.weight;
})
console.log(" total weight of : \n" + totalWeight)

const activitie = () =>{
    let allActivities = data.activities.length;
data.catFriends.forEach(element => {
    allActivities += element.activities.length;
});
return allActivities
} 
console.log("Total activities of all cats: " + activitie());


data.catFriends[0].activities.push(" jumping");
data.catFriends[0].activities.push("hunting");
data.catFriends[1].activities.push("zooming");
data.catFriends[1].activities.push("scribbling");

console.log("New total activities of all cats: " + activitie());


data.catFriends.forEach(cat => {
    console.log(cat.name + "'s updated activities: " + cat.activities);
});


data.catFriends[0].furcolor = "Blue!";

console.log("Bar's fur color: " + data.catFriends[0].furcolor);