/*
/ * sbslide.js 1.1 - 
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js
/ * Date 21/12/2013

// 1.0 - Step by step to create some slides easy and extremely fast and ligth
// 1.1.1 - zerar elementDesc
// 1.2 - inside description
// 1.3 - show and hide when mouse is out
// 1.4 - controle with keyboard key

*/

;(function (window,document,undefined){


var elementoAtual = 0,							//image current
	sequenciaElementos = [],					//all slides on #sbs-slider
	sequenciaDesc = [],							//all descriptions on #sbs-slider
	slide = null,								//slider 
	_divImg = null, 							//content of images slider
	_divDesc = null; 							//content of descript slider

//put here your vars
var isIE =  window.attachEvent ? isIE=true : isIE=false;	// TRUE is IE

	//it do the same as $ Jquery operator, but... very simplify
	var _$ = function (_elementoID) {return document.getElementById(_elementoID);}
	
	//constructor
	var sbslider = function () 
	{

		slide = _$("sbs-slider"),						//slider 
		_divsImg = slide.getElementsByTagName("img"); 	//content of images slider
		_divsDesc = slide.getElementsByTagName("span"); //content of images slider
		
		//show content
		slide.onmouseover = function () {
			sbslider.hideLayout(false);
		}

		//hide content
		slide.onmouseout = function () {
			sbslider.hideLayout(true);
		}
		
		//clean vars
		elementoAtual = 0;
		sequenciaElementos = [];
		sequenciaDesc = [];

		//get all div elements on #sbs-slider
		for(i=0 ; i<_divsImg.length ; i++)
		{
			//search for all img slides on sbs-slider
			if(_divsImg[i].className.indexOf("sbs-img") != -1)
			{
				//organize all sbs images on Array
				sequenciaElementos[sequenciaElementos.length] = _divsImg[i];
				//display none in all imgs
				sequenciaElementos[i].style.display = "none";
			}

			console.log(_divsDesc[i].className);
			//search for all img slides on sbs-slider
			if(_divsDesc[i].className.indexOf("desc") != -1)
			{
				//organize all description on Array
				sequenciaDesc[sequenciaDesc.length] = _divsDesc[i];
				//display none in all imgs
				sequenciaDesc[i].style.display = "none";			
			}
		}

		//update images
		sbslider.changeImg();

		//when you click on next button
		_$("sbs-bt-next").onclick = function()
		{		
			sbslider.changeImg(true);
		}

		//when you click on next button
		_$("sbs-bt-prev").onclick = function()
		{
			sbslider.changeImg(false);
		}
		
		//key down
		document.onkeydown = function (e) {


			//next key
			if(e.keyCode == 39)
			{
				sbslider.changeImg(true);
			}

			//prev key
			if(e.keyCode == 37)
			{
				sbslider.changeImg(false);
			}
		
			//*** bugfix
			sequenciaDesc[elementoAtual].style.display = "none";

		}

		sbslider.hideLayout(true);

	}

	//changing images - slides
	//true - next slide ---- false - previously slide
	sbslider.changeImg = function (direct) {
		
		if(direct == true && elementoAtual < (sequenciaElementos.length-1))
		{
			//NEXT
			elementoAtual++;
			sequenciaElementos[elementoAtual-1].style.display = "none";
			sequenciaDesc[elementoAtual-1].style.display = "none";
			
		}
		else if(direct == false && elementoAtual >0)
		{
			//PREV
			elementoAtual--;
			sequenciaElementos[elementoAtual+1].style.display = "none";			
			sequenciaDesc[elementoAtual+1].style.display = "none";			
		}

		//update
		sequenciaElementos[elementoAtual].style.display = "block";
		sequenciaDesc[elementoAtual].style.display = "block";
		
		//update counter
		_$("sbs-nav-slide").innerHTML = (elementoAtual+1)+" / "+(sequenciaElementos.length)

	}

	//hide layout
	sbslider.hideLayout = function (hide) {
		if(hide == true)
		{
			//if true hide layout
			_$("sbs-bt-next").style.display = "none";
			_$("sbs-bt-prev").style.display = "none";			
			//desc
			sequenciaDesc[elementoAtual].style.display = "none";			
		}
		else
		{
		//if false show layout
			_$("sbs-bt-next").style.display = "block";
			_$("sbs-bt-prev").style.display = "block";			
			//desc
			sequenciaDesc[elementoAtual].style.display = "block";
		}
	}

	//call slide
	sbslider();

})(window,document);
