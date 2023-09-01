setInterval(()=>{
    d = new Date()
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    hRotation = 30*htime + mtime/2
    mRotation = 6*mtime
    sRotation = 6*stime

     hour.style.transform = `rotate(${hRotation}deg)`
     min.style.transform = `rotate(${mRotation}deg)`
     sec.style.transform = `rotate(${sRotation}deg)`
},)