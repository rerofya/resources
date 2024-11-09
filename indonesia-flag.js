const flag=document.getElementById("flag-container");flag.innerHTML=`<style>
        #flag-container {
            position: relative;
            width: 225px;
            height: 125px;
            margin: 5em auto;
            -webkit-transform: rotate(-15deg);
                -ms-transform: rotate(-15deg);
                    transform: rotate(-15deg);
        }
        #flag-container.on::before {
            content: "";
            position: absolute;
            left: -2%;
            width: 4px;
            height: 200%;
            background: #dcdcdc;
            border: 0.5px solid #929292;
            z-index: 2;
            border-radius: 4px;
            -webkit-animation: anim 1s ease-in-out infinite alternate;
                    animation: anim 1s ease-in-out infinite alternate;
            background-position: 0px 0px;
            -webkit-animation-delay: 0ms;
                    animation-delay: 0ms;
        }
        #flag-container span {
            -webkit-animation: anim 1s ease-in-out infinite alternate;
                    animation: anim 1s ease-in-out infinite alternate;
            position: relative;
            height: 100%;
            width: 1px;
            display: inline-block;
            zoom: 1;
        }
        #flag-container span::before, #flag-container span::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 50%;
            background: red;
            border-left: 1px solid transparent;
        }
        #flag-container span::after {
            top: 50%;
            background: #fff;
            border-left: 1px solid transparent;
        }
        @-webkit-keyframes anim {
            0% {
                top: 5%;
            }        
            100% {
                top: -5%;
            }
        }
        @keyframes anim {
            0% {
                top: 5%;
            }        
            100% {
                top: -5%;
            }
        }
    </style>`;const w=flag.innerWidth||flag.clientWidth;for(let i=0;i<w;i++){let t=document.createElement("span");t.style.backgroundPosition=-i+"px 0",t.style.WebkitAnimationDelay=10*i+"ms",t.style.animationDelay=10*i+"ms",flag.appendChild(t)}flag.className="flag on";
