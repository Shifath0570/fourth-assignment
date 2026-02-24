let interviewSection = [];
let rejectedSection = [];
let currentStatus = 'all';

let allCardCount = document.getElementById("all_card_count");
let interviewCount = document.getElementById("interview_count");
let rejectedCount = document.getElementById("rejected_count")

let allCardBtn = document.getElementById('all_card_btn')
let interviewCardBtn = document.getElementById('interview_card_btn')
let rejectedCardBtn = document.getElementById('rejected_card_btn')


let cardContainer = document.getElementById('all_Card');
let mainContainer = document.getElementById('main_container');
let newSection = document.getElementById('new_section');



function canculateCount() {
    allCardCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewSection.length;
    rejectedCount.innerText = rejectedSection.length;
}


canculateCount();



function toggling(id) {

    allCardBtn.classList.add('bg-white', 'text-black')
    interviewCardBtn.classList.add('bg-white', 'text-black')
    rejectedCardBtn.classList.add('bg-white', 'text-black')


    allCardBtn.classList.remove('bg-[#1447e6]', 'text-white')
    interviewCardBtn.classList.remove('bg-[#1447e6]', 'text-white')
    rejectedCardBtn.classList.remove('bg-[#1447e6]', 'text-white')



    let select = document.getElementById(id);
    currentStatus = id;
    

    select.classList.remove('bg-white', 'text-black')
    select.classList.add('bg-[#1447e6]', 'text-white')

    if (id == 'interview_card_btn') {
        cardContainer.classList.add('hidden');
        newSection.classList.remove('hidden');
        renderInterview();
    }
    else if (id == 'all_card_btn') {
        cardContainer.classList.remove('hidden');
        newSection.classList.add('hidden');
    }
    else if (id == 'rejected_card_btn') {
        cardContainer.classList.add('hidden');
        newSection.classList.remove('hidden');
        renderRejected();
    }

}





mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview_btn')) {
        let parentNode = event.target.parentNode.parentNode;

        let companyName = parentNode.querySelector('.company_name').innerText;
        let profession = parentNode.querySelector('.profession').innerText;
        let addressTimeSelary = parentNode.querySelector('.address_time_selary').innerText;
        let statusBtn = parentNode.querySelector('.status_btn').innerText;
        let discription = parentNode.querySelector('.discription').innerText;
        parentNode.querySelector('.status_btn').innerText = 'interview';
        parentNode.querySelector('.status_btn').classList.add('btn-success');
        parentNode.querySelector('.status_btn').classList.remove('btn-error');


        let cardInfo = {
            companyName,
            profession,
            addressTimeSelary,
            statusBtn :'interview',
            discription
        }

        let cardExist = interviewSection.find(card => card.companyName == cardInfo.companyName);

        if (!cardExist) {
            interviewSection.push(cardInfo);
        }

        rejectedSection = rejectedSection.filter(card => card.companyName != cardInfo.companyName);

        if(currentStatus == "rejected_card_btn"){
            renderRejected()
        }

        canculateCount();

        

    }
    else if (event.target.classList.contains('rejected_btn')) {
        let parentNode = event.target.parentNode.parentNode

        let companyName = parentNode.querySelector('.company_name').innerText;
        let profession = parentNode.querySelector('.profession').innerText;
        let addressTimeSelary = parentNode.querySelector('.address_time_selary').innerText;
        let statusBtn = parentNode.querySelector('.status_btn').innerText;
        let discription = parentNode.querySelector('.discription').innerText;
        parentNode.querySelector('.status_btn').innerText = 'rejected';
        parentNode.querySelector('.status_btn').classList.add('btn-error');
        parentNode.querySelector('.status_btn').classList.remove('btn-success');

        let cardInfo = {
            companyName,
            profession,
            addressTimeSelary,
            statusBtn :'rejected',
            discription
        }

        let cardExist = rejectedSection.find(card => card.companyName == cardInfo.companyName);

        if (!cardExist) {
            rejectedSection.push(cardInfo);
        }

        interviewSection = interviewSection.filter(card => card.companyName != cardInfo.companyName);

        if(currentStatus == "interview_card_btn"){
            renderInterview()
        }

        canculateCount();

    }

})


function renderInterview() {
    newSection.innerHTML = '';

    for (let interview of interviewSection) {

        let div = document.createElement('div');
        div.className = 'card w-7xl bg-base-100 card-sm shadow-sm p-4';
        div.innerHTML = `
        <div>
                            <h2 class="text-lg font-bold company_name">${interview.companyName}</h2>
                            <p class="text-sm font-semibold my-2 profession">${interview.profession}</p>
                            <p class="text-xs font-semibold my-4 address_time_selary">${interview.addressTimeSelary}</p>
                            <button class="btn status_btn" id="not_applied01">${interview.statusBtn}</button>
                            <p class="text-xs font-semibold my-3 discription">${interview.discription}</p>
                            <div>
                                <button class="btn btn-outline btn-success interview_btn" id="interview_btn01">Interview</button>
                                <button class="btn btn-outline btn-error rejected_btn" id="rejected_btn01">Rejected</button>
                            </div>
                        </div>
        `

        newSection.appendChild(div);

    }


}


function renderRejected() {
    newSection.innerHTML = '';

    for (let rejected of rejectedSection) {

        let div = document.createElement('div');
        div.className = 'card w-7xl bg-base-100 card-sm shadow-sm p-4';
        div.innerHTML = `
        <div>
                            <h2 class="text-lg font-bold company_name">${rejected.companyName}</h2>
                            <p class="text-sm font-semibold my-2 profession">${rejected.profession}</p>
                            <p class="text-xs font-semibold my-4 address_time_selary">${rejected.addressTimeSelary}</p>
                            <button class="btn status_btn" id="not_applied01">${rejected.statusBtn}</button>
                            <p class="text-xs font-semibold my-3 discription">${rejected.discription}</p>
                            <div>
                                <button class="btn btn-outline btn-success interview_btn" id="interview_btn01">Interview</button>
                                <button class="btn btn-outline btn-error rejected_btn" id="rejected_btn01">Rejected</button>
                            </div>
                        </div>
        `

        newSection.appendChild(div);

    }


}













