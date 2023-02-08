document.addEventListener("DOMContentLoaded", () => {
    // tabs
    const msg_to_new_user_activator = document.querySelector("#msg_to_new_user_activator");
    msg_to_new_user_activator.addEventListener("click", () => openExtensionModal(msg_to_new_user_activator))
    
    const create_note_activator = document.querySelector("#create_note_activator");
    create_note_activator.addEventListener("click", () => openExtensionModal(create_note_activator))

    const schedule_msg_activator = document.querySelector("#schedule_msg_activator");
    schedule_msg_activator.addEventListener("click", () => openExtensionModal(schedule_msg_activator))

    const template_modal_activator = document.querySelector("#template_modal_activator");
    template_modal_activator.addEventListener("click", () => openExtensionModal(template_modal_activator))

    const schedule_msg_sidebar_activator = document.querySelector("#schedule_msg_sidebar_activator");
    schedule_msg_sidebar_activator.addEventListener("click", () => showSidebar(schedule_msg_sidebar_activator))

    const memo_sidebar_activator = document.querySelector("#memo_sidebar_activator");
    memo_sidebar_activator.addEventListener("click", () => showSidebar(memo_sidebar_activator))
    schedule_msg_sidebar_activator.click()

    var memos = JSON.parse(localStorage.getItem("extensionMemos")) || []
    renderMemos();

    var templates = JSON.parse(localStorage.getItem("extensionTemplates")) || [];
    renderTemplates();

    var tasks = JSON.parse(localStorage.getItem("extension_tasks")) || [];
    renderTasks();

    function openExtensionModal(activator) {
        let modalId = activator.dataset.modalId;
        let modalToShow = document.querySelector(`#${modalId}`);
        if (modalToShow.classList.contains("inview")) {
            modalToShow.classList.remove("inview")
        } else {
            // close all open modals
            document.querySelectorAll(".extension_modal").forEach(modal => {
                if (modal.classList.contains("inview")) {
                    modal.classList.remove("inview")
                }
                modal.querySelectorAll(".cancel_button").forEach(
                    cancel_cta => {
                        cancel_cta.addEventListener("click", () => {
                            memos && memos.map(_memo => {
                                _memo["inEdit"] = false ;
                            })
                            templates && templates.map(_template => {
                                _template["inEdit"] = false ;
                            })
                            tasks && tasks.map(_task => {
                                _task["inEdit"] = false ;
                            })
                            cancel_cta.closest(".extension_modal").classList.remove("inview");
                            document.body.classList.remove("modal_open")
                        })
                    }
                )
            })
            modalToShow.classList.add("inview")
            document.body.classList.add("modal_open")
            if (modalToShow.id === "schedule_msg") {
                let template_options = document.querySelector("#saved_templates");
                templates && templates.forEach(template => {
                    let option = document.createElement("option");
                    option.value = template.name
                    option.textContent = template.name
                    option.id = template.id
                    template_options.appendChild(option);
                })
                document.querySelector("#task_list_activator").click()
            }
        }
    }

    // function closeModal(modal) {
        
    // }


    // sending messages
    const new_number_send = document.querySelector("#new_number_send");
    new_number_send.addEventListener("click", sendMsgToNewNo)

    function sendMsgToNewNo() {
        const sendMsgToNewNoform = document.querySelector("#sendMsgToNewNoform");

        let countryCode = sendMsgToNewNoform.querySelector("#country_code").value;
        let phoneNumber = sendMsgToNewNoform.querySelector("#new_phone_number").value;
        let message = sendMsgToNewNoform.querySelector("#new_extension_message").value;

        if (countryCode && phoneNumber && message) {
            let fullNumber = `+${countryCode}${phoneNumber[0] == '0' ? phoneNumber.slice(1) : phoneNumber}`
            let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`;
            window.location.replace(requestUrl);
        }
        
    }

    const create_memo_activator = document.querySelector("#create_memo_activator");
    
    create_memo_activator.addEventListener("click", () => {
        let date = new Date();

        const create_memo_form = document.querySelector("#create_memo_form");
        let memo_name = create_memo_form.querySelector("#memo_name").value;
        let memo_description = create_memo_form.querySelector("#memo_description").value;
        let memo_color = create_memo_form.querySelector("#memo_color").value;

        if (!memo_name) {
            return;
        }

        var editedFound = false;
        memos && memos.map(_memo => {
            if (_memo.inEdit) {
                editedFound = true;

                _memo["inEdit"] = false;
                _memo["name"] = memo_name;
                _memo["description"] = memo_description;
                _memo["color"] = memo_color;
                _memo["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            }
        })

        if (!editedFound) {
            var memo = {
                id: Math.random() * 50,
                name: memo_name,
                description: memo_description,
                color: memo_color,
                date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            }
        }
        
        renderMemos(memo);

        // close modal
        create_memo_form.reset()
        create_memo_form.parentElement.querySelector(".cancel_button").click();
    })

    function renderMemos(newMemo=null){
        let savedMemos = localStorage.getItem("extensionMemos");

        if (!savedMemos) {
            localStorage.setItem("extensionMemos", JSON.stringify(memos));
        } else {
            if (newMemo) {
                memos = [...JSON.parse(localStorage.getItem("extensionMemos")), newMemo];
            }
            localStorage.setItem('extensionMemos', JSON.stringify(memos));
        }
        
        const extension_sidebar_notes = document.querySelector(".extension_sidebar_notes");

        function createNoteElem(memo) {
            const memoElem = document.createElement("div");
            memoElem.className = 'extension_sidebar_note';
            memoElem.dataset.memoId = memo.id;
            memoElem.innerHTML = `
                <span></span>
                <div class="content">
                    <p class="note_content">${memo.name}</p>
                    <p class="note_date">Modified: ${memo.date_created}</p>                        
                    <div class="note_actions">
                        <button class="edit_note">&#9998;</button>
                        <button class="delete_note">&#9885;</button>
                    </div>
                </div>
            `;
            memoElem.querySelector("span").style.backgroundColor = memo.color;
            memoElem.querySelector(".delete_note").addEventListener("click", () => {
                memos = memos.filter(memo => memo.id != memoElem.dataset.memoId);
                localStorage.setItem('extensionMemos', JSON.stringify(memos));
                renderMemos(null);
            })
            memoElem.querySelector(".edit_note").addEventListener("click", () => editMemo(memo))
            // memoElem.addEventListener("click", () => editMemo(memo))
            return memoElem;
        }


        if (newMemo) {
            extension_sidebar_notes.prepend(createNoteElem(newMemo));
        }
        else {
            extension_sidebar_notes.querySelectorAll(".extension_sidebar_note").forEach(
                note => {
                    note.parentElement.removeChild(note)
                }
            )
            memos && memos.forEach(memo => {
                extension_sidebar_notes.prepend(createNoteElem(memo));
            })
        }

        function editMemo(memo) {
            create_note_activator.click();
            let modal = document.querySelector(".extension_modal#create_note");
            if (modal.classList.contains("inview")) {
                const create_memo_form = document.querySelector("#create_memo_form");
                create_memo_form.querySelector("#memo_name").value = memo.name;
                create_memo_form.querySelector("#memo_description").value = memo.description;
                create_memo_form.querySelector("#memo_color").value = memo.color;

                memos.map(_memo => {
                    if (_memo.id === memo.id) {
                        _memo["inEdit"] = true;
                    }
                })
            }
        }
    }

    function showSidebar(activator) {
        let sidebarId = activator.dataset.sidebarId;
        let sidebarToShow = document.querySelector(`#${sidebarId}`);

        if (sidebarToShow.classList.contains("inview")) return;
        document.querySelectorAll(".sidebar_part").forEach(sidebar => {
            if (sidebar.classList.contains("inview")) {
                sidebar.classList.remove("inview") 
            }
            sidebarToShow.classList.add("inview");
        })
    }

    const create_template_activator = document.querySelector("#create_template_activator");
    
    create_template_activator.addEventListener("click", () => {
        let date = new Date();
        const create_template_form = document.querySelector("#template_modal form");
        let template_name = create_template_form.querySelector("#template_name").value;
        let template_color = create_template_form.querySelector("#template_color").value;
        let template_extension_message = create_template_form.querySelector("#template_extension_message").value;
        let template_file = create_template_form.querySelector("#template_file").files;

        if (!template_name && !template_extension_message) return;

        var editedFound = false;
        templates && templates.map(_template => {
            if (_template.inEdit) {
                editedFound = true;

                _template["inEdit"] = false;
                _template["name"] = template_name;
                _template["color"] = template_color;
                _template["message"] = template_extension_message;
                _template["file"] = template_file;
                _template["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            }
        })

        if (!editedFound) {
            var template = {
                id: Math.random() * 50,
                name: template_name,
                color: template_color,
                message: template_extension_message,
                file: template_file,
                date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            }
        }
        
        // save template to backend, only render if post was successful
        renderTemplates(template);

        // close modal
        create_template_form.reset()
        create_template_form.parentElement.querySelector(".cancel_button").click();
    })

    function renderTemplates(newTemplate) {
        const template_list = document.querySelector(".extension_sidebar_notes#templates");

        if (!localStorage.getItem("extensionTemplates")) {
            localStorage.setItem("extensionTemplates", JSON.stringify(templates));
        } else {
            if (newTemplate) {
                templates = [...JSON.parse(localStorage.getItem("extensionTemplates")), newTemplate];
            }
            localStorage.setItem('extensionTemplates', JSON.stringify(templates));
        }

        function createTemplateElem(template) {
            const elem = document.createElement("div");
            elem.className = 'extension_sidebar_note';
            elem.dataset.templateId = template.id;
            elem.innerHTML = `
                <span></span>
                <div class="content">
                    <p class="note_content">${template.name}</p>
                    <p class="note_date">Modified: ${template.date_created}</p>                        
                    <div class="note_actions">
                        <button class="edit_note">&#9998;</button>
                        <button class="delete_note">&#9885;</button>
                    </div>
                </div>
            `;
            elem.querySelector("span").style.backgroundColor = template.color;
            elem.querySelector(".delete_note").addEventListener("click", () => {
                templates = templates.filter(template => template.id != elem.dataset.templateId);
                localStorage.setItem('extensionTemplates', JSON.stringify(templates));
                renderTemplates(null);
            })
            elem.querySelector(".edit_note").addEventListener("click", () => editTemplate(template))
            // elem.addEventListener("click", () => editMemo(memo))
            return elem;
        }

        if (newTemplate) {
            template_list.prepend(createTemplateElem(newTemplate));
        }
        else {
            template_list.querySelectorAll(".extension_sidebar_note").forEach(
                note => {
                    note.parentElement.removeChild(note)
                }
            )
            templates && templates.forEach(template => {
                template_list.prepend(createTemplateElem(template));
            })
        }
    }

    function editTemplate(template) {
        template_modal_activator.click();
        let modal = document.querySelector(".extension_modal#template_modal");
        if (modal.classList.contains("inview")) {
            const create_template_form = modal.querySelector("form");
            create_template_form.querySelector("#template_name").value = template.name;
            create_template_form.querySelector("#template_color").value = template.color;
            create_template_form.querySelector("#template_extension_message").value = template.message;

            // handle file edit 
            // create_template_form.querySelector("#template_file").files = template.file;

            templates.map(_template => {
                if (_template.id === template.id) {
                    _template["inEdit"] = true;
                }
            })
        }
    }

    document.querySelector("#template_list_activator").addEventListener("click", () => {
        document.querySelectorAll(".area_lists").forEach(list => {
            if (list.classList.contains("inview")) list.classList.remove("inview");

            if (list.id == "templates") list.classList.add("inview");
        })
    })
    document.querySelector("#task_list_activator").addEventListener("click", () => {
        document.querySelectorAll(".area_lists").forEach(list => {
            if (list.classList.contains("inview")) list.classList.remove("inview");

            if (list.id == "tasks") list.classList.add("inview");
        })
    })


    const schedule_msg_complete_activator = document.querySelector("#schedule_msg_complete_activator"); 
    schedule_msg_complete_activator.addEventListener("click", () => {
        let date = new Date();
        const schedule_msg_form = document.querySelector("#schedule_msg form");
        let msg_name = schedule_msg_form.querySelector("#msg_name").value;
        let selected_contact = schedule_msg_form.querySelector("#selected_contact").value;
        let msg_color = schedule_msg_form.querySelector("#msg_color").value;
        let schedule_date = schedule_msg_form.querySelector("#schedule_date").value;
        let schedule_time = schedule_msg_form.querySelector("#schedule_time").value;
        let saved_template = schedule_msg_form.querySelector("#saved_template").value;

        if (!msg_name && !saved_template && !selected_contact) return;

        var editedFound = false;
        tasks && tasks.map(_task => {
            if (_task.inEdit) {
                editedFound = true;

                _task["inEdit"] = false;
                _task["name"] = msg_name;
                _task["contact"] = selected_contact;
                _task["color"] = msg_color;
                _task["template"] = saved_template;
                _task["sending_date"] = schedule_date;
                _task["sending_time"] = schedule_time;
                _task["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            }
        })

        if (!editedFound) {
            var msg = {
                id: Math.random() * 50,
                name: msg_name,
                contact: selected_contact,
                color: msg_color,
                template: saved_template,
                sending_date: schedule_date,
                sending_time: schedule_time,
                date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            }
        }
        
        // save template to backend, only render if post was successful
        renderTasks(msg);

        // close modal
        // schedule_msg_form.reset()
        schedule_msg_form.parentElement.querySelector(".cancel_button").click();
    })

    function renderTasks(newTask) {
        const task_lists = document.querySelector(".extension_sidebar_notes#tasks");

        if (!localStorage.getItem("extension_tasks")) {
            localStorage.setItem("extension_tasks", JSON.stringify(tasks));
        } else {
            if (newTask) {
                tasks = [...JSON.parse(localStorage.getItem("extension_tasks")), newTask];
            }
            localStorage.setItem('extension_tasks', JSON.stringify(tasks));
        }

        function createTemplateElem(Task) {
            const elem = document.createElement("div");
            elem.className = 'extension_sidebar_note';
            elem.dataset.TaskId = Task.id;
            elem.innerHTML = `
                <span></span>
                <div class="content">
                    <p class="note_content">${Task.name}</p>
                    <p class="note_date">Modified: ${Task.date_created}</p>                        
                    <div class="note_actions">
                        <button class="edit_note">&#9998;</button>
                        <button class="delete_note">&#9885;</button>
                    </div>
                </div>
            `;
            elem.querySelector("span").style.backgroundColor = Task.color;
            elem.querySelector(".delete_note").addEventListener("click", () => {
                tasks = tasks.filter(Task => Task.id != elem.dataset.TaskId);
                localStorage.setItem('extension_tasks', JSON.stringify(tasks));
                renderTasks(null);
            })
            elem.querySelector(".edit_note").addEventListener("click", () => editTask(Task))
            // elem.addEventListener("click", () => editMemo(memo))
            return elem;
        }

        if (newTask) {
            task_lists.prepend(createTemplateElem(newTask));
        }
        else {
            task_lists.querySelectorAll(".extension_sidebar_note").forEach(
                note => {
                    note.parentElement.removeChild(note)
                }
            )
            tasks && tasks.forEach(template => {
                task_lists.prepend(createTemplateElem(template));
            })
        }
    }

    function editTask(Task) {
        schedule_msg_activator.click();
        let modal = document.querySelector(".extension_modal#schedule_msg");
        if (modal.classList.contains("inview")) {
            const create_task_form = modal.querySelector("form");
            create_task_form.querySelector("#msg_name").value = Task.name;
            create_task_form.querySelector("#selected_contact").value = Task.contact;
            create_task_form.querySelector("#saved_template").value = Task.template;
            create_task_form.querySelector("#msg_color").value = Task.color;
            create_task_form.querySelector("#schedule_date").value = Task.sending_date;
            create_task_form.querySelector("#schedule_time").value = Task.sending_time;

            // handle file edit 
            // create_template_form.querySelector("#template_file").files = template.file;

            tasks.map(_task => {
                if (_task.id === Task.id) {
                    _task["inEdit"] = true;
                }
            })
        }
    }
})