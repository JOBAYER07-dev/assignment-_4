// empty array
let interviewArray = [];
let recejtArray = [];

let currentoffers = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');
let jobs = document.getElementById('jobs');

// menu buttons
let totalButton = document.getElementById('total-btn');
let interviewBtnMain = document.getElementById('interview-btn-main');
let rejectBtnMain = document.getElementById('reject-btn-main');

//count funstion start from here
const allCardsDiv = document.getElementById('job-applications');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

function showCount() {
  total.innerText = allCardsDiv.children.length;
  interviewCount.innerText = interviewArray.length;
  rejectCount.innerText = recejtArray.length;
}
showCount();

function showCountJobs() {
  total.innerText = allCardsDiv.children.length;
  interviewCount.innerText = interviewArray.length;
  rejectCount.innerText = recejtArray.length;

  if (currentoffers === 'interview-btn-main') {
    jobs.innerText = interviewArray.length;
  } else if (currentoffers === 'reject-btn-main') {
    jobs.innerText = recejtArray.length;
  } else {
    jobs.innerText = allCardsDiv.children.length;
  }
}
showCountJobs();
// end

// toggle function here
function toggleStyle(id) {
  totalButton.classList.remove('bg-blue-400');
  interviewBtnMain.classList.remove('bg-blue-400');
  rejectBtnMain.classList.remove('bg-blue-400');

  totalButton.classList.add('bg-gray-400');
  interviewBtnMain.classList.add('bg-gray-400');
  rejectBtnMain.classList.add('bg-gray-400');

  const selected = document.getElementById(id);
  currentoffers = id;

  selected.classList.remove('bg-gray-400');
  selected.classList.add('bg-blue-400');

  if (id == 'interview-btn-main') {
    allCardsDiv.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    moveInterview();
  } else if (id == 'total-btn') {
    allCardsDiv.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  } else if (id == 'reject-btn-main') {
    allCardsDiv.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    moveReject();
  }
  showCountJobs();
}
// end
mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.parentNode.parentNode;

    const offerName = parentNode.querySelector('.offers').innerText;
    const kindOf = parentNode.querySelector('.kindof').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    const requirment = parentNode.querySelector('.requirment').innerText;
    const applyBtn = parentNode.querySelector('.apply-btn').innerText;

    parentNode.querySelector('.apply-btn').innerText = 'INTERVIEW';
    parentNode.querySelector('.apply-btn').className =
      'apply-btn border-green-500 border px-4 py-2 rounded-md text-green-500 cursor-pointer';

    const cardInfo = {
      offerName,
      kindOf,
      selary,
      requirment,
      applyBtn: 'INTERVIEW',
    };

    // new
    recejtArray = recejtArray.filter(
      item => item.offerName != cardInfo.offerName,
    );

    // new
    interviewArray = interviewArray.filter(
      item => item.offerName !== cardInfo.offerName,
    );
    interviewArray.push(cardInfo);
    // new
    showCountJobs();

    // new
    if (currentoffers === 'interview-btn-main') {
      moveInterview();
    } else if (currentoffers === 'reject-btn-main') {
      moveReject();
    }
  } else if (event.target.classList.contains('reject-btn')) {
    const parentNode = event.target.parentNode.parentNode;

    const offerName = parentNode.querySelector('.offers').innerText;
    const kindOf = parentNode.querySelector('.kindof').innerText;
    const selary = parentNode.querySelector('.selary').innerText;
    const requirment = parentNode.querySelector('.requirment').innerText;
    const applyBtn = parentNode.querySelector('.apply-btn').innerText;

    parentNode.querySelector('.apply-btn').innerText = 'REJECT';
    parentNode.querySelector('.apply-btn').className =
      'apply-btn border-red-500 border px-4 py-2 rounded-md text-red-500 cursor-pointer';
    const cardInfo = {
      offerName,
      kindOf,
      selary,
      requirment,
      applyBtn: 'REJECT',
    };
    interviewArray = interviewArray.filter(
      item => item.offerName !== offerName,
    );

    recejtArray = recejtArray.filter(item => item.offerName !== offerName);
    recejtArray.push(cardInfo);

    showCountJobs();

    if (currentoffers === 'interview-btn-main') {
      moveInterview();
    } else if (currentoffers === 'reject-btn-main') {
      moveReject();
    }
  }

  // delete buttton
  if (
    event.target.parentNode &&
    event.target.parentNode.classList.contains('delete-btn')
  ) {
    const deleteButton = event.target.parentNode;
    const card = deleteButton.parentNode.parentNode;

    if (!card) return;

    const offerName = card.querySelector('.offers').innerText;

    interviewArray = interviewArray.filter(
      item => item.offerName !== offerName,
    );
    recejtArray = recejtArray.filter(item => item.offerName !== offerName);

    card.remove();
    showCountJobs();

    if (currentoffers === 'interview-btn-main') {
      moveInterview();
    } else if (currentoffers === 'reject-btn-main') {
      moveReject();
    }
  }
});

// filter function start from here
function moveInterview() {
  filteredSection.innerHTML = '';

  if (interviewArray.length === 0) {
    filteredSection.innerHTML = `      <div class="min-h-screen flex flex-col justify-center items-center text-center space-y-1">
        <img src="./image/jobs.png" alt="">
        <h2 class="text-2xl font-bold">No jobs available</h2>
        <p class="text-xl text-gray-500">Check back soon for new job opportunities</p>
      </div>
  `;
    return;
  }

  for (let interview of interviewArray) {
    console.log(interview);

    let div = document.createElement('div');
    div.className =
      'flex justify-between border border-gray-500 p-3 rounded-md mb-6';
    div.innerHTML = `               <div class="space-y-4 mb-4">
          <!-- 1st part  -->
          <div>
            <h2 class="offers text-2xl">${interview.offerName}</h2>
            <p class="kindof text-[18px] text-gray-600">${interview.kindOf}</p>
          </div>
          <!-- 2nd part  -->
          <div class="space-y-4">
            <p class="selary text-[16px] text-gray-600">${interview.selary}</p>
            <button class="apply-btn border-gray-500 border px-4 py-2 rounded-md text-green-500 cursor-pointer">${interview.applyBtn}</button>  
            <p class="requirment text-[18px] text-gray-600">${interview.requirment}</p>
            </div>
            <!-- 3rd part -->

          <div>
            <button class="interview-btn border-green-500 border px-4 py-2 rounded-md text-green-500 cursor-pointer">INTERVIEW</button>
            <button  class="reject-btn border-red-500 border px-4 py-2 rounded-md text-red-500 cursor-pointer">REJECTED</button>
          </div>

        </div>
        <!--  delete button part  -->
        <div class="md:p-8">
          <button class="delete-btn cursor-pointer"><img class="md:w-8 md:h-8" src="./image/Trash.png" alt=""></button>
        </div>`;
    filteredSection.appendChild(div);
  }
}

// reject ar jonno ata
function moveReject() {
  filteredSection.innerHTML = '';

  if (recejtArray.length === 0) {
    filteredSection.innerHTML = `
          <div class="min-h-screen flex flex-col justify-center items-center text-center space-y-1">
        <img src="./image/jobs.png" alt="">
        <h2 class="text-2xl font-bold">No jobs available</h2>
        <p class="text-xl text-gray-500">Check back soon for new job opportunities</p>
      </div>`;
    return;
  }

  for (let reject of recejtArray) {
    let div = document.createElement('div');
    div.className =
      'flex justify-between border border-gray-500 p-3 rounded-md';
    div.innerHTML = `               <div class="space-y-4">
          <!-- 1st part  -->
          <div>
            <h2 class="offers text-2xl">${reject.offerName}</h2>
            <p class="kindof text-[18px] text-gray-600">${reject.kindOf}</p>
          </div>
          <!-- 2nd part  -->
          <div class="space-y-4">
            <p class="selary text-[16px] text-gray-600">${reject.selary}</p>
            <button class="apply-btn border-gray-500 border px-4 py-2 rounded-md text-red-500 cursor-pointer">${reject.applyBtn}</button>  
            <p class="requirment text-[18px] text-gray-600">${reject.requirment}.</p>
            </div>
            <!-- 3rd part -->

          <div>
            <button class="interview-btn border-green-500 border px-4 py-2 rounded-md text-green-500 cursor-pointer">INTERVIEW</button>
            <button  class="reject-btn border-red-500 border px-4 py-2 rounded-md text-red-500 cursor-pointer">REJECTED</button>
          </div>

        </div>
        <!--  delete button part  -->
        <div class="md:p-8">
          <button class="delete-btn cursor-pointer"><img class="md:w-8 md:h-8" src="./image/Trash.png" alt=""></button>
        </div>`;
    filteredSection.appendChild(div);
  }
}
