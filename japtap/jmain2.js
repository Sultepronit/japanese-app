var ed=20;
var wn = 0;
var ssp = [0,0,0], ssm = [0,0,0];
var ped=0, med=0;
var sbs = [0,0,0];
var tim = 0;
var bul = 0;
var ifa = 0;
var np = 0;
var a = new Audio();
var bu = [0,0,0];
var shsh=0;
var ostp=1000, pvt=100;
var P=0, M=0, R=0;

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

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

var povmin=0;
var chst=0;
function spys()
{

for(x=1;x<kss;x++)
{
	if(vp2[x][4]>pvt){continue;}
	if( (vp2[x][1]<0 || vp2[x][3]<0) || vp2[x][2]<0 ){ssm[med++]=x;}
	else{ssp[ped++]=x;}
}
chst=ed/(med/2);
//chst=ped;
word();
}

//var povmin=0, ppmm=0;
function word()
{
var bubu=0;
	if(bul==0){bul=1; np=0;//np=vyp(0,1);
	tim++;
	document.getElementById("ot").style.display = "none";
	document.getElementById("bss").style.display = "";
	///////////////
	for(x=0;x<99;x++)
	{
		wn = ssp[ vyp(0,(ped-1)) ];	
		if(sbs[wn]==1){continue;}
		sbs[wn]=1;
		break;
	}
	if(povmin*chst<R)
	{
		for(x=0;x<99;x++)
		{
			wn = ssm[ vyp(0,(med-1)) ];	
			if(sbs[wn]==1){continue;}
			sbs[wn]=1;
			break;
		}
	povmin++;}

	if(vp2[wn][1]>0&&vp2[wn][2]>=0){np=1;}else{np=0;}
	////////////////
	//ToCell(wn+1,'C',vp[wn][np+1]);
	//if(vp2[wn][0]);else{ ToCell(1,'A',mms[wn][0]); }
	//ToCell(1,'A',mms[wn][0]); 
	$(".time").replaceWith("<p class='time'>"+tim+"("+povmin+") "+P+"-"+M+"/<b>"+R+"</b></p>");
	//$(".time").replaceWith("<p class='time'>"+tim+"("+ostp+")"+"</p>");
	if(tim<2){$(".time").append(" "+kss+"/"+med);}
	//if(tim<2){$(".time").append(" "+ostp);}
	$(".num").replaceWith("<p class='num'>"+wn+" : "+vp2[wn][1]+"/"+vp2[wn][2]+"/"+vp2[wn][3]+"</p>");
	$(".transc").replaceWith("<p class='transc'> </p>");
		if(np==0){
		$(".orig").replaceWith("<p class='orig'>"+vypka(wn)+"</p>");
		$(".transl").replaceWith("<p class='transl'> </p>");
		}
		else{
		$(".orig").replaceWith("<p class='orig'> </p>");
		$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
		}
		
	//$(".transl").replaceWith("<p class='transl'>"+vp2[8]+mms[8]+"</p>");
	
	}else{bul=0;
	document.getElementById("ot").style.display = "";
	document.getElementById("bss").style.display = "none";
	$(".transc").replaceWith("<p class='transc'>"+vsit(wn)+"</p>");
	$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");
		if(np==0){
		//$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
		shsh=1;
		}
		else{
		//$(".orig").replaceWith("<p class='orig'>"+vsika(wn)+"</p>");
		}
	if(ifa){ sou(); }
	}
}

function res(rrr)
{
if(vp2[wn][5]==''){vp2[wn][5]=0;}
if(vp2[wn][6]==''){vp2[wn][6]=0;}

	if(shsh)
	{
	if(rrr>0){ }
	else{
		if(rrr<0){P--;}
		vp2[wn][5]=-1;
		}
	vp2[wn][2]+=rrr;
	if(vp2[wn][2]<-1){vp2[wn][2]=-1;}
	else
	{
		if(vp2[wn][2]>1){vp2[wn][2]=1;}
		else{ if(rrr){ToCell(wn+1,'C',vp2[wn][2]);} }
	}

	$(".transl").replaceWith("<p class='transl'>"+mms[wn][2]+"</p>");
	if(ifa){ sou(); }
	shsh=0;
	}
	else
	{
	ToCell(wn+1,'A',mms[wn][0]); if(rrr>0){P++;}else{ if(rrr<0){M++;} }
	if(np==0){vp2[wn][1]+=rrr;
		if(vp2[wn][1]<-1){vp2[wn][1]=-1;}
		if(vp2[wn][1]>1){vp2[wn][1]=1;}
		if(vp2[wn][1]<1){ToCell(wn+1,'C','0');}
		if(rrr>0){vp2[wn][5]++;}else{ if(rrr<0){vp2[wn][5]=-2;} }
		ToCell(wn+1,'F',vp2[wn][5]);
	}
	else{
		vp2[wn][3]+=rrr; if(vp2[wn][3]<-1){vp2[wn][3]=-1; /*ToCell(wn+1,'B',0);*/} 
		if(rrr>0){vp2[wn][6]++;}else{ if(rrr<0){vp2[wn][6]=-2;} }
		ToCell(wn+1,'G',vp2[wn][6]);
		}
	
	if( (vp2[wn][1]>0/*&&vp2[wn][2]>0*/)&&vp2[wn][3]>0 )
	{ ToCell(wn+1,'E',ostp++); ToCell(1,'E',ostp); R++;
		if( (kss-ostp+pvt)<(2000) ){pvt+=10; ToCell(1,'A',pvt);}
	ToCell(wn+1,'B',0); ToCell(wn+1,'C',0); ToCell(wn+1,'D',0);}
	else{
	if(rrr){ if(np==0){ ToCell(wn+1,'B',vp2[wn][1]); }else{ ToCell(wn+1,'D',vp2[wn][3]); } }
	}
	
	word();
	}
}

var main = function() {
"use strict";

endd();
//getTasks();
//word();

$("button.bss").on("click", function(event){ word(); });
$("button.bp").on("click", function(event){ res(1); });
$("button.bb").on("click", function(event){ res(0); });
$("button.bm").on("click", function(event){ res(-1); });

$("button.bsou").on("click", function(event){
	if(ifa==0){ifa=1; document.getElementById("bs").style.color = "blue"; sou();
	}else{ifa=0; document.getElementById("bs").style.color = "red"; a.pause(); a.currentTime = 0.0;}
});

};
$(document).ready(main);