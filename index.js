let tablinks = document.getElementsByClassName("title-links");
let tabcontents = document.getElementsByClassName("tab-contents");

let opentab = (tabname)=>{
    for(tablink of tablinks)
    {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


let sidemenu = document.getElementById("sidemenu");
let open = document.getElementById('open');

let openmenu = ()=>{
    sidemenu.style.right = "0";
    open.style.display = "none";
}

let closemenu = ()=>{
    open.style.display = "block";
    sidemenu.style.right = "-200px";
}

let gotoproject = ()=>{
    window.open("https://sites.google.com/d/15KP0fWLPCW4zc8yaocFx-3ePIUCdW5Cq/p/1Em4syeOJL-rq02uCbjGhrJo5IwjeYSSg/edit?pli=1","_blank");
}

let gotogit = (id)=>{
    if(id==1)
    {
        window.open("https://github.com/KalyanGopu/CS2023","_blank");
    }
    if(id==2)
    {
        window.open("https://github.com/KalyanGopu/JavaApplicationProject","_blank");
    }
    if(id==3)
    {
        window.open("https://github.com/KalyanGopu/Epoch","_blank");
    }
    if(id==4)
    {
        window.open("https://github.com/KalyanGopu/ConvexOptimization","_blank");
    }
    if(id==5)
    {
        window.open("https://github.com/KalyanGopu/TickTokGame","_blank");
    }
    if(id==6)
    {
        window.open("https://github.com/KalyanGopu/Crawler_for_outreach","_blank");
    }
}
