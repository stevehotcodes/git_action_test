
window.addEventListener('load',()=>{
  //create the variable
    const form=document.querySelector('#new-task-form');
    const input=document.querySelector('#new-task-input');
    const list_el=document.querySelector('.tasks');
    const error_el=document.querySelector('#error')

    console.log(form);

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task=input.value;
        console.log(task)
        if(!task){
            alert("part fill out the task");
            // error_el.style.display="block"
            return;
        }
        // !task? alert("please fill out the task");
        const task_el=document.createElement("div");
        task_el.classList.add("task");

        const task_content_el=document.createElement('div')
        task_content_el.classList.add('content');
    

        task_el.appendChild(task_content_el);

        const task_input_el=document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text"
        task_input_el.value=task
        task_input_el.setAttribute('readonly','readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el=document.createElement("div");
        task_actions_el.classList.add("actions");

        const edit_btn_el=document.createElement("button");
        edit_btn_el.classList.add("edit-btn");
        edit_btn_el.innerHTML="Edit"

        const delete_btn_el=document.createElement("button");
        delete_btn_el.classList.add("delete-btn");
        delete_btn_el.innerHTML="Delete"

        task_actions_el.appendChild(edit_btn_el)
        task_actions_el.appendChild(delete_btn_el);

        task_el.appendChild(task_actions_el)


        
        list_el.appendChild(task_el);

        input.value ="";

        edit_btn_el.addEventListener('click',()=>{
          if(edit_btn_el.innerHTML.toLowerCase()=='edit'){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            edit_btn_el.innerHTML="Save";
            
          }
          else{
            task_input_el.setAttribute('readonly','readonly');
            edit_btn_el.innerHTML="Edit"
          }

        })

        delete_btn_el.addEventListener('click',()=>{
            list_el.removeChild(task_el)
            task_input_el.style.backgroundColor="red";
            delete_btn_el.opacity=1
        })

        
    })
})