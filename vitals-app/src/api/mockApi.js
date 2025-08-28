export const mockLogin = async ({ email, password, role }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (role === "business") {
        // Mock different onboarding statuses
        const onboardingStatus = email === "new@company.com" ? "none" : "completed";
        resolve({ success: true, onboardingStatus });
      } else if (role === "admin") {
        resolve({ success: true });
      }
    }, 500);
  });
};

export const mockQuizzes = {
  "real-estate": [
    { id: 1, question: "How many properties do you manage?", options: ["<10", "10-50", ">50"] },
    { id: 2, question: "Do you use property management software?", options: ["Yes", "No"] },
  ],
  manufacturing: [
    { id: 1, question: "How many employees?", options: ["<50", "50-200", ">200"] },
    { id: 2, question: "Do you have QA processes?", options: ["Yes", "No"] },
  ],
};
