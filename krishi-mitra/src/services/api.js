// src/services/api.js
export async function submitQuery(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        answer: `AI advice for: "${query}" → Use organic fertilizer and ensure proper irrigation.`,
      });
    }, 1500);
  });
}
