scoreBlancas=0;
scoreNegras=0;

TurnoBlancas=1;
TurnoRojas=1;

xb=0;
yb=0;

xr=0;
yr=0;


posibilidadMoverIzq=0; 
posibleIZQX=0;
posibleIZQY=0;
padrePosibleIzq=null;

posibilidadMoverDer=0;
posibleDERX=0;
posibleDERY=0;
padrePosibleDer=null;


RposibilidadMoverIzq=0; 
RposibleIZQY=0;
RpadrePosibleIzq=null;

RposibilidadDecomerIZQ=0;
RxcomerIZQ=0;
RycomerIZQ=0;
RpadreposibleComerIzq=null;

RposibilidadMoverDer=0;
RposibleDERX=0;
RposibleDERY=0;
RpadrePosibleDer=null;

RposibilidadDecomerDER=0;
RxcomerDER=0;
RycomerDER=0;
RpadreposibleComerDer=null;


fila0= [0,0,0,0,0,0,0,0];
fila1= [0,0,0,0,0,0,0,0];
fila2= [0,0,0,0,0,0,0,0];
fila3= [0,0,0,0,0,0,0,0];
fila4= [0,0,0,0,0,0,0,0];
fila5= [0,0,0,0,0,0,0,0];
fila6= [0,0,0,0,0,0,0,0];
fila7= [0,0,0,0,0,0,2,0];

casillas= [fila0, fila1, fila2, fila3, fila4, fila5, fila6, fila7];

function movBlancas(idpadre, idficha) {
	prototipoIDCASILLAReinaBlanca=idpadre;
	prototipoIDReinaBlanca=idficha;
	padreantiguoBlanca=document.getElementById("idpadre");

	if (TurnoBlancas==1) {
		TurnoRojas=0;
		if (EsReina(prototipoIDReinaBlanca)) {
			alert("Esta ficha es Reina");
		} 
		else {
			XB=+idpadre[1];
			YB=+idpadre[2];

			BIZQXposible=XB-1;
			BIZQYposible=YB+1;
			BposibleMoverIZQ=0;

			BDERXposible=XB+1;
			BDERYposible=YB+1;
			BposibleMoverDER=0;

			BIZQXComer=XB-2;
			BIZQYComer=YB+2;
			BposibilidadDecomerIZQ=0;

			BDERXComer=XB+2;
			BDERYComer=YB+2;
			BposibilidadDecomerDER=0;

			if ((BIZQXComer>=0&&BIZQYComer<=7&&casillas[BIZQYposible][BIZQXposible]==2&&casillas[BIZQYComer][BIZQXComer]==0)||(BDERXComer<=7&&BDERYComer<=7&&casillas[BDERYposible][BDERXposible]==2&&casillas[BDERYComer][BDERXComer]==0)) {
				if (BIZQXComer>=0&&BIZQYComer<=7&&casillas[BIZQYposible][BIZQXposible]==2&&casillas[BIZQYComer][BIZQXComer]==0) {
					BposibilidadDecomerIZQ=1;
					BpadreposibleComerIzq=document.getElementById("c"+BIZQXComer+BIZQYComer);
				}
				if (BDERXComer<=7&&BDERYComer<=7&&casillas[BDERYposible][BDERXposible]==2&&casillas[BDERYComer][BDERXComer]==0) {
					BposibilidadDecomerDER=1;
					BpadreposibleComerDer=document.getElementById("c"+BDERXComer+BDERYComer);
				}

			} 
			else if ((BIZQXposible>=0&&BIZQYposible<=7&&casillas[BIZQYposible][BIZQXposible]==0)||(BDERXposible<=7&&BDERYposible<=7&&casillas[BDERYposible][BDERXposible]==0)) {
				if (BIZQXposible>=0&&BIZQYposible<=7&&casillas[BIZQYposible][BIZQXposible]==0) {
					BposibleMoverIZQ=1;
					BpadreposibleIzq=document.getElementById("c"+BIZQXposible+BIZQYposible);
				}

				if (BDERXposible<=7&&BDERYposible<=7&&casillas[BDERYposible][BDERXposible]==0) {
					BposibleMoverDER=1;
					BpadreposibleDer=document.getElementById("c"+BDERXposible+BDERYposible);
				}

			} 
			else {
				alert("Ficha bloqueada");
			}	

		}
		padreantiguoBlanca=document.getElementById(idpadre);
		fichaBlancaretirada=padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild);

	} 
	
	
} 


function desplazar(idpadreNuevo){
	var xprov=+idpadreNuevo[1];
	var yprov=+idpadreNuevo[2];
	if (TurnoRojas==1) {
		padreNuevoRoja=document.getElementById(idpadreNuevo);
		if (EsReina(prototipoIDReinaRoja)) {
			alert("Movimientos de Reina");
		} 
		else {
			if (padreantiguoRoja.id==padreNuevoRoja.id) {
				padreNuevoRoja.appendChild(fichaRojaretirada);
			}
			else {
				if ((xprov==RIZQXComer&&yprov==RIZQYComer&&RposibilidadDecomerIZQ==1)||(xprov==RDERXComer&&yprov==RDERYComer&&RposibilidadDecomerDER==1)) {
					if (xprov==RIZQXComer&&yprov==RIZQYComer&&RposibilidadDecomerIZQ==1) {
						if (yprov==0) {
							padreNuevoRoja=document.getElementById("c"+xprov+"0");
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));

							EliminaIZQX=xprov+1;
							EliminaIZQY=yprov+1;
							padreBlancaEliminada=document.getElementById("c"+EliminaIZQX+EliminaIZQY);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);

							FichaRojaCoronada=document.getElementById(prototipoIDReinaRoja);
							FichaRojaCoronada.src="Qred.png";
							FichaRojaCoronada.id="Q"+prototipoIDReinaRoja[1]+prototipoIDReinaRoja[2];
							casillas[yr][xr]=0;
							casillas[yprov][xprov]=2;
							casillas[EliminaIZQY][EliminaIZQX]=0;
							TurnoRojas=0;
							TurnoBlancas=1;

						}
						else if (yprov>=1) {
							if (yprov==1) {
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								EliminaIZQX=xprov+1;
								EliminaIZQY=yprov+1;
								padreBlancaEliminada=document.getElementById("c"+EliminaIZQX+EliminaIZQY);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								casillas[yprov][xprov]=2;
								casillas[yr][xr]=0;
								casillas[EliminaIZQY][EliminaIZQX]=0;
								TurnoRojas=0;
								TurnoBlancas=1;
							} 
							else {
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								EliminaIZQX=xprov+1;
								EliminaIZQY=yprov+1;
								padreBlancaEliminada=document.getElementById("c"+EliminaIZQX+EliminaIZQY);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								//padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								//padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								casillas[yr][xr]=0;
								casillas[yprov][xprov]=2;
								casillas[EliminaIZQY][EliminaIZQX]=0;
								TurnoRojas=0;
								TurnoBlancas=1;
							}
						}
					}

					if (xprov==RDERXComer&&yprov==RDERYComer&&RposibilidadDecomerDER==1) {
						if (yprov==0) {
							padreNuevoRoja=document.getElementById("c"+xprov+"0");
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							EliminaDERX=xprov-1;
							EliminaDERY=yprov+1;
							padreBlancaEliminada=document.getElementById("c"+EliminaDERX+EliminaDERY);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
							
							FichaRojaCoronada=document.getElementById(prototipoIDReinaRoja);
							FichaRojaCoronada.src="Qred.png";
							FichaRojaCoronada.id="Q"+prototipoIDReinaRoja[1]+prototipoIDReinaRoja[2];
							casillas[yr][xr]=0;
							casillas[yprov][xprov]=2;
							casillas[EliminaDERY][EliminaDERX]=0;
							TurnoRojas=0;
							TurnoBlancas=1;
						} 
						else if (yprov>=1) {
							if (yprov==1) {
								padreNuevoRoja=document.getElementById("c"+xprov+"1");
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								EliminaDERX=xprov-1;
								EliminaDERY=yprov+1;
								padreBlancaEliminada=document.getElementById("c"+EliminaDERX+EliminaDERY);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								casillas[yr][xr]=0;
								casillas[yprov][xprov]=2;
								casillas[EliminaDERY][EliminaDERX]=0;
								TurnoRojas=0;
								TurnoBlancas=1;
							} 
							else {
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								EliminaDERX=xprov-1;
								EliminaDERY=yprov+1;
								padreBlancaEliminada=document.getElementById("c"+EliminaDERX+EliminaDERY);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								padreBlancaEliminada.removeChild(padreBlancaEliminada.firstChild);
								casillas[yr][xr]=0;
								casillas[yprov][xprov]=2;
								casillas[EliminaDERY][EliminaDERX]=0;
								TurnoRojas=0;
								TurnoBlancas=1;
							}

						}
					}

				}



				if ((xprov==RIZQXposible&&yprov==RIZQYposible&&RposibleMoverIZQ==1)||(xprov==RDERXposible&&yprov==RDERYposible&&RposibleMoverDER==1)) {
					//padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));

					if (xprov==RIZQXposible&&yprov==RIZQYposible&&RposibleMoverIZQ==1) {
						if (yprov==0) {
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							FichaRojaCoronada=document.getElementById(prototipoIDReinaRoja);
							FichaRojaCoronada.src="Qred.png";
							FichaRojaCoronada.id="Q"+prototipoIDReinaRoja[1]+prototipoIDReinaRoja[2];
							
							casillas[YR][XR]=0;
							casillas[yprov][xprov]=2;
							TurnoRojas=0;
							TurnoBlancas=1;
						}
						else if(yprov>=1){
							if (yprov==1) {
								padreNuevoRoja=document.getElementById("c"+xprov+"1");
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								casillas[YR][XR]=0;
								casillas[yprov][xprov]=2;
								TurnoRojas=0;
								TurnoBlancas=1;
							}
							else{
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								casillas[YR][XR]=0;
								casillas[yprov][xprov]=2;
								TurnoRojas=0;
								TurnoBlancas=1;
							}
						}
					}
					
					if (xprov==RDERXposible&&yprov==RDERYposible&&RposibleMoverDER==1) {
						if (yprov==0) {
							padreNuevoRoja=document.getElementById("c"+xprov+yprov);
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							//padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
							FichaRojaCoronada=document.getElementById(prototipoIDReinaRoja);
							FichaRojaCoronada.src="Qred.png";
							FichaRojaCoronada.id="Q"+prototipoIDReinaRoja[1]+prototipoIDReinaRoja[2];
							casillas[YR][XR]=0;
							casillas[yprov][xprov]=2;
							TurnoRojas=0;
							TurnoBlancas=1;
						}
						else if (yprov>=1) {
							if (yprov==1) {
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								casillas[YR][XR]=0;
								casillas[yprov][xprov]=2;
								TurnoRojas=0;
								TurnoBlancas=1;
							}
							else{
								padreNuevoRoja=document.getElementById("c"+xprov+yprov);
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								padreNuevoRoja.appendChild(padreantiguoRoja.removeChild(padreantiguoRoja.firstChild));
								casillas[YR][XR]=0;
								casillas[yprov][xprov]=2;
								TurnoRojas=0;
								TurnoBlancas=1;
							}

						}
					}

				}
			}
		}
	} 
	else{
		padreNuevoBlanca=document.getElementById(idpadreNuevo);
		
		if (EsReina(prototipoIDReinaBlanca)) {
			alert("Movimientos de Reina");
		} 
		else {
			if (padreantiguoBlanca.id==padreNuevoBlanca.id) {
				padreNuevoBlanca.appendChild(fichaBlancaretirada);
			} 
			else {
				if ((xprov==BIZQXComer&&yprov==BIZQYComer&&BposibilidadDecomerIZQ==1)||(xprov==BDERXComer&&yprov==BDERYComer&&BposibilidadDecomerDER==1)) {
					if (xprov==BIZQXComer&&yprov==BIZQYComer&&BposibilidadDecomerIZQ==1) {
						if (yprov==7) {
							padreNuevoBlanca=document.getElementById("c"+xprov+"7");
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));

							EliminaBIZQX=xprov+1;
							EliminaBIZQY=yprov-1;
							padreRojaEliminada=document.getElementById("c"+EliminaBIZQX+EliminaBIZQY);
							padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
							padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);

							FichaBlancaCoronada=document.getElementById(prototipoIDReinaBlanca);
							FichaBlancaCoronada.src="Qwhite.png";
							FichaBlancaCoronada.id="Q"+prototipoIDReinaBlanca[1]+prototipoIDReinaBlanca[2];
							casillas[YB][XB]=0;
							casillas[yprov][xprov]=1;
							casillas[EliminaBIZQY][EliminaBIZQX]=0;
							TurnoRojas=1;
							TurnoBlancas=0;

						}
						else if (yprov<=6) {
							if (yprov==6) {
								padreNuevoBlanca=document.getElementById("c"+xprov+"6");
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								EliminaBIZQX=xprov+1;
								EliminaBIZQY=yprov-1;
								padreRojaEliminada=document.getElementById("c"+EliminaBIZQX+EliminaBIZQY);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								casillas[EliminaBIZQY][EliminaBIZQX]=0;
								TurnoRojas=1;
								TurnoBlancas=0;

							} 
							else {
								padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								EliminaBIZQX=xprov+1;
								EliminaBIZQY=yprov-1;
								padreRojaEliminada=document.getElementById("c"+EliminaBIZQX+EliminaBIZQY);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								casillas[EliminaBIZQY][EliminaBIZQX]=0;
								TurnoRojas=1;
								TurnoBlancas=0;

							}

						}

					}

					if (xprov==BDERXComer&&yprov==BDERYComer&&BposibilidadDecomerDER==1) {
						if (yprov==7) {
							padreNuevoBlanca=document.getElementById("c"+xprov+"7");
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));


							EliminaBDERX=xprov-1;
							EliminaBDERY=yprov-1;
							padreRojaEliminada=document.getElementById("c"+EliminaBDERX+EliminaBDERY);
							padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
							padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);

							FichaBlancaCoronada=document.getElementById(prototipoIDReinaBlanca);
							FichaBlancaCoronada.src="Qwhite.png";
							FichaBlancaCoronada.id="Q"+prototipoIDReinaBlanca[1]+prototipoIDReinaBlanca[2];
							casillas[YB][XB]=0;
							casillas[yprov][xprov]=1;
							casillas[EliminaBDERY][EliminaBDERX]=0;
							TurnoRojas=1;
							TurnoBlancas=0;


						}
						else if (yprov<=6) {
							if (yprov==6) {
								padreNuevoBlanca=document.getElementById("c"+xprov+"6");
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								EliminaBDERX=xprov-1;
								EliminaBDERY=yprov-1;
								padreRojaEliminada=document.getElementById("c"+EliminaBDERX+EliminaBDERY);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								casillas[EliminaBDERY][EliminaBDERX]=0;
								TurnoRojas=1;
								TurnoBlancas=0;

							} 
							else {
								padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								EliminaBDERX=xprov-1;
								EliminaBDERY=yprov-1;
								padreRojaEliminada=document.getElementById("c"+EliminaBDERX+EliminaBDERY);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								padreRojaEliminada.removeChild(padreRojaEliminada.firstChild);
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								casillas[EliminaBDERY][EliminaBDERX]=0;
								TurnoRojas=1;
								TurnoBlancas=0;
							}

						}
						
					}

				}

				if ((xprov==BIZQXposible&&yprov==BIZQYposible&&BposibleMoverIZQ==1)||(xprov==BDERXposible&&yprov==BDERYposible&&BposibleMoverDER==1)) {
					if (xprov==BIZQXposible&&yprov==BIZQYposible&&BposibleMoverIZQ==1) {
						if (yprov==7) {
							padreNuevoBlanca=document.getElementById("c"+xprov+"7");
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));

							FichaBlancaCoronada=document.getElementById(prototipoIDReinaBlanca);
							FichaBlancaCoronada.src="QWhite.png";
							FichaBlancaCoronada.id="Q"+prototipoIDReinaBlanca[1]+prototipoIDReinaBlanca[2];
							
							casillas[YB][XB]=0;
							casillas[yprov][xprov]=1;
							TurnoRojas=1;
							TurnoBlancas=0;


						}
						else if (yprov<=6) {
							if (yprov==6) {
								padreNuevoBlanca=document.getElementById("c"+xprov+"6");
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));

								
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								TurnoRojas=1;
								TurnoBlancas=0;
							} 
							else {
								padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								
								
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								TurnoRojas=1;
								TurnoBlancas=0;
							}

						}
					}

					if (xprov==BDERXposible&&yprov==BDERYposible&&BposibleMoverDER==1) {

						if (yprov==7) {
							padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
							padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));

							FichaBlancaCoronada=document.getElementById(prototipoIDReinaBlanca);
							FichaBlancaCoronada.src="QWhite.png";
							FichaBlancaCoronada.id="Q"+prototipoIDReinaBlanca[1]+prototipoIDReinaBlanca[2];
							
							casillas[YB][XB]=0;
							casillas[yprov][xprov]=1;
							TurnoRojas=1;
							TurnoBlancas=0;
						}
						else if (yprov<=6) {
							if (yprov==6) {
								padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
						
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								TurnoRojas=1;
								TurnoBlancas=0;

							} 
							else {
								padreNuevoBlanca=document.getElementById("c"+xprov+yprov);
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
								padreNuevoBlanca.appendChild(padreantiguoBlanca.removeChild(padreantiguoBlanca.firstChild));
						
								casillas[YB][XB]=0;
								casillas[yprov][xprov]=1;
								TurnoRojas=1;
								TurnoBlancas=0;
							}

						}

					}


				}


			}

		}
	}
	
}

function movRojas(idpadre, idficha) {
	prototipoIDCASILLAReinaRoja=idpadre;
	prototipoIDReinaRoja=idficha;
	padreantiguoRoja=document.getElementById(idpadre);

	if (TurnoRojas==1) {
		TurnoBlancas=0;
		if (EsReina(prototipoIDReinaRoja)) {
		}
		else{
			XR=+idpadre[1];
			YR=+idpadre[2];
			RIZQXposible=XR-1;
			RIZQYposible=YR-1;
			RposibleMoverIZQ=0;

			RDERXposible=XR+1;
			RDERYposible=YR-1;
			RposibleMoverDER=0;

			RIZQXComer=XR-2;
			RIZQYComer=YR-2;
			RposibilidadDecomerIZQ=0;

			RDERXComer=XR+2;
			RDERYComer=YR-2;
			RposibilidadDecomerDER=0;


			if ((RIZQXComer>=0&&RIZQYComer>=0&&casillas[RIZQYposible][RIZQXposible]==1&&casillas[RIZQYComer][RIZQXComer]==0)||(RDERXComer<=7&&RDERYComer>=0&&casillas[RDERYposible][RDERXposible]==1&&casillas[RDERYComer][RDERXComer]==0)) {			//Comprobar si el rango para poder comer a la izquierda y/o derecha se encuentra en los limites 
				if (RIZQXComer>=0&&RIZQYComer>=0&&casillas[RIZQYposible][RIZQXposible]==1&&casillas[RIZQYComer][RIZQXComer]==0) {										//Se pregunta si el lado izquierdo cumple con los rangos
					//if (casillas[RIZQYposible][RIZQXposible]==1&&casillas[RIZQYComer][RIZQXComer]==0) {
						RposibilidadDecomerIZQ=1;
						RpadreposibleComerIzq=document.getElementById("c"+RIZQXComer+RIZQYComer);
						//RpadreposibleComerIzq.style.backgroundColor="#DE721D";
					//}
				}
				if (RDERXComer<=7&&RDERYComer>=0&&casillas[RDERYposible][RDERXposible]==1&&casillas[RDERYComer][RDERXComer]==0) {										//Se pregunta si el lado derecho cumple con los rangos
					//if (casillas[RDERYposible][RDERXposible]==1&&casillas[RDERYComer][RDERXComer]==0) {
						RposibilidadDecomerDER=1;
						RpadreposibleComerDer=document.getElementById("c"+RDERXComer+RDERYComer);
						//RpadreposibleComerDer.style.backgroundColor="#DE721D";
					//}
				}
				
			} 
			else if ((RIZQXposible>=0&&RIZQYposible>=0&&casillas[RIZQYposible][RIZQXposible]==0)||(RDERXposible<=7&&RDERYposible>=0&&casillas[RDERYposible][RDERXposible]==0)) { //Si no, verificar si el rango para moverse en diagonal hacia la izquierda y/o derecha esta dentro de los limites
				if (RIZQXposible>=0&&RIZQYposible>=0&&casillas[RIZQYposible][RIZQXposible]==0) {
					//if (casillas[RIZQYposible][RIZQXposible]==0) {
						RposibleMoverIZQ=1;
						RpadrePosibleIzq=document.getElementById("c"+RIZQXposible+RIZQYposible);
						//RpadrePosibleIzq.style.backgroundColor="#ac07bd";
					//}
				}
				if (RDERXposible<=7&&RDERYposible>=0&&casillas[RDERYposible][RDERXposible]==0) {
					//if (casillas[RDERYposible][RDERXposible]==0) {
						RposibleMoverDER=1;
						RpadrePosibleDer=document.getElementById("c"+RDERXposible+RDERYposible);
						//RpadrePosibleDer.style.backgroundColor="#ac07bd";
					//}
				}
			} else {		
				alert("Ficha Bloqueada");
			}
		}
		padreantiguoRoja=document.getElementById(idpadre);
		fichaRojaretirada=padreantiguoRoja.removeChild(padreantiguoRoja.firstChild);
	} 
	
	
}

function EsReina(idAVerificar) {
	// body...
	if (idAVerificar[0]=="Q") {
		return true;
	} else {
		return false;
	}
}

function ComprobarFinScore(puntuacionR, puntuacionB){
	if (puntuacionR==12||puntuacionB==12) {
		if (puntuacionR==12) {
			alert("Ganaron las rojas");
		}
		else{
			alert("Ganaron las blancas");		
		}
		TurnoRojas=0;
		TurnoBlancas=0;
	}

}