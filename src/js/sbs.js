/*
/ * sbslide.js 1.0 - 
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js
/ * Date 21/12/2013

// 1.0 - Step by step to create some slides easy and extremely fast and ligth

*/

;(function (window,document,undefined) {

var elementoAtual = 0;						//image current
var sequenciaElementos = [];				//all slides #sbs

//put here your vars
var isIE =  window.attachEvent ? isIE=true : isIE=false;	// TRUE is IE

	//it do the same as $ Jquery operator, but... very simplify
	_$ = function (_elementoID) {return document.getElementById(_elementoID);}
	
	var slide = _$("sbs-slider");
	var divs = slide.getElementsByTagName("img"); //content of images slider


	//constructor
	sbslider = function (parameters) {

	//clean vars
	elementoAtual = 0;
	sequenciaElementos = [];

	//get all div elements on #sbs-slider
	for(i=0 ; i<divs.length ; i++)
	{
		//search for all img slides on sbs-slider
		if(divs[i].className.indexOf("sbs-img") != -1)
		{
			//organize all sbs images on Array
			sequenciaElementos[sequenciaElementos.length] = divs[i];
			
			//display none in all imgs
			sequenciaElementos[i].style.display = "none";
		}
	}

	//update images
	sbslider.changeImg();

	}

	//another method
	//true - avanca ---- false - voltar
	sbslider.changeImg = function (direct) {

		if(direct == true && elementoAtual < (sequenciaElementos.length-1))
		{
			//NEXT
			elementoAtual++;
			sequenciaElementos[elementoAtual].style.display = "block";
			sequenciaElementos[elementoAtual-1].style.display = "none";
		}
		else if(direct == false && elementoAtual >0)
		{
			//PREV
			elementoAtual--;
			sequenciaElementos[elementoAtual].style.display = "block";
			sequenciaElementos[elementoAtual+1].style.display = "none";			
		}
		else
		{
			//first time load
			sequenciaElementos[elementoAtual].style.display = "block";
		}

		//update counter
		_$("sbs-nav-slide").innerHTML = (elementoAtual+1)+" / "+(sequenciaElementos.length)

	}

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

	//call slide
	sbslider();

})(window,document);
