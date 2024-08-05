const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toString('dark-mode')
})


.elemento img{
    width:320;
    height:205;
    border-radius: 15px;
    object-fit: cover;
}

@keyframes slide {
    to{
        translate: calc(-4 * 250px);
    }
}


.elemento {
    float: right;
    max-width: 400px;
    padding: 5px;
    width: 33.33%;
    grid-auto-flow: column;
    grid-auto-columns: 250px;
    justify-items: stretch;
    animation: slide 15s linear infinite;
}