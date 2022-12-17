var spsk=['','']; esk=0;
function vb1()
{ x=0; for(;;x++){if(vp[x][0]==0){break;} }
return x; }

function iprsk()
{
//kv=0; kpv=0;
var r51=0, r52=0, r53=0;
var r61=0, r62=0, r63=0;
var pri=[0,0,0];
for(x=1;x<kss;x++)
{
//if(vp[x][0]>0 && vp[x][0]<=mxp){kpv++;}
if(vp[x][5]>0){r51++;}
if(vp[x][5]>1){r52++;}
if(vp[x][5]>2){r53++;}
if(vp[x][6]>0){r61++;}
if(vp[x][6]>1){r62++;}
if(vp[x][6]>2){r63++;}
if(vp[x][9]==0){pri[0]++;}
if(vp[x][9]==1){pri[1]++;}
if(vp[x][9]==2){pri[2]++;}
allKS(x);
}

$(".t1").append(" / "+r53+", "+r52+', '+r51+':'+Math.round(r51/(kss-20)*1000)/10+"%" );
$(".t1").append("<br>"+pri+" / ");
$(".t1").append(r63+", "+r62+', '+r61+':'+Math.round(r61/(kss-200)*1000)/10+"%" );
}

var ne=0, pe=0;
var repeatAllPositive = [];
var firstRepeat = [];
var firstRepeatCount = 0;
function sppf()
{
kv=0; kpv=0;
//var sps0=[0,0,0];
var sp00=[0,0,0];

for(x=1;x<kss;x++)
{
	if(vp[x][0] > mxp) {
		if(vp[x][5] > 0) continue;
		//console.log(x);
		rozp.push(x);
		continue;
	}
	//if(vp[x][0]>mxp){continue;}
	if(vp[x][0]==0){svs[kv]=x; kv++;}
	else {
			kpv++;
			if(vp[x][0] == 1) {
				firstRepeat.push(x);
				continue;
			}
			
			if(vp[x][3]<0 || vp[x][4]<0) {
				sps[ne++]=x;
			} else {
				repeatAllPositive.push(x);
			}	
		}
	}
	kv0=kv;
	firstRepeatCount = Math.round(firstRepeat.length / 10);
	//if(firstRepeatCount > 10) firstRepeatCount = 10;
	$(".t1").append("("+ne+")");
	$(".t1").append("(" + firstRepeat.length + ":" + firstRepeatCount + ")");
	//console.log(sps);
	
	//rozp.splice(16,1);
	//rozp.splice(16);
	//console.log(svs);
	console.log(rozp);
	//alert(kps);

}

function toRepeatList() {
	//console.log(repeatAllPositive);
	console.log(sps);
	console.log(firstRepeat);
	console.log(ne);
	var firstRepeatUntil = ne + firstRepeatCount * 4;
	for(;ne < firstRepeatUntil;)
	{
		ae = vyp(0, firstRepeat.length - 1);
		sps[ne] = firstRepeat[ae];
		firstRepeat.splice(ae, 1);
		ne++;
	}
	for(;ne<kps;)
	{
		ae = vyp(0, repeatAllPositive.length - 1);
		sps[ne] = repeatAllPositive[ae];
		repeatAllPositive.splice(ae, 1);
		ne++;
	}
	//console.log(repeatAllPositive);
	console.log(sps);
	for(var i = 0; i < sps.length; i++) {
		if(vp[ sps[i] ][0] == 1) {
			//console.log(sps[i] + ": " + 1);
			console.log(1);
		}
	}
}

var ppmm=0;
/*function slov(b,e,k)
{ppmm=0;
ae=vyp(b,e);
for(br=0,x=0;br==0;ae++,x++){
if(x>5){ae=vyp(b,e); x=0;}
if(ae==e){ae=b;}
if(vp[ae][0]==k || (vp[ae][0]<k && vp[ae][0]) ){//break;
	if(k>0 && ppmm<4){
		if(vp[ae][3]<0 || vp[ae][4]<0);else{ ppmm++;
		$(".re0").append("*"); continue; }
		}//povtormin
	for(x=0;;x++)	{	if(buly[x]==ae){ break;}
	if(x==bue){buly[x]=ae; bue++; ae--; br=1; break;}	}
}
}
return ae; }*/

var bubu=0;
function slov2()
{
var aa=0;
for(x=0;x<99;x++){
/*if(ima==0){ae = svs[ vyp(0,kv-1) ];}
else{ae = sps[ vyp(0,kps-1) ];}*/
if(ima==0){aa=vyp(0,kv0-1); ae=svs[aa];}
else{aa=vyp(0,kps-1); ae=sps[aa];}
if(sbs[ae]==1){continue;}
if(ae==bubu){continue;}
sbs[ae]=1; bubu=ae;
break;
}
$(".re0").append(ima+")"+aa+"/"+ae+" ");
return ae;
}

function Kfs0()
{
var onek="";
var vsi2=vsika(ae);
//var spsk=['','']; esk=0;
esk=0;
for(x=0; vsi2.charCodeAt(x)>0 ;x++)
{
if(vsi2[x]<="ー")continue;
	for(y=0;;y++){
	if(y==esk){spsk[esk++]=vsi2[x]; break;}
	if(spsk[y]==vsi2[x]){ break;} }
}

var kj0=['',''], kje=-1;
var kjL=['',''], Le=-1;
for(x=0;x<esk;x++)
{
	for(y=1;;y++)
	{
	if(y==ks){kj0[++kje]=spsk[x]; break;}
	if(spsk[x]==mm[y][0]){break;}
	}
}
for(x=0;x<=kje;x++)
{
	for(y=1;;y++)
	{
	if(y==2137){ break;}
	if(kj0[x]==jooy[y][0]){kjL[++Le]=kj0[x]; break;}
	}
}
var RK='';
if(Le>=0){RK=kjL[ (vyp(0,Le)) ];}else
{ if(kje>=0){RK=kj0[ (vyp(0,kje)) ];} }
KK0=1;
if(RK==''){show();}else{
var mtab = "<section class='mtab'>";
mtab+="<p class='os'>"+/*spsk+*/RK+"1<span class='GO'>"+RK+"</span></p>"
mtab+="</section>";
$(".mtab").replaceWith(mtab);
}


//return kj0;
//return kjL;
return RK;
}

function to3()
{
var mtab = "<section class='mtab'>";
mtab+="<p class='kanj'></p>";
if( vyp(0,1) ){ mtab+="<p class='os'>"+vypka()+"</p>" }
else{ mtab+="<p class='os'><span class='GO'>"+vypka()+"</span></p>" }
mtab+="<p class='ts'></p><p class='ps'></p>";
mtab+="</section>";
$(".mtab").replaceWith(mtab);
}

function tout()
{res0();
$(".re0").replaceWith("<p class='re0'></p>");
var ae=0;//slov(vyvbg,kss,ima); 
for(;;)
{
//if(ima==0){ae=slov(vyvbg,kss,0);}else{ae=slov(1,kss,mxp);}
ae=slov2();
console.log(ae);

if(vp[ae][3]>vp[ae][4]){np=4;}else{np=3;}
if(vp[ae][3]>2){np=3;}//supervyvtwennqa
//avtopovtorennqa
if(vp[ae][0]<5){break;}
if(vp[ae][5]<2){break;}
if(_kan(ae)){break;}
if(vp[ae][np+2]>2.1){vp[ae][np+2]=2.1;
vp[ae][np]++; pp+=0.1;
if(vp[ae][3]>0 && vp[ae][4]>0){pr+=0.1; mxp+=1;
vp[ae][0]=psn++; vp[ae][3]=0; vp[ae][4]=0;}
//$("p.re0").append(vsika(ae)+'   ');
slau="<p class='sl'>"+vsika(ae)+" — "+mms[ae][2][0];
slau+=" "+vp[ae][5]+" "+vp[ae][6]+"</p>";
$(".swi").append(slau);
continue; 
}
break;}

ifsh=0; ifsh0=0; KK0=0;
//$("p.t1").append(", "+ae);
//akan=mms[ae][0][0]; if(akan=="["){akan=mms[ae][0][1];}
akan=vypka(1);
da1="<p class='data'>"+ae+" : "+vp[ae][0]+" | "+vp[ae][3]+" "+vp[ae][4];
da1+=" | "+vp[ae][5]+" "+vp[ae][6]+"<b> | p"+vp[ae][9]+" s"+vp[ae][10]+" </b>";
da1+="<button class='p0'>p0</button><button class='p1'>p1</button>";
da1+="<button class='p2'>p2</button> <button class='s0'>s0</button>";
da1+="<button class='s1'>s1</button><button class='s2'>s2</button>";
da1+="</p>";
$("p.data").replaceWith(da1);
$(".p0").on("click", function(event){chps('p',0)} );
$(".p1").on("click", function(event){chps('p',1)} );
$(".p2").on("click", function(event){chps('p',2)} );
$(".s0").on("click", function(event){chps('s',0)} );
$(".s1").on("click", function(event){chps('s',1)} );
$(".s2").on("click", function(event){chps('s',2)} );

var mtab = "<section class='mtab'>";
mtab+="<p class='kanj'></p>";
//if(vp[ae][3]>vp[ae][4]){np=4;
if(np==4){
mtab+="<p class='os'>"+"<img src='zobr/"+akan+".jpg' name='z"+akan+"'></p>";
mtab+="<p class='ts'></p>";
mtab+="<p class='ps'>"+mms[ae][2][0]+"</p>";
mtab+="</section>";
$(".mtab").replaceWith(mtab);
}
else{//np=3;
//Kfs0();//
if( vyp(0,1) ){ mtab+="<p class='os'>"+vypka()+"</p>" }
else{ mtab+="<p class='os'><span class='GO'>"+vypka()+"</span></p>" }
mtab+="<p class='ts'></p><p class='ps'></p>";

mtab+="</section>";
$(".mtab").replaceWith(mtab);
}
/*mtab+="</section>";
$(".mtab").replaceWith(mtab);*/
if(np==4){ipng(akan);}
}

function chps(ps='',k=0)
{ $(".data").append(ps+k);
if(ps=='p'){ vp[ae][9]=k; }
if(ps=='s'){ vp[ae][10]=k; }
}

function vypka(au0=0)
{var e=0, mas1=['',''], res="ura";
var if_=0;
for(x=0;mms[ae][0][x];x++,e++)
{
if(mms[ae][0][x]=="["){if_=1; e--;continue;}
if(mms[ae][0][x]=="("){break;}
if(mms[ae][0][x]=="]"){/*e--;*/ break;}
if(mms[ae][0][x]==1){ x++; //e--; continue;
var sl3='';
var br0=0;
	for(q=0;q<100;q++)
	{	
		if(mms[ae][0][x].charCodeAt(q)>0);else{break;}
		if(mms[ae][0][x][q]=="("){br0=1; continue;}
		if(mms[ae][0][x][q]==")"){br0=0; continue;}
		if(mms[ae][0][x][q]=="{"){br0=vyp(0,1); continue;}
		if(mms[ae][0][x][q]=="}"){br0=0; continue;}
		if(br0==1){continue;}
		if(mms[ae][0][x][q]=="["){ continue;}
		if(mms[ae][0][x][q]=="]"){ continue;}
		sl3+=mms[ae][0][x][q];
		//if(mms[ae][0][x].charCodeAt(q)>0);else{break;}
	}
mas1[e]=sl3; continue;
}
mas1[e]=mms[ae][0][x];
}e--;
if(au0==1){res=mas1[0];}else{res=mas1[ (vyp(0,e)) ];}
//res=mas1[ (vyp(0,e)) ];//+' '+e;
//if(if_==1){res="<span class='bl'>"+res+"</span>";}
//res=mas1;
return res;
}

function pmrs(a)
{if(ifend==0){
	
if(a==2){ if(ima==1){vp[ae][np+2]++; rp++;}
else{ /*if(vp[ae][3]+vp[ae][4]>=0){
		if(vp[ae][np+2]<1){vp[ae][np+2]+=0.5; r05p+=0.5;}
		};*/		
if(vp[ae][np+2]<1){vp[ae][np+2]++; r05p++;}
if(vp[ae][np+2]>1){vp[ae][np+2]=1;}
}

}
else{ if(vp[ae][np+2]>0) { vp[ae][np+2]--; rm++; /*if(ima==1){vp[ae][np+2]--; rm++;}else{vp[ae][np+2]-=0.5; r05m+=0.5;}*/ }
	if(vp[ae][np+2]>1){vp[ae][np+2]=1;} }
	
if(a>0){
if(a<1){;}
else
{
vp[ae][np]++;
if(ima==0){
	vp1++;
	if(vp[ae][3]>1 && vp[ae][4]>1 && vp[ae][5]>0)//supervyvtwennqa
	{vr++; kv--; mxp-=1; vp[ae][0]=1; vp[ae][3]=0; vp[ae][4]=0;}
	if( (ae<kss-50)*(vp[ae][3]>0)*(vp[ae][4]>0)*(vp[ae][5]>0) )//supervyvtwennqa
	{vr++; kv--; mxp-=1; vp[ae][0]=1; vp[ae][3]=0; vp[ae][4]=0;}
} else {
	pp++;
	if(vp[ae][3]>0 && vp[ae][4]>0) {
		pr++;
		vp[ae][3]=0;
		vp[ae][4]=0; 
		if(vp[ae][0] == 1) {
			vp[ae][0] = 2;
		} else {
			mxp+=1;
			vp[ae][0]=psn++; 
		}
	}
}
}

}
else{ vp[ae][np]--;
if(ima==0){vm++;

if(ae>kss-50){
	if(vp[ae][3]+vp[ae][4]<1){ pp1[0]--; sbs[ae]=0; /*bue--;*/ }
}

if(vp[ae][3]<-1 || vp[ae][4]<-1){vp[ae][3]=0; vp[ae][4]=0;}
}
else{pm++;

if(vp[ae][3]<-1 || vp[ae][4]<-1)
{vp[ae][0]=0; vp[ae][3]=0; vp[ae][4]=0; pv++; mxp+=1; kv++;}
}
}

repe(); reg(); res0();
}}

function repe()
{
re1="<p class='repeat'>"+ae+" : "+vp[ae][0]+" | "+vp[ae][3]+" "+vp[ae][4];
re1+=(" | "+vp[ae][5]+" "+vp[ae][6]+" | p"+vp[ae][9]+" s"+vp[ae][10]);
re1+=(" / "+mms[ae][0]+" : "+mms[ae][1]+" – "+mms[ae][2][0]+"</p>");
$("p.repeat").replaceWith(re1);
}

function swi0(x,sssl=0){
var ka=spsk[x];
var lin1='';
$(".swi").replaceWith("<section class='swi'></section>");
var spk;
for(x=1;x<kss;x++)
{spk=vsika(x);
	if(x==sssl){continue;}
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
function kfroms()
{
if(KK0==0)
{
var onek="";
var vsi2=vsika(ae);
//var spsk=['','']; esk=0;
esk=0;
for(x=0; vsi2.charCodeAt(x)>0 ;x++)
{
if(vsi2[x]<="ー")continue;
	for(y=0;;y++){
	if(y==esk){spsk[esk++]=vsi2[x]; break;}
	if(spsk[y]==vsi2[x]){ break;} }
//PERENESENO U FUNKTSIJU Kfs0
}
}
var kaka="*";
for(x=0;x<esk;x++){
kaka=spsk[x];
$(".os").append("<img class='kan' src='../kanji-wp/1"+spsk[x]+".gif' name='"+spsk[x]+"'>");
//$(".swi").append(x+"*");
kyos(spsk[x]);
//$(".swi").append(x+"*");
}
//$(".swi").append(spsk+" "+esk);

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
