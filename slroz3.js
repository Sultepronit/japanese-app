function pote(ae)
{var r=0;
//for(;vp[ae][0]>mxp;){
for(;vp[ae][0]>0;){
if(vp[ae][5]>0){break;}
if(vp[ae][0]>mxp){r=1; break;}
//if(_kan(ae)){ if(vp[ae][11]<8888){r=1;} break;}	
/*if(vp[ae][0]<mxp){break;}
if(vp[ae][5]<0.5){r=1; break;}	*/


break;}
return r;
}

function rb1()
{ //x=2100; for(;;x++){if( pote(x) ){break;} }
x=1; for(;;x++){if( pote(x) ){break;} }	
return --x; }

function re1()
{ //x=kss-1-1900; for(;;x--){if( pote(x) ){break;} }
x=kss-1; for(;;x--){if( pote(x) ){break;} }
return ++x; }

function iprskr()
{

rozbg=rb1(); //$(".t1").append("<br><b>"+rozbg+"</b>");
rozed=re1(); //$(".t1").append(", <b>"+rozed+"</b>");

var altEd=rozed;

for(x=rozbg;x<=rozed;x++){
if(pote(x)){zki++;}
if(zki>15 && altEd==rozed){altEd=x+1; /*break;*/}
}
rozed=altEd;
}

function rslov(b,e)
{ae=vyp(b,e);
for(br=0,x=0;br==0;ae++,x++){
if(x>1){ae=vyp(b,e); x=0;}
if(ae==e){ae=b;}
if(pote(ae)){//break;
	for(x=0;;x++)	{	if(buly[x]==ae){ break;}
	if(x==bue){buly[x]=ae; bue++; ae--; br=1; break;}	}
}
}
return ae; }

function rtout()
{res0();
$(".re0").replaceWith("<p class='re0'>ROZ!!!</p>");
var ae=rslov(rozbg,rozed);
ifsh=0; ifsh0=0; KK0=0;
akan=mms[ae][0][0]; if(akan=="["){akan=mms[ae][0][1];}
da1="<p class='data'><b>"+ae+" : "+vp[ae][0];//+" | "+vp[ae][3]+" "+vp[ae][4];
da1+=" | "+vp[ae][5]+" "+vp[ae][6]+" | p"+vp[ae][9]+" s"+vp[ae][10]+" </b>";
da1+="<button class='p0'>p0</button><button class='p1'>p1</button>";
da1+="<button class='p2'>p2</button> <button class='s0'>s0</button>";
da1+="<button class='s1'>s1</button><button class='s2'>s2</button>";
//da1+="</p><p class='re0'>ROZ!!!</p>";
da1+="</p>";
$("p.data").replaceWith(da1);
$(".p0").on("click", function(event){chps('p',0)} );
$(".p1").on("click", function(event){chps('p',1)} );
$(".p2").on("click", function(event){chps('p',2)} );
$(".s0").on("click", function(event){chps('s',0)} );
$(".s1").on("click", function(event){chps('s',1)} );
$(".s2").on("click", function(event){chps('s',2)} );

np=3;
//Kfs0();
var mtab = "<section class='mtab'>";
mtab+="<p class='kanj'></p>";
if( vyp(0,1) ){ mtab+="<p class='os'>"+vypka()+"</p>" }
else{ mtab+="<p class='os'><span class='GO'>"+vypka()+"</span></p>" }
mtab+="<p class='ts'></p><p class='ps'></p>";//}
mtab+="</section>";
$(".mtab").replaceWith(mtab);
//kfroms();
//if(np==4){ipng(akan);}
}

function pmrr(a)
{if(ifend==0){

if(a>0){ vp[ae][5]++; rp++; } 
else{ vp[ae][5]--; rm++; }
if(vp[ae][5]<-1){vp[ae][5]=-1;}
	
reper(); reg(); res0();
}}

function reper()
{
re1="<p class='repeat'>"+ae+" : "+vp[ae][0];//+" | "+vp[ae][3]+" "+vp[ae][4];
re1+=(" | "+vp[ae][5]+" "+vp[ae][6]+" | p"+vp[ae][9]+" s"+vp[ae][10]);
re1+=(" / "+mms[ae][0]+" : "+mms[ae][1]+" – "+mms[ae][2][0]+"</p>");
$("p.repeat").replaceWith(re1);
}