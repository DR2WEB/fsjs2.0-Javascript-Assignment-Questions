// 12. Create a human readable time format using the Date time object
/* - YYYY-MM-DD HH:mm
   - DD-MM-YYYY HH:mm
   - DD/MM/YYYY HH:mm  */

   const str = new Date();
   const y = str.getFullYear();
   const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
   const m = month[str.getMonth()];
   const d = str.getDate();
   const h = str.getHours();
   const min = str.getMinutes();
   
   console.log(y + "-" + m + "-" + d + " " + h + ":" + min);
   console.log(d + "-" + m + "-" + y + " " + h + ":" + min);
   console.log(d + "/" + m + "/" + y + " " + h + ":" + min);