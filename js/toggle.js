const toggleBtn = document.getElementById('toggle-btn');
const toggle = document.querySelectorAll('.toggle');

// querySelectorAll을 사용할 땐 배열로 리턴값이 반환되기 때문에 
// foreach로 배열의 값을 하나씩 classList에 toggle시켜야함

toggleBtn.addEventListener('click', show_toggle);

function show_toggle() {
    // if (toggle.classList.contains('on')) {
    //     toggle.classList.remove('on');
    // } else {
    //     toggle.classList.add('on');
    // }

    // toggle.classList.toggle('on');
    toggle.forEach(function (item){
        item.classList.toggle('on');
    });
}



// 브라우저의 크기가 조절될때 토글을 끔 // 함수명 굳이 지정안해도 됨
function resize() {
    window.addEventListener('resize', function () {
        if(window.innerWidth > 1024){
            offToggle();
        }
    });
}

function offToggle () {
    toggle.forEach(function (item){
        item.classList.remove('on');
    });
}


function init() {
    show_toggle();
    resize();
}

init();