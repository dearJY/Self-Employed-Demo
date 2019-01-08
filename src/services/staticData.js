
/*
    This file provides sample data getting from backend
 */
/*
project info
{
    id:number;
    projectName: string;
    postTime: date;
    expiredTime: date;
    description: string;
    paymentType: hourly/fixed(string);
    basePayment: number;
    currentBid: basePayment as default;
    bidNumber: number;
    sold:boolean;
    sellerInfo: class sellerInfo
    buyerInfo: class buyerInfo;// assume buyer can not cancel or modify bid price after submit
    bidders:list of bidders info;
    workingHours:number
}

buyerInfo
{
    id:number;
    userName:string;
    onGoingProjects: list of projectInfo which containes final price;
    biddingProjects: list of projectInfo which container bidding price;(send notification if his/her price is beaten)
    doneProjects: list of projectInfo;
    totalEarning: number;
}
*/
export const projectInfo = {
    "id":"1",
    "projectName": "building marketplace for self-employed",
    "postTime": new Date(),
    "expiredTime": new Date(2019,1,9),
    "description": "Assume all projects can be done remotely/online. You do not need to worry about matching by location. The Buyer with the lowest bid automatically wins the bid when the deadline is reached. Lowest bid is displayed on the project page.",
    "paymentType": "fix",
    "currentBid": 10000,
    "bidders":["a","n","c"],
    "bidNum":3,
    "sold":false,
    "sellerId": null,
    "buyerId": null,
    "workingHours":0
};

export const userInfo = {
    "id": "u1",
    "userName":"Doris",
    "onGoingProjects":[],
    "biddingProjects":[],
    "finishedProjects":[],
};