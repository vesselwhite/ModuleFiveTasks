let inputValue = +prompt('Введите число');
if(typeof inputValue !== 'number'){
    alert('Упс,кажется вы ошиблись');
} else if(isNaN(inputValue)){
    alert('Вы ввели не число');
} else if(inputValue%2 == 0){
    alert('Число четное');
} else if(inputValue%2 !== 0){
    alert('Число нечетное')
}