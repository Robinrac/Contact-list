var contactList = [];
let count = 0;

//---------------------------GET CONTACT---------------------------
var getContact = function(){
    event.preventDefault();
    count = count + 1
    
    var newContact = {
        id: count,
        name: document.getElementById("contactName").value, 
        number: document.getElementById("contactNumber").value
    }
    
    checkValue(newContact);

    document.getElementById("contactName").value = "";
    document.getElementById("contactNumber").value = "";
}

//------------------CHECK IF INPUT VALUE IS NULL (CREATE CONTACT)-----------------------
const checkValue = function (newContact){
    
    let noValue = document.getElementById("createContact");
    let error = document.createElement('p2');
    error.setAttribute("id", "errorMessage")
    error.setAttribute("style", "color:red")
    error.innerHTML = "<br><br>Du måste fylla i båda fälten för att skapa en kontakt";
    
    if (contactName.value == "" || contactNumber.value == ""){
        
        noValue.appendChild(error);
        document.getElementById("errorMessage").remove();
        noValue.appendChild(error);
        console.log("inget värde")
        
    } else {
        if (document.contains(document.getElementById("errorMessage"))){

            document.getElementById("errorMessage").remove();
            contactList.push(newContact);
        
            addToList(newContact);

        } else {
            contactList.push(newContact);
        
            addToList(newContact);
        }  
    }
}

//---------------------------ADD NEW CONTACT TO LIST---------------------------
const addToList = function (newContact){

    let list = document.getElementById("contactsList");

    let li = document.createElement("li");
    li.setAttribute("id", newContact.id);

    li.innerHTML = 
            '<input placeholder =' + newContact.name + ' value= "' +                    newContact.name + '"readonly id="numberContact' + newContact.id + '">' 
            + " " + '<input placeholder =' + newContact.number + ' value= "' + newContact.number + '"readonly id="numberContact' + newContact.id + '">' 
            + ' <button id="edit' + String(newContact.id) +  '" onclick=editContact(' + newContact.id + ')>Ändra</button>'
            + ' <button id="delete' + String(newContact.id) + '" onclick=deleteContact(' + newContact.id + ')>Radera</button>'

   list.appendChild(li);
}

//---------------------------DELETE CONTACT LIST---------------------------
const deleteList = function () {

    contactsList.innerHTML = "";

}

//---------------------------DELETE CONTACT---------------------------
const deleteContact = function (id) {
        document.getElementById(id).remove();
}

//---------------------------EDIT CONTACT---------------------------
const editContact = function (id) {
    const li=document.getElementById(id);

    let btn = document.getElementById("edit" + String(id) );

    let text = (btn.innerText==="Ändra") ? 'Save' : 'Ändra';

    btn.innerText = text;

    for (const child of li.children){
        if (child.nodeName === 'INPUT'){
            console.log('Readonly', child.readOnly)
 
            if (text === "Save"){
                console.log('Save');
                child.readOnly = false;

            } else {
                console.log('Ändra');
                child.readOnly = true;

            }       
        }
    }
}

//Behövde inte lägga till en funktion där innehållet av en kontakt som ändras till inget visar felmeddelande då en kontakt ej kan bli utan innehåll.