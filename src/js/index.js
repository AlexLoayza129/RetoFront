const downIcon = document.getElementById('down_icon');
const upIcon = document.getElementById('up_icon');

let validate = false;
let dropMenu = document.getElementById('drop_menu');

let menu_h = document.getElementById('menu_h');
let dropAside = false;
let asideMenu = document.getElementById('aside_menu');
let iconContent = document.getElementById('icon_content');
let mainSection = document.getElementById('main_section');
let closeIconBtn = document.getElementById('close_icon_btn');
let closeIcon = document.getElementById('close_icon');

function dropdown(){
    if(!validate){
        validate = true;
        downIcon.classList.add('hidden');
        upIcon.classList.remove('hidden');
        /* DropMenu */
        dropMenu.classList.remove('hidden');
    }else{
        validate = false;
        dropMenu.classList.add('hidden');
        downIcon.classList.remove('hidden');
        upIcon.classList.add('hidden');
    }
}

function dropMenuAside(){
    if(!dropAside){
        dropAside = true;

        asideMenu.classList.remove('hidden')
        asideMenu.style.width = '50%'
        asideMenu.classList.add('absolute')
           
        mainSection.style='filter:blur(3px);'
        mainSection.classList.remove('col-span-8')
        mainSection.classList.add('col-span-12')
        mainSection.classList.add('pointer-events-none')
        mainSection.classList.add('select-none')
        document.body.style = 'position:fixed;'
        iconContent.classList.add('hidden')
        
        asideMenu.style.transform = 'translateX(15rem)'
        menu_h.classList.add('hidden');
    }
}


function closeIconBtnToggle(){
    closeIcon.classList.add('active')
    dropAside = false;

        asideMenu.classList.add('hidden')
        asideMenu.classList.remove('absolute')

        mainSection.style='filter:none;'
        mainSection.classList.remove('col-span-12')
        mainSection.classList.add('col-span-8')
        mainSection.classList.remove('pointer-events-none')
        mainSection.classList.remove('select-none')
        document.body.style = 'position:static;'
        iconContent.classList.remove('hidden')
        
        asideMenu.style.transform = 'translateX(-15rem)'
        menu_h.classList.remove('hidden');

}