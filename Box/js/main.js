console.log('Hello!');
var podarki=["Уголь", "Алмаз","Маркер","Клюшка", "Коньки", "5 по истории", "Пушистые гантели", "Пистолет", "Жигуль", "Айфон из Китая", "Паганка", "Лом", "Водка", "Самолетик"]
$("#Pod").click(function(){
	var pd = Math.floor(Math.random() * 14);
	console.log(podarki[pd]);
	$('.gift').text(podarki[pd]);
})

