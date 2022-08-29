//write a word 'async' before the function parameter
//write a variable named 'res' and set fetch(url) to it as a value
//write a 'await' word befor the fetch(url)(we were waiting for the response using api from the server)
//write a variable what contains data from the response
//write a await word befor res.json() (we were waiting for data to be conver into json)

const loadPhoneAsync = async (searchPhone) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPhones(data.data);
    } catch (error) {
        console.log(error);
    }
}

const displayPhones = (phones) => {
    phones = phones.slice(0, 9)
    const phoneHolder = document.getElementById('phone-holder');
    phoneHolder.textContent = '';
    const alertElem = document.getElementById('alert');
    phones.length === 0 ? alertElem.classList.remove('d-none') : alertElem.classList.add('d-none');

    phones.forEach(phone => {
        const { brand, image, phone_name } = phone;
        const phoneCard = document.createElement('div')
        phoneCard.classList.add('col-4');
        phoneCard.innerHTML =
            `<div class="card h-100 p-4 " >
             <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <p class="card-title fs-5 fw-bolder">${phone_name}</p>
                    <p class="card-text fw-semibold ">Brand: ${brand}</p>
                    <div class="d-grid gap-2 ">
                    <button class="btn btn-primary btn-sm fw-semibold btn-select-player"
                        type="button" style="--bs-btn-padding-y: .6rem;">Show Details</button>
                </div>
                </div>
            </div>
        `
        phoneHolder.appendChild(phoneCard)
    });
}

const phoneSearch = () => {
    const inputElem = document.getElementById('phone-input');
    //console.log(inputElem);
    const inputElemValue = inputElem.value;
    loadPhoneAsync(inputElemValue);
}


//loadPhoneAsync(''); 