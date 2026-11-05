
document.querySelector('form').addEventListener('submit',(event)=>{
    //event.preventDefault();
    let Task = new Object();
    Task.descr = inputTask.value;
    Task.deadline = new Date(inputDeadline.value).getTime();
    console.log(Task.deadline);
    Task.created = Date.now();
    Task.status = 0;
    let cryptoKey = crypto.randomUUID();
    // console.log(localStorage.getItem(cryptoKey));
    while(localStorage.getItem(cryptoKey) != null ){
        console.log('повтор ключа');
        cryptoKey = crypto.randomUUID();
    }
    localStorage.setItem(cryptoKey, JSON.stringify(Task));
});
let allKeys = Object.keys(localStorage); 
// for(let i=0; i<localStorage.length; i++){
for(let i=0; i<allKeys.length; i++){
    // let currentKey = localStorage.key(i);
    let currentKey = allKeys[i];
    console.log(currentKey)
    let task = JSON.parse(localStorage.getItem(currentKey));
    let dedline = (task.deadline - Date.now())/1000/60/60;
    let deadlineStyle ='';
    if(task.status != 1){
        if(dedline<0) deadlineStyle = 'alarm';
        else if(dedline<24) deadlineStyle = 'warning';
    }
    let buttonStatus ='';
    if(task.status == 0){buttonStatus = `<button onclick="changeStatus('${currentKey}')">выполнить</button>`;}
    else{buttonStatus = `<button onclick="changeStatus('${currentKey}')" class='complete'>выполнено</button>`}
    result.innerHTML +=`<tr>
            <td>${i+1}</td>
            <td>${task.descr}</td>
            <td>${new Date(task.created).toLocaleString()}</td>
            <td class='${deadlineStyle}'>${new Date(task.deadline).toLocaleString()}</td>
            <td><button onclick="localStorage.removeItem('${currentKey}'); location.reload()">del</button>
            ${buttonStatus}
            </td>
        </tr>`;

}
function removeAllItems(){
    localStorage.clear();
    location.reload();
}
function changeStatus(key){
    let currentItem = JSON.parse(localStorage.getItem(key));
    if(currentItem.status == 0){
        currentItem.status = 1;
    }else{currentItem.status = 0}
    localStorage.setItem(key, JSON.stringify(currentItem));
    location.reload();
}
// const keys = Object.keys(localStorage);
// console.log(keys); // вернет массив со всеми ключами
// 01357309-b66c-4450-8cfd-47418fc8b3f6
// localstorage.js:20 0e91df1b-4154-4c91-b0d8-ab8057a25cd4
// localstorage.js:20 aea174c0-1d52-4116-a0b3-e85e521eebb4
// localstorage.js:20 84737fc5-9333-4027-8d96-43eea3e238d4
// localstorage.js:20 f0ad19d7-b8b2-4e5a-ae03-6d78c757031b
// localstorage.js:20 16e8f401-6582-4337-ad7f-2b54f749204b
// localstorage.js:20 9cd896aa-b9cf-4465-b1c9-6803aa8c8513
// localstorage.js:20 3055ad92-ab25-4363-830e-31c5bfaa0893

// 01357309-b66c-4450-8cfd-47418fc8b3f6	{"descr":"asas","deadline":1794908340000,"created":1793871600795}
// 0e91df1b-4154-4c91-b0d8-ab8057a25cd4	{"descr":"asas","deadline":1793958000000,"created":1793871604691}
// 16e8f401-6582-4337-ad7f-2b54f749204b	{"descr":"1","deadline":1793958000000,"created":1793871622515}
// 3055ad92-ab25-4363-830e-31c5bfaa0893	{"descr":"asas","deadline":1793785140000,"created":1793871596275}
// 84737fc5-9333-4027-8d96-43eea3e238d4	{"descr":"3","deadline":1798882860000,"created":1793871670931}
// 9cd896aa-b9cf-4465-b1c9-6803aa8c8513	{"descr":"2","deadline":1793007600000,"created":1793871653171}
// aea174c0-1d52-4116-a0b3-e85e521eebb4	{"descr":"aaaaaaaaa","deadline":1793958240000,"created":1793871872034}
// f0ad19d7-b8b2-4e5a-ae03-6d78c757031b	{"descr":"asasas","deadline":1795167540000,"created":1793871592459}
