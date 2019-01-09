/*
    Including all the APIs
*/
import {projectInfo,userInfo} from "./staticData";

const testMapping = ["Java Developer","JavaScript Developer","UX Designer","Test Engineer", "Backend Engineer", "Frontend Engineer"];
const userNameMapping = ["John","Chris","Mary","Emma"];

//Helper functions

//randomly generate a list of project info
function generateProjects(sampleProjectInfo,size) {
    let result = [];
    let counter = size;
    while (counter>0) {
        result.push(Object.assign({},sampleProjectInfo,{
            id:`p${counter}`,
            currentBid:10*counter,
            paymentType: counter%2 === 0?"fix":"hourly",
            projectName:`${sampleProjectInfo.projectName} - ${testMapping[counter%6]}`,
            postTime:new Date(2018,counter%3,counter),
            expiredTime:new Date(2019,counter%4,28-counter),
            workingHours:counter*5
        }));
        counter--;
    }
    return result;
}

//randomly generate a list of project info
function generateUsers(sampleUserInfo,userType,userId,size) {
    let result = [];
    let counter = size;

    while (counter>0) {
        result.push(Object.assign({},sampleUserInfo,{
            id:userId || userType === "buyer"? `b${counter}`:`s${counter}`,
            userName:userNameMapping[counter%4],
            onGoingProjects:generateProjects(projectInfo,3),
            biddingProjects:generateProjects(projectInfo,4),
            finishedProjects:generateProjects(projectInfo,2),
        }));
        counter--;
    }
    return result;
}

//APIs
const fetchRecentProjects = () => {
    return generateProjects(projectInfo,5);
};

const fetchBuyerInfo = (userId) => {
    return generateUsers(userInfo,"buyer",userId,1);
};

const addNewBidToProject = (projectId,userId,newBid) => {
    return `user ${userId} bidded on the project ${projectId} with the price of $${newBid}. 
            Backend data store updates:
            the project ${projectId}'s updates: 1.currentBid; 2.add user to bidders list;
            the user ${userId}'s updates: add the project to  onGoingProjects list
            Currenlty user can go to dashboard page to check the project in onGoing projects list`;
};

//API wrap
export const api = {
    fetchRecentProjects: fetchRecentProjects,
    fetchBuyerInfo: fetchBuyerInfo,
    addNewBidToProject:addNewBidToProject
};