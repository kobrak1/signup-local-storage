//declare and initialize buttons
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const updateBtn = document.getElementById("update");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");


//add button (evet listener)
addBtn.addEventListener('click', () => {
    if (nameInput.value && ageInput.value) {
        const dataSet = {name: nameInput.value, age: ageInput.value};
        addData(dataSet)
    };
});
//delete button (event listener)
deleteBtn.addEventListener('click', () => {
    //a function that deletes the data in local storage
    deleteData();
});

//clear button (event listener)
clearBtn.addEventListener('click', () => {
    clearData();
});

//update button (event listener)
updateBtn.addEventListener('click', () => {
    updateData()
});

//function to add data to local storage
function addData(data) {
    let storedData = localStorage.getItem("userData");
    if (storedData) {
        storedData = JSON.parse(storedData);
        storedData.push(data);
    } else {
        storedData = [data]
    };
    //add back the data to local storage
    localStorage.setItem("userData", JSON.stringify(storedData));
};

//function to delete data in local storage
function deleteData() {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log("damn it")
    storedData.forEach((element, indexP) => {
        if (element.name === nameInput.value && element.age === ageInput.value ){
            storedData.splice(indexP,1)
            localStorage.setItem("userData", JSON.stringify(storedData))
        } else {
            if (element = storedData[(storedData.length) - 1]){
                alert("There is not a user object as you mean. Check the name and age inputs again.");
            }  
        } //else flow kontrol
    });
};

//function to clear all the data from local storage
function clearData() {
    localStorage.clear()
};

//function to update the data logged in before
function updateData() {

};
