
document.querySelector('form').addEventListener('submit',(event)=>{
    // event.preventDefault();
    let Task = new Object();
    Task.descr = inputTask.value;
    Task.deadline = inputDeadline.value;
    Task.created = new Date();
    console.log(Task);
    localStorage.setItem(localStorage.length++, JSON.stringify(Task));
});

for(let i=0; i<localStorage.length; i++){
    let task = JSON.parse(localStorage.getItem(i));
    result.innerHTML +=`<tr>
            <td>${i+1}</td>
            <td>${task.descr}</td>
            <td>${task.created}</td>
            <td>${task.deadline}</td>
        </tr>`;

} 