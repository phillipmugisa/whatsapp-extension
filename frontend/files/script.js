document.addEventListener("DOMContentLoaded", () => {
    // tabs
    const msg_to_new_user_activator = document.querySelector("#msg_to_new_user_activator");
    msg_to_new_user_activator.addEventListener("click", () => openExtensionModal(msg_to_new_user_activator))
    
    const schedule_msg_activator = document.querySelector("#schedule_msg_activator");
    schedule_msg_activator.addEventListener("click", () => openExtensionModal(schedule_msg_activator))
    
    const create_note_activator = document.querySelector("#create_note_activator");
    create_note_activator.addEventListener("click", () => openExtensionModal(create_note_activator))


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
                            cancel_cta.closest(".extension_modal").classList.remove("inview");
                        })
                    }
                )
            })
            modalToShow.classList.add("inview")
        }
    }
})