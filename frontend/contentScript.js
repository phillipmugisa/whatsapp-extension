(function() {

    var authUI = `
        <section class="extension-popup">
            <header>
                <h2 class="title">Ecommerce Selling Price Calculator</h2>
            </header>
            <body>
            <section>
                <div class="ext-container" id="auth">
                    <div id="extension-form-area">
                        <form class="popupform">
                            <p class="pro-link" id="popup-error-msg" style="display: none;"></p>
                            <input type="text" placeholder="Email" id="extAuth-username" required>
                            <input type="password" name="password" id="extAuth-password" placeholder="Password" required>
                            <input type="submit" value="Sign In" id="signin" style="cursor: pointer;">
                            <hr style="border-top:1px solid rgb(189, 187, 187);width: 100%;">
                            <div class="grid" style="gap: .25rem;">
                            <a style="cursor: pointer;border: 1px solid lightgray;padding: .5rem 1rem;font-size: .9rem;border-radius: 5px;color: gray;text-align: center;" class="signup-social-extension" >Continue with Google</a>
                            <a style="cursor: pointer;border: 1px solid lightgray;padding: .5rem 1rem;font-size: .9rem;border-radius: 5px;color: rgb(255, 255, 255);text-align: center;white-space: nowrap;background-color: #3A63BE;" class="signup-social-extension" >Continue with Facebook</a>
                            </div>
                            <p class="centered">
                            Don't Have An Account
                            <a class="text-link" id="signup-extension" >Sign Up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            </body>
            <footer class="grid grid-cols">
                <h3 class="footer-touchline">Quick, Precise and Simple</h3>
                <!-- <span>&copy; <span id="dateNow"></span></span> -->
                <button class="btn-primary set-values" id="runCalc">Compute</button>
            </footer>
        </section>
    `

    var taskbarUI = `
        <div class="extension_taskbar">
            <div class="left">
                <div class="tab-area"  data-modal-id="msg_to_new_user" id="msg_to_new_user_activator">
                    <button class="extension_tab"
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z" fill="#000000"/></svg>
                    </button>
                    <p>New Message</p>
                </div>
                <div class="tab-area" data-sidebar-id="scheduling_msg" id="schedule_msg_sidebar_activator">
                    <button class="extension_tab">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465Z" fill-rule="evenodd"/>
                    </svg>
                    </button>
                    <p>Schedule Message</p>
                </div>
                <div class="tab-area" data-sidebar-id="memo" id="memo_sidebar_activator">
                    <button class="extension_tab">
                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 14V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H13.5M20 14L13.5 20M20 14H15.5C14.3954 14 13.5 14.8954 13.5 16V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                    <p>Create Memo</p>
                </div>
            </div>
            <div class="right">
                <button class="auth-tabs">Sign up</button>
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
        <div class="extension_sidebar_area">
            <div class="extension_sidebar">
                <div class="sidebar_part" id="memo">
                    <div class="extension_sidebar_actions">
                        <button id="create_note_activator" data-modal-id="create_note">New Memo</button>
                    </div>
                    <hr>
                    <div class="extension_sidebar_notes">
                    </div>
                </div>
                <div class="sidebar_part" id="scheduling_msg">
                    <div class="extension_sidebar_actions">
                        <button data-modal-id="template_modal" id="template_modal_activator">New Template</button>
                        <button data-modal-id="schedule_msg" id="schedule_msg_activator">New Task</button>
                    </div>
                    <hr>
                    <div class="extension_sidebar_notes lists">
                        <div class="extension_sidebar_actions">
                            <button id="template_list_activator">Templates</button>
                            <button id="task_list_activator" data-modal-id="">Tasks</button>
                        </div>
                        <div class="area_lists extension_sidebar_notes inview" id="templates">
                        </div>
                        <div class="area_lists extension_sidebar_notes" id="tasks">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    var modalsUI = `
        <div id="create_note" class="extension_modal tab_modal">
            <header>
                <h3 class="extension_modal_heading">Create New Memo.</h3>
            </header>
            <form action="" id="create_memo_form" class="extension_modal_form">
                <div class="fields">
                    <div class="extension_form_group">
                        <input type="text" id="memo_name" name="memo_name" placeholder="Memo Name" required>
                    </div>
                    <div class="extension_form_group split" style="padding-inline: 0.5rem;">
                        <label for="memo_color">Memo Color</label>
                        <input type="color" id="memo_color" name="memo_color" required>
                    </div>
                    <div class="extension_form_group">
                        <textarea name="extension_memo" id="memo_description" rows="5" placeholder="Memo Description"></textarea>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="create_memo_activator" type="submit">Create</button>
            </footer>
        </div>

        <div id="schedule_msg" class="extension_modal tab_modal">
            <header>
                <h3 class="extension_modal_heading">Schedule A Message.</h3>
            </header>
            <form action="" class="extension_modal_form">
                <div class="fields">
                    <div class="extension_form_group">
                        <input type="text" id="msg_name" name="msg_name" placeholder="Message Name" required>
                    </div>
                    <div class="extension_form_group">
                        <input type="text" id="selected_contact" name="selected_contact" list="contacts" placeholder="Select Contact" required>
                        <datalist id="contacts">
                        </datalist>
                    </div>
                    <div class="extension_form_group split">
                        <label for="msg_color">Template Color</label>
                        <input type="color" id="msg_color" name="msg_color" required>
                    </div>
                    <div class="extension_form_group split" style="border: 1px dashed lightgrey; padding: 1rem;">
                        <div class="extension_form_group split">
                            <label for="schedule_date">Select Date</label>
                            <input type="date" id="schedule_date" name="schedule_date" required>
                        </div>
                        <div class="extension_form_group split">
                            <label for="schedule_time">Select Time</label>
                            <input type="time" id="schedule_time" name="schedule_time" required>
                        </div>
                    </div>
                    <div class="extension_form_group">
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

        <div id="template_modal" class="extension_modal tab_modal">
            <header>
                <h3 class="extension_modal_heading">Create Message Template.</h3>
            </header>
            <form action="" class="extension_modal_form" enctype="multipart/form-data">
                <div class="fields">
                    <div class="extension_form_group">
                        <input type="text" id="template_name" name="template_name" placeholder="Template Name" required>
                    </div>
                    <div class="extension_form_group split">
                        <label for="template_color">Template Color</label>
                        <input type="color" id="template_color" name="template_color" required>
                    </div>
                    <div class="extension_form_group">
                        <input type="file" id="template_file" name="template_file">
                    </div>
                    <div class="extension_form_group">
                        <textarea name="template_extension_message" id="template_extension_message" rows="3" placeholder="Enter Message" required></textarea>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" id="create_template_activator" type="submit">Save</button>
            </footer>
        </div>

        <div id="msg_to_new_user" class="extension_modal tab_modal">
            <header>
                <h3 class="extension_modal_heading">Send Message to New Number.</h3>
            </header>
            <form action="" class="extension_modal_form" id="sendMsgToNewNoform">
                <div class="fields">
                    <div class="extension_form_group number">
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
                    <div class="extension_form_group">
                        <textarea name="new_extension_message" id="new_extension_message" rows="3" placeholder="Enter Message" required></textarea>
                    </div>
                    <div class="extension_form_group" id="new_msg_link_area" style="display: none;">
                       <span style="font-size: .9rem;">Link:</span>
                       <a style="color: teal;font-size: .9rem;" id="new_msg_link" href=""></a>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button id="new_number_send" class="text-link" type="submit">Send</button>
            </footer>
        </div>
    `
    
    var backend_url = 'https://app.ease-sell.com/';

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
    const makeRequest = async (url, method, data={}) => {
        var backend_url = 'https://app.ease-sell.com/';

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

        if (method == "POST") {
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
                if (document.querySelector(".extension-area")) {
                    removeUI();
                }
                else {
                    renderExtensionUI();
                }
            }
        }
        sendResponse()
    })

    function closeUI() {
        let extensionArea = document.querySelector(".extension-area");
        document.body.removeChild(extensionArea)
    }

    function removeUI() {
        if (document.querySelector(".extension_area")) {
            var chatArea = document.querySelector("div#app");
            var chatAreaParent = document.querySelector("body.web");
            
            // var hard_expire_time = document.querySelector("#hard_expire_time");
            const extension_area = document.querySelector(".extension_area");
            extension_area.querySelector(".chat_handler").childNodes.forEach(
                elem => {
                    chatAreaParent.appendChild(elem);
                }
            )
            chatAreaParent.removeChild(extension_area);
        }
    }

    function renderExtensionUI() {
        if (!document.querySelector(".extension_area")) {
            var chatArea = document.querySelector("div#app");
            var chatAreaParent = document.querySelector("body.web");
            
            // var hard_expire_time = document.querySelector("#hard_expire_time");
            const extension_area = document.createElement("div");
            extension_area.className = "extension_area";
            // chatAreaParent.insertBefore(extension_area, hard_expire_time)
    
            // // adding taskbar
            const extension_taskbar_area = document.createElement("div");
            extension_taskbar_area.className = "extension_taskbar_area";
            extension_taskbar_area.innerHTML = taskbarUI;
            extension_area.appendChild(extension_taskbar_area)
    
            const extension_lower_area = document.createElement("div");
            extension_lower_area.className = "extension_lower_area";
            extension_area.appendChild(extension_lower_area)

            let handler = document.createElement("div");
            extension_lower_area.appendChild(handler)
            handler.className = "chat_handler"

            // addd chat area to ui

            chatAreaParent.childNodes.forEach(node => {
                handler.appendChild(node);
            })

            chatAreaParent.removeChild(chatArea);
            handler.appendChild(chatArea);

            // update whatapp style
            chatArea.style.position = "relative"
                   
            // // adding sidebar
            const extension_sidebar_area = document.createElement("div");
            extension_sidebar_area.className = "extension_sidebar_area";
            extension_sidebar_area.innerHTML = sidebarUI;
            extension_lower_area.appendChild(extension_sidebar_area);

            // add modals
            const modalSpace = document.createElement("section")
            modalSpace.innerHTML = modalsUI;
            extension_area.appendChild(modalSpace)

            chatAreaParent.appendChild(extension_area);

            if (document.querySelector("._1jJ70.two")) {
                document.querySelector("._1jJ70.two").style.minWidth = "100%";
                document.querySelector("._1jJ70.two").style.height = "100%";
                document.querySelector("._1jJ70.two").style.top = "0";
            }
    
            UIRendering()
        }
        
    }

    function UIRendering () {
        // isUserAuthenticated();

        // signupSocialExtension.forEach(btn => btn.addEventListener("click", () => {
        //     chrome.runtime.sendMessage({
        //         type:  'LOGIN'
        //     });
        // }))
        // signUpCta.addEventListener("click", () => {
        //     chrome.runtime.sendMessage({
        //         type:  'REGISTER'
        //     });
        // })
        // ext_modal_close.addEventListener("click", () => {
        //     ext_modal.classList.remove("in-view");
        // })


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
                        renderCalcUI();
                })
                .catch(error => {
                        chrome.storage.sync.remove(["access_token","refresh_token"],function() {})
                        renderLoginUI()
                    }
                )
            })
        }
    
        function renderLoginUI() {
            authUI.classList.add("in-view");
            authUI.classList.remove("hidden");
            calcUI.classList.add("hidden");
            runCalc.classList.add("hidden");
            calcUI.classList.remove("in-view");
            document.querySelector(".extension-popup").classList.remove("calcInView");
    
            var formErrMsg = document.querySelector("#popup-error-msg");       
    
            document.querySelector(".popupform").addEventListener('submit', async (e) => {
                e.preventDefault();
    
                const username = document.querySelector("#extAuth-username");
                const password = document.querySelector("#extAuth-password");
    
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
                    chrome.storage.sync.set({ "access_token": response.access}, function(){});
                    chrome.storage.sync.set({ "refresh_token": response.refresh}, function(){});
                    localStorage.setItem("ext_access_token", response.access)
                    localStorage.setItem("ext_refresh_token", response.refresh)
                    renderCalcUI();

                })
                .catch(error => {
                    formErrMsg.textContent = "Invalid Data";
                    formErrMsg.style.display = "block";
                    setTimeout(() => {
                        formErrMsg.style.display = "none";
                        formErrMsg.textContent = "";
                    }, 5000);
                    return;

                })
            });
    
        }

        function uIManagement() {

            setInterval(() => watchTask(), 1000);

            document.querySelector("#sidebar_toggle").addEventListener("click", () => {
                document.querySelector(".extension_area").classList.toggle("show_sidebar")
            })

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

                        let chatlist = document.querySelectorAll(".g0rxnol2._3fGK2 span[title]:not(.Hy9nV)")
                        let contacts = document.querySelector("#contacts");
                        chatlist.forEach(chat => {
                            let option = document.createElement("option");
                            option.value = chat.title
                            option.textContent = chat.title
                            contacts.appendChild(option);
                        })

                        document.querySelector("#task_list_activator").click()
                    }
                }
            }


            document.querySelector("#new_extension_message").addEventListener("keyup", () => {
                document.querySelector("#new_msg_link_area").style.display = "flex";
                document.querySelector("#new_msg_link_area").style.gap = "2rem";
                new_msg_link = document.querySelector("#new_msg_link");

                let countryCode = sendMsgToNewNoform.querySelector("#country_code").value;
                let phoneNumber = sendMsgToNewNoform.querySelector("#new_phone_number").value;
                let message = sendMsgToNewNoform.querySelector("#new_extension_message").value;
        
                let fullNumber = `+${countryCode}${phoneNumber[0] == '0' ? phoneNumber.slice(1) : phoneNumber}`
                let requestUrl = `https://api.whatsapp.com/send?phone=${fullNumber}&text=${message}`;
                new_msg_link.textContent = requestUrl;
                new_msg_link.href = requestUrl;

                new_msg_link.addEventListener("click", () => {
                    document.querySelector("#msg_to_new_user").querySelector(".cancel_button").click();
                })
            })
        
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
                    // window.location.href = requestUrl;
                    new_msg_link.click()
                    document.querySelector("#msg_to_new_user").querySelector(".cancel_button").click();
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
                
                document.querySelector(".extension_area").classList.add("show_sidebar")
                
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

                    // add to open whatsapp chat
                    let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                    chatArea.appendChild(createScheduledMsgElem(newTask))

                    // start timing
                    // watchTask(newTask);
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

            function createScheduledMsgElem(task) {
                // get template
                let template = templates.filter(template => template.name === task.template)[0]

                const row = document.createElement("div")
                row.className = "row scheduled_msg_area"
                row.dataset.taskId = task.id
                row.innerHTML = `
                    <div class="scheduled_msg">
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

            function watchTask() {
                let pendingTask = [];
                let completeTask = [];
                
                function taskIsComplete (task) {
                    let currentDate = new Date();
                    // let isDay = false;
                    // let isTime = false
                    // // if is complete return true

                    // // check day
                    // isDay = task.sending_date.split("/")[0] == currentDate.getDate() && task.sending_date.split("/")[1] == currentDate.getMonth() && task.sending_date.split("/")[2] == currentDate.getFullYear()

                    // // check time
                    // isTime = (task.sending_time.split(":")[0] == currentDate.getHours() && task.sending_time.split(":")[1] == currentDate.getMinutes()) || (true)

                    return new Date(`${task.sending_date}:${task.sending_time}`) < currentDate;
                    
                }

                function sendTask(task) {
                    document.querySelectorAll(".g0rxnol2._3fGK2 .ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr").forEach(elem => {
                        if (elem.title == task.contact || elem.textContent == task.contact) {
                            let parentElem = elem.closest(".lhggkp7q.ln8gz9je.rx9719la");
                            // console.log("elem: ", elem)
                            // console.log("parentElem: ", parentElem)
                            // simulate chat select
                            parentElem.click()
                        }
                    })
                }

                // check if chat open has a scheduled task
                // if so render it
                function updateChat() {
                    let chatHeader = document.querySelector("._23P3O");
                    if (chatHeader) {
                        const task_lists = document.querySelector(".extension_sidebar_notes#tasks");
                        let chatName = document.querySelector(`[data-testid="conversation-info-header-chat-title"]`).title;

                        let userTasks = tasks.filter(task => task.contact === chatName);
                        if (userTasks) {
                            userTasks.forEach(
                                _task => {
                                    if (document.querySelectorAll(".scheduled_msg_area").length < 1) {
                                        let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                                        chatArea.appendChild(createScheduledMsgElem(_task))
                                    }
                                    else if (document.querySelectorAll(`[data-task-id="${_task.id}"]`).length < 1) {
                                        // add to open whatsapp chat
                                        let chatArea = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
                                        chatArea.appendChild(createScheduledMsgElem(_task))
                                    }
                                })
                            }
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
                            localStorage.setItem("extension_tasks", JSON.stringify(tasks))
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