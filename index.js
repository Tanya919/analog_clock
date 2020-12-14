setInterval(()=>{
  d=new Date();
  htime=d.getHours();
  mtime=d.getMinutes();
  stime=d.getSeconds();
  ampm= htime >= 12 ? 'pm':'am';
  htime=htime%12;
  hrotation= 30*htime + mtime/2;
  mrotation= 6*mtime;
  srotation= 6*stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  document.getElementById("time").innerHTML=htime+" "+ampm+ " "+mtime+" mins "+stime+" secs ";
},1000);