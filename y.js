const wrapper = document.querySelector(".wrapper"),
 qrInput = wrapper.querySelector(".form input"),
 button = wrapper.querySelector(".form button"),
 Img = wrapper.querySelector(".qr-code img");


button.addEventListener("click" , ()  => {
    let qrValue = qrInput.value;

    if(!qrValue) return;

    button.innerText = "Generator QR Code ...";
    
    Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    Img.addEventListener("load" , () => {
        wrapper.classList.add("active");
        button.innerText = "Generator QR Code ...";
    });
});

Img.addEventListener("keyup" ,() => {
    if(!qrValue.value) {
        wrapper.classList.remove("active")
    }
})