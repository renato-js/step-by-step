/*
/ * sbslide.js 1.0 - 
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js
/ * Date 17/12/2013

// 1.0 - Step by step to create some slides easy and extremely fast and ligth

*/

;(function (window,document,undefined) {

var elementoAtual = 0;						//image current
var sequenciaElementos = [];			//todos os elementos que contem a class sbs dentro do #sbs
var elementoID;							//id dos elementos img de sbs

//put here your vars
var isIE =  window.attachEvent ? isIE=true : isIE=false;	// TRUE is IE

	//it do the same as $ Jquery operator, but... very simplify
	_$ = function (_elementoID) {return document.getElementById(_elementoID);}
	
	var slide = _$("sbs");
	var divs = slide.getElementsByTagName("img"); //content of images slider


	//constructor
	sbslide = function (parameters) {

		//limpa tudo para nao ficar armazenado nas telas seguintes
		// elementoAtual = null;
		// sequenciaElementos = [];
		// sequenciaAudio = [];
		// elementoID;

	//gravar arrays com audio e elementos
	for(i=0 ; i<divs.length ; i++)
	{
		//search for all sbs img
		if(divs[i].className.indexOf("sbs") != -1)
		{
			//organize all sbs images on Array
			sequenciaElementos[sequenciaElementos.length] = divs[i];
			
			//display none in all imgs
			sequenciaElementos[i].style.display = "none";
		}
	}


	//another method
	//true - avanca ---- false - voltar
	sbslide.changeImg = function (direct) {

		if(direct == true && elementoAtual < (sequenciaElementos.length-1))
		{
			//avanca
			console.log("entrou "+elementoAtual);
			elementoAtual++;
			sequenciaElementos[elementoAtual].style.display = "block";
			sequenciaElementos[elementoAtual-1].style.display = "none";
		}
		else if(direct == false && elementoAtual >0)
		{
			//volta
			elementoAtual--;
			sequenciaElementos[elementoAtual].style.display = "block";
			sequenciaElementos[elementoAtual+1].style.display = "none";			
		}
		else
		{
			//primeira vez, apenas carrega
			sequenciaElementos[elementoAtual].style.display = "block";
		}

	}

	//when you click on next button
	_$("bt-sbs-avancar").onclick = function()
	{		
		sbslide.changeImg(true);
	}

	//when you click on next button
	_$("bt-sbs-voltar").onclick = function()
	{

		sbslide.changeImg(false);
	}

	//call slide
	sbslide();

})(window,document);
