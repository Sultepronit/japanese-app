var goal=50;
var positiveList = [0,0,0], negativeList = [0,0,0];
var ped=0, med=0;
var repeated = [0,0,0];
var wn = 0;
var tim = 0;
var bul = 0;
var ifa = 0;
var np = 0;
var a = new Audio();
var bu = [0,0,0];
var ki0 = 0;
var shsh=0;
var ostp=1000, pvt=100;
var P=0, M=0, R=0;
var dod=0, ppp=0;

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

function vsikax(ky=1)
{
var e=0, res='';//mms[ky][0][e++];
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="["){res+='#'; continue;}
if(mms[ky][0][e]=="("){res+='#'; continue;}
res+=mms[ky][0][e];
}e--;
return res;
}

var alls=[0,0], sle=0, bgs1=0;
function swithk(kn,ous=0,kaj=1)
{

var spk;
alls=[0,0]; sle=0;
allsd=[0,0]; sled=0;
var ifdd=0;
for(x=1;x<kss;x++)
{spk=vsikax(x);
	for(y=0;spk[y];y++)
	{ 
		/*if(spk[y]=='('){ ifdd=1; continue;}
		if(spk[y]=='['){ ifdd=1; continue;}*/
		if(spk[y]=='#'){ ifdd=1; continue;}
		//if(spk[y]==mm[wn][0]){if(ifdd){allsd[sled++]=x;}else{alls[sle++]=x;} break; }
		if(spk[y]==vp2[wn][0]){if(ifdd){allsd[sled++]=x;}else{alls[sle++]=x;} break; }
	}ifdd=0;
}
bgs1=vyp(0,sle-1);
var lin1='';
for(x=0;x<sle;x++,bgs1++)
{
if(bgs1==sle){bgs1=0;}
if(alls[bgs1]==ous){continue;}
lin1+="<p class='sl'>";
if(kaj>0){ lin1+=vsika( alls[bgs1] )+" : ";}
lin1+=vsit( alls[bgs1] );
lin1+=" — "+mms[ alls[bgs1] ][2]+"</p>";
}
bgs1=vyp(0,sled-1);
for(x=0;x<sled;x++,bgs1++)
{
if(bgs1==sled){bgs1=0;}
if(allsd[bgs1]==ous){continue;}
lin1+="<p class='sl'>";
if(kaj>0){ lin1+=vsika( allsd[bgs1] )+" : ";}
lin1+=vsit( allsd[bgs1] );
lin1+=" — "+mms[ allsd[bgs1] ][2]+"</p>";
}
//$(".swi").append(lin1);
return lin1;
}


function vsika(ky=1)
{
var gr=0;
var e=0, res=mms[ky][0][e++];
if(mms[ky][0][e-1]==1){e--;}
if(mms[ky][0][0]=="["){gr=1; res="<span class='bl'>"; /*res+=mms[ky][0][e++];*/ }
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="]"){/*res+="]";*/ break;}
if(mms[ky][0][e]=="("){
	if(gr==1){res+="</span>";}else{gr=1;} res+="<span class='gr'>"; continue;}
if(mms[ky][0][e]=="1"){e++;
	res+="　";
	if(e==1){res='';}
	br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
		if(mms[ky][0][e][q]=="("){br0=1; res+="<span class='re'>"; continue;}
		if(mms[ky][0][e][q]==")" && br0==1){br0=0; res+="</span>"; continue;}
		if(mms[ky][0][e][q]=="["){br0=1; res+="<span class='ge'>"; continue;}
		if(mms[ky][0][e][q]=="]" && br0==1){br0=0; res+="</span>"; continue;}
		res+=mms[ky][0][e][q];
		//if(mms[ky][0][e].charCodeAt(q)>0);else{break;}
	}
continue;	
}
if(e==1 && mms[ky][0][0]=="["){res+=mms[ky][0][e];}else{res+="　"+mms[ky][0][e];}
}e--;
if(gr==1){res+="</span>";}
return res;
}

function vypka(au0=0)
{var e=0, mas1=['',''], res="ura";
var if_=0;
for(x=0;mms[wn][0][x];x++,e++)
{
if(mms[wn][0][x]=="["){if_=1; e--;continue;}
if(mms[wn][0][x]=="("){break;}
if(mms[wn][0][x]=="]"){/*e--;*/ break;}
if(mms[wn][0][x]==1){ x++; //e--; continue;
var sl3='';
var br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
		if(mms[wn][0][x][q]=="("){br0=1; continue;}
		if(mms[wn][0][x][q]==")"){br0=0; continue;}
		if(mms[wn][0][x][q]=="{"){br0=vyp(0,1); continue;}
		if(mms[wn][0][x][q]=="}"){br0=0; continue;}
		if(br0==1){continue;}
		if(mms[wn][0][x][q]=="["){ continue;}
		if(mms[wn][0][x][q]=="]"){ continue;}
		sl3+=mms[wn][0][x][q];
		//if(mms[wn][0][x].charCodeAt(q)>0);else{break;}
	}
mas1[e]=sl3; continue;
}
mas1[e]=mms[wn][0][x];
}e--;

if(au0==1){res=mas1[0];}else{res=mas1[ (vyp(0,e)) ];}
//if(if_==1){res="<span class='bl'>"+res+"</span>";}
//res=mas1;
return res;
}

function vsit(ky=1)
{
var e=0;//, res='';
if(mms[ky][1][e]==1){e++;}
var res=mms[ky][1][e++];
for(;mms[ky][1][e];e++)
{
if(mms[ky][1][e]==1){continue;}
if(mms[ky][1][e]=="("){res+=" ("+mms[ky][1][++e]; continue;}
res+="/"+mms[ky][1][e];
}e--;
if( vyp(0,1) ){res=wanakana.toKatakana(res);}
return res;
}

var allau=['',''], eau=0;
function allauf()
{eau=0;
for(x=0;mms[wn][1][x];x++,eau++)
{
if(mms[wn][1][x]=="("){break;}
if(mms[wn][1][x]==1){x++;eau--; continue;}
allau[eau]=mms[wn][1][x];
}eau--;
}
//var a = new Audio();
function sou0(k)
{var a = new Audio();
//var akan=mms[wn][0][0]; if(akan=="["){akan=mms[wn][0][1];}
var kan00=vypka(1);
//$(".transl").append("SFSDF"+wn+kan00);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
}

function sou(vo)
{
allauf();
if(eau>-1){ sou0(0); }
//$(".transl").append("SFSDF"+wn);
}

var chst=0;
function getLists()
{

for(x=1;x<=ek;x++)
{
	if(vp2[x][2]>pvt){continue;}
	if(vp2[x][1]<0){negativeList[med++]=x;}
	else{positiveList[ped++]=x;}
}
chst=goal/(med/2);
word();
}

var povmin=0, ppmm=0;
function pidb(){
	if(povmin*chst < tim-1)
	{
		for(x=0;x<99;x++)
		{
			wn = negativeList[ vyp(0,(med-1)) ];	
			if(repeated[wn]==1){continue;}
			repeated[wn]=1;
			break;
		}
	povmin++;}
	else {
		for(x=0;x<99;x++)
		{
			wn = positiveList[ vyp(0,(ped-1)) ];	
			if(repeated[wn]==1){continue;}
			repeated[wn]=1;
			break;
		}
	}
/*var bubu=0;
	for(x=0,ppmm=0;x<1000;x++)
	{
	wn = vyp( 1,ek );
	//wn = vyp( 1,(100) );
	
	for(y=1;y<tim;y++){	if(wn==bu[y]){bubu=1; ki0++; break;}	}
	if(bubu){bubu=0; continue;}
		
		if(vp2[wn][2]>pvt){ { ki0++; continue; } }
		if(vp2[wn][1]<0){povmin++;}
		else{ if(ppmm<7){ppmm++; continue;} }
	
	bu[tim]=wn;
	break;
	}*/
}
function word()
{
//var bubu=0;
	if(bul==0){bul=1;
	tim++;
	document.getElementById("ot").style.display = "none";
	document.getElementById("bss").style.display = "";

	///////////////
	
	for(x=0;x<99;x++)
	{
	pidb();
	if(vp2[wn][3]>1){ppp++; vp2[wn][3]--; ToCell(wn+1,'D',vp2[wn][3]);}else{break;}
	}
	
	if(yn[wn-1]);else{dod++;}
	$(".time").replaceWith("<p class='time'>"+tim+"("+povmin+") "+P+"-"+M+":<b>"+R+"</b>("+ppp+")</p>");
	if(tim<2){$(".time").append(" "+ek+"/"+ddk + "|" + med);}
	$(".num").replaceWith("<p class='num'>"+wn+":"+vp2[wn][1]+"/"+vp2[wn][3]+" ["+yn[wn-1]+"]("+dod+")</p>");
	$(".transl").replaceWith("<p class='transl'> </p>");
	$(".orig").replaceWith("<p class='orig'>"+vp2[wn][0]+"</p>");
	//var rre=swithk();
	//$(".transl").append(rre);
	
	}else{bul=0;
	document.getElementById("ot").style.display = "";
	document.getElementById("bss").style.display = "none";
	var rre=swithk();
	$(".transl").append(rre);
	}
}

function res(rrr)
{
	ToCell(wn+1,'A',vp2[wn][0]);
	if(rrr>0){P++; if(rrr==2){ToCell(wn+1,'D','2');}
	if(vp2[wn][1]<0){ToCell(wn+1,'B','0');}
	else{R++; ToCell(wn+1,'C',ostp++); ToCell(1,'C',ostp); ToCell(1,'D',pvt);}
	}
	else{ if(rrr<0){M++; ToCell(wn+1,'B','-1');} }
	
	word();
}

var main = function() {
"use strict";

sp00();

//endd();
//getTasks();
//word();

$("button.bss").on("click", function(event){ word(); });
$("button.pp").on("click", function(event){ res(2); });
$("button.bp").on("click", function(event){ res(1); });
$("button.bb").on("click", function(event){ res(0); });
$("button.bm").on("click", function(event){ res(-1); });

$("button.bsou").on("click", function(event){
	if(ifa==0){ifa=1; document.getElementById("bs").style.color = "blue"; sou();
	}else{ifa=0; document.getElementById("bs").style.color = "red"; a.pause(); a.currentTime = 0.0;}
});

};
$(document).ready(main);
