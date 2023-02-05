document.addEventListener("DOMContentLoaded", () => {
    // tabs
    const msg_to_new_user_activator = document.querySelector("#msg_to_new_user_activator");
    msg_to_new_user_activator.addEventListener("click", () => openExtensionModal(msg_to_new_user_activator))
    
    const schedule_msg_activator = document.querySelector("#schedule_msg_activator");
    schedule_msg_activator.addEventListener("click", () => openExtensionModal(schedule_msg_activator))
    
    const create_note_activator = document.querySelector("#create_note_activator");
    create_note_activator.addEventListener("click", () => openExtensionModal(create_note_activator))

    var memos = JSON.parse(localStorage.getItem("extensionMemos"))
    renderMemos();

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
                            memos.map(_memo => {
                                _memo["inEdit"] = false ;
                            })
                            cancel_cta.closest(".extension_modal").classList.remove("inview");
                        })
                    }
                )
            })
            modalToShow.classList.add("inview")
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
        const create_memo_form = document.querySelector("#create_memo_form");
        let memo_name = create_memo_form.querySelector("#memo_name").value;
        let memo_description = create_memo_form.querySelector("#memo_description").value;

        if (!memo_name) {
            return;
        }

        var editedFound = false;
        memos.map(_memo => {
            if (_memo.inEdit) {
                editedFound = true;

                _memo["inEdit"] = false;
                _memo["name"] = memo_name;
                _memo["description"] = memo_description;
            }
        })

        if (!editedFound) {
            var memo = {
                id: Math.random() * 50,
                name: memo_name,
                description: memo_description
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
                <p class="note_content">${memo.name}</p>                            
                <div class="note_actions">
                    <button class="edit_note">&#9998;</button>
                    <button class="delete_note">&#9885;</button>
                </div>
            `;
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
            memos.forEach(memo => {
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

                memos.map(_memo => {
                    if (_memo.id === memo.id) {
                        _memo["inEdit"] = true;
                    }
                })
            }
        }

    }
})