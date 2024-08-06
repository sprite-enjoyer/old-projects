const firstName = document.querySelector(".fn");
const lastName = document.querySelector(".ln");
const address = document.querySelector(".address");
const dob = document.querySelector(".calendar");
const sex = document.querySelector(".dropdown");
const notes = document.querySelector(".notes");
const btn = document.querySelector(".btn");
const table = document.querySelector(".table");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    addRow(
        null, 
        firstName.value, 
        lastName.value, 
        address.value, 
        dob.value, 
        sex.value, 
        notes.value, 
        table, 
        true
        );
});

validateField(
    firstName, 
    document.querySelector(".fn-container"),
    "keyup",
    "keyup",
    firstAndLastNameValidator,
    "warning-text1",
    "digits/special characters are not allowed"
);

validateField(
    lastName,
    document.querySelector(".ln-container"),
    "keyup",
    "keyup",
    firstAndLastNameValidator,
    "warning-text2",
    "digits/special characters are not allowed"
);

validateField(
    address,
    document.querySelector(".address-container"),
    "keyup",
    "keyup",
    addressValidator,
    "warning-text3",
    "Maximum of 35 characters allowed"
);

loadFields(
    [firstName, lastName, address, dob, sex, notes], 
    ["firstName", "lastName", "address", "dob", "sex", "notes"]
    );    

saveFields(
    [firstName, lastName, address, notes], 
    "keyup", 
    ["firstName", "lastName", "address", "notes"]
    );

saveFields(
    [dob, sex],
    "change",
    ["dob", "sex"]
);    

loadTableData();
