/* Фильтр по категориям */
let radio_buttons = document.querySelectorAll('.type_rb');
let sections = document.querySelectorAll('.album_section');

radio_buttons.forEach(rb => {
    rb.addEventListener('change',function (){
        sections.forEach(section =>{
            if (rb.value === section.id){
                section.classList.remove('hidden');
            }
            else{
                section.classList.add('hidden');
            }
        });
    });
});