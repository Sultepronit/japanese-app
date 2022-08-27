var pp0=[0,0], pp1=[0,0], ima=0, max1=1;
var buly=[0,0]; bue=0;
var vp1=0, vm=0, vr=0, pp=0, pm=0, pr=0, pv=0, rp=0, rm=0;
var vyvbg=0;
var np=0;
var ifsh=0, ifend=0;
var key1="";

function vyp(b,e){ return( Math.round(Math.random()*(e-b))+b); }

function res0()
{
var rs0="V"+pp1[0]+" : "+ Math.round(pp1[0]/pp0[0]*100)+"% | ";
rs0+="+"+vp1+" -"+vm+" : <b>"+vr+'</b>';
rs0+=" / P"+pp1[1]+" : "+ Math.round(pp1[1]/pp0[1]*100)+"% | ";
rs0+="+"+pp+" -"+pm+" : <b>"+pr+" (-"+pv+")</b>";
rs0+=" / R : +"+rp+" -"+rm;
$(".res").replaceWith("<p class='res'>"+rs0+"</p>");
}

function slov(b,e,k)
{ae=vyp(b,e);
for(br=0,x=0;br==0;ae++,x++){
if(x>1){ae=vyp(b,e); x=0;}
if(ae==e){ae=b;}
if(vpf[ae][0]==k || (vpf[ae][0]<k && vpf[ae][0]) ){
	for(x=0;;x++)	{	if(buly[x]==ae){ break;}
	if(x==bue){buly[x]=ae; bue++; ae--; br=1; break;}	}
}
}
return ae; }

function show(sh0=1)
{
if(sh0==1){
if(ifsh==0){ifsh=1;
//if(np==2){$(".ps").append("ku!");}
var mtab = "<section class='mtab'>";
mtab+="<p class='kanj'></p>";
mtab+="<div class='of'><p class='ft'></p>"; 
var newr='';
var ifd=0;
for(x=2;x<77;x++)
{
if(mmf[ae][x]==";"){break;}
if(mmf[ae][x]=="="){ if(np==1){break;} ifd=1; continue;}
if(np==2 && ifd==0){continue;}
if(mmf[ae][x]=="!"){continue;}
newr+=mmf[ae][x]+' ';
}
mtab+="</p>"; 
mtab+="</section>";
//$(".mtab").replaceWith(mtab);
if(np==2){$(".ps").replaceWith("<p class='ps'>"+newr+"</p>");}
else{
if(ifgo){newr="<div class='of'><span class='GO'><p class='ft'></p>"+newr+"</span></div>";}
else{newr="<div class='of'><p class='ft'></p>"+newr+"</div>";}
$(".of").replaceWith(newr);}
kfromf();
} }
else{ if(ifsh==1 || np==2){$(".ft").append(mmf[ae][0]);}
		else{$(".ft").append(mmf[ae][1]); }
}
}

function repe()
{
re1="<p class='repeat'>"+ae+" : "+vpf[ae][0]+" | "+vpf[ae][1]+" "+vpf[ae][2];
re1+=(/*" | "+vp[ae][5]+" "+vp[ae][6]+*/" / ");
re1+=(mmf[ae][2]/*+" – "+mms[ae][2]*/+"</p>");
$("p.repeat").replaceWith(re1);
}

function out()
{
var ores="<div contenteditable class='ree'>";
ores+='fkv='+fkv+'; fkp='+fkp+'; mxpf='+mxpf+'; ';
ores+='psf1='+psf1+'; '+'vpf=[ ';
for(x=0;x<ksf;x++)
{
ores+='['+vpf[x][0]+', '+vpf[x][1]+', '+vpf[x][2]+', '+vpf[x][3];//+', '+vp[x][4];
//ores+=', '+vp[x][5]+', '+vp[x][6]+', '+vp[x][7]+', '+vp[x][8]+', '+vp[x][9];
ores+=/*', '+vp[x][10]+', "'+mms[x][0]+*/'],<br>';
}
ores+=('];</div>');
/*document.write('];</div></td>');*/
$(".resout").append(ores);
}

var main = function()
{"use strict";
pp0[0]=Math.round(fkv/4);
pp0[1]=30-pp0[0];//Math.round(kpv/15);
//pp0[0]=1;
fkp=0;
for(var x=1;x<ksf;x++){ if(vpf[x][0]>0 && vpf[x][0]<mxpf){fkp++;} }
$("p.t1").append(pp0[0]+", "+pp0[1]+"<br>"+fkp);



vyvbg=vb1(); //$("p.t1").append(", "+vyvbg);



mvyv();

$("button.bs").on("click", function(event){ show(); });
$("button.bs_").on("click", function(event){show(0); });
$("button.bre").on("click", function(event){ out(); });
$("button.bpp").on("click", function(event){ pmr(2); })
$("button.bp").on("click", function(event){ pmr(1); });
$("button.bm").on("click", function(event){ pmr(-1); });
$("button.bpm").on("click", function(event){ pmr(0.5); });

$("input").on("keypress", function(event){
if(event.keyCode == 115){show(0); }
if(event.keyCode == 13){ key1=$("input").val();
for(;;){
if(key1=="m"){pmr(-1); break;}
if(key1=="l"){pmr(0.5); break;}
if(key1=="p"){pmr(1); break;} 
if(key1=="pp"){pmr(2); break;} 
show();
break;
}

$("input").val("");
}
});

};

function vb1()
{ x=1; for(;;x++){if(vpf[x][0]==0){break;} }
return x; }

function mvyv()
{
var a1=-1, a2=-1;
for(x=0;;)
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
else{ ima=a1; pp1[ima]++;
$(".swi").replaceWith("<section class='swi'></section>");
tout();
}
}

var ifgo;
function tout()
{res0();
$(".re0").replaceWith("<p class='re0'></p>");
var ae=0;
if(ima==0){ae=slov(vyvbg,ksf,0);}else{ae=slov(1,ksf,mxpf);}
ifsh=0;

da1="<p class='data'>"+ae+" : "+vpf[ae][0]+" | "+vpf[ae][1]+" "+vpf[ae][2];
da1+=(/*" | "+vpf[ae][5]+" "+vpf[ae][6]+*/"</p>");
$("p.data").replaceWith(da1);

ifgo=vyp(0,1); 
var mtab = "<section class='mtab'>";
mtab+="<p class='kanj'></p>";
if(vpf[ae][1]<vpf[ae][2]){np=1;
if(ifgo==0){mtab+="<div class='of'><p class='ft'></p>"; }
else{mtab+="<div class='of'><span class='GO'><p class='ft'></p>"; }
var ifd=0;
for(x=2;x<77;x++)
{
if(mmf[ae][x]==";"){break;}
if(mmf[ae][x]=="="){ if(ifgo==0);else{mtab+="</span>";}
mtab+="</div><p class='ps'>"; ifd=1; continue;}
if(mmf[ae][x]=="!"){
if(ifd==1){continue;}else{mtab+=" ### ";x++;continue;}
}

mtab+=mmf[ae][x]+" ";
}
mtab+="</p>"; 

/*mtab+="<p class='os'><img src='zobr/"+mms[ae][0]+".png'></p>";
mtab+="<p class='ps'>"+mms[ae][2]+"</p>";*/
}
else{np=2; 
//mtab+="<div class='of'><p class='ft'></p>"; 
if(ifgo==0){mtab+="<div class='of'><p class='ft'></p>"; }
else{mtab+="<div class='of'><span class='GO'><p class='ft'></p>"; }
var ifd=0;
for(x=2;x<77;x++)
{
if(mmf[ae][x]==";"){break;}
if(mmf[ae][x]=="="){ if(ifgo==0);else{mtab+="</span>";}
	mtab+="</div><p class='ps'>"; ifd=1; continue;}
if(mmf[ae][x]=="!"){
if(ifd==0){continue;}else{mtab+=" ### ";x++;continue;}
}
mtab+=mmf[ae][x];
}
mtab+="</p>"; 
//mtab+="<p class='os'>"+mms[ae][0]+"</p><p class='ps'></p>"; 
}

mtab+="</section>";
$(".mtab").replaceWith(mtab);
}

function pmr(a)
{if(ifend==0){
if(a>0.5){ vpf[ae][np]++; if(ima==0){vp1++; }else{pp++; }  }
if(a<0){ vpf[ae][np]--;
if(ima==0){vm++; /*pp1[0]--; bue--;*/ }else{pm++;}   }
if(a==0.5){
if(np==1){ vpf[ae][1]+=0.3; if(ima==0){vp1+=0.1; }else{pp+=0.1; } }
else{ vpf[ae][2]-=0.3; if(ima==0){vm+=0.1; }else{pm+=0.1;} } 


}

if(ima==0){
if(vpf[ae][1]>1.9 && vpf[ae][2]>1.5){vr++; fkv--; mxpf--;
vpf[ae][0]=1; vpf[ae][1]=0; vpf[ae][2]=0;}

if(vpf[ae][1]+vpf[ae][2]<-1){vpf[ae][1]=0; vpf[ae][2]=0;}
}
else{ if(vpf[ae][1]>0.9 && vpf[ae][2]>0.3){pr++; mxpf++;
vpf[ae][0]=psf1++; vpf[ae][1]=0; vpf[ae][2]=0;}

if(vpf[ae][1]+vpf[ae][2]<-1)
{vpf[ae][0]=0; vpf[ae][1]=0; vpf[ae][2]=0; pv++; mxpf++; fkv++;}
}

/*if(a==2){ if(ima==1){vp[ae][np+2]++; rp++;}
else{ if(vp[ae][3]+vp[ae][4]>0){vp[ae][np+2]+=0.5; rp+=0.1;}; }
}
else{ if(vp[ae][np+2]>0) { if(ima==1){vp[ae][np+2]--; rm++;}
	else{vp[ae][np+2]-=0.5; rm+=0.1;} } }*/
repe(); mvyv(); res0();
}}

var spsk=['','']; esk=0;

function swi0(x){ 
var ka=spsk[x];
var lin1='';
$(".swi").replaceWith("<section class='swi'></section>");
var spk;
for(x=1;x<kss;x++)
{spk=vsika(x);
	for(y=0;spk[y];y++)
	{
		if(spk[y]==ka)
		{
		//$(".swi").append(mms[x]);
		//alls[sle++]=x;
			
		lin1="<p class='sl'>";
		lin1+=vsika( x )+" : ";
		lin1+=vsit( x );
		lin1+=" — "+mms[ x ][2]+"</p>";
		$(".swi").append(lin1);
		break;} 
	}
}
}
function kfromf()
{var onek="";
var vsi2='';//vsika(ae);
for(x=2;;x++)
{
	if(mmf[ae][x]=="="){break;}
	vsi2+=mmf[ae][x];
}

esk=0;
for(x=0; vsi2.charCodeAt(x)>0 ;x++)
{
if(vsi2[x]<="ー")continue;
	for(y=0;;y++){
	if(y==esk){spsk[esk++]=vsi2[x]; break;}
	if(spsk[y]==vsi2[x]){ break;} }
}

for(x=0;x<esk;x++){
	for(y=1;/*y<ks*/;y++)
	{
	if(y==ks){
		onek="<span class='onek' onMouseDown='swi0("+x+")'>"+spsk[x];
		for(z=0;z<2137;z++)
		{
		if(spsk[x]==jooy[z][0]){
		onek+=" : <i>"+jooy[z][4]+'</i>';
		break;}
		}
		onek+="?</sapn>";
		$(".kanj").append(onek); 
		break;
		}
	if(spsk[x]==mm[y][0]){
	onek="<span class='onek' onMouseDown='swithk("+y+","+ae+")'>";
	onek+=spsk[x]+" : <i>"+jooy[(mm[y][5])][4]+'</i> '+mm[y][1];
	onek+="</sapn>";
	$(".kanj").append(onek); 
	break;}
	
	}
}
}

var alls=[0,0], sle=0, bgs1=0;
function swithk(kn,ous=0,kaj=1)
{
var ka=mm[kn][0];
var kp0=0, kp0d='c0';
var spk;
alls=[0,0]; sle=0;
if(mm[kn][4]<7){kp0d='c1'; kp0=1;}
if(mm[kn][4]<4){kp0d='c2'; kp0=2;}
if(mm[kn][4]>9){kp0d='c-1'; kp0=-1;}
if(vpk[kn][5]>0){kp0d+='f'+vpk[kn][5]; kp0+=vpk[kn][5];}
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
if(vp[ alls[bgs1] ][9]==0){kp0d+='+6'; kp0+=6;}
if(vp[ alls[bgs1] ][9]==1){kp0d+='+3'; kp0+=3;}
if(vp[ alls[bgs1] ][9]==2){kp0d+='+1'; kp0+=1;}
$(".swi").append(lin1);
}
if(kp0<0){kp0=0;kp0d+='~0';}else{kp0d+='='+kp0;}
if(mm[kn][7]>0){kp0=mm[kn][7]; kp0d+='! ~'+kp0;}
if(mm[kn][7]<0){kp0+=mm[kn][7]; kp0d+='! ~'+kp0;}
//$(".kp0").append(ous);
if(ous==0){vpk[kn][6]=kp0; $(".kp0").append(kp0d); }
}
function vsika(ky=1)
{
var e=0, res=mms[ky][0][e++];
if(mms[ky][0][0]=="["){res+=mms[ky][0][e++]; }
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][e]=="]"){res+="]"; break;}
if(mms[ky][0][e]=="("){res+=" ("+mms[ky][0][++e]; continue;}
res+="/"+mms[ky][0][e];
}e--;
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
return res;
}


$(document).ready(main);