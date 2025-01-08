const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`

    Email.send({
        SecureToken: "5e03771f-6596-40f9-8d08-e67e76b2b65d",
        To : 'chrisgeorge0425@gmail.com',
        From : "chrisgeorge0425@gmail.com",
        // Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    form.reset();
    return false;
})