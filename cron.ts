.---------------- minute (0 - 59)
| .-------------- hour (0 - 23)
| | .------------ day of month (1 - 31)
| | | .---------- month (1 - 12) OR jan,feb,mar ...
| | | | .-------- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue ...
| | | | |
* * * * * command to be executed

Deno.cron("Sample cron job", "0 */2 * * *", () => {
  console.log("This will run twelve times a day");
});
