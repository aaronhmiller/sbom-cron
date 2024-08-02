Deno.cron("Sample cron job", "0 0 * * *", () => {
  console.log("This will run once a day");
});
