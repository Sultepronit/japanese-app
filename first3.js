var pp0=[0,0,0,0,0,0], pp1=[0,0,0,0,0,0], ima=0, max1=5;
var svs=[0,0,0], sps=[0,0,0];
var kps=0, kv0=0;
var sbs=[0,0,0];
var buly=[0,0], bue=0, bulyk=[0,0], buek=0;
var vp1=0, vm=0, vr=0, pp=0, pm=0, pr=0, pv=0, rp=0, rm=0, r05p=0, r05m=0;
var kvp1=0, kvm=0, kvr=0, kpp=0, kpm=0, kpr=0, kpv1=0, krp=0, krm=0;
var vyvbg=0, kvyvbg=0, rozbg=0, rozed=0, rozbg2=0, rozed2=0;
var np=0;
var ifsh=0, ifsh0=0, KK0=0, ifend=0;
var key1="";
var pxs=[0,0,0,0,0,0,0,0,0,0]; var zki=0;
var kfs00=0, AKS_=0, RKS=0;
var superK='';
var jooyxx=0;
var akan;//=mms[ae][0][0]; if(akan=="["){akan=mms[ae][0][1];}
var ae=2903;


function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

function reg()
{
var a1=-1, a2=-1;
for(x=0;x<9;)
{
if( (pp1[x]+1)<=pp0[x] ){ if(a1<0){a1=x;}
else{	if( (pp1[x]/pp0[x]) < (pp1[a1]/pp0[a1]) ){a1=x;} } }
if(x==max1){break;} x++;
if( (pp1[x]+1)<=pp0[x] ){ if(a2<0){a2=x;}
else{	if( (pp1[x]/pp0[x]) < (pp1[a2]/pp0[a2]) ){a2=x;} } }
if(x==max1){break;} x++;
}
if(a1== -1 ){ if(a2== -1){ifend=1;}else{a1=a2;} }
else{ if( ( pp1[a2]/pp0[a2] + (Math.random()/10) ) <= (pp1[a1]/pp0[a1]) ){a1=a2;} }
	
if(ifend==1){$("p.t1").append("end"); out();}
else{ ima=a1; pp1[ima]++;//$("p.t1").append( "ku");
$(".swi").replaceWith("<section class='swi'></section>");
//$("p.t1").append( ' '+(pp1[ima]/pp0[ima]) );
if(ima<2){tout();}
if(ima==2){rtout();}
if(ima>2){ if(ima==5){rtout2();}else{ktout();} }
}
}



var main = function()
{"use strict";
//mxK+=1;
mxK+=0.5;
pp0[0]=kv-2; 
pp0[3]=kkv; if(kkv>4){pp0[3]=5;}
pp0[4]=8; 

iprskr();
iprskr2();

if(zki<17){pp0[2]= Math.round( zki/4-0.5 );}else{pp0[2]=4;}
if(kfs00<6){pp0[5]= kfs00-1;}else{pp0[5]=5;}

pp0[1]=60-pp0[0]-pp0[2]-pp0[3]-pp0[4]-pp0[5]; 
if(pp0[1]<20){pp0[1]=20;}
kps=pp0[1]*4;
sppf();

/*pp0[0]=18;
pp0[1]=1;
pp0[3]=0;
pp0[4]=0;*/

$("p.t1").append(/*pp0[0]+", "+pp0[1]+"/"+*/" "+pp0);
//$(".t1").append(" "+ne+"/"+kps+" ");
iprsk();
$(".t1").append("<br><b>"+rozbg+"/"+rozed+"</b>");


if(zki<17){$(".t1").append("/"+zki+" // ");}
else{$(".t1").append("/16("+zki+") // ");}

//$(".t1").append(" | "+zki+" : "+pxs[0]+','+pxs[1]+','+pxs[2]+','+pxs[3]+','+pxs[4]+',');
//$(".t1").append(pxs[5]+','+pxs[6]+','+pxs[7]+','+pxs[8]);
$(".t1").append("<b>"+rozbg2+"/"+rozed2+"</b>("+kfs00+")<b>["+AKS_+"("+RKS+")]</b>");
 /*iprskr();*/ kanp0();
vyvbg=vb1(); //$("p.t1").append(", "+vyvbg);
//rozbg=rb1(); $(".t1").append(", <b>"+rozbg+"</b>");
//rozed=re1(); $(".t1").append(", <b>"+rozed+"</b>");
kvyvbg=kvb1(); //$("p.t1").append(", "+kvyvbg);

$(".mtab").append("<p class='os'>"+vypka()+"<br>"+vsika(ae)+"</p>");

reg();

$("button.bs").on("click", function(event){ show(); });
$("button.bs_").on("click", function(event){show(0); });
$("button.ba").on("click", function(event){ sou(ae); });
$("button.bre").on("click", function(event){ out(); });
$("button.bpp").on("click", function(event){ pmr(2); })
$("button.bp").on("click", function(event){ pmr(1); });
$("button.bm").on("click", function(event){ pmr(-1); });
$("button.bpm").on("click", function(event){ pmr(0.5); });

$("input").on("keypress", function(event){
if(event.keyCode == 49){sou(ae); } 
if(event.keyCode == 92){sou(ae); }
if(event.keyCode == 115){show(0); }
if(event.keyCode == 13){ key1=$("input").val();
for(;;){
if(key1=="m"){pmr(-1); break;}
if(key1=="l"){pmr(0.5); break;}
if(key1=="p"){pmr(1); break;} 
if(key1=="pp"){pmr(2); break;} 

if(key1=="p0"){chps('p',0);} if(key1=="p1"){chps('p',1);}
if(key1=="p2"){chps('p',2);} if(key1=="s0"){chps('s',0);}
if(key1=="s1"){chps('s',1);} if(key1=="s2"){chps('s',2);}
show();
break;
}

$("input").val("");
}
});


};

function pmr(a){
	for(;;){
	if(ima<2){pmrs(a); break;}
	if(ima==2){pmrr(a); break;}
	if(ima==5){pmrr2(a); break;}
	if(ima>2){pmrk(a); break;} 
	}
}

function res0()
{
var rs0="SV"+pp1[0]+" : "+ Math.round(pp1[0]/pp0[0]*100)+"% | ";
rs0+="+"+vp1+" -"+vm+" : <b>"+vr+'</b>';
rs0+=" / SP"+pp1[1]+" : "+ Math.round(pp1[1]/pp0[1]*100)+"% | ";
rs0+="+"+pp+" -"+pm+" : <b>"+pr+" (-"+pv+")</b>";
rs0+=" / SR"+pp1[2]+" : +"+rp+"("+r05p+") -"+rm+"("+r05m+")";

if(pp1[3]>0){rs0+="<br>KV"+pp1[3]+" : "+ Math.round(pp1[3]/pp0[3]*100)+"% | ";}
else{rs0+="<br>KV"+pp1[3]+" : 0% | ";}
rs0+="+"+kvp1+" -"+kvm+" : <b>"+kvr+'</b>';
rs0+=" / KP"+pp1[4]+" : "+ Math.round(pp1[4]/pp0[4]*100)+"% | ";
rs0+="+"+kpp+" -"+kpm+" : <b>"+kpr+" (-"+kpv1+")</b>";
rs0+=" / Kn"+pp1[5]+" : "+ Math.round(pp1[5]/pp0[5]*100)+"% | ";
rs0+=" / KS : +"+krp+" -"+krm;


$(".res").replaceWith("<p class='res'>"+rs0+"</p>");
}

function show(sh0=1)
{
if(ima==5){
if(ifsh0==0){ ifsh0=1;
kfroms2();
$(".slo2").append(vsika(ae)+" : "+vsit(ae)+" — "+mms[ae][2]);
$(".zk2").append(jooy[jooyxx][4]+" : "+jooy[jooyxx][3]);
}
}else
{
	
if(ifsh==0){ //if(sh0==1){ ifsh=1;
//if(ima<2){ if(sh0==1){ ifsh=1;
if(ima<3){ if(sh0==1){ ifsh=1;

if( vyp(0,1) ){$(".os").replaceWith("<p class='os'>"+vsika(ae)+"</p>");}
else{
$(".os").replaceWith("<p class='os'><span class='GO'>"+vsika(ae)+"</span></p>");}
$(".os").append("<img src='zobr/"+akan+".jpg' name='z"+akan+"'>");
//ipng(akan);

if(np==3){ $(".ps").append(mms[ae][2][0]); kfroms(); }
else{ /*$(".os").append(mms[ae][0][0]);*/ kfroms();} 

if(mms[ae][3][0]>0){ $(".mtab").append("<p class='examp'>"+fpr[(mms[ae][3][0])]+"</p>"); }//else{ $(".mtab").append("<p class='examp'>"+fpr[(1)]+"</p>"); }
ipng(akan);
}
//sou(ae);  if(ifsh0==0){ ifsh0=1; $(".ts").append(mms[ae][1][0]); }
sou(ae);  if(ifsh0==0){ ifsh0=1;
//$(".ts").append( wanakana.toKatakana( (vsit(ae)) ) ); 
$(".ts").append( vsit(ae) );
}

//ipng(akan);
}

if(ima>2){ if(sh0==1){ ifsh=1;
if(np==3){ $(".ik").append(mm[ae][4]+": <i>"+jooy[(mm[ae][5])][4]+"</i> "+mm[ae][1]);
$(".zk").append(mm[ae][3]); }
else{
$(".sk").append("<span class='tra'>"+jooy[(mm[ae][5])][1]+"</span>");
$(".sk").append("<span class='GO'>"+mm[ae][0]+"</span>"+mm[ae][0]);
$(".sk").append("<img class='k2' src='../kanji-wp/1"+mm[ae][0]+".gif' name='"+mm[ae][0]+"'>");kyos(mm[ae][0]);
//$(".sk").append(jooy[(mm[ae][5])][1]);
}
$(".key1").append(rad[(mm[ae][6])][0]);
//swithk(mm[ae][0],0,2);
swithk(ae,0,2);
} if(ifsh0==0){ ifsh0=1; $(".rk").append(mm[ae][2]); 
$(".key0").append(mm[ae][6]+": "+rad[ (mm[ae][6]) ][2]+" / ");
$(".key0").append(rad[ (mm[ae][6]) ][3]+" / "+rad[(mm[ae][6])][4]);}
}

}
} }

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
		if(mms[ky][0][e][q]=="{"){br0=1; res+="<span class='bl'>"; continue;}
		if(mms[ky][0][e][q]=="}" && br0==1){br0=0; res+="</span>"; continue;}
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

function kyos(ka)
{

var knom, erkon=0;
document.images[ka].onerror = function()
{	if(erkon==0){ erkon=1;
knom=ka.charCodeAt(0).toString(16).toUpperCase(); //$(".t1").append("/"+knom+"**");
document.images[ka].src="http://www.yosida.com/images/kanji/"+knom+".gif"; 
document.images[ka].border=1; }
}
}

function ipng(ka)
{var kaz="z"+ka;
var knom, erkon=0;
document.images[kaz].onerror = function(){
	if(erkon==0){ erkon=1; document.images[kaz].src="zobr/"+akan+".png"; }
}
}

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
var ka=mm[kn][0];
var kp0=0, kp0d='0';
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
		if(spk[y]==ka){if(ifdd){allsd[sled++]=x;}else{alls[sle++]=x;} break; }
	}ifdd=0;
}
bgs1=vyp(0,sle-1);
var lin1='';
//var lin1=vsikax(1);
//var lin1=vsika(1);
$(".swi").replaceWith("<section class='swi'><p class='kp0'></p></section>");
for(x=0;x<sle;x++,bgs1++)
{
if(bgs1==sle){bgs1=0;}
if(alls[bgs1]==ous){continue;}
lin1+="<p class='sl'>";
if(kaj>0){ lin1+=vsika( alls[bgs1] )+" : ";}
lin1+=vsit( alls[bgs1] );
lin1+=" — "+mms[ alls[bgs1] ][2]+"</p>";
if(vp[ alls[bgs1] ][9]==0){kp0d+='+3'; kp0+=3;}
if(vp[ alls[bgs1] ][9]==1){kp0d+='+2'; kp0+=2;}
if(vp[ alls[bgs1] ][9]==2){kp0d+='+1'; kp0+=1;}
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
$(".swi").append(lin1);
if(kp0<0){kp0=0;kp0d+='~0';}else{kp0d+='='+kp0;}
if(ous==0){vpk[kn][6]=kp0; $(".kp0").append(kp0d); }
}
/*
function swithk(kn,ous=0,kaj=1)
{
var ka=mm[kn][0];
var kp0=0, kp0d='0';
var spk;
alls=[0,0]; sle=0;
for(x=1;x<kss;x++)
{spk=vsika(x);
	for(y=0;spk[y];y++)
	{ if(spk[y]==ka){alls[sle++]=x; break; } }
}
bgs1=vyp(0,sle-1);
var lin1='';
$(".swi").replaceWith("<section class='swi'><p class='kp0'></p></section>");
for(x=0;x<sle;x++,bgs1++)
{
if(bgs1==sle){bgs1=0;}
if(alls[bgs1]==ous){continue;}
lin1="<p class='sl'>";
if(kaj>0){ lin1+=vsika( alls[bgs1] )+" : ";}
lin1+=vsit( alls[bgs1] );
lin1+=" — "+mms[ alls[bgs1] ][2]+"</p>";
if(vp[ alls[bgs1] ][9]==0){kp0d+='+3'; kp0+=3;}
if(vp[ alls[bgs1] ][9]==1){kp0d+='+2'; kp0+=2;}
if(vp[ alls[bgs1] ][9]==2){kp0d+='+1'; kp0+=1;}
$(".swi").append(lin1);
}
if(kp0<0){kp0=0;kp0d+='~0';}else{kp0d+='='+kp0;}
if(ous==0){vpk[kn][6]=kp0; $(".kp0").append(kp0d); }
}
*/


var allau=['',''], eau=0;
function allauf()
{eau=0;
//var mas1=['',''];//, res="ura";
for(x=0;mms[ae][1][x];x++,eau++)
{
if(mms[ae][1][x]=="("){break;}
if(mms[ae][1][x]==1){x++;eau--; continue;}
allau[eau]=mms[ae][1][x];
}eau--;
//res=mas1[ (vyp(0,e)) ];//+' '+e;
//return res;
}
var a = new Audio();
function sou0(k)
{var a = new Audio();
var a2= new Audio();
a.src="sound/"+allau[k]+'.mp3';
a.play();
a.onended = function(){ if(k<eau){sou0(++k);} }
a.onerror = function(){
var kan00=vypka(1);
a.src='http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='+allau[k]+'&kanji='+kan00;
a.play();
//if(a.currentTime>1){a.currentTime=5;}
}
//a.load();
}
function sou(vo)
{
allauf();
if(eau>-1){ sou0(0); /*alert(a.duration);
if(a.currentTime>1){a.currentTime=5;} 
a.play();*/
}
}

function out()
{
var ores="<div contenteditable class='ree'>";
ores+='kv='+kv+'; kpv='+kpv+'; mxp='+mxp+'; ';
ores+='psn='+psn+'; psk2='+psk2+'; mxK='+mxK+'; vp=[ ';
for(x=0;x<kss;x++)
{
ores+='['+vp[x][0]+', '+vp[x][1]+','+vp[x][2]+', '+vp[x][3]+','+vp[x][4];
ores+=', '+vp[x][5]+','+vp[x][6]+', '+vp[x][7]+','+vp[x][8]+', '+vp[x][9];
ores+=', '+vp[x][10]+', '+vp[x][11]+', "'+mms[x][0]+'"],<br>';
}
ores+=('];</div>');
$(".resout").append(ores);
ores="<div contenteditable class='ree'>";
ores+='kkv='+kkv+'; Kpv='+Kpv+'; mxpk='+mxpk+'; ';
ores+='psk1='+psk1+'; '+'vpk=[ ';
for(x=0;x<ks;x++)
{
ores+='['+vpk[x][0]+', '+vpk[x][1]+','+vpk[x][2]+', '+vpk[x][3]+','+vpk[x][4];
ores+=', '+vpk[x][5]+', '+vpk[x][6]+', "'+mm[x][0]+'"],<br>';
}
ores+=('];</div>');
$(".resout").append(ores);
}

function out2()
{// form java array
var ores="<div contenteditable class='ree'>";
ores+='public static String[][][] words0 = {<br>';
//for(x=1;x<kss;x++)
//for(x=200;x<300;x++)
//for(x=1;x<300;x++)
//for(x=250;x<500;x++)
//for(x=500;x<750;x++)
for(x=700;x<kss;x++)
{
	//ores += '{ {"' + mms[x][0] + '"} },<br>';
	ores += '<p>{ {';
		for(y = 0; y < 22; y++) {
			if(mms[x][0][y] > ""); else {break;}
			if(mms[x][0][y] == "]") {break;}
			ores += '"' + mms[x][0][y] + '", ';
		}
	ores += '}, {';
		for(y = 0; y < 22; y++) {
			if(mms[x][1][y] > ""); else {break;}
			//if(mms[x][1][y] == "]") {break;}
			ores += '"' + mms[x][1][y] + '", ';
		}
	ores += '}, {"<x>' + mms[x][2][0].replace(/</g, '&lt;').replace(/>/g, '&gt;') + '"';
	ores += '}, {"<x>' + mms[x][3][0] + '"';
	//ores += '} },<br>';
	ores += '} },</p>';
/*ores+='['+vp[x][0]+', '+vp[x][1]+','+vp[x][2]+', '+vp[x][3]+','+vp[x][4];
ores+=', '+vp[x][5]+','+vp[x][6]+', '+vp[x][7]+','+vp[x][8]+', '+vp[x][9];
ores+=', '+vp[x][10]+', '+vp[x][11]+', "'+mms[x][0]+'"],<br>';*/
}
ores+=('};</div>');
$(".resout").append(ores);
}

$(document).ready(main);
