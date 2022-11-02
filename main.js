var msgerForm;
var msgerInput;
var msgerChat;
var BOT_IMG;
var  BOT_NAME;
var PERSON_NAME;
var PERSON_IMG;
var prompts = [];
var replies = [];
var alternative = [];
var robot = [];

$( document ).ready(function() {
 msgerForm = $('.msger-inputarea');
 msgerInput = $('.msger-input');
 msgerChat = $('.msger-chat');
 BOT_IMG = "L.png";
 BOT_NAME = "Ley";
 PERSON_NAME = "User";
 PERSON_IMG = "user.png"
 prompts = [
    ["hi", "hey", "hello","i need help", "help", "help me"],
    ["who are you", "are you human", "are you robot", "are you human or bot"],
    ["Cyberattacks", "types of cyber attack", "Common types of cyber attacks"],
    ["Phising", "how to prevent phising", "phising attack", "phishing", "phising attack prevention"],
    ["Denial of service attack", "DOS attack", "dos attack", "dos", "DENIAL OF SERVICE ATTACK","DDOS", "ddos"],
    ["malware", "Malware", "Malware Prevention", "malware prevention"],
    ["Man In the Middle attack", "Man In the Middle", "MITM", "Man In the Middle prevention", "Man In the Middle attack prevention", "mitm"],
    ["SQL-Injection", "sql", "SQL", "SQL Injection", "sql injection", "SQL Injection attack prevention"],
    ["Zero-Day Exploit", "Zero day exploit", "Zero-day exploit attack", "Zeroday exploit","zero day exploit"],
    ["DNS Tunnelling attack", "DNS", "DNS Tunnelling", "dns tunnelling"],
    ["Cryptojacking", "crypto", "Cryptojacking attack"],
    ["bec", "BEC", "BEC attack", "bec attack"],
    ["Password Attack","password", "password attack"]
]
replies = [
    ["Hello!", "Hi!","How may I help you", "Do you need help", "Here to help "],
    ["I am Ley bot,created by my master Smit and Ishan.I give basic info about the cyber attacks and try to guide you fellow humans to be safe"],
    ["While there are many different ways that an attacker can infiltrate an IT system, most cyber-attacks rely on pretty similar techniques.Some of the most common types of cyber-attacks are: 1.) Malware 2.)Phishing 3.) Man-In-The-Middle 4.)DDoS 5.) SQL-Injection 6.) Zero-Day Exploit 7.) BEC 8.) Cryptojacking 9.) Password Attack 10.) DNS Tunnelling"],
    ["There are 10 ways to prevent Phising attack:- 1.) Know what a phishing scam looks like.\n\ 2.)Do not click on suspisious link or link sent by any unknown person.\n\ 3.)Get free anti-phishing add-ons. \n\ 4.)Do not give your information to an unsecured site. \n\ 5.)Change passwords in every 8-9 weeks. \n\ 6.)Do not ignore those System updates. \n\ 7.)Install firewalls.\n\ 8.)Do not be tempted by those pop-ups. \n\ 9.)Do not give out important information unless you must. \n\ 10.)Have a Data Security Platform to spot signs of an attack(ex. Antivirus)."],
    ["There are 5 ways to prevent dos/ddos attack:- 1.) Organize a DDoS Attack Response Plan. \n\  2.) Secure your Infrastructure with DDoS Attack Prevention Solutions. \n\ 3.} Perform a Network Vulnerability Assessment. \n\ 4.} Identify Warning Signs of a DDoS Attack. \n\ 5. Adopt Cloud-Based Service Providers."],
    ["There are 6 ways to prevent malware attack:- 1.)Keep your computer and software updated. \n\ 2.)Use a non-administrator account whenever possible. \n\ 3.)Think twice before clicking links or downloading anything. \n\ 4.)Be careful about opening email attachments or images. \n\ 5.)Do not trust pop-up windows that ask you to download software. \n\ 6.)Limit your file-sharing."],
    ["There are 5 ways to prevent MITM attack:- 1.)Use Secure connection. \n\ 2.)Use VPN(Virtual Private Network.\n\ 3.)Endpoint security. \n\ 4.)Enable Multi-factor authentication or Two Factor authentication. \n\ 5.)You Should have basic information about MITM attack."],
    ["There are 11 ways to prevent sql injection:- 1.)Validate User Inputs. 2.)Sanitize Data By Limiting Special Characters. 3.)Enforce Prepared Statements And Parameterization. 4.)Use Stored Procedures In The Database. 5.)Actively Manage Patches And Updates. 6.)Raise Virtual Or Physical Firewalls. 7.)Deny Extended URLs. 8.)Don’t Divulge More Than Necessary In Error Messages. 9.)Continuous Monitoring Of SQL Statements. 10.)Perform Regular Auditing And Penetration Testing. 11.)Enforce Best Practices For Account And Password Policies."],
    ["To prevent the Zero-day exploit attack you have to Maintaining a good firewall and up to date antivirus is the best step you can take to ensure the security of your system. A firewall, monitoring traffic in and out of your network, reduces unauthorized entry over the network."],
    ["Staying vigilant for suspicious domains, monitoring DNS traffic, and reporting suspicious domains to threat intelligence platforms; can help prevent the DNS Tunnelling attack."],
    ["There are 5 ways to prevent Cryptojacking:- 1.)Educate Your Employees.. 2.) Use Anti-Cryptomining Extensions. 3.)Train Your IT Team to detect cryptojacking. 4.)Use Ad-Blockers. 5.)Disable JavaScript."],
    ["There are 3 ways to prevent BEC Attack:-1.)ENABLE TWO-FACTOR AUTHENTICATION. 2.)ANTI-SPAM SOLUTIONS. 3.)Security software for business emails"],
    ["To prevent Password Attack avoid using the password that are easy to guess; Make sure that the password is atleast 12 characters long,Include a mix of numbers, symbols, capital letters, and lower-case letters, Change your password after a certain duration, such as after 60, 90 and 120 days, Never write down or email your password."]
];
alternative = [
    "I don't quite understand :/ Try typing name of the cyberattacks you want to know about :)"
]
robot = ["How do you do ,fellow human?"];
$('#bot-time')[0].innerHTML = formatDate(new Date());

// $('.msger-input').keypress(function (e) {
//     if (e.which == 13) {
//       $('#prospects_form').submit();
//       return false;    //<---- Add this line
//     }
//   });   
});
// msgerForm[0].addEventListener("submit", event => {
//     event.preventDefault();
//     const msgText = msgerInput.value;
//     if(!msgText) return;
//     msgerInput.value = "";
//     addChat(PERSON_NAME, PERSON_IMG, "right", msgText)
//     output(msgText);
// });



function handleForm(event) { event.preventDefault(); } 


function submit(event){
    var form = document.getElementById("prospects_form");
    form.addEventListener('submit', handleForm);
    const msgText = msgerInput[0].value;
    if(!msgText) return;
    msgerInput[0].value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", msgText)
    output(msgText);
};

function output(input){
    let product;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    // .replace(/ a/g, " ")
    // .replace(/ i feel/g, " ")
    .replace(/ whats/g, "what is")
    .replace(/ please/g, " ")
    .replace(/ please/g, " ")
    .replace(/ r u/g, "are you");
    if(compare(prompts,replies,text)){
        product = compare(prompts, replies, text);
    }
    else if(text.match(/thank/gi)){
        product = "You're Welcome!"
    }
    else if(text.match(/(robot|bot|robo)/gi)){
        product = robot[Match.floor(Math.random() * robot.length)];
    }
    else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
}
function compare(promptsArray, repliesArray, string){
    let reply;
    let replyFound = false;
    for(let x = 0;x<promptsArray.length; x++){
        for(let y = 0;y < promptsArray[x].length; y++){
            if(promptsArray[x][y] === string){
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if(replyFound) {
            break;
        }
    }
    return reply;
}
function addChat(name, img, side, text){
    const msgHTML = `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>
    <div class="msg-bubble">
     <div class="msg-info">
        <div class="msg-info-name">${name}</div>
        <div class="msg-info-time">${formatDate(new Date())}</div>
    </div>
    <div class="reply">${text}</div>
    </div>
    </div>
    `;
    msgerChat[0].insertAdjacentHTML("beforeend", msgHTML);
    msgerChat[0].scrollTop += 500;
}

// function get(selector, root = document){
//     return root.querySelector(selector);
// }

function formatDate(date){
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
