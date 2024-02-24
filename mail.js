const firebaseConfig = {
    apiKey: "AIzaSyBpXogJg7gjkWr0Z7RvnyGg9L-lPNTnRns",
    authDomain: "logicform-12865.firebaseapp.com",
    databaseURL: "https://logicform-12865-default-rtdb.firebaseio.com",
    projectId: "logicform-12865",
    storageBucket: "logicform-12865.appspot.com",
    messagingSenderId: "127734847573",
    appId: "1:127734847573:web:ea9d454719ad01297e5cdc",
    measurementId: "G-DSGCE4LN51"
  };
  

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault(); // Prevent default form submission

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

    console.log(name, email, message);
    saveFormData(name, email, message); 
    document.getElementById('alert').style.display="flex";

    setTimeout(()=>{
        document.getElementById('alert').style.display="none";
    }, 3000)
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function saveFormData(name, email, message) {
  
    contactFormDB.push().set({
        name: name,
        email: email,
        message: message
    }).then(() => {
     
        document.getElementById('contactForm').reset();
   
    }).catch((error) => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again.');
    });
}
