//tiny container written to contain the insertQuestions scritp and translate all the werid stuff node returns into actual useful info

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

(async () => {
  try {
   
    await import("./src/utils/insertQuestions.ts");
  } catch (err) {
    console.error("ERROR WHILE IMPORTING insertQuestions:", err);
    process.exit(1);
  }
})();