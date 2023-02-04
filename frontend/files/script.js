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
            let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`
        }
        
    }
})