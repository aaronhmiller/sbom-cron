Deno.cron("Sample cron job", "*/5 * * * *", () => {
  console.log("This will run every 5 minutes");
});
