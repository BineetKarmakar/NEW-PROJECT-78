var image=[];
var name1=[];
image.push("baba.jpg");
image.push("ma1.jpg");
image.push("me.jpg");
image.push("bonu.jpg");
image.push("mamam.jpg");
name1.push("Suman Karmakar");
name1.push("Sutapa Karmakar");
name1.push("Bineet Karmakar");
name1.push("Samhita Karmakar");
name1.push("Monika Mondal");
var i=0;
function update(){
  document.getElementById("album").src=image[i];
document.getElementById("name").innerHTML=name1[i];
  i++;
  if(i==5)
    {
      i=0;
    }
}
