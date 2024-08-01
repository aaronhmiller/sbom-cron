Deno.cron("Sample cron job", "*/10 * * * *", () => {
  console.log("This will run every 10 minutes");
});
