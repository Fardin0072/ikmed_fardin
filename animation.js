window.onload = function(){
	var knife = document.getElementById('knife');
	var meat = document.getElementById('meat');
	var cuttingBoard = document.getElementById('cutting-board');
	var camera = document.getElementById('camera');
	var panWithFood = document.getElementById('panWithFood');
	var carrot = document.getElementById('carrot');
	var onion = document.getElementById('onion');
	var knife_sound = document.getElementById('knife_sound');
	var rijstPan = document.getElementById('rijstPan');
	var rijstKom = document.getElementById('rice');
	var komMetGroenten = document.getElementById('bowlWithVegetables');
	var waterBottle = document.getElementById('waterBottle');
	var potato = document.getElementById('potato');
	var salt = document.getElementById('saltAndPepper');
	var steakBord = document.getElementById('steakBord');
	var scene = document.getElementById('scene');
	var wasBack = document.getElementById('wasbak');
	var vleesPan = document.getElementById('pan');
	var butter = document.getElementById('butter');
	var meltedButter = this.document.getElementById('gesmoltenBoter');
	var coockedMeat = this.document.getElementById('cookedmeat');
	var roeren = this.document.getElementById('roeren');
	var arrow = this.document.getElementById('arrow');
	var leegBord = this.document.getElementById('leegBord');
	var qabuli = this.document.getElementById('qabuli');

	//KookMeldingen
	var rijstPanMelding = document.getElementById('txtRijst');
	var meatMelding = this.document.getElementById('txtMeat');
	var rijstMelding = false;
	var knifeAppended = false;
	var meatAppended = false;
	var carrotAppended = false;
	var onionAppended = false;
	var rijstKomAppended = false;
	var waterAppended = false;
	var potatoAppended = false;
	var saltAppended = false;
	var steakBordAppended = false;
	var wasbakAppended = false;
	var meatPanOnStove = false;
	var groenteBordAppended = false;
	var meatFinished = false;
	var rijstKlaar = false;
	var panOnBar = false;
	var rijstPanOnBar = false;
	var roerAppended = false;
	var leegBordAppended = false;

	//Geluiden
	var geluidMes = document.getElementById('knifeStabSound'); 
	var geluidSnijden = document.getElementById('snijden'); 
	var fornuisLighter = document.getElementById('stoveLighter'); 
	var wortelsSnijder = document.getElementById('carretCutting');

	//EventListeners
	onion.addEventListener('mouseenter', function(){
		onion.setAttribute('position', {x:1.049,y:-0.079,z:-0.317});
		onion.setAttribute('rotation',"0 75 90");
		knife.setAttribute('visible', 'true');
		carrot.setAttribute('visible', 'true');
		arrow.setAttribute('position', '0.177 0.195 0.632');
		onionAppended = true;
	});

	roeren.addEventListener('mouseenter', function(){
		if(roeren.getAttribute('visible')){
			camera.appendChild(roeren);
			leegBord.setAttribute('visible', 'true');
			roerAppended = true;
		}
	});

	carrot.addEventListener('mouseenter', function(){
		if(carrot.getAttribute('visible')){
			carrot.setAttribute('position', {x:0.8988674113863746,y:-0.0887231345110037,z:-0.321505709676244});
			potato.setAttribute('visible', 'True');
			arrow.setAttribute('position', '-0.044 0.195 0.654');
		}
	});

	leegBord.addEventListener('mouseenter', function(){
		if(leegBord.getAttribute('visible')){
			camera.appendChild(leegBord);
			leegBordAppended = true;
		}
	});

	komMetGroenten.addEventListener('mouseenter', function(){
		if(komMetGroenten.getAttribute('visible') && meatPanOnStove){
			komMetGroenten.setAttribute('position', '0.3245661250469596 -0.08733841114583349 -0.21065219489186957');
			komMetGroenten.setAttribute('rotation', '-0.8340000000000005 -159.61400000000003 -4.449999999999999');
			komMetGroenten.setAttribute('scale', '0.28 0.1 0.31');
			groenteBordAppended = true;
			arrow.setAttribute('position', '0.12940105325400011 0.195 1.01380548811425');
			// potato.setAttribute('visible', 'True');
		}
	});

	potato.addEventListener('mouseenter', function(){
		if(potato.getAttribute('visible')){
			potato.setAttribute('position', {x:1.431190354291679,y:-0.06515997102766904,z:-0.322});
			arrow.setAttribute('position', '1.1550822473012297 0.195 -0.382');
		}
	});

	steakBord.addEventListener('mouseenter', function(){
		if(steakBord.getAttribute('visible') && groenteBordAppended){
			coockedMeat.setAttribute('visible', 'True');
			scene.removeChild(steakBord);
			meatMelding.setAttribute('visible', 'true');
			meatFinished = true;
			arrow.setAttribute('position', '0.18531621179641145 0.195 -0.1992284313019978');
		}
	});

	vleesPan.addEventListener('mouseenter', function(){
		if(vleesPan.getAttribute('visible') && !meatFinished){
			vleesPan.setAttribute('position', {x:0.18531621179641145,y:-0.0841691905848646 ,z:-0.1992284313019978});
			vleesPan.setAttribute('rotation', '1.7164387347811614 -328.1839312041089 -0.0500587656615516');
			butter.setAttribute('visible', 'True');
			arrow.setAttribute('position', '0.129 0.195 0.7734886063241833');
			meatPanOnStove = true;
			scene.removeChild(rijstPanMelding);
		}else if(vleesPan.getAttribute('visible') && meatFinished && !panOnBar){
			vleesPan.setAttribute('position', '-0.010 -0.124 0.979');
			bowlWithVegetables.setAttribute('position', '0.153 -0.129 0.963');
			meltedButter.setAttribute('position', '0.150 -0.138 0.943');
			coockedMeat.setAttribute('position', '0.154 -0.129 0.957');
			scene.removeChild(meatMelding);
			panOnBar = true;
		}else if(vleesPan.getAttribute('visible') && meatFinished && panOnBar && leegBord.getAttribute('visible')){
			vleesPan.setAttribute('position', '-1.015 -0.125 0.560');
			scene.removeChild(bowlWithVegetables);
			scene.removeChild(coockedMeat);
			scene.removeChild(meltedButter);
		}
	});

	butter.addEventListener('mouseenter', function(){
		if(butter.getAttribute('visible')){
			meltedButter.setAttribute('visible', 'True');
			scene.removeChild(butter);
			arrow.setAttribute('position', '-0.08528569435155688 0.195 1.007328984313644');
		}
	});

	wasBack.addEventListener('mouseenter', function(){
		if(waterAppended && rijstKomAppended){
			scene.removeChild(rijstKom);
			scene.removeChild(waterBottle);
			wasbakAppended = true;
			arrow.setAttribute('position', '-0.953 0.195 0.106');
		}
	});

	rijstPan.addEventListener('mouseenter', function(){
		if(wasbakAppended && rijstPan.getAttribute('visible') && !rijstKlaar){
			rijstPan.setAttribute('position', '0.645 -0.089 -0.424');
			fornuisLighter.setAttribute('autoplay', "True");
			vleesPan.setAttribute('visible', 'True');
			arrow.setAttribute('position', '-0.8213436814278763 0.195 0.6111166221976184');
			rijstPanMelding.setAttribute('visible', 'True');
			rijstKlaar = true;
		}else if(wasbakAppended && rijstPan.getAttribute('visible') && rijstKlaar && !rijstPanOnBar && panOnBar){
			rijstPan.setAttribute('position', '0.499 -0.160 0.949');
			roeren.setAttribute('visible', 'True');
			rijstPanOnBar = true;
		}else if(wasbakAppended && rijstPan.getAttribute('visible') && rijstKlaar && rijstPanOnBar && leegBord.getAttribute('visible')){
			rijstPan.setAttribute('position', '-0.949 -0.160 0.133');
			qabuli.setAttribute('visible', 'True');
		}

	});

	waterBottle.addEventListener('mouseenter', function(){
		if(rijstKom.getAttribute('visible')){
			waterBottle.setAttribute('position', '0.12537112529091032 -0.11661024470106532 -0.21975745962036858');
			waterAppended = true;
			if(waterAppended && rijstKomAppended){
				arrow.setAttribute('position', '0.058841026777059435 0.195 -0.2846700143678905');
				rijstPan.setAttribute('visible', 'true');
			}
		}	
	});	

	rijstKom.addEventListener('mouseenter', function(){
		if(rijstKomAppended){
			rijstKom.setAttribute('position', '-0.02681086217569767 -0.06826480005995408 -0.2601111731143117');
			arrow.setAttribute('position', '-0.8637444207403566 0.295 0.5472933593278215');
			waterBottle.setAttribute('visible', 'true');
		}
		rijstKomAppended = true;
	});


	knife.addEventListener('mouseenter', function(){
		camera.appendChild(knife);
		geluidMes.setAttribute('autoplay', "True");
		knife.setAttribute('position','-0.241 -0.08, -0.25');
		knife.setAttribute('rotation', '0 101.26 0.6');
		knife.setAttribute('visible', 'true');
		arrow.setAttribute('position', '0.32189313220915966 0.195 0.9811432463193617');
		onion.setAttribute('visible', 'true');
		knifeAppended = true;
	});	

	meat.addEventListener('mouseenter', function(){
		if(meat.getAttribute('visible')){
			meat.setAttribute('position', {x:1.049,y:-0.079,z:-0.317});
			if(!meatAppended){
				arrow.setAttribute('position', '-0.8273545556452664 0.195 0.6225338670709059');
				salt.setAttribute('visible', 'true');
			}
			meatAppended = true;
		}
	});	

	salt.addEventListener('mouseenter', function(){
		saltAppended = true;
		arrow.setAttribute('position', '1.1550822473012297 0.195 -0.382');
	});	

	cuttingBoard.addEventListener('mouseenter', function(){
		geluidSnijden.setAttribute('autoplay', "True");
		if(knifeAppended == true && onionAppended == true){
			bowlWithVegetables.setAttribute('visible', 'true');
			scene.removeChild(onion);
			scene.removeChild(carrot);
			scene.removeChild(potato);
			meat.setAttribute('visible', 'True');
			arrow.setAttribute('position', '0.12698914128673972 0.195 0.9501981271626658');
			knifeAppended = false;
			onionAppended = false;
		} else if(saltAppended == true && meatAppended == true){
			//	set geluid hier
			scene.removeChild(salt);
			scene.removeChild(meat);
			steakBord.setAttribute('visible', 'true');
			rijstKom.setAttribute('visible', 'true');
			arrow.setAttribute('position', '-0.7602628370762586 0.195 0.35267154094972786');
			saltAppended = false;
			meatAppended = false;
		} 
	});
}
