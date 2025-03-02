document.getElementById('discover-something').addEventListener('click',function(){
    window.location.href ='question.html'
    
})
function goBack(){
    window.history.back();
}

// ..............

document.getElementById('btn-completed1').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')

    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `You have Complete The TaskFix Mobile Button Issue at ${currentTime}`

        container.appendChild(p);

})

// ..........

document.getElementById('btn-completed2').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')
    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `You have Complete The Task Add Dark Mode at ${currentTime}`

        container.appendChild(p);
})
// .........


document.getElementById('btn-completed3').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')
    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

   
    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `You have Complete The Task Optimize Home page at ${currentTime}`

        container.appendChild(p);
})
// .........

document.getElementById('btn-completed4').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')
    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

   
    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `You have Complete The Task Add new emoji 🤲 at ${currentTime}`

        container.appendChild(p);
})
// .......

document.getElementById('btn-completed5').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')
    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

   
    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `You have Complete The Task Integrate OpenAI API at ${currentTime}`

        container.appendChild(p);
})
// .........

document.getElementById('btn-completed6').addEventListener('click',function(){
    this.disabled =true;
    alert('Board Updated Successfully')
    alert('Congratulations!!! You Done all Task')
    let navText =document.getElementById('nav-text');
    let taskNumber =document.getElementById('task-number');

    let newNavTex =parseInt(navText.innerText) +1;
    let newTaskNumber =parseInt(taskNumber.innerText) -1;

    navText.innerText = newNavTex;
    taskNumber.innerText =newTaskNumber;

    let currentTime = new Date().toLocaleTimeString();

   
    const container  =document.getElementById('log-container');
    let p =document.createElement('p');
    p.className ="p-3 bg-yellow-200 rounded-md shadow-md my-5";
    p.innerText = `Congratulations!!! You have Complete The Task Improve Job searching at ${currentTime}`

        container.appendChild(p);
})
document.getElementById('btn-clear').addEventListener('click',function(){
    document.getElementById('log-container').innerText ="";
})


