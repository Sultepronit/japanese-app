function vsika2(ky=1)
{
var e=0, res=mms[ky][0][e++];
for(;mms[ky][0][e];e++)
{
if(mms[ky][0][0]=="["){res=''; break;}
if(mms[ky][0][e]=="("){break;}
res+="/"+mms[ky][0][e];
}e--;
return res;
}

function _kan(ae)
{
var sl0=vsika2(ae), res=0;
for(x4=0; sl0[x4] ; x4++)
{	
	//if(sl0[x4]=='('){break;} jix bulo likvidovano u vsika2!!!
	//if(sl0[x4]=='['){break;}
	if(sl0[x4]=="･"){continue;}
	if(sl0[x4]=="２"){continue;}
	if(sl0[x4]>"ー")
	{
			for(y=0;;y++)
			{
			if(y==ks){res=1; break;}
			if(sl0[x4]==mm[y][0][0]){break;}
			}
			if(res==1){break;}
	}
}
return res;
}

function allKS(ae)
{var r=0;
for(;/*vp[ae][0]>mxp*/;){
if(vp[ae][11]>8800){break;}
if(_kan(ae)){r=1;
if(vp[ae][0]>0 && vp[ae][5]>0){AKS_++;}else{RKS++;}
}
break;
}

return r;
}

function pote2(ae)
{var r=0;
for(;vp[ae][0]>0;){
if(vp[ae][11]>mxK){break;}
if(_kan(ae)){ if(vp[ae][5]>0){r=1; break;} }

break;}
return r;
}

function rb12()
{ 
x=0; for(;x<kss;x++){if( pote2(x) ){break;} }	
return --x;
}

function re12()
{ 
x=kss-1; for(;;x--){if( pote2(x) ){break;} }
//return ++x; 
return x; 
}

function iprskr2()
{var ene=0;
for(;ene<99;ene++)
{
rozbg2=rb12();
if(rozbg2>(kss-5)){mxK+=2;}else{break;}
}
rozed2=re12(); 
//if(rozed2 == kss){rozed2--;}

altEd=rozed2;
	//window.alert(rozbg2 + " - " + rozed2);
for(x=rozbg2;x<=rozed2;x++){
if(pote2(x)){kfs00++;}
if(kfs00>5 && altEd==rozed2){ altEd=x+1; }
}
rozed2=altEd;
}

function rslov2(b,e)
{ae=vyp(b,e);
for(br=0,x=0;br==0;ae++,x++){
if(x>1){ae=vyp(b,e); x=0;}
if(ae==e){ae=b;}
if(pote2(ae)){//break;
	for(x=0;;x++)	{	if(buly[x]==ae){ break;}
	if(x==bue){buly[x]=ae; bue++; ae--; br=1; break;}	}
}
}
return ae; }

function Kfs0k()
{
var mtab1='';
var onek="";
var vsi2=vsika2(ae);
var kode1=[0,0], kk1=0;
//var spsk=['','']; esk=0;
esk=0;
for(x=0; vsi2.charCodeAt(x)>0 ;x++)
{
//if(vsi2[x]=='('){break;}
//if(vsi2[x]=='['){break;}
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
	if(y==2137){jooyxx=0; break;}
	if(kj0[x]==jooy[y][0]){/*jooyxx=y;*/ kode1[kk1++]=y; kjL[++Le]=kj0[x]; break;}
	}
}
var RK='',vvv=0;
if(Le>=0){vvv=vyp(0,Le); RK=kjL[vvv]; jooyxx=kode1[vvv]; /*RK=kjL[ (vyp(0,Le)) ];*/}else
{ if(kje>=0){RK=kj0[ (vyp(0,kje)) ];} }
KK0=1;
if(RK==''){;}else{
mtab1 = "<div class='mtab'>";
//mtab1+="<p class='kanj'></p>";
mtab1+="<p class='sk22'>"+RK+"<span class='GO'>"+RK+"</span></p>"
mtab1+="<p class='zk2'></p>";
mtab1+="<p class='slo2'><p>";
mtab1+="<p class='kanj'></p>";
mtab1+="</div>";
$(".mtab").replaceWith(mtab1);
}
//return mtab1;
//return kj0;
superK=RK;
return jooyxx;
}

function rtout2()
{res0();
//$(".re0").replaceWith("<p class='re0'>ROZ!!!</p>");
var ae=rslov2(rozbg2,rozed2);
ifsh=0; ifsh0=0;
akan=mms[ae][0][0]; if(akan=="["){akan=mms[ae][0][1];}
da1="<p class='data'>"+ae+" : "+vp[ae][0];//+" | "+vp[ae][3]+" "+vp[ae][4];
da1+=" | "+vp[ae][5]+" "+vp[ae][6]+"<b> | "+vp[ae][11]+"</b> | p"+vp[ae][9]+" s"+vp[ae][10]+" ";
da1+="<button class='p0'>p0</button><button class='p1'>p1</button>";
da1+="<button class='p2'>p2</button> <button class='s0'>s0</button>";
da1+="<button class='s1'>s1</button><button class='s2'>s2</button>";
//da1+="</p><p class='re0'>kan0!</p>";
$("p.data").replaceWith(da1);
$(".p0").on("click", function(event){chps('p',0)} );
$(".p1").on("click", function(event){chps('p',1)} );
$(".p2").on("click", function(event){chps('p',2)} );
$(".s0").on("click", function(event){chps('s',0)} );
$(".s1").on("click", function(event){chps('s',1)} );
$(".s2").on("click", function(event){chps('s',2)} );

np=3;
Kfs0k();
$(".sk22").append("<img class='k22' src='../kanji-wp/1"+superK+".gif' name='"+superK+"'>"+"</p>");kyos(superK);
}

function pmrr2(a)
{if(ifend==0){

if(vp[ae][11]<1){
if(a>0){ vp[ae][11]++; } 
else{ vp[ae][11]--; vp[ae][5]-=0.5;}
if(vp[ae][11]>0){vp[ae][11]=psk2++;}
}
else{
if(a>0){ vp[ae][11]=psk2++; } 
else{ vp[ae][11]=-1; vp[ae][5]-=0.5;}
}
//if(vp[ae][11]<-1){vp[ae][5]--;}
if(vp[ae][11]<-1){vp[ae][11]=-1;}


reper2(); reg(); res0();
}}

function reper2()
{
re1="<p class='repeat'>"+ae+" : "+vp[ae][0];//+" | "+vp[ae][3]+" "+vp[ae][4];
re1+=(" | "+vp[ae][5]+" "+vp[ae][6]+" | <b>"+vp[ae][11]);
re1+=(" | "+superK+"</b> / ");
re1+=(mms[ae][0]+" : "+mms[ae][1]+" – "+mms[ae][2][0]+"</p>");
$("p.repeat").replaceWith(re1);
}

function kfroms2()
{var naw=0;

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

for(x=0;x<esk;x++){
	//$(".kanj").append(x+" / "); 
	for(y=1;/*y<ks*/;y++)
	{
	
	if(spsk[x]==superK){ y=ks; naw=x;}
	
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
swi0(naw,ae);
}
