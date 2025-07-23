import { RACESystemPrompt } from "./prompts/RACE";
import { generateGeminiResponse } from "./generatePrompt"; // Assuming this is the correct import for your function

const exampleQuery1 = "Our telecom company is losing customers, and we want to understand who is likely to cancel their subscriptions so we can proactively offer them incentives to stay. How can we use our customer data to predict this?";
const exampleQuery2 = "We're a retail chain struggling with inventory management. We often have too much stock of unpopular items and run out of popular ones. We need a way to predict demand for our products more accurately for the next three months to optimize our purchasing.";
const exampleQuery3 = "Our online payment platform is experiencing an increase in fraudulent transactions. We need a system that can automatically identify suspicious transactions in real-time to prevent financial losses for our users and us.";


async function main() {
  console.log("--- Running Example 1 ---");
  console.log("Query:", exampleQuery1);

  console.log("\n--- Example 1 (Without RACE System Prompt) ---");
  const response1NoSystem = await generateGeminiResponse(exampleQuery1); // Pass empty string if no system prompt
  console.log("Response:", response1NoSystem);

  // Example 1 with the RACESystemPrompt
  console.log("\n--- Example 1 (With RACE System Prompt) ---");
  const response1WithSystem = await generateGeminiResponse(exampleQuery1, RACESystemPrompt);
  console.log("Response:", response1WithSystem);

  console.log("\n--- Running Example 2 ---");
  console.log("Query:", exampleQuery2);

  // Example 2 without a system prompt
  console.log("\n--- Example 2 (Without RACE System Prompt) ---");
  const response2NoSystem = await generateGeminiResponse(exampleQuery2); // Pass empty string if no system prompt
  console.log("Response:", response2NoSystem);

  // Example 2 with the RACESystemPrompt
  console.log("\n--- Example 2 (With RACE System Prompt) ---");
  const response2WithSystem = await generateGeminiResponse(exampleQuery2, RACESystemPrompt);
  console.log("Response:", response2WithSystem);

  console.log("\n--- Running Example 3 ---");
  console.log("Query:", exampleQuery3);

  // Example 3 without a system prompt
  console.log("\n--- Example 3 (Without RACE System Prompt) ---");
  const response3NoSystem = await generateGeminiResponse(exampleQuery3); // Pass empty string if no system prompt
  console.log("Response:", response3NoSystem);

  // Example 3 with the RACESystemPrompt
  console.log("\n--- Example 3 (With RACE System Prompt) ---");
  const response3WithSystem = await generateGeminiResponse(exampleQuery3, RACESystemPrompt);
  console.log("Response:", response3WithSystem);
}

// Call the main function to execute the examples.
main().catch(error => {
  console.error("An error occurred in the main function:", error);
});
