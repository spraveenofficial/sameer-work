export const pendingData = [
  {
    id: 1,
    name: "Sam Altman",
    email: "samaltman123@gmail.com",
    riskLevel: "Medium",
    triggerReason: "IP Change",
    inQueueFor: "4 days",
    dateAdded: Date.now() + 4,
    reviewInfo: {
      isReviewed: "Yes",
      reviewedDate: "23 Aug, 2023",
    },
  },
  {
    id: 2,
    name: "Sameer Choubey",
    email: "sameerchoubey123@gmail.com",
    riskLevel: "High",
    triggerReason: "FIFO",
    inQueueFor: "4 days",
    dateAdded: Date.now() + 3,
    reviewInfo: {
      isReviewed: "No",
      reviewedDate: "",
    },
  },
  {
    id: 3,
    name: "Adarsh Panikkar",
    email: "adarsh@onjuno.com",
    riskLevel: "Low",
    triggerReason: "IP Change",
    inQueueFor: "5 days",
    dateAdded: Date.now() + 5,
    reviewInfo: {
      isReviewed: "No",
      reviewedDate: "",
    },
  },
  {
    id: 4,
    name: "Pratik Shetty",
    email: "pratik3@gmail.com",
    riskLevel: "High",
    triggerReason: "FIFO",
    inQueueFor: "5 days",
    dateAdded: Date.now() + 5,
    reviewInfo: {
      isReviewed: "Yes",
      reviewedDate: "12 Sep, 2023",
    },
  },
  {
    id: 5,
    name: "Elon Musk",
    email: "elon@twitterceo.com",
    riskLevel: "Low",
    triggerReason: "FIFO",
    inQueueFor: "5 days",
    dateAdded: Date.now() + 5,
    reviewInfo: {
      isReviewed: "Yes",
      reviewedDate: "12 Sep, 2023",
    },
  },
  {
    id: 6,
    name: "Trina Kundu",
    email: "trina@onjuno.com",
    riskLevel: "Low",
    triggerReason: "FIFO",
    inQueueFor: "5 days",
    dateAdded: Date.now() + 5,
    reviewInfo: {
      isReviewed: "5 days",
      reviewedDate: "12 Sep, 2023",
    },
  },
];

export const completedData = [
  {
    id: 1,
    name: "Sam Altman",
    email: "samaltman123@gmail.com",
    riskLevel: "Medium",
    actionReason: "Flagged",
    timeToClose: "4 days",
    dateAdded: Date.now() + 4,
    actionInfo: {
      name: "Sam Altman",
      email: "xyz@gmail.com",
    },
  },
  {
    id: 2,
    name: "Sam Altman",
    email: "samaltman123@gmail.com",
    riskLevel: "Medium",
    actionReason: "Flagged",
    timeToClose: "4 days",
    dateAdded: Date.now() + 4,
    actionInfo: {
      name: "Sam Altman",
      email: "xyz@gmail.com",
    },
  },
];
