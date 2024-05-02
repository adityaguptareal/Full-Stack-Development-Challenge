function createCard(title,cname,views,monthOld,duration,thumbnail){
    let view_str
    if(views<=1000000){
        view_str=views/1000+"k";
    }
    else if(views>=10000000){
        view_str=views/100000+"M";
    }
    else{
        views
    }
    let card=`<div class="card">
    <div class="thumbnail">
        <img src="${thumbnail}">
        <div class="duration">${duration}</div>
    </div>
    
    <div class="text">
        <h3 class="video_title">${title}</h3>
        <div class="video_details">${cname}. ${view_str}.${monthOld}</div>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + card;

}

// Calling function

createCard("Lorem, ipsum dolor sit amet consectetur ","Aditya Kumar",30000,"9 Months ago","32:45","https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuhpUj-ErJicHq24jgB_3K2Chl_Q")