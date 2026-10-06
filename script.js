const card = document.getElementById("card");
const btn = document.querySelector(".open-btn");

/* CARD OPEN */

btn.addEventListener("click", () => {
    card.classList.toggle("open");

    createExplosion();
});

/* PARTICLES */

function createExplosion(){

    for(let i=0;i<35;i++){

        const el = document.createElement("span");

        el.innerHTML = ["✨","🤍","🌙","💖","🌸"][Math.floor(Math.random()*5)];

        el.style.position = "fixed";
        el.style.left = "50%";
        el.style.top = "50%";
        el.style.zIndex = "999";
        el.style.fontSize = Math.random()*20+15+"px";
        el.style.pointerEvents = "none";

        document.body.appendChild(el);

        const x = (Math.random()-0.5)*500;
        const y = (Math.random()-0.5)*500;

        el.animate([
            {
                transform:`translate(0,0) scale(1)`,
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(0)`,
                opacity:0
            }
        ],{
            duration:2000,
            easing:"cubic-bezier(.17,.67,.83,.67)"
        });

        setTimeout(()=>{
            el.remove();
        },2000);
    }
}

/* STARS */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];

for(let i=0;i<120;i++){

    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        o:Math.random(),
        s:Math.random()*0.5
    });

}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${star.o})`;
        ctx.fill();

        star.y += star.s;

        if(star.y > canvas.height){
            star.y = 0;
        }

    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize",()=>{

    canvas.width = innerWidth;
    canvas.height = innerHeight;

});