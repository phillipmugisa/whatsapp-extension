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
                <div class="tab-area">
                    <div id="msg_to_new_user" class="extension_modal tab_modal">
                        <header>
                            <h3 class="extension_modal_heading">Send Message to New Number.</h3>
                        </header>
                        <form action="" class="extension_modal_form">
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
                                    <textarea name="new_extension_message" id="new_extension_message" rows="5" placeholder="Enter Message" required></textarea>
                                </div>
                            </div>
                        </form>
                        <footer>
                            <button class="cancel_button">Cancel</button>
                            <button class="text-link" type="submit">Send</button>
                        </footer>
                    </div>
                    <button class="extension_tab" data-modal-id="msg_to_new_user" id="msg_to_new_user_activator">&#9885;</button>
                </div>
                <div class="tab-area">
                    <div id="schedule_msg" class="extension_modal tab_modal">
                        <header>
                            <h3 class="extension_modal_heading">Schedule A Message.</h3>
                        </header>
                        <form action="" class="extension_modal_form">
                            <div class="fields">
                                <div class="extension_form_group">
                                    <input type="text" id="selected_contact" name="selected_contact" list="contacts" placeholder="Select Contact" required>
                                    <datalist id="contacts">
                                        <option value="Mugisa Phillip">Mugisa Phillip</option>
                                        <option value="Mugisa Phillip">Mugisa Phillip</option>
                                        <option value="Mugisa Phillip">Mugisa Phillip</option>
                                        <option value="Mugisa Phillip">Mugisa Phillip</option>
                                        <option value="Mugisa Phillip">Mugisa Phillip</option>
                                    </datalist>
                                </div>
                                <div class="extension_form_group">
                                    <textarea name="extension_message" id="extension_message" rows="5" placeholder="Enter Message" required></textarea>
                                </div>
                            </div>
                        </form>
                        <footer>
                            <button class="cancel_button">Cancel</button>
                            <button class="text-link" type="submit">Send</button>
                        </footer>
                    </div>
                    <button class="extension_tab" data-modal-id="schedule_msg" id="schedule_msg_activator">&#9885;</button>
                </div>
                <button class="extension_tab">&#9885;</button>
            </div>
            <div class="right">
                <button class="auth-tabs">Sign up</button>
                <button class="auth-tabs" id="close_ext">&#9932;</button>
            </div>
        </div>
    `

    var sidebarUI = `
        <div class="extension_sidebar_area">
            <div class="extension_sidebar">
                <div class="extension_sidebar_actions">
                    <button>New Template</button>
                    <button id="create_note_activator" data-modal-id="create_note">New Memo</button>
                </div>
                <hr>
                <div class="extension_sidebar_notes">
                    <div class="extension_sidebar_note">
                        <p class="note_content">Schedule Meeting</p>                            
                        <div class="note_actions">
                            <button class="edit_note">&#9998;</button>
                            <button class="delete_note">&#9885;</button>
                        </div>
                    </div>
                    <div class="extension_sidebar_note">
                        <p class="note_content">Place date, and go back home after the match</p>
                        <div class="note_actions">
                            <button class="edit_note">&#9998;</button>
                            <button class="delete_note">&#9885;</button>
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
            <form action="" class="extension_modal_form">
                <div class="fields">
                    <div class="extension_form_group">
                        <input type="text" id="memo_name" name="memo_name" placeholder="Memo Name">
                    </div>
                    <div class="extension_form_group">
                        <textarea name="extension_memo" id="extension_memo" rows="5" placeholder="Memo Description" required></textarea>
                    </div>
                </div>
            </form>
            <footer>
                <button class="cancel_button">Cancel</button>
                <button class="text-link" type="submit">Create</button>
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
            // tabs
            const msg_to_new_user_activator = document.querySelector("#msg_to_new_user_activator");
            msg_to_new_user_activator.addEventListener("click", () => openExtensionModal(msg_to_new_user_activator))
            
            const schedule_msg_activator = document.querySelector("#schedule_msg_activator");
            schedule_msg_activator.addEventListener("click", () => openExtensionModal(schedule_msg_activator))
            
            const create_note_activator = document.querySelector("#create_note_activator");
            create_note_activator.addEventListener("click", () => openExtensionModal(create_note_activator))

            const close_ext = document.querySelector(".extension_taskbar #close_ext");
            close_ext.addEventListener("click", removeUI)


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
        }

        uIManagement()
    }



})()