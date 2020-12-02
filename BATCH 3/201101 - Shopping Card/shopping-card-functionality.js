const images = 56;
		
		function template(index) 
		{
			return `
				<div class="con-star">
					<i class="bx bx-star"></i>
				</div>
		
				<div class="con-image">
					<img class="img" src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/${index}.png" alt="">
					<img class="bg" src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/${index}.png" alt="">
				</div>
		
				<div class="con-text">
					<h3>Training Shoes</h3>
					<p>The Puma Suede shoes combine comfortable foam cushioning </p>
				</div>
		
				<div class="con-price">	$129.95 </div>
		
				<div class="con-btn">
					<button onclick="handleAdd(event)" class="add">Add to cart </button>
			
					<div class="con-input-btns">
						<button onclick="plusLess(event, 'less')" class="less"><i class="bx bx-minus"></i></button>
						<input value="1" type="text">
						<button onclick="plusLess(event, 'plus')" class="plus"><i class="bx bx-plus"></i></button>
					</div>
				</div>
		`
		}

	for(let index=1; index<20; index++) {
		const element = document.createElement('div');
		element.classList.add('card');
		element.innerHTML = template(index);
		document.querySelector('.con-cards-1').appendChild(element);
	}

	for(let index=21; index<40; index++) {
		const element = document.createElement('div');
		element.classList.add('card');
		element.innerHTML = template(index);
		document.querySelector('.con-cards-2').appendChild(element);
	}

	for(let index=41; index<56; index++) {
		const element = document.createElement('div');
		element.classList.add('card');
		element.innerHTML = template(index);
		document.querySelector('.con-cards-3').appendChild(element);
	}
			
	function handleAdd(event) {
		const card = event.target.closest('.card');
		card.classList.add('add-active');
		console.log(card);
	}

	function plusLess(event, type) {

		const card = event.target.closest('.card');
		const input = card.querySelector('input');

		let oldVal = Number(input.value);

		if(type == 'less') {
			if(oldVal == 1) {
				card.classList.remove('add-active');
				return
			}
			input.value = oldVal -= 1;
			}
			else {
				input.value = oldVal += 1;
			}
		}