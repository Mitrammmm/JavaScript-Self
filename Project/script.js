document.addEventListener("DOMContentLoaded" , function(){

const searchbtn = document.getElementById('search-btn');
const userinput = document.getElementById('user-input');

const statcontent = document.querySelector('.stat-content');
const progresscontent = document.querySelector('.pregress');
const easyprogresscircle = document.querySelector('.easy-progress');
const mediumprogresscircle = document.querySelector('.medium-progress');
const hardprogresscircle = document.querySelector('.hard-progress');

const easylabel = document.getElementById('easy-label');
const mediumlabel = document.getElementById('medium-label');
const hardlabel = document.getElementById('hard-label');
const cardstat = document.querySelector('.stat-cards');


function validusername(username){
    if(username.trim() === ""){
        alert("Write Username e.g-> mitraa")
        return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    return regex.test(username);
}

async function FetchUserDetails(username){
    // const url = "https://leetcode-stats-api.herokuapp.com/${username}"
    try{
        searchbtn.textContent = "SEARCHING....";
        searchbtn.disabled = true;        

        // const proxyurl = `https://cors-anywhere.herokuapp.com/`
        // const proxyurl = `https://api.allorigins.win/raw?url=`;
        const proxyurl = `https://thingproxy.freeboard.io/fetch/`;
        const targetUrl = 'https://leetcode.com/graphql/';
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");

        const graphQl = JSON.stringify({
        query: `
        query userSessionProgress($username: String!) {
            allQuestionsCount {
            difficulty
            count
            }
            matchedUser(username: $username) {
            submitStats {
                acSubmissionNum {
                difficulty
                count
                }
                totalSubmissionNum {
                difficulty
                count
                }
            }
            }
        }`,
        variables: { "username": `${username}` }
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphQl,
        redirect: "follow"
        };

        const response = await fetch( proxyurl+targetUrl, requestOptions);

        if(!response.ok) throw new Error("Unable to fetch User data ")
        const parseddata = await response.json();
        console.log("parsed data" ,parseddata);
        displayUserData(parseddata);
    }
    catch(err){
        statcontent.innerHTML = `<p>NO DATA FOUND!!  ${err}</p>`
    }
    finally{
        searchbtn.textContent = "Enter Name";
        searchbtn.disabled = false; 
    }
}

function updateProgress(solved, total, label, circle){
    const per = (solved/total)* 100;
    circle.style.setProperty("--madevariable", `${per}%`);
    label.textContent = `${solved} / ${total}`;
}

function displayUserData(parseddata){
    const totalQue = parseddata.data.allQuestionsCount[0].count;
    const easyQue = parseddata.data.allQuestionsCount[1].count;
    const mediumQue = parseddata.data.allQuestionsCount[2].count;
    const hardQue = parseddata.data.allQuestionsCount[3].count;


    const solvedTotalQue = parseddata.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const solvedEasyQue = parseddata.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const solvedMeduimQue = parseddata.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const solvedHardQue = parseddata.data.matchedUser.submitStats.acSubmissionNum[3].count;

    // updateProgress(solvedTotalQue,totalQue,);
    updateProgress(solvedEasyQue, easyQue, easylabel, easyprogresscircle);
    updateProgress(solvedMeduimQue, mediumQue, mediumlabel, mediumprogresscircle); 
    updateProgress(solvedHardQue, hardQue, hardlabel, hardprogresscircle); 
    
    
    const cardData = [
        {label: "Overall Submissions", value: parseddata.data.matchedUser.submitStats.totalSubmissionNum[0].count},
        {label: "Overall Easy Submissions", value: parseddata.data.matchedUser.submitStats.totalSubmissionNum[1].count},
        {label: "Overall Medium Submissions", value: parseddata.data.matchedUser.submitStats.totalSubmissionNum[2].count},
        {label: "Overall Hard Submissions", value: parseddata.data.matchedUser.submitStats.totalSubmissionNum[3].count}
    ];

    console.log(cardData);
    cardstat.innerHTML = cardData.map(
        data => `<div class="card">
                    <h3>${data.label}</h3>
                    <p>${data.value}</p>
                </div>`
    ).join("")
}

searchbtn.addEventListener('click' , function (){
    const username = userinput.value;
    if(validusername(username)){
        FetchUserDetails(username);
    }
})   //search btn wla end





})  //last one