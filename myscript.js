// console.log(employees);
const table_length = 5;
document.addEventListener("DOMContentLoaded",function(){
let $page_buttons = document.querySelectorAll('li .page');
// console.log($page_buttons);
let page_array = Array.from($page_buttons);

function DOM_Manipulation(data_start){
    let $id = document.querySelectorAll('.id1');
    let $name = document.querySelectorAll('.Name1');
    let $email = document.querySelectorAll('.email1');
    let j=0;
    for(i=data_start;i<(data_start+5);i++){
        $id[j].innerText = employees[i].id;
        $name[j].innerText = employees[i].name;
        $email[j].innerText = employees[i].email;
        // console.log($id[j].innerText);
        // console.log($name[j].innerText);
        // console.log($email[j].innerText);
        j++;
    }
}

page_array.map(button => button.addEventListener('click',
function()
{
    //let old_active = document.querySelector('.active').innerText;
    console.log(button.innerText);
    document.querySelector('.active').classList.remove("active");
    button.classList.add("active");
    let current_active = parseInt(button.innerText);
    if(button.innerText !== "Prev" && button.innerText !== "Next")
    {
        let data_start = (current_active*table_length)-5;
        DOM_Manipulation(data_start);
    }

}))
let $nav_buttons = document.querySelectorAll('li .nav');
let nav_array = Array.from($nav_buttons);
nav_array.map(button => button.addEventListener('click',
function()
{

    //console.log("old active "+ old_active);
    console.log(button.innerText);
    if(button.innerText === "Prev"){
        let old_active = parseInt(document.querySelector('.active').innerText);
        if(old_active>1){
        console.log("Type of old-active : " + typeof old_active);
        console.log(button);
        let current_active = old_active-1;
        console.log(current_active);
        let data_start = ((current_active)*table_length)-5;
        document.querySelector('.active').classList.remove("active");
        document.getElementById((current_active).toString()).classList.add("active");
        DOM_Manipulation(data_start);
      }
    }
    console.log('===',button.innerText);
    // console.log(button.innerText === "Next");
    if(button.innerText === "Next"){
        let old_active = document.querySelector('.active').innerText;
        console.log("old active "+ old_active);
        if(old_active<10){
        let current_active = parseInt(old_active)+1;
        console.log("current active");
        console.log(current_active);
        let data_start = ((current_active)*table_length)-5;
        console.log("In next - data start");
        console.log(data_start);
        document.querySelector('.active').classList.remove("active");
        document.getElementById((current_active).toString()).classList.add("active");
        console.log("new active");
        console.log(document.getElementById((current_active).toString()).classList.add("active"));
        DOM_Manipulation(data_start);
      }
    }
}))
})
