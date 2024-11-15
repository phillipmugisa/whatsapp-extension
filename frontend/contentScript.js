(function() {

    var authUI = `
        <div class="emuxn_modal" id="auth_modal">
            <header>
                <h1 class="emuxn_modal_heading">Welcome to Whatsapp Assistant.</h1>
            </header>
            <form class="emuxn_modal_form" id="auth_form">
                <p class="pro-link" id="popup-error-msg" style="display: none;"></p>
                <div class="fields" style="gap: 1rem">
                    <div class="emuxn_form_group">
                        <input type="text" placeholder="Email" id="extAuth-username" required>
                    </div>
                    <div class="emuxn_form_group">
                        <input type="password" name="password" id="extAuth-password" placeholder="Password" required>
                    </div>
                    <div class="emuxn_form_group">
                        <input type="submit" value="Sign In" id="signin" style="cursor: pointer;">
                    </div>
                    <div class="emuxn_form_group split" style="gap: 1rem;display: flex;justify-content: flex-start;">
                        <a style="cursor: pointer;border: 1px solid lightgray;padding: .5rem 1rem;font-size: .9rem;border-radius: 5px;color: gray;text-align: center;" class="signup-social-emuxn" >Continue with Google</a>
                        <a style="cursor: pointer;border: 1px solid lightgray;padding: .5rem 1rem;font-size: .9rem;border-radius: 5px;color: rgb(255, 255, 255);text-align: center;white-space: nowrap;background-color: #3A63BE;" class="signup-social-emuxn" >Continue with Facebook</a>
                    </div>
                </div>
                <p class="centered">
                Don't Have An Account
                    <a class="text-link" id="signup-emuxn" >Sign Up</a>
                </p>
            </form>
            <footer>
                <button class="cancel_button" id="close_auth_modal">Cancel</button>
            </footer>
        </div>
    `

    var taskbarUI = `
        <div class="emuxn_taskbar">
            <div class="left">
                <div class="tab-area"  data-modal-id="msg_to_new_user" id="msg_to_new_user_activator">
                    <button class="emuxn_tab"
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z" fill="#000000"/></svg>
                    </button>
                    <p>New Message</p>
                </div>
                <div class="tab-area" data-modal-id="generate_link" id="generate_link_activator">
                    <button class="emuxn_tab"
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z" fill="#000000"/></svg>
                    </button>
                    <p>Generate Link</p>
                </div>
                <div class="tab-area" data-sidebar-id="memo" id="memo_sidebar_activator">
                    <button class="emuxn_tab">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 14V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H13.5M20 14L13.5 20M20 14H15.5C14.3954 14 13.5 14.8954 13.5 16V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                    <p>Create Memo</p>
                </div>
                
                <div class="tab-area" data-sidebar-id="alarm" id="alarm_sidebar_activator">
                    <button class="emuxn_tab">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.82474 13.934L5.09976 13.2452L5.82474 13.934ZM8 9C8 6.79086 9.79086 5 12 5V3C8.68629 3 6 5.68629 6 9H8ZM8 11.7564V9H6V11.7564H8ZM6 16C6 15.4658 6.20812 14.9823 6.54971 14.6228L5.09976 13.2452C4.41915 13.9616 4 14.9329 4 16H6ZM7 16H6V18H7V16ZM17 16H7V18H17V16ZM18 16H17V18H18V16ZM17.4503 14.6228C17.7919 14.9823 18 15.4658 18 16H20C20 14.9329 19.5809 13.9616 18.9002 13.2452L17.4503 14.6228ZM16 9V11.7564H18V9H16ZM12 5C14.2091 5 16 6.79086 16 9H18C18 5.68629 15.3137 3 12 3V5ZM18.9002 13.2452C18.2923 12.6054 18 12.1579 18 11.7564H16C16 13.05 16.8905 14.0336 17.4503 14.6228L18.9002 13.2452ZM4 16C4 17.1046 4.89543 18 6 18V16H4ZM18 18C19.1046 18 20 17.1046 20 16H18V18ZM6 11.7564C6 12.1579 5.70766 12.6054 5.09976 13.2452L6.54971 14.6228C7.10947 14.0336 8 13.05 8 11.7564H6Z" fill="#000000"/>
                    <path d="M13.7976 19.8767C13.6312 20.2179 13.3712 20.5046 13.048 20.7035C12.7247 20.9023 12.3516 21.0051 11.9721 20.9998C11.5926 20.9945 11.2224 20.8813 10.9049 20.6735C10.5873 20.4657 10.3354 20.1718 10.1786 19.8262" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3V4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                    <p>Buzzer</p>
                </div>
                
                <div class="tab-area" data-sidebar-id="focus" id="focus_sidebar_activator">
                    <button class="emuxn_tab">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1691.249 1016.47c-27.558 359.718-315.106 647.154-674.824 674.824v-223.059h-112.94v223.06c-359.718-27.671-647.154-315.107-674.711-674.824H451.72V903.529H228.774c27.557-359.717 314.993-647.153 674.71-674.823v223.059h112.941v-223.06c359.718 27.671 647.266 315.107 674.824 674.824H1468.19v112.942h223.059Zm112.941-112.94c-28.01-421.949-365.703-759.756-787.765-787.765V0h-112.94v115.765c-421.949 28.01-759.643 365.816-787.653 787.764H-.045v112.942h115.877c28.01 421.948 365.704 759.755 787.652 787.764V1920h112.941v-115.765c422.062-28.01 759.756-365.816 787.765-787.764h115.765V903.529H1804.19ZM960 1242.352c-155.633 0-282.353-126.72-282.353-282.353S804.367 677.647 960 677.647 1242.353 804.367 1242.353 960 1115.633 1242.353 960 1242.353m0-677.647c-217.976 0-395.294 177.318-395.294 395.294 0 217.976 177.318 395.294 395.294 395.294 217.976 0 395.294-177.318 395.294-395.294 0-217.976-177.318-395.294-395.294-395.294" fill-rule="evenodd"/>
                    </svg>
                    </button>
                    <p>Focus</p>
                </div>
            </div>
            <div class="right">
                <div class="user_detail">
                    <span id="username"></span>
                    <span id="package"></span>
                </div>
                <button class="auth-tabs" id="auth_activator">Login</button>
                <button class="auth-tabs" id="sidebar_toggle">
                <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fill-rule="evenodd"/>
                </svg>
                </button>
            </div>
        </div>
    `

    var sidebarUI = `
        <div class="emuxn_sidebar_area">
            <div class="emuxn_sidebar">
                <div class="sidebar_part inview" id="default_sidebar">
                    <img src="https://ilazy.net/wp-content/uploads/2022/09/newLogoPSD.png" alt="sidebar brief"/>
                    <div class="brief">
                        <h2>Welcome to Wamy Extensions
                    </div>
                </div>
                <div class="sidebar_part" id="memo">
                    <p style="margin: .25rem 0 0 1rem;font-weight: bold;">Actions</p>
                    <div class="emuxn_sidebar_actions">
                        <button id="create_note_activator" data-modal-id="create_note">New Sticky Note</button>
                    </div>
                    <hr>
                    <div class="emuxn_sidebar_notes">
                        <h2 class="sub_headings">Your Notes</h2>
                        <div class="list"></div>
                    </div>
                </div>
                <div class="sidebar_part" id="alarm">
                    <p style="margin: .25rem 0 0 1rem;font-weight: bold;">Actions</p>
                    <div class="emuxn_sidebar_actions">
                        <button id="create_alarm_activator" data-modal-id="create_alarm">Create Buzzer</button>
                    </div>
                    <hr>
                    <div class="emuxn_sidebar_notes">
                        <h2 class="sub_headings">Your Buzzers</h2>
                        <div class="list"></div>
                    </div>
                </div>
                <div class="sidebar_part" id="focus">
                    <div class="emuxn_sidebar_actions" style="display: grid; grid-auto-flow: row;">
                        <div class="toggle_area" style="padding: .25rem .5rem;">
                            <span>OFF</span>
                            <label class="toggle">
                                <input type="checkbox" id="focus_toggle">
                                <span class="slider"></span>
                            </label>
                            <span>ON</span>
                        </div>
                        <button id="create_focus_activator" data-modal-id="create_focus">Block Website</button>
                    </div>
                    <hr>
                    <div class="emuxn_sidebar_notes">
                        <h2 class="sub_headings">Restricted Websites</h2>
                        <div class="list"></div>
                    </div>
                </div>
                <div class="sidebar_part" id="scheduling_msg">
                    <p style="margin: .25rem 0 0 1rem;font-weight: bold;">Actions</p>
                    <div class="emuxn_sidebar_actions no-slipt">
                        <button data-modal-id="template_modal" id="template_modal_activator">New Template</button>
                        <button data-modal-id="schedule_msg" id="schedule_msg_activator">New Task</button>
                    </div>
                    <hr>
                    <div class="emuxn_sidebar_notes lists">
                        <div class="emuxn_sidebar_actions">
                            <button id="template_list_activator">Templates</button>
                            <button id="task_list_activator" data-modal-id="">Tasks</button>
                        </div>
                        <div class="area_lists emuxn_sidebar_notes inview" id="templates">
                            <h2 class="sub_headings">Your Templates</h2>
                            <div class="list"></div>
                        </div>
                        <div class="area_lists emuxn_sidebar_notes" id="tasks">
                            <h2 class="sub_headings">Your Tasks</h2>
                            <div class="list"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    var blockSiteModal = `
        <div id="site_blocked_modal" class="emuxn emuxn_modal tab_modal">
            <div class="body">
                <div class="bell">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.82474 13.934L5.09976 13.2452L5.82474 13.934ZM8 9C8 6.79086 9.79086 5 12 5V3C8.68629 3 6 5.68629 6 9H8ZM8 11.7564V9H6V11.7564H8ZM6 16C6 15.4658 6.20812 14.9823 6.54971 14.6228L5.09976 13.2452C4.41915 13.9616 4 14.9329 4 16H6ZM7 16H6V18H7V16ZM17 16H7V18H17V16ZM18 16H17V18H18V16ZM17.4503 14.6228C17.7919 14.9823 18 15.4658 18 16H20C20 14.9329 19.5809 13.9616 18.9002 13.2452L17.4503 14.6228ZM16 9V11.7564H18V9H16ZM12 5C14.2091 5 16 6.79086 16 9H18C18 5.68629 15.3137 3 12 3V5ZM18.9002 13.2452C18.2923 12.6054 18 12.1579 18 11.7564H16C16 13.05 16.8905 14.0336 17.4503 14.6228L18.9002 13.2452ZM4 16C4 17.1046 4.89543 18 6 18V16H4ZM18 18C19.1046 18 20 17.1046 20 16H18V18ZM6 11.7564C6 12.1579 5.70766 12.6054 5.09976 13.2452L6.54971 14.6228C7.10947 14.0336 8 13.05 8 11.7564H6Z" fill="#000000"/>
                    <path d="M13.7976 19.8767C13.6312 20.2179 13.3712 20.5046 13.048 20.7035C12.7247 20.9023 12.3516 21.0051 11.9721 20.9998C11.5926 20.9945 11.2224 20.8813 10.9049 20.6735C10.5873 20.4657 10.3354 20.1718 10.1786 19.8262" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3V4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p id="emp">Site Blocked Using Wamy</p>
            </div>
            <footer>
                <button id="close_site_button">Close Site</button>
            </footer>
        </div>
    `

    var alarmModal = `
        <div id="alarm_modal" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">You Have An Alarm.</h3>
            </header>
            <div class="body">
                <div class="bell">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.82474 13.934L5.09976 13.2452L5.82474 13.934ZM8 9C8 6.79086 9.79086 5 12 5V3C8.68629 3 6 5.68629 6 9H8ZM8 11.7564V9H6V11.7564H8ZM6 16C6 15.4658 6.20812 14.9823 6.54971 14.6228L5.09976 13.2452C4.41915 13.9616 4 14.9329 4 16H6ZM7 16H6V18H7V16ZM17 16H7V18H17V16ZM18 16H17V18H18V16ZM17.4503 14.6228C17.7919 14.9823 18 15.4658 18 16H20C20 14.9329 19.5809 13.9616 18.9002 13.2452L17.4503 14.6228ZM16 9V11.7564H18V9H16ZM12 5C14.2091 5 16 6.79086 16 9H18C18 5.68629 15.3137 3 12 3V5ZM18.9002 13.2452C18.2923 12.6054 18 12.1579 18 11.7564H16C16 13.05 16.8905 14.0336 17.4503 14.6228L18.9002 13.2452ZM4 16C4 17.1046 4.89543 18 6 18V16H4ZM18 18C19.1046 18 20 17.1046 20 16H18V18ZM6 11.7564C6 12.1579 5.70766 12.6054 5.09976 13.2452L6.54971 14.6228C7.10947 14.0336 8 13.05 8 11.7564H6Z" fill="#000000"/>
                    <path d="M13.7976 19.8767C13.6312 20.2179 13.3712 20.5046 13.048 20.7035C12.7247 20.9023 12.3516 21.0051 11.9721 20.9998C11.5926 20.9945 11.2224 20.8813 10.9049 20.6735C10.5873 20.4657 10.3354 20.1718 10.1786 19.8262" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3V4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p id="emp"></p>
                <p id="alarm_date"></p>
                <audio src=""></audio>
            </div>
            <footer>
                <button class="cancel_button">Dismiss</button>
            </footer>
        </div>
    `

    var modalsUI = `
        <div id="confirm_action" class="emuxn emuxn_modal tab_modal">
            <div class="body">
                <p id="emp">Please Confirm your operation</p>
            </div>
            <footer>
                <button id="cancel_op" style="color: red;">Cancel</button>
                <button id="confirm_op" style="color: green;">Confirm</button>
            </footer>
        </div>
        
        <div id="create_note" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Create New Memo.</h3>
            </header>
            <form action="" id="create_memo_form" class="emuxn_modal_form">
                <div class="fields">
                    <div class="emuxn_form_group">
                        <input type="text" id="memo_name" name="memo_name" placeholder="Memo Name" required>
                    </div>
                    <div class="emuxn_form_group split color" style="padding-inline: 0.5rem;">
                        <label for="memo_color">Memo Color</label>
                        <span style="background: red;" class="selected_color"></span>
                        <input type="color" id="memo_color" name="memo_color" class="selected_color_input" required style="opacity: 0;">

                        <div class="color_selector">
                            <header style="display: flex; gap: 1rem;align-items: center">
                                <h2 style="font-weight: 500">Select Label Color.</h2>
                                <span class="close_color_selector" style="padding: .5rem 1rem;">close</span>
                            </header>
                            <body>
                                <div class="color_list"></div>
                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <span>New Color: </span>
                                    <input type="color" class="new_color" required>
                                </div>
                            </body>
                        </div>
                    </div>
                    <div class="emuxn_form_group">
                        <textarea name="emuxn_memo" id="memo_description" rows="5" placeholder="Memo Description"></textarea>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="create_memo_activator" type="submit">Create</button>
            </footer>
        </div>
        
        <div id="group_modal" class="emuxn emuxn_modal tab_modal">
            <header>
                <h2 class="emuxn_modal_heading">Select Desired Values</h2>
            </header>
            <form action="" id="group_modal_form" class="emuxn_modal_form">
                <div class="fields">
                    <div class="emuxn_form_group split-fields" style="padding-inline: 0.5rem;">
                        <input type="checkbox" id="names" name="names" required>
                        <label for="names">Names</label>
                    </div>
                    <div class="emuxn_form_group split-fields" style="padding-inline: 0.5rem;">
                        <input type="checkbox" id="numbers" name="numbers" required>
                        <label for="numbers">Numbers</label>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="download_group_list_activator" type="submit">Download</button>
            </footer>
        </div>

        <div id="schedule_msg" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Schedule A Message.</h3>
            </header>
            <form action="" class="emuxn_modal_form">
                <div class="fields">
                    <div class="emuxn_form_group">
                        <input type="text" id="msg_name" name="msg_name" placeholder="Message Name" required>
                    </div>
                    <div class="emuxn_form_group">
                        <input type="text" id="selected_contact" name="selected_contact" list="contacts" placeholder="Select Contact" required>
                        <datalist id="contacts">
                        </datalist>
                    </div>
                    <div class="emuxn_form_group split color" style="padding-inline: 0.5rem;">
                        <label for="msg_color">Template Color</label>
                        
                        <span style="background: red;" class="selected_color"></span>
                        <input type="color" id="msg_color" name="msg_color" class="selected_color_input" required style="opacity: 0;">

                        <div class="color_selector">
                            <header style="display: flex; gap: 1rem;align-items: center">
                                <h2 style="font-weight: 500">Select Label Color.</h2>
                                <span class="close_color_selector" style="padding: .5rem 1rem;">close</span>
                            </header>
                            <body>
                                <div class="color_list"></div>
                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <span>New Color: </span>
                                    <input type="color" class="new_color" required>
                                </div>
                            </body>
                        </div>
                    </div>
                    <div class="emuxn_form_group split" style="border: 1px dashed lightgrey; padding: 1rem;">
                        <div class="emuxn_form_group split">
                            <label for="schedule_date">Select Date</label>
                            <input type="date" id="schedule_date" name="schedule_date" required>
                        </div>
                        <div class="emuxn_form_group split">
                            <label for="schedule_time">Select Time</label>
                            <input type="time" id="schedule_time" name="schedule_time" required>
                        </div>
                    </div>
                    <div class="emuxn_form_group">
                        <input type="text" id="saved_template" name="saved_template" list="saved_templates" placeholder="Select Temaplate" required>
                        <datalist id="saved_templates">
                        </datalist>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="schedule_msg_complete_activator" type="submit">Send</button>
            </footer>
        </div>

        <div id="template_modal" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Create Message Template.</h3>
            </header>
            <form action="" class="emuxn_modal_form" enctype="multipart/form-data">
                <div class="fields">
                    <div class="emuxn_form_group">
                        <input type="text" id="template_name" name="template_name" placeholder="Template Name" required>
                    </div>
                    <div class="emuxn_form_group split color" style="padding-inline: 0.5rem;">
                        <label for="template_color">Template Color</label>
                        <span style="background: red;" class="selected_color"></span>
                        <input type="color" id="template_color" name="template_color" class="selected_color_input" required style="opacity: 0;">

                        <div class="color_selector">
                            <header style="display: flex; gap: 1rem;align-items: center">
                                <h2 style="font-weight: 500">Select Label Color.</h2>
                                <span class="close_color_selector" style="padding: .5rem 1rem;">close</span>
                            </header>
                            <body>
                                <div class="color_list"></div>
                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <span>New Color: </span>
                                    <input type="color" class="new_color" required>
                                </div>
                            </body>
                        </div>
                    </div>
                    <div class="emuxn_form_group" id="image">
                        <input type="file" id="template_file" name="template_file">
                    </div>
                    <div class="emuxn_form_group">
                        <textarea name="template_emuxn_message" id="template_emuxn_message" rows="3" placeholder="Enter Message" required></textarea>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="create_template_activator" type="submit">Save</button>
            </footer>
        </div>

        <div id="create_alarm" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Create New Buzzer.</h3>
            </header>
            <form action="" class="emuxn_modal_form">
                <div class="fields">
                    <div class="emuxn_form_group">
                        <input type="text" id="alarm_name" name="alarm_name" placeholder="Buzzer Name" required>
                    </div>
                    <div class="emuxn_form_group toggle_area" style="border: 1px dashed lightgrey; padding: 1rem;">
                        <span>Whatsapp only</span>
                        <label class="toggle">
                            <input type="checkbox"id="display_area" >
                            <span class="slider"></span>
                        </label>
                        <span>All over browser</span>
                    </div>
                    <div class="emuxn_form_group split color" style="padding-inline: 0.5rem;">
                        <label for="alarm_color">Buzzer Color</label>
                        
                        <span style="background: red;" class="selected_color"></span>
                        <input type="color" id="alarm_color" name="alarm_color" class="selected_color_input" required style="opacity: 0;">

                        <div class="color_selector">
                            <header style="display: flex; gap: 1rem;align-items: center">
                                <h2 style="font-weight: 500">Select Label Color.</h2>
                                <span class="close_color_selector" style="padding: .5rem 1rem;">close</span>
                            </header>
                            <body>
                                <div class="color_list"></div>
                                <div style="display: flex; align-items: center;gap: 1rem;">
                                    <span>New Color: </span>
                                    <input type="color" class="new_color" required>
                                </div>
                            </body>
                        </div>
                    </div>
                    <div class="emuxn_form_group split" style="border: 1px dashed lightgrey; padding: 1rem;">
                        <div class="emuxn_form_group split">
                            <label for="alarm_date">Select Date</label>
                            <input type="date" id="alarm_date" name="alarm_date" required>
                        </div>
                        <div class="emuxn_form_group split">
                            <label for="alarm_time">Select Time</label>
                            <input type="time" id="alarm_time" name="alarm_time" required>
                        </div>
                    </div>
                    <div class="emuxn_form_group">
                        <input type="text" id="alarm_template" name="alarm_template" list="alarm_templates" placeholder="Select Temaplate" required>
                        <datalist id="alarm_templates">
                        </datalist>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="save_alarm_activator" type="submit">Save</button>
            </footer>
        </div>

        <div id="create_focus" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">New Site.</h3>
            </header>
            <form action="" class="emuxn_modal_form">
                <div class="fields">
                    <div class="emuxn_form_group">
                        <input type="text" id="site_url" name="site_url" placeholder="Website Url" required>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="save_focus_activator" type="submit">Save</button>
            </footer>
        </div>

        <div id="msg_to_new_user" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Send Message to New Number.</h3>
            </header>
            <form action="" class="emuxn_modal_form" id="sendMsgToNewNoform">
                <div class="fields">
                    <div class="emuxn_form_group number">
                        <div>
                            <input style="width: 100%;" type="text" id="country_code" name="country_code" list="tel-codes" placeholder="Code" required>
                            <datalist id="tel-codes">
                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                <option data-countryCode="CN" value="86">China (+86)</option>
                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                <option data-countryCode="FR" value="33">France (+33)</option>
                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                <option data-countryCode="IN" value="91">India (+91)</option>
                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                <option data-countryCode="US" value="1">USA (+1)</option>
                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                            </datalist>
                        </div>

                        <input type="text" id="new_phone_number" name="new_phone_number" placeholder="Phone Number" required>
                    </div>
                    <div class="emuxn_form_group">
                        <textarea name="new_emuxn_message" id="new_emuxn_message" rows="3" placeholder="Enter Message" required></textarea>
                    </div>
                    <a id="link" style="display=none"></a>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button id="new_number_send" class="text-link" type="submit">Send</button>
            </footer>
        </div>
        

        <div id="generate_link" class="emuxn emuxn_modal tab_modal">
            <header>
                <h3 class="emuxn_modal_heading">Generate Message Link.</h3>
            </header>
            <form action="" class="emuxn_modal_form" id="generateLinkform">
                <div class="fields">
                    <div class="emuxn_form_group number">
                        <div>
                            <input style="width: 100%;" type="text" id="gen_country_code" name="country_code" list="tel-codes" placeholder="Code" required>
                            <datalist id="tel-codes">
                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                <option data-countryCode="CN" value="86">China (+86)</option>
                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                <option data-countryCode="FR" value="33">France (+33)</option>
                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                <option data-countryCode="IN" value="91">India (+91)</option>
                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                <option data-countryCode="US" value="1">USA (+1)</option>
                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                            </datalist>
                        </div>

                        <input type="text" id="gen_phone_number" name="gen_phone_number" placeholder="Phone Number" required>
                    </div>
                    <div class="emuxn_form_group">
                        <textarea name="gen_emuxn_message" id="gen_emuxn_message" rows="3" placeholder="Enter Message" required></textarea>
                    </div>
                    <div class="emuxn_form_group" id="new_msg_link_area" style="display: none;">
                       <span style="font-size: .9rem;">Link:</span>
                       <div style="display: flex; gap: 1rem;align-items: flex-start;">
                        <span style="color: teal;font-size: .9rem;" id="new_msg_link"></span>
                        <span id="new_msg_link_copied" style="display: none; background: rgba(0, 0, 0, 0.7);padding: 0.25rem;color: white;border-radius: 5px;font-size: 12px;">Copied</span>
                       </div>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button id="generate_link_cta" class="text-link" type="submit">Generate</button>
            </footer>
        </div>

        <div id="ai_modal" class="emuxn_modal">
            <header class="split">
                <h3 class="emuxn_modal_heading">Best Match Replies.</h3>
                <div class="ai_tone">
                    <span class="cta">
                        <span class="icon">&#9885;</span>
                        <span class="brief">Tone</span>
                    </span>
                    <div class="tone_options">
                        <span id="selected_tone"></span>
                        <ul class="tone_options_list">
                            <li class="tone_option" data-tone="Tone matched to senders tone." data-toneval="Matching" id="Matching" data-default="true">
                                <span class="option_value">Matching</span>
                                <span class="option_des">Tone matched to senders tone.</span>
                            </li>
                            <li class="tone_option" data-tone="Use Business Language style." data-toneval="Business" id="Business">
                                <span class="option_value">Business</span>
                                <span class="option_des">Use Business Language style.</span>
                            </li>
                            <li class="tone_option" data-tone="Keep it light and casual." data-toneval="Casual" id="Casual">
                                <span class="option_value">Casual</span>
                                <span class="option_des">Keep it light and casual.</span>
                            </li>
                            <li class="tone_option" data-tone="Give positive boost." data-toneval="Empower" id="Empower">
                                <span class="option_value">Empower</span>
                                <span class="option_des">Give positive boost.</span>
                            </li>
                            <li class="tone_option" data-tone="Decline Politely." data-toneval="Not Interested" id="Not_Interested">
                                <span class="option_value">Not Interested</span>
                                <span class="option_des">Decline Politely.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="ai_replies">
                <p class="ai_reply preload"></p>
                <p class="ai_reply preload"></p>
                <p class="ai_reply preload"></p>
                <p class="ai_reply preload"></p>
                <p class="ai_reply preload"></p>
                <p class="ai_reply preload"></p>
            </div>
            <footer>
                <p>Click to copy reply</p>
                <button id="close_ai_modal">close</button>
            </footer>
        </div>
    `

    var memos = [];
    var templates = [];
    var tasks = [];
    var alarms = [];
    var blocked_sites = [];
    var backend_url = 'https://app.wa-my.com/';
    var makingApiCall = false;

    class AppVariables {
        constructor () {
            this.isLoggedIn = null;
            this.userSubscriptionFeatures = null;
            this.source_name = null;
            this.activeTabId = null;
            this.allowedSite = false;
        }
        
        setAuthStatus = (status) => {
            this.isLoggedIn = status;
        }
      
        getAuthStatus = () => this.isLoggedIn;
      
        setUserFeatures = (features) => {
            this.userSubscriptionFeatures = features;
        }
      
        getUserFeatures = () => this.userSubscriptionFeatures;
      
        setSourceName = (name) => {
            this.source_name = name;
        }
      
        getSourceName = () => this.source_name;
      
        setIsAllowedSite = (state) => {
            this.allowedSite = state;
        }
      
        getIsAllowedSite = () => this.allowedSite;
      
        setActiveTabId = (value) => {
            this.activeTabId = value;
        }
      
        getActiveTabId = () => this.activeTabId;
      
        getAll = () => {
          return {
            features: this.userSubscriptionFeatures,
            authStatus: this.authStatus
          }
        }
    }      
      
    // make requests
    const makeRequest = async (url, method, data={}, access_token=null) => {
        if (method === "POST") {
            console.log(data)
        }

        let fetchData = {
            method: method,
            mode: "cors",
            cache: "no-cache",
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            'Content-Type' : 'application/json',
            "headers" : {
                Authorization: "JWT " + localStorage.getItem("ext_access_token"),
            }
        };

        if (method == "POST" || method == "PUT") {
            fetchData["body"] = JSON.stringify(data);
            fetchData["headers"]["Content-Type"] = 'application/json'
        }

        const response = await fetch(`${backend_url}${url}`, fetchData);
        if (response.status >= 200 && response.status <= 399) {
            return await response.json();
        }
        else {
            throw new Error(response.status);
        }
    }

    let app = new AppVariables()

    // LISTENER

    chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
        if (obj.type === "RENDER_EXTUI") {
            chrome.storage.sync.get(['access_token', "refresh_token"], function completeRequest (items) {
                if (items) {
                    localStorage.setItem("ext_access_token", items.access_token)
                    localStorage.setItem("ext_refresh_token", items.refresh_token)
                }
            })
            if (document.querySelector("._1jJ70.two")) {
                if (document.querySelector(".emuxn-area")) {
                    removeUI();
                }
                else {
                    renderExtensionUI();
                }
            }
        }
        else if (obj.type === "SEND_MESSAGE_FROM_OUTSITE") {
            console.log("SEND_MESSAGE_FROM_OUTSITE")
            document.querySelector("#msg_to_new_user_activator").click();
            const sendMsgToNewNoform = document.querySelector("#sendMsgToNewNoform");
    
            sendMsgToNewNoform.querySelector("#new_phone_number").value = obj.number;
        }
        else if (obj.type === "SHOW_ALARM") {
            showAlarmModal(obj.alarm)
        }
        else if (obj.type === "BLOCKED_SITE") {
            showBlockedSiteModal(obj.site)
        }
        sendResponse()
    })

    function updateAlarmlist() {
        makingApiCall = true
        chrome.storage.sync.get(['access_token', "refresh_token"], function(items){
            fetch(`${backend_url}api/alarms/`,
            {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                'Content-Type' : 'application/json',
                "headers" : {
                    Authorization: "JWT " + items.access_token,
                }
            })
            .then(resp => resp.json())
            .then(data => {
                alarms = data;
                makingApiCall = false
            })
        })
    }


    function deleteAlarm(alarm) {
        chrome.storage.sync.get(['access_token', "refresh_token"], function(items){
            fetch(`${backend_url}api/alarms/${alarm.id}/delete/`,
            {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                'Content-Type' : 'application/json',
                "headers" : {
                    Authorization: "JWT " + items.access_token,
                }
            })
            .then(resp => resp.json())
            .then(data => {
                updateAlarmlist()
            })
        })
    }
    

    var stop_alarm = false;
    setInterval(() => {
        if (!(alarms.length > 0) && !window.location.href.includes("web.whatsapp") && !makingApiCall) {
            updateAlarmlist();
        } else {
            if (stop_alarm == true) return;
            if (alarms && alarms.length > 0) {
              alarms.forEach(alarm => {
                let date = new Date(`${alarm.alarm_date}:${alarm.alarm_time}`)
                if (new Date() >= date.getTime()) {
                  if (alarm.display_area == "All") {
                    showAlarmModal(alarm)
                  }
                  else if (window.location.href.includes("web.whatsapp")) {
                    showAlarmModal(alarm)
                  }
                }
              })
            }
        }
        
    }, 1000)
      


    function showAlarmModal(alarm) {
        let modal = document.createElement("section");
        modal.innerHTML = alarmModal;
        document.body.appendChild(modal)
        
        if (!document.querySelector("#alarm_modal").classList.contains("inview")) {
            document.querySelectorAll(".emuxn_modal").forEach(modal => {
                let alarm_modal = document.querySelector("#alarm_modal");
                if (modal.classList.contains("inview")) {
                    modal.classList.remove("inview")
                }
                document.body.classList.add("modal_open")
                alarm_modal.classList.add("inview")
                alarm_modal.querySelector("#emp").textContent = alarm.name;
                alarm_modal.querySelector("#alarm_date").textContent = `${alarm.alarm_date} ${alarm.alarm_time}`;
                

                alarm_modal
                    .querySelector(".cancel_button")
                    .addEventListener("click", () => {
                        alarm_modal.classList.remove("inview")
                        document.body.classList.remove("modal_open")

                        stop_alarm = true;
                        setTimeout(() => {
                            updateAlarmlist()
                            alarm_modal.querySelector(".cancel_button").disabled = true;
                        }, 5000)

                        deleteAlarm(alarm)
                        alarm_modal.querySelector(".cancel_button").disabled = true;
                    })
            })
        }
    }
    
    function showBlockedSiteModal(site) {
        let modal = document.createElement("section");
        modal.innerHTML = blockSiteModal;
        document.body.appendChild(modal)
        document.body.classList.add("modal_open")

        if (!document.querySelector("#site_blocked_modal").classList.contains("inview")) {
            let site_blocked_modal = document.querySelector("#site_blocked_modal");
            site_blocked_modal.classList.add("inview");

            site_blocked_modal.querySelector("#close_site_button")
            .addEventListener("click", () => {
                chrome.runtime.sendMessage({
                    type:  'CLOSE_TAB'
                });
            })
        }
    }

    function closeUI() {
        let emuxnArea = document.querySelector(".emuxn-area");
        document.body.removeChild(emuxnArea)
    }

    function removeUI() {
        if (document.querySelector(".emuxn_area")) {
            var chatArea = document.querySelector("div#app");
            var chatAreaParent = document.querySelector("body.web");
            
            // var hard_expire_time = document.querySelector("#hard_expire_time");
            const emuxn_area = document.querySelector(".emuxn_area");
            emuxn_area.querySelector(".chat_handler").childNodes.forEach(
                elem => {
                    chatAreaParent.appendChild(elem);
                }
            )
            chatAreaParent.removeChild(emuxn_area);
        }
    }

    function renderExtensionUI() {
        if (!document.querySelector(".emuxn_area")) {
            var chatArea = document.querySelector(".two._1jJ70");
            var chatAreaParent = document.querySelector("._1Fm4m._1h2dM.app-wrapper-web");
            
            const emuxn_area = document.createElement("div");
            emuxn_area.className = "emuxn_area";
            emuxn_area.classList.add("emuxn")
    
            // adding taskbar
            const emuxn_taskbar_area = document.createElement("div");
            emuxn_taskbar_area.className = "emuxn_taskbar_area";
            emuxn_taskbar_area.innerHTML = taskbarUI;
            emuxn_area.appendChild(emuxn_taskbar_area)
    
            const emuxn_lower_area = document.createElement("div");
            emuxn_lower_area.className = "emuxn_lower_area";
            emuxn_area.appendChild(emuxn_lower_area)

            let handler = document.createElement("div");
            emuxn_lower_area.appendChild(handler)
            handler.className = "chat_handler"

            // // addd chat area to ui

            // chatAreaParent.childNodes.forEach(node => {
            //     chatAreaParent.removeChild(node)
            //     // handler.appendChild(node);
            //     // node.style.display = "none";
            // })

            chatAreaParent.removeChild(chatArea);
            handler.appendChild(chatArea);

            // // update whatapp style
            chatArea.style.position = "relative"
            chatArea.style.minWidth = "100%";
            chatArea.style.height = "100%";
            chatArea.style.top = "0";
                   
            // adding sidebar
            const emuxn_sidebar_area = document.createElement("div");
            emuxn_sidebar_area.className = "emuxn_sidebar_area";
            emuxn_sidebar_area.innerHTML = sidebarUI;
            emuxn_lower_area.appendChild(emuxn_sidebar_area);

            // add modals
            const modalSpace = document.createElement("section")
            modalSpace.innerHTML = modalsUI;
            document.body.appendChild(modalSpace)
            
            const authModal = document.createElement("section")
            authModal.innerHTML = authUI;
            document.body.appendChild(authModal)

            chatAreaParent.appendChild(emuxn_area);
    
            UIRendering()
        }
        
    }

    function UIRendering () {
        isUserAuthenticated();
        var signupSocialExtension = document.querySelectorAll(".signup-social-emuxn");
        var signUpCta = document.querySelector("#signup-emuxn");

        signupSocialExtension.forEach(btn => btn.addEventListener("click", () => {
            chrome.runtime.sendMessage({
                type:  'LOGIN'
            });
        }))
        signUpCta.addEventListener("click", () => {
            chrome.runtime.sendMessage({
                type:  'REGISTER'
            });
        })
        
        function confirmOperation() {
            let modal = document.querySelector(".emuxn_modal#confirm_action");
            modal.classList.add("inview");
            document.body.classList.add("modal_open")

            return new Promise((resolve, reject) => {
                modal.querySelector("#cancel_op").addEventListener("click", () => {
                    modal.classList.remove("inview");
                    document.body.classList.remove("modal_open")
                    reject();
                })
                modal.querySelector("#confirm_op").addEventListener("click", () => {
                    modal.classList.remove("inview");
                    document.body.classList.remove("modal_open")
                    resolve();
                })

            })
        }

        async function checkAuth() {
            // attempt login using access key
            return makeRequest("api/user/details/", "GET")
            .then((response) => {
                return response;
            })
            .catch(error => {
                makeRequest("auth/token/refresh/", "POST", {"refresh": refresh_token})
                    .then(response => {
                        chrome.storage.sync.set({ "access_token": response.access}, function(){});
                        chrome.storage.sync.set({ "refresh_token": refresh_token}, function(){});
                        
                        localStorage.setItem("ext_access_token", response.access)
                        localStorage.setItem("ext_refresh_token", refresh_token)
                                    
                        // rerun check to fetch features;
                        checkAuth();
                    })
            })
        }
    
        function isUserAuthenticated () {
            chrome.storage.sync.get(['access_token', "refresh_token"], function(items){
                if (!items.access_token && !items.refresh_token) {
                    renderLoginUI();
                    return;
                }
                // tokens found
                // check auth
                checkAuth()
                .then(response => {
                        app.setAuthStatus(true);
                        app.setUserFeatures(response); // store fetched data
                        userFeatures = response;
                        renderUserData();
                })
                .catch(error => {
                        chrome.storage.sync.remove(["access_token","refresh_token"],function() {})
                        renderLoginUI()
                    }
                )
            })
        }
    
        function renderLoginUI() {
            let modalToShow = document.querySelector(`#auth_modal`);
            if (modalToShow.classList.contains("inview")) {
                modalToShow.classList.remove("inview")
            } else {
                document.querySelectorAll(".emuxn_modal").forEach(modal => {
                    if (modal.classList.contains("inview")) {
                        modal.classList.remove("inview")
                    }
                })
                modalToShow.classList.add("inview")
                document.body.classList.add("modal_open")
            }
            
            document.querySelector("#close_auth_modal").addEventListener("click", () => {
                modalToShow.classList.remove("inview");
                document.body.classList.remove("modal_open")
            })
    
            document.querySelector("#auth_form").addEventListener('submit', async (e) => {
                e.preventDefault();
                let signinbtn = document.querySelector("#auth_form #signin");
                signinbtn.disabled = true;
                signinbtn.value = "Loading";
    
                const username = document.querySelector("#extAuth-username");
                const password = document.querySelector("#extAuth-password");
                var formErrMsg = document.querySelector("#popup-error-msg");
    
                if (username.value === undefined || username.value === "" || password.value === undefined || password.value === "") {
                    formErrMsg.textContent = "Enter your credentials to Continue";
                    formErrMsg.style.display = "block";
                    setTimeout(() => {
                        formErrMsg.style.display = "none";
                        formErrMsg.textContent = "";
                    }, 5000);
                    return;
                }
    
                makeRequest("auth/token/", "POST", {
                    "email": username.value,
                    "password": password.value
                })
                .then(response => {
                    modalToShow.classList.remove("inview");
                    document.body.classList.remove("modal_open")
                    chrome.storage.sync.set({ "access_token": response.access}, function(){});
                    chrome.storage.sync.set({ "refresh_token": response.refresh}, function(){});
                    localStorage.setItem("ext_access_token", response.access)
                    localStorage.setItem("ext_refresh_token", response.refresh)
                    isUserAuthenticated();
                    signinbtn.disabled = false;
                    signinbtn.value = "Sign In";
                    fetch_all_data()
                    
                    updateAlarmlist()
                })
                .catch(error => {
                    formErrMsg.textContent = "Invalid Data";
                    formErrMsg.style.display = "block";
                    setTimeout(() => {
                        formErrMsg.style.display = "none";
                        formErrMsg.textContent = "";
                    }, 5000);
                    
                    signinbtn.disabled = false;
                    signinbtn.value = "Sign In";
                    return;
                })
            });
    
        }

        function renderUserData(){
            document.querySelector("#auth_activator").style.display = "none";
            document.querySelector(".user_detail").style.display = "flex";
            document.querySelector("#username").textContent = `Signed in as ${app.getUserFeatures().user}`
            document.querySelector("#package").textContent = `${app.getUserFeatures().subscription}`
        }

        function fetch_all_data() {
            // memos
            makeRequest(`api/memos/`, "GET")
            .then((response) => {
                memos = response
            })

            
            // templates
            makeRequest(`api/templates/`, "GET")
            .then((response) => {
                templates = response
            })
        
            
            // tasks
            makeRequest(`api/tasks/`, "GET")
            .then((response) => {
                tasks = response
            })

            makeRequest(`api/alarms/`, "GET")
            .then((response) => {
                alarms = response
            })

            makeRequest(`api/blockedsite/`, "GET")
            .then((response) => {
                blocked_sites = response
            })
        }

        function uIManagement() {

            setInterval(() => watchTask(), 1000);

            document.querySelector("#sidebar_toggle").addEventListener("click", () => {
                document.querySelector(".emuxn_area").classList.toggle("show_sidebar")
            })

            const auth_activator = document.querySelector("#auth_activator");
            auth_activator.addEventListener("click", () => renderLoginUI())

            // tabs
            const msg_to_new_user_activator = document.querySelector("#msg_to_new_user_activator");
            msg_to_new_user_activator.addEventListener("click", () => openExtensionModal(msg_to_new_user_activator))
            
            const generate_link_activator = document.querySelector("#generate_link_activator");
            generate_link_activator.addEventListener("click", () => openExtensionModal(generate_link_activator))
            
            const create_note_activator = document.querySelector("#create_note_activator");
            create_note_activator.addEventListener("click", () => openExtensionModal(create_note_activator))
        
            const schedule_msg_activator = document.querySelector("#schedule_msg_activator");
            schedule_msg_activator.addEventListener("click", () => openExtensionModal(schedule_msg_activator))
        
            const template_modal_activator = document.querySelector("#template_modal_activator");
            template_modal_activator.addEventListener("click", () => openExtensionModal(template_modal_activator))
        

            // const schedule_msg_sidebar_activator = document.querySelector("#schedule_msg_sidebar_activator");
            // schedule_msg_sidebar_activator.addEventListener("click", () => showSidebar(schedule_msg_sidebar_activator))
        
            const memo_sidebar_activator = document.querySelector("#memo_sidebar_activator");
            memo_sidebar_activator.addEventListener("click", () => showSidebar(memo_sidebar_activator))

            const alarm_sidebar_activator = document.querySelector("#alarm_sidebar_activator");
            alarm_sidebar_activator.addEventListener("click", () => showSidebar(alarm_sidebar_activator))
            
            const focus_sidebar_activator = document.querySelector("#focus_sidebar_activator");
            focus_sidebar_activator.addEventListener("click", () => showSidebar(focus_sidebar_activator))

            
            const create_alarm_activator = document.querySelector("#create_alarm_activator");
            create_alarm_activator.addEventListener("click", () => openExtensionModal(create_alarm_activator))

            
            const create_focus_activator = document.querySelector("#create_focus_activator");
            create_focus_activator.addEventListener("click", () => openExtensionModal(create_focus_activator))


            let focus_toggle = document.querySelector("#focus_toggle");
            focus_toggle.addEventListener("change", () => {
                if (focus_toggle.checked) {
                    chrome.storage.sync.set({ "focus_mode_on": true}, function(){});
                }
                else {
                    chrome.storage.sync.set({ "focus_mode_on": false}, function(){});
                }
            })
            
            // schedule_msg_sidebar_activator.click()
            document.querySelector(".emuxn_area").classList.add("show_sidebar")

            // chrome.alarms.onAlarm.addListener((alarm) => {
            //     let active_task = tasks.filter(task => task == alarm.name)
            //     console.log(active_task[0])
            //   });

            var color_presets = ["#64c3ff", "#ffd527", "#ff9383", "#e2b0f5", "#53cdb5", "#97d57a", "#f9a811", "#e6e6e6"]
            document.querySelectorAll(".selected_color").forEach(
                elem => elem.addEventListener("click", () => {
                    var color_selector = elem.closest(".emuxn_form_group").querySelector(".color_selector")
                    color_selector.classList.add("inview");
                    color_selector.querySelector(".close_color_selector").addEventListener("click", (e) => {
                        e.preventDefault()
                        color_selector.classList.remove("inview")
                    })

                    document.querySelectorAll(".color_list").forEach(color_list => {
                        color_list.innerHTML = "";
                        color_presets.forEach(val => {
                            if (document.querySelectorAll(".color_list").length < color_presets.length) {
                                let span = document.createElement("span");
                                span.style.backgroundColor = val;
                                span.dataset.value = val;
                                color_list.appendChild(span);
                                span.addEventListener("click", () => {
                                    color_selector.querySelector(".new_color").value = val;

                                    document.querySelector(".emuxn_modal.inview").querySelector(".selected_color").style.backgroundColor = val;
                                    document.querySelector(".emuxn_modal.inview").querySelector(".selected_color_input").value = val;
                                    
                                    // color_list.innerHTML = "";

                                    // color_selector.classList.remove("inview")
                                })
                            }
                        })
                    })


                    color_selector.querySelector(".new_color").addEventListener("input", () => {
                        document.querySelector(".emuxn_modal.inview").querySelector(".selected_color").style.backgroundColor = color_selector.querySelector(".new_color").value;
                        document.querySelector(".emuxn_modal.inview").querySelector(".selected_color_input").value = color_selector.querySelector(".new_color").value
                        // color_selector.classList.remove("inview")
                    })
                })
            )


            // download group list 
            
            var csvContent;
            var csvContentName;
            document.querySelector("#download_group_list_activator").addEventListener("click", () => {
                const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
                const url = URL.createObjectURL(blob);
                
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", `${csvContentName}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
            })
        
            fetch_all_data();

        
            function openExtensionModal(activator) {
                if (!app.getAuthStatus()) {
                    isUserAuthenticated()
                    return;
                }

                let modalId = activator.dataset.modalId;
                let modalToShow = document.querySelector(`#${modalId}`);
                if (modalToShow.classList.contains("inview")) {
                    modalToShow.classList.remove("inview")
                } else {
                    // close all open modals
                    document.querySelectorAll(".emuxn_modal").forEach(modal => {
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

                                    modal.querySelector("form").reset()

                                    cancel_cta.closest(".emuxn_modal").classList.remove("inview");
                                    document.body.classList.remove("modal_open")
                                })
                            }
                        )
                    })
                    modalToShow.classList.add("inview")
                    document.body.classList.add("modal_open")
                    if (modalToShow.id === "schedule_msg") {

                        makeRequest(`api/templates/`, "GET")
                        .then((response) => {
                            templates = response
                            
                            let template_options = document.querySelector("#saved_templates");
                            templates && templates.forEach(template => {
                                let option = document.createElement("option");
                                option.value = template.name
                                option.textContent = template.name
                                option.id = template.id
                                template_options.appendChild(option);
                            })
    
                            let contacts = document.querySelector("#contacts");
                            
                            const myDiv = document.querySelector("#pane-side")
                            myDiv.scrollTop = myDiv.scrollHeight
    
                            let chatlist = document.querySelectorAll("#pane-side span[title].ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr:not(.Hy9nV)")
                            chatlist.forEach(chat => {
                                let option = document.createElement("option");
                                option.value = chat.title
                                option.textContent = chat.title
                                contacts.appendChild(option);
                            })
    
                            myDiv.scrollTop = 0    
    
                            document.querySelector("#task_list_activator").click()

                        })
                    }
                }
            }


            // document.querySelector("#new_emuxn_message").addEventListener("keyup", () => {
            //     document.querySelector("#new_msg_link_area").style.display = "flex";
            //     document.querySelector("#new_msg_link_area").style.gap = "2rem";
            //     new_msg_link = document.querySelector("#new_msg_link");

            //     let countryCode = sendMsgToNewNoform.querySelector("#country_code").value;
            //     let phoneNumber = sendMsgToNewNoform.querySelector("#new_phone_number").value;
            //     let message = sendMsgToNewNoform.querySelector("#new_emuxn_message").value;
        
            //     let fullNumber = `+${countryCode}${phoneNumber[0] == '0' ? phoneNumber.slice(1) : phoneNumber}`
            //     let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`;
            //     new_msg_link.textContent = requestUrl;
            //     new_msg_link.href = requestUrl;

            //     new_msg_link.addEventListener("click", () => {
            //         document.querySelector("#msg_to_new_user").querySelector(".cancel_button").click();
            //     })
            // })
        
            // function closeModal(modal) {
                
            // }
        
        
            // sending messages
            const new_number_send = document.querySelector("#new_number_send");
            new_number_send.addEventListener("click", sendMsgToNewNo)

            const generate_link_cta =  document.querySelector("#generate_link_cta");
            generate_link_cta.addEventListener("click", generateMsgLink)
        
            function sendMsgToNewNo() {
                const sendMsgToNewNoform = document.querySelector("#sendMsgToNewNoform");
        
                let countryCode = sendMsgToNewNoform.querySelector("#country_code").value;
                let phoneNumber = sendMsgToNewNoform.querySelector("#new_phone_number").value;
                let message = sendMsgToNewNoform.querySelector("#new_emuxn_message").value;

                if (!countryCode.includes("+"))
                    countryCode = `+${countryCode}`;
        
                if (countryCode && phoneNumber && message) {
                    let fullNumber = `${countryCode}${phoneNumber[0] == '0' ? phoneNumber.slice(1) : phoneNumber}`
                    let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`;
                    // window.location.href = requestUrl;
                    document.querySelector("#msg_to_new_user #link").href = requestUrl;
                    document.querySelector("#msg_to_new_user #link").click()
                    document.querySelector("#msg_to_new_user").querySelector(".cancel_button").click();
                }
                
            }

            function generateMsgLink() {
                const generateLinkform = document.querySelector("#generateLinkform");
                
                document.querySelector("#new_msg_link_area").style.display = "flex";
                document.querySelector("#new_msg_link_area").style.gap = "2rem";
                new_msg_link = document.querySelector("#new_msg_link");

                let countryCode = generateLinkform.querySelector("#gen_country_code").value;
                let phoneNumber = generateLinkform.querySelector("#gen_phone_number").value;
                let message = generateLinkform.querySelector("#gen_emuxn_message").value;

                if (!countryCode.includes("+"))
                    countryCode = `+${countryCode}`;
        
                let fullNumber = `${countryCode}${phoneNumber[0] == '0' ? phoneNumber.slice(1) : phoneNumber}`
                let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`;
                new_msg_link.textContent = requestUrl;

                document.querySelector("#generate_link").querySelector(".cancel_button").addEventListener("click", () => {
                    new_msg_link.textContent = "";
                    document.querySelector("#new_msg_link_area").style.display = "none";
                })
                new_msg_link.addEventListener("click", () => {
                    document.querySelector("#new_msg_link_copied").style.display = "grid"
                    navigator.clipboard.writeText(requestUrl)
                    setTimeout(() => {
                        document.querySelector("#new_msg_link_copied").style.display = "none"
                    }, 3000)
                })
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

                        

                        delete _memo["inEdit"];

                        makeRequest(`api/memos/${_memo.id}/update/`, "PUT", _memo)
                        .then((response) => {
                            return;
                        })
                        .catch(err => {
                        })
                    }
                })
        
                if (!editedFound) {
                    var memo = {
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
                if (newMemo) {
                    makeRequest(`api/memos/create/`, "POST", newMemo)
                    .then((response) => {
                        newMemo = response
                        emuxn_sidebar_notes.prepend(createNoteElem(newMemo));
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }

                else {
                
                    makeRequest(`api/memos/`, "GET")
                    .then((response) => {
                        memos = response
                        emuxn_sidebar_notes.querySelectorAll(".emuxn_sidebar_note").forEach(
                            note => {
                                note.parentElement.removeChild(note)
                            }
                        )
                        memos && memos.forEach(memo => {
                            emuxn_sidebar_notes.prepend(createNoteElem(memo));
                        })
                    })
                    
                }

                const emuxn_sidebar_notes = document.querySelector(".emuxn_sidebar_notes .list");
        
                function createNoteElem(memo) {
                    const memoElem = document.createElement("div");
                    memoElem.className = 'emuxn_sidebar_note';
                    memoElem.dataset.memoId = memo.id;
                    memoElem.innerHTML = `
                        <span></span>
                        <div class="content">
                            <p class="note_content">${memo.name}</p>
                            <p class="note_date">${memo.date_created}</p>                        
                            <div class="note_actions">
                                <button class="edit_note">
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 21H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.3097 5.30981L18.7274 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="delete_note">
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="#000000"/>
                                    <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="#000000"/>
                                    <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="#000000"/>
                                    <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="#000000"/>
                                    <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="#000000"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `;
                    memoElem.querySelector("span").style.backgroundColor = memo.color;
                    memoElem.querySelector(".content").addEventListener("click", (e) => {
                        if (e.target.closest("note_actions") || e.target.classList.contains("edit_note") || e.target.classList.contains("delete_note")){
                            return;
                        }
                        editMemo(memo)
                    })
                    memoElem.querySelector(".delete_note").addEventListener("click", () => {
                        confirmOperation()
                        .then(() => {
                            makeRequest(`api/memos/${memo.id}/delete/`, "DELETE")
                            .then((response) => {
                                renderMemos(null);
                            })
                            .catch(err => {
                                renderMemos(null);
                            })
                        })
                        .catch(() => {
                            // console.log("rejected")
                        })

                    })
                    memoElem.querySelector(".edit_note").addEventListener("click", () => editMemo(memo))
                    // memoElem.addEventListener("click", () => editMemo(memo))
                    return memoElem;
                }

                function editMemo(memo) {
                    create_note_activator.click();
                    let modal = document.querySelector(".emuxn_modal#create_note");
                    modal.querySelector("button[type='submit']").textContent = "Edit";
                    if (modal.classList.contains("inview")) {
                        const create_memo_form = document.querySelector("#create_memo_form");
                        create_memo_form.querySelector("#memo_name").value = memo.name;
                        create_memo_form.querySelector("#memo_description").value = memo.description;
                        create_memo_form.querySelector("#memo_color").value = memo.color;
                        create_memo_form.querySelector(".selected_color").style.backgroundColor = memo.color;
        
                        memos.map(_memo => {
                            if (_memo.id === memo.id) {
                                _memo["inEdit"] = true;
                            }
                        })
                        modal.querySelector("button[type='submit']").addEventListener("click", () => {
                            modal.querySelector("button[type='submit']").textContent = "Create";
                        })
                    }
                }
            }
        
            function showSidebar(activator) {
                if (!app.getAuthStatus()) {
                    isUserAuthenticated()
                    return;
                }
                
                document.querySelector(".emuxn_area").classList.add("show_sidebar")

                if (activator.id.includes("memo")) {
                    renderMemos()
                }
                else if (activator.id.includes("schedule_msg_sidebar_activator")) {
                    renderTemplates()
                    renderTasks()
                } else if (activator.id.includes("focus")) {
                    renderBlockedSites();
                    chrome.storage.sync.get(["focus_mode_on"], function(items){
                        if (items.focus_mode_on == false) {
                            focus_toggle.checked = false;
                        } else {
                            focus_toggle.checked = true;
                        }
                    })
                } else if (activator.id.includes("alarm")) {
                    renderAlarms()
                }
                
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


            const save_alarm_activator = document.querySelector("#save_alarm_activator");
            const save_focus_activator = document.querySelector("#save_focus_activator");

            save_alarm_activator.addEventListener("click", (e) => {

                let date = new Date();
                const create_alarm_form = document.querySelector("#create_alarm form");
                let alarm_name = create_alarm_form.querySelector("#alarm_name").value;
                let alarm_color = create_alarm_form.querySelector("#alarm_color").value;
                let alarm_date = create_alarm_form.querySelector("#alarm_date").value;
                let alarm_time = create_alarm_form.querySelector("#alarm_time").value;
                let alarm_template = create_alarm_form.querySelector("#alarm_template").value;

                if (!alarm_date || !alarm_time) {
                    create_alarm_form.querySelector("#alarm_date").style.border = "1px solid red";
                    create_alarm_form.querySelector("#alarm_time").style.border = "1px solid red";

                    setTimeout(() => {
                        create_alarm_form.querySelector("#alarm_date").style.border = "1px solid hsl(0, 0%, 90%)";
                        create_alarm_form.querySelector("#alarm_time").style.border = "1px solid hsl(0, 0%, 90%)";
                    }, 5000)
                    return;
                }

                var display_area;
                if (!create_alarm_form.querySelector("#display_area").checked){
                    display_area = "Whatsapp";
                } else {
                    display_area = "All";
                }

                if (!alarm_name & !alarm_date & !alarm_time) return;
        
                var editedFound = false;
                alarms && alarms.map(_alarm => {
                    if (_alarm.inEdit) {
                        editedFound = true;
                        _alarm["inEdit"] = false;
                        _alarm["name"] = alarm_name ;
                        _alarm["display_area"] = display_area ;
                        _alarm["color"] = alarm_color;
                        _alarm["alarm_date"] = alarm_date ;
                        _alarm["alarm_time"] = alarm_time ;
                        _alarm["template"] = alarm_template ;
                        _alarm["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

                        delete _alarm["inEdit"];


                        makeRequest(`api/alarms/${_alarm.id}/update/`, "PUT", _alarm)
                        .then((response) => {
                            // save template to backend, only render if post was successful
                            renderAlarms();
            
                            // close modal
                            create_alarm_form.reset()
                            create_alarm_form.parentElement.querySelector(".cancel_button").click();
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    }
                })

                        
                if (!editedFound) {
                    

                    var alarm = {
                        name : alarm_name,
                        display_area : display_area,
                        color : alarm_color,
                        alarm_date : alarm_date,
                        alarm_time : alarm_time,
                        template : alarm_template,
                        date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    }
                    
                    makeRequest(`api/alarms/create/`, "POST", alarm)
                    .then((response) => {
                        // save alarm to backend, only render if post was successful
                        renderAlarms(alarm);
                        
                        updateAlarmlist()
        
                        // close modal
                        create_alarm_form.reset()
                        create_alarm_form.parentElement.querySelector(".cancel_button").click();
                    })
                    .catch(err => {
                    })

                }

            })

            function renderAlarms(alarm) {
                const alarm_list = document.querySelector("#alarm .emuxn_sidebar_notes .list");
        
                if (alarm) {
                    alarm_list.prepend(createAlarmElem(alarm));
                }
                else {
                    makeRequest(`api/alarms/`, "GET")
                    .then((response) => {
                        alarms = response

                        alarm_list.querySelectorAll(".emuxn_sidebar_note").forEach(
                            note => {
                                note.parentElement.removeChild(note)
                            }
                        )
                        alarms && alarms.forEach(alarm => {
                            alarm_list.prepend(createAlarmElem(alarm));
                        })
                    })
                }
            
                function createAlarmElem(alarm) {
                    const elem = document.createElement("div");
                    elem.className = 'emuxn_sidebar_note';
                    elem.dataset.siteId = alarm.id;
                    elem.innerHTML = `
                        <span style="background-color: ${alarm.color}"></span>
                        <div class="content">
                            <p class="note_content">${alarm.name}</p>
                            <p class="note_date">${alarm.alarm_time} ${alarm.alarm_date}</p>                        
                            <div class="note_actions">
                            <button class="edit_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 21H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.3097 5.30981L18.7274 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="delete_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="#000000"/>
                                <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="#000000"/>
                                <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="#000000"/>
                                <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="#000000"/>
                                <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="#000000"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    `;
                    elem.querySelector(".delete_note").addEventListener("click", () => {
                        confirmOperation()
                        .then(() => {
                            makeRequest(`api/alarms/${alarm.id}/delete/`, "DELETE")
                            .then((response) => {
                                renderAlarms(null);
                            })
                            .catch(err => {
                                renderAlarms(null);
                            })
                        })
                        .catch(() => {
                            // console.log("rejected")
                        })

                    })
                    elem.querySelector(".edit_note").addEventListener("click", () => editAlarm(alarm))
                    // elem.addEventListener("click", () => editMemo(memo))
                    return elem;
                }

                function editAlarm(alarm) {
                    create_alarm_activator.click();
                    let modal = document.querySelector(".emuxn_modal#create_alarm");
                    modal.querySelector("button[type='submit']").textContent = "Edit";
                    if (modal.classList.contains("inview")) {
                        const create_alarm_form = modal.querySelector("form");
                        create_alarm_form.querySelector("#alarm_name").value = alarm.name;
                        create_alarm_form.querySelector("#display_area").value = alarm.display_area;
                        create_alarm_form.querySelector(".selected_color").style.backgroundColor = alarm.color;
                        create_alarm_form.querySelector("#alarm_date").value = alarm.alarm_date;
                        create_alarm_form.querySelector("#alarm_time").value = alarm.alarm_time;
                        create_alarm_form.querySelector("#alarm_template").value = alarm_template;
                        
                        
                        alarms.map(_alarm => {
                            if (_alarm.id === alarm.id) {
                                _alarm["inEdit"] = true;
                            }
                        })
                        modal.querySelector("button[type='submit']").addEventListener("click", () => {
                            modal.querySelector("button[type='submit']").textContent = "Create";
                        })
                    }
                }
            }            

            save_focus_activator.addEventListener("click", (e) => {
                let date = new Date();
                const create_focus_form = document.querySelector("#create_focus form");
                let site_url = create_focus_form.querySelector("#site_url").value;

                if (!site_url) return;
        
                var editedFound = false;
                blocked_sites && blocked_sites.map(site => {
                    if (site.inEdit) {
                        editedFound = true;
        
                        site["inEdit"] = false;
                        site["url"] = site_url;
                        site["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

                        delete site["inEdit"];

                        makeRequest(`api/blockedsite/${site.id}/update/`, "PUT", site)
                        .then((response) => {
                            // save template to backend, only render if post was successful
                            renderBlockedSites();
            
                            // close modal
                            create_focus_form.reset()
                            create_focus_form.parentElement.querySelector(".cancel_button").click();
                        })
                        .catch(err => {
                        })
                    }
                })

                        
                if (!editedFound) {

                    var site = {
                        url: site_url,
                        date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    }
                    
                    makeRequest(`api/blockedsite/create/`, "POST", site)
                    .then((response) => {
                        // save site to backend, only render if post was successful
                            renderBlockedSites(site);
        
                        // close modal
                            create_focus_form.reset()
                            create_focus_form.parentElement.querySelector(".cancel_button").click();
                    })
                    .catch(err => {
                    })

                }

            })


            function renderBlockedSites(site) {
                const site_list = document.querySelector("#focus .emuxn_sidebar_notes .list");
        
                if (site) {
                    site_list.prepend(createFocusElem(site));
                }
                else {
                    makeRequest(`api/blockedsite/`, "GET")
                    .then((response) => {
                        blocked_sites = response

                        site_list.querySelectorAll(".emuxn_sidebar_note").forEach(
                            note => {
                                note.parentElement.removeChild(note)
                            }
                        )
                        blocked_sites && blocked_sites.forEach(site => {
                            site_list.prepend(createFocusElem(site));
                        })
                    })
                }
            
                function createFocusElem(site) {
                    const elem = document.createElement("div");
                    elem.className = 'emuxn_sidebar_note';
                    elem.dataset.siteId = site.id;
                    elem.innerHTML = `
                        <span></span>
                        <div class="content">
                            <p class="note_content">${site.url}</p>
                            <p class="note_date">${site.date_created}</p>                        
                            <div class="note_actions">
                            <button class="edit_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 21H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.3097 5.30981L18.7274 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="delete_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="#000000"/>
                                <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="#000000"/>
                                <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="#000000"/>
                                <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="#000000"/>
                                <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="#000000"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    `;
                    elem.querySelector(".delete_note").addEventListener("click", () => {
                        confirmOperation()
                        .then(() => {
                            makeRequest(`api/blockedsite/${site.id}/delete/`, "DELETE")
                            .then((response) => {
                                renderBlockedSites(null);
                            })
                            .catch(err => {
                                renderBlockedSites(null);
                            })
                        })
                        .catch(() => {
                            // console.log("rejected")
                        })

                    })
                    elem.querySelector(".edit_note").addEventListener("click", () => editSite(site))
                    // elem.addEventListener("click", () => editMemo(memo))
                    return elem;
                }

                function editSite(site) {
                    create_focus_activator.click();
                    let modal = document.querySelector(".emuxn_modal#create_focus");
                    modal.querySelector("button[type='submit']").textContent = "Edit";
                    if (modal.classList.contains("inview")) {
                        const create_site_form = modal.querySelector("form");
                        create_site_form.querySelector("#site_url").value = site.url;;
                        
                        blocked_sites.map(_site => {
                            if (_site.id === site.id) {
                                _site["inEdit"] = true;
                            }
                        })
                        modal.querySelector("button[type='submit']").addEventListener("click", () => {
                            modal.querySelector("button[type='submit']").textContent = "Create";
                        })
                    }
                }
    
            }


        
            const create_template_activator = document.querySelector("#create_template_activator");
            
            function getfileUrl(template, img) {
                const fileReader = new FileReader();

                fileReader.onload = () => {
                    const url = fileReader.result;
                    let data = {
                        id: template["id"],
                        file_name: url,
                    }

                    if (!localStorage.getItem("emuxnTemplatesImages")) {
                        localStorage.setItem('emuxnTemplatesImages', JSON.stringify([]));
                    }
                    
                    let emuxnTemplatesImages = [...JSON.parse(localStorage.getItem("emuxnTemplatesImages")), data];
                    
                    localStorage.setItem('emuxnTemplatesImages', JSON.stringify(emuxnTemplatesImages));
                };
        
                return fileReader.readAsDataURL(img.files[0]);
            }

            create_template_activator.addEventListener("click", async () => {
                let date = new Date();
                const create_template_form = document.querySelector("#template_modal form");
                let template_name = create_template_form.querySelector("#template_name").value;
                let template_color = create_template_form.querySelector("#template_color").value;
                let template_emuxn_message = create_template_form.querySelector("#template_emuxn_message").value;
                let template_file = create_template_form.querySelector("#template_file");
        
                if (!template_name && !template_emuxn_message) return;
        
                var editedFound = false;
                templates && templates.map(_template => {
                    if (_template.inEdit) {
                        editedFound = true;
        
                        _template["inEdit"] = false;
                        _template["name"] = template_name;
                        _template["color"] = template_color;
                        _template["message"] = template_emuxn_message;
                        _template["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

                        if (template_file.files.length > 0) {
                            getfileUrl(_template, template_file)
                        }

                        delete _template["inEdit"];

                        makeRequest(`api/templates/${_template.id}/update/`, "PUT", _template)
                        .then((response) => {
                            // save template to backend, only render if post was successful
                            renderTemplates();
            
                            // close modal
                            create_template_form.reset()
                            create_template_form.parentElement.querySelector(".cancel_button").click();
                        })
                        .catch(err => {
                        })
                    }
                })
        
                if (!editedFound) {

                    var template = {
                        name: template_name,
                        color: template_color,
                        message: template_emuxn_message,
                        date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    }
                    
                    makeRequest(`api/templates/create/`, "POST", template)
                    .then((response) => {
                        if (template_file.files.length > 0) {
                            getfileUrl(response, template_file)
                        }
                        // save template to backend, only render if post was successful
                        renderTemplates(template);
        
                        // close modal
                        create_template_form.reset()
                        create_template_form.parentElement.querySelector(".cancel_button").click();
                    })
                    .catch(err => {
                    })

                }
            })
        
            function renderTemplates(newTemplate) {
                const template_list = document.querySelector(".emuxn_sidebar_notes#templates .list");
        
                if (newTemplate) {
                    template_list.prepend(createTemplateElem(newTemplate));
                }
                else {
                    makeRequest(`api/templates/`, "GET")
                    .then((response) => {
                        templates = response

                        template_list.querySelectorAll(".emuxn_sidebar_note").forEach(
                            note => {
                                note.parentElement.removeChild(note)
                            }
                        )
                        templates && templates.forEach(template => {
                            template_list.prepend(createTemplateElem(template));
                        })
                    })
                }
                
        
                function createTemplateElem(template) {
                    const elem = document.createElement("div");
                    elem.className = 'emuxn_sidebar_note';
                    elem.dataset.templateId = template.id;
                    elem.innerHTML = `
                        <span style="background-color: ${template.color}"></span>
                        <div class="content">
                            <p class="note_content">${template.name}</p>
                            <p class="note_date">${template.date_created}</p>                        
                            <div class="note_actions">
                            <button class="edit_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 21H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.3097 5.30981L18.7274 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="delete_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="#000000"/>
                                <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="#000000"/>
                                <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="#000000"/>
                                <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="#000000"/>
                                <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="#000000"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    `;
                    elem.querySelector("span").style.backgroundColor = template.color;
                    elem.querySelector(".delete_note").addEventListener("click", () => {
                        confirmOperation()
                        .then(() => {
                            makeRequest(`api/templates/${template.id}/delete/`, "DELETE")
                            .then((response) => {
                                renderTemplates(null);
                            })
                            .catch(err => {
                                renderTemplates(null);
                            })
                        })
                        .catch(() => {
                            // console.log("rejected")
                        })

                    })
                    elem.querySelector(".edit_note").addEventListener("click", () => editTemplate(template))
                    // elem.addEventListener("click", () => editMemo(memo))
                    return elem;
                }
            }
        
            function editTemplate(template) {
                template_modal_activator.click();
                let modal = document.querySelector(".emuxn_modal#template_modal");
                modal.querySelector("button[type='submit']").textContent = "Edit";
                if (modal.classList.contains("inview")) {
                    const create_template_form = modal.querySelector("form");
                    create_template_form.querySelector("#template_name").value = template.name;
                    create_template_form.querySelector("#template_color").value = template.color;
                    create_template_form.querySelector("#template_emuxn_message").value = template.message;
                    create_template_form.querySelector(".selected_color").style.backgroundColor = template.color;
        
                    // handle file edit 
                    // create_template_form.querySelector("#template_file").files = template.file;
                    
                    templates.map(_template => {
                        if (_template.id === template.id) {
                            _template["inEdit"] = true;
                        }
                    })
                    modal.querySelector("button[type='submit']").addEventListener("click", () => {
                        modal.querySelector("button[type='submit']").textContent = "Create";
                    })
                }
            }
        
            document.querySelector("#template_list_activator").addEventListener("click", () => {
                document.querySelector("#template_list_activator").classList.add("highlight");
                document.querySelector("#task_list_activator").classList.remove("highlight");
                document.querySelectorAll(".area_lists").forEach(list => {
                    if (list.classList.contains("inview")) list.classList.remove("inview");
        
                    if (list.id == "templates") {
                        list.classList.add("inview");
                        list.classList.add("highlight");
                    }
                })
            })
            document.querySelector("#task_list_activator").addEventListener("click", () => {
                document.querySelector("#template_list_activator").classList.remove("highlight");
                document.querySelector("#task_list_activator").classList.add("highlight");
                document.querySelectorAll(".area_lists").forEach(list => {
                    if (list.classList.contains("inview")) list.classList.remove("inview");
        
                    if (list.id == "tasks") {
                        list.classList.add("inview");
                        list.classList.add("highlight");
                    }
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
                tasks && tasks.forEach(_task => {
                    if (_task.inEdit) {
                        editedFound = true;
        
                        _task["inEdit"] = false;
                        _task["name"] = msg_name;
                        _task["contact"] = selected_contact;
                        _task["color"] = msg_color;
                        _task["template"] = templates.filter(temp => temp.name == saved_template)[0].id,
                        _task["sending_date"] = schedule_date;
                        _task["sending_time"] = schedule_time;
                        _task["date_created"] = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

                        delete _task["inEdit"]
                        
                        makeRequest(`api/tasks/${_task.id}/update/`, "PUT", _task)
                        .then((response) => {
                            return;
                        })
                        .catch(err => {
                        })

                    }
                })
        
                if (!editedFound) {
                    var msg = {
                        // id: Math.random() * 50,
                        name: msg_name,
                        contact: selected_contact,
                        color: msg_color,
                        template: templates.filter(temp => temp.name == saved_template)[0].id,
                        sending_date: schedule_date,
                        sending_time: schedule_time,
                        date_created: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    }
                }
                // const scheduledTime = new Date(`${schedule_date}T${schedule_time}`);
                // const timeUntilScheduledMessage = scheduledTime.getTime() - now.getTime();

                // chrome.alarms.create('msg_name', {
                //     when: Date.now() + timeUntilScheduledMessage
                // });
                                
                // save template to backend, only render if post was successful
                renderTasks(msg);
        
                // close modal
                schedule_msg_form.reset()
                schedule_msg_form.parentElement.querySelector(".cancel_button").click();
            })
        
            function renderTasks(newTask) {
                const task_lists = document.querySelector(".emuxn_sidebar_notes#tasks .list");
        
                if (newTask) {
                    makeRequest(`api/tasks/create/`, "POST", newTask)
                    .then((response) => {
                        newTask = response

                        task_lists.prepend(createTemplateElem(newTask));
                    
                        // add to open whatsapp chat
                        if (document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs")) {
                            let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                            chatArea.appendChild(createScheduledMsgElem(newTask))
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
                else {
                    makeRequest(`api/tasks/`, "GET")
                    .then((response) => {
                        tasks = response
                        task_lists.querySelectorAll(".emuxn_sidebar_note").forEach(
                            note => {
                                note.parentElement.removeChild(note)
                            }
                        )
                        tasks && tasks.forEach(template => {
                            task_lists.prepend(createTemplateElem(template));
                        })
                    })
                }
                
                function createTemplateElem(Task) {
                    const elem = document.createElement("div");
                    elem.className = 'emuxn_sidebar_note';
                    elem.dataset.TaskId = Task.id;
                    elem.innerHTML = `
                        <span></span>
                        <div class="content">
                            <p class="note_content">${Task.name}</p>
                            <p class="note_date">${Task.date_created}</p>                        
                            <div class="note_actions">
                            <button class="edit_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 21H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.3097 5.30981L18.7274 8.72755" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="delete_note">
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="#000000"/>
                                <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="#000000"/>
                                <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="#000000"/>
                                <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="#000000"/>
                                <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="#000000"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    `;
                    elem.querySelector("span").style.backgroundColor = Task.color;
                    elem.querySelector(".delete_note").addEventListener("click", () => {
                        confirmOperation()
                        .then(() => {
                            makeRequest(`api/tasks/${Task.id}/delete/`, "DELETE")
                            .then((response) => {
                                renderTasks(null);
                            })
                            .catch(err => {
                                renderTasks(null);
                            })
                        })
                        .catch(() => {
                            // console.log("rejected")
                        })

                    })
                    elem.querySelector(".edit_note").addEventListener("click", () => editTask(Task))
                    // elem.addEventListener("click", () => editMemo(memo))
                    return elem;
                }
            }

            function createScheduledMsgElem(task) {
                // get template
                let template = templates.filter(temp => temp.id == task.template)[0];
                // let template = templates.filter(template => template.name === task.template)[0]
                let emuxnTemplatesImages = JSON.parse(localStorage.getItem("emuxnTemplatesImages"));
                let img = emuxnTemplatesImages.filter(data => data.id === template.id)[0]

                var imgUrl;
                const row = document.createElement("div")
                row.className = "row scheduled_msg_area"
                row.dataset.taskId = task.id

                if (img) {
                    imgUrl = img.file_name
                    row.classList.add("with_image")
                }

                row.innerHTML = `
                    <div class="scheduled_msg">
                        <div class="img_holder">
                            <img src="${imgUrl}"/>
                        </div
                        <div class="msg">
                            <p>${template.message}</p>
                        </div>
                        <div class="brief">
                            <span id="date">${task.sending_date}</span>
                            <span id="time">${task.sending_time}</span>
                        </div>
                    </div>
                `

                return row;
            }
        
            function editTask(Task) {
                schedule_msg_activator.click();
                let modal = document.querySelector(".emuxn_modal#schedule_msg");
                modal.querySelector("button[type='submit']").textContent = "Edit";
                if (modal.classList.contains("inview")) {

                    
                    let template = templates.filter(temp => temp.id == Task.template)[0];

                    const create_task_form = modal.querySelector("form");
                    create_task_form.querySelector("#msg_name").value = Task.name;
                    create_task_form.querySelector("#selected_contact").value = Task.contact;
                    create_task_form.querySelector("#saved_template").value = template.name;
                    create_task_form.querySelector("#schedule_date").value = Task.sending_date;
                    create_task_form.querySelector("#schedule_time").value = Task.sending_time;
                    create_task_form.querySelector("#msg_color").value = Task.color;
        
                    create_task_form.querySelector(".selected_color").style.backgroundColor = Task.color;
                    // handle file edit 
                    // create_template_form.querySelector("#template_file").files = template.file;
        
                    tasks.map(_task => {
                        if (_task.id === Task.id) {
                            _task["inEdit"] = true;
                        }
                    })
                    modal.querySelector("button[type='submit']").addEventListener("click", () => {
                        modal.querySelector("button[type='submit']").textContent = "Create";
                    })
                }
            }

            function watchTask() {
                let pendingTask = [];
                let completeTask = [];

                // document.querySelectorAll(".lhggkp7q.jnl3jror.p357zi0d.gndfcl4n.ac2vgrno.ln8gz9je.ppled2lx").forEach(elem => elem.addEventListener("click", () => {
                    
                //     if (document.querySelector(".overlay._3IBSU")) {
                //         document.body.classList.add("image_open")
                //     } else {
                //         if (document.body.classList.contains("image_open")) {
                //             document.body.classList.remove("image_open")
                //         }
                //     }
                // }))

                // if (document.querySelector(".overlay._3IBSU")) {
                //     document.body.classList.add("image_open")
                // } else {
                //     if (document.body.classList.contains("image_open")) {
                //         document.body.classList.remove("image_open")
                //     }
                // }

                
                // function taskIsComplete (task) {
                //     let currentDate = new Date();
                //     return new Date(`${task.sending_date}:${task.sending_time}`) < currentDate;
                    
                // }

                // function sendTask(task) {
                //     document.querySelectorAll(".g0rxnol2._3fGK2 .ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr").forEach(elem => {
                //         if (elem.title == task.contact || elem.textContent == task.contact) {
                //             let parentElem = elem.closest(".lhggkp7q.ln8gz9je.rx9719la");
                //             // simulate chat select
                //             parentElem.click()
                //         }
                //         // elem.querySelector(".delete_note").addEventListener("click", () => {
                //         //     makeRequest(`api/tasks/${task.id}/delete/`, "DELETE")
                //         //     .then((response) => {
                //         //         renderTasks(null);
                //         //     })
                //         //     .catch(err => {
                //         //         renderTasks(null);
                //         //     })
                //         // })
                //     })

                    
                // }

                // check if chat open has a scheduled task
                // if so render it
                function updateChat() {
                    var chatHeader = document.querySelector("header.AmmtE");
                    if (chatHeader) {

                        let chatName = document.querySelector(`header.AmmtE .ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr`).textContent
                        let contacts_list = document.querySelector(`span.ggj6brxn.gfz4du6o.r7fjleex.lhj4utae.le5p0ye3._11JPr.selectable-text.copyable-text`)
                        let is_group = contacts_list.title.split(",").length > 1
                        if (contacts_list && is_group) {
                            // is group
                            if (!chatHeader.querySelector(".emuxn_header_icon")) {
                                // add group list icon
                                icons_area = chatHeader.querySelector("._1sPvB._2XdMx");
                                let icon = document.createElement("div")
                                icon.className = "emuxn_header_icon"
                                icon.id = "group_modal_activator"
                                icon.dataset.modalId = "group_modal"
                                icon.style.cursor = "pointer"
                                icon.innerHTML = `
                                <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><polygon points="8.5 8.46 55.5 8.46 55.38 15 36 34 36 55.54 26 50 26 34 8.5 15 8.5 8.46"/><line x1="8.5" y1="14.47" x2="55.5" y2="14.47"/></svg>
                                `
                                icons_area.style.display = "flex"
                                icons_area.style.alignItems = "center"
                                icons_area.style.gap = ".5rem"
                                icons_area.prepend(icon)

                                icon.addEventListener("click", () => {
                                    // csvContent
                                    csvContentName = chatName

                                    csvContent = contacts_list.title.split(",").map(contact => `${contact}\n`)

                                    openExtensionModal(icon)
                                })
                            }
                            
                        }
                        

                        // const task_lists = document.querySelector(".emuxn_sidebar_notes#tasks");

                        // let userTasks = tasks.filter(task => task.contact === chatName);
                        // if (userTasks) {
                        //     userTasks.forEach(
                        //         _task => {
                        //             if (document.querySelectorAll(".scheduled_msg_area").length < 1) {
                        //                 let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                        //                 chatArea.appendChild(createScheduledMsgElem(_task))
                        //             }
                        //             else if (document.querySelectorAll(`[data-task-id="${_task.id}"]`).length < 1) {
                        //                 // add to open whatsapp chat
                        //                 let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                        //                 chatArea.appendChild(createScheduledMsgElem(_task))
                        //             }
                        //         }
                        //     )
                        // }
                        
                        // AI FEATURE

                        
                        function copyToClipboard (text, reply_elem) {

                            try {
                                navigator.clipboard.writeText(text)
                                .then(() => {
                                    reply_elem.classList.add("copied");
                                    setTimeout(() => {
                                        reply_elem.classList.remove("copied");
                                    }, 5000)
                                })
                                
                            } catch (err) {
                            }
                        };

                        function fetchRenderReplies(ai_replies, message_text, selected_tone_value) {
                            // make api call
                            let url = `api/ai/`;
                            let request_data = {
                                "message" : message_text,
                                "tone": selected_tone_value
                            }
                            makeRequest(url, "POST", data=request_data)
                            .then((response) => {

                                // ai_replies.childNodes.forEach(child => ai_replies.removeChild(child));
                                ai_replies.innerHTML = "";

                                response["replies"].forEach(
                                    reply => {
                                        let reply_elem = document.createElement("p")
                                        reply_elem.className = "ai_reply"
                                        reply_elem.textContent = reply
                                        ai_replies.appendChild(reply_elem)

                                        reply_elem.addEventListener("click", () => copyToClipboard(reply, reply_elem))
                                    }
                                )
                                url = ""
                            })
                        }

                        const messages = document.querySelectorAll(".message-in")
                        messages.forEach(message => {
                            var reaction_area = message.querySelector(".message-in div div._1BOF7._2AOIt + div");
                            message.addEventListener("mouseenter", () => {
                                
                                if (!message.querySelector(".ai_activator")) {
                                    var ai_activator = document.createElement("div");
                                    ai_activator.className = "ai_activator";
                                    ai_activator.innerHTML = `
                                        <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                        <svg fill="#ffffff" width="10px" height="10px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465Z" fill-rule="evenodd"/>
                                        </svg>
                                    `;
                                    ai_activator.addEventListener('click', () => {

                                        
                                        if (!app.getAuthStatus()) {
                                            isUserAuthenticated()
                                            return;
                                        }
                                        
                                        if (!app.getUserFeatures()["subscription"].includes("Ultimate")) {
                                            chrome.runtime.sendMessage({
                                                type:  'UPGRADE'
                                            });
                                            return;
                                        }

                                        
                                        var message_text = message.querySelector("._11JPr.selectable-text.copyable-text span").textContent.replace(/\n/g, "").replace(/\s+/g, " ").trim();

                                        // show modal
                                        const ai_modal = document.querySelector("#ai_modal");
                                        ai_modal.classList.add("inview")

                                        document.querySelector("#close_ai_modal").addEventListener("click", () => {
                                            ai_modal.classList.remove("inview")
                                        })

                                        const selected_tone = document.querySelector("#selected_tone")
                                        var ai_replies = document.querySelector(".ai_replies");
                                        ai_replies.innerHTML = "";
                                        for (let i = 0; i < 6; i++) {
                                            let reply_elem = document.createElement("p")
                                            reply_elem.classList.add("ai_reply")
                                            reply_elem.classList.add("preload")
                                            ai_replies.appendChild(reply_elem)
                                        }
                                        document.querySelectorAll(".tone_option").forEach(
                                            option => {
                                                if (localStorage.getItem("ai_tone")) {
                                                    selected_tone.textContent = localStorage.getItem("ai_tone");
                                                }
                                                else if (option.dataset.default === "true") {
                                                    selected_tone.textContent = option.dataset.toneval;
                                                    localStorage.setItem("ai_tone", option.dataset.toneval)
                                                }
                                                option.addEventListener("click", () => {
                                                    selected_tone.textContent = option.dataset.toneval;
                                                    localStorage.setItem("ai_tone", option.dataset.toneval)
                                                    
                                                    var selected_tone_value = option.dataset.tone;
                                                    fetchRenderReplies(ai_replies, message_text, selected_tone_value)
  
                                                })
                                            }
                                        )
                                        
                                        fetchRenderReplies(ai_replies, message_text, selected_tone.textContent)
                                    })

                                    reaction_area.appendChild(ai_activator);
                                }
                            })
                            message.addEventListener("mouseleave", () => {
                                if (message.querySelector(".ai_activator")) {
                                    let ai_activator = reaction_area.querySelector(".ai_activator")
                                    reaction_area.removeChild(ai_activator);
                                }
                            })
                        })
                    }
                }
                updateChat()

                tasks && tasks.forEach(
                    task => {
                        if (taskIsComplete(task)) {
                            completeTask.push(task);
                            // send task and remove from task array
                            sendTask(task)
                            tasks = tasks.filter(_task => task.id != _task.id)
                            localStorage.setItem("emuxn_tasks", JSON.stringify(tasks))
                        }
                        else {
                            pendingTask.push(task);
                        }
                    }
                )
            }
        }

        uIManagement()
    }



})()
