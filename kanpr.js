function kvb1()
{ x=0; for(;x<ks;x++){if(vpk[x][0]==0){break;} }
return x; }

function kanp0()
{
var kax=0, kaxa=0, /*Kpv=0,*/ ss1=0, ss2=0;
Kpv=0;
for(x=0;x<ks;x++)
{
if(vpk[x][0]>0 && vpk[x][0]<=mxpk){Kpv++;}
if(vpk[x][6]>0){kax++; if(vpk[x][0] && vpk[x][0]<=mxpk){kaxa++;} }
if(vpk[x][1]>0){ss1++;} if(vpk[x][2]>0){ss2++;}
//if(vpk[x][1]>2){ss1++;} if(vpk[x][2]>2){ss2++;}
}	
$(".t1").append(" // ", ss1,'/',ss2," / ",kax,'/',kaxa,' | ',Kpv);
}

function kanji(b,e,k)
{ae=vyp(b,e);
for(br=0,x=0;br==0;ae++,x++){
if(x>5){ae=vyp(b,e); x=0;}
if(ae==e){ae=b;}
if(vpk[ae][0]==k || (vpk[ae][0]<k && vpk[ae][0]) ){
	for(x=0;;x++)	{	if(bulyk[x]==ae){ break;}
	if(x==buek){bulyk[x]=ae; buek++; ae--; br=1; break;}	}
}
}
return ae; }

function ktout()
{res0();
$(".re0").replaceWith("<p class='re0'></p>");
var ae=0;//kanji(kvyvbg,ks,(ima-3));
if(ima==3){ae=kanji(kvyvbg,ks,0);}else{ae=kanji(1,ks,mxpk);}
ifsh=0; ifsh0=0;
//$("p.t1").append(", "+ae);

da1="<p class='data'>"+ae+" : "+vpk[ae][0]+" | "+vpk[ae][1]+" "+vpk[ae][2];
da1+=" | "+vpk[ae][3]+" "+vpk[ae][4]+"</p>";
$("p.data").replaceWith(da1);

var mtab = "<section class='mtab'>";
if(vpk[ae][3]>vpk[ae][4]){np=4;}
else{np=3;
	if(vpk[ae][1]>1.3){np=4; kpp+=0.1; vpk[ae][3]=1; vpk[ae][1]=1.3;}
}
//if(vpk[ae][3]>vpk[ae][4]){np=4;
if(np==4){
mtab+="<p class='sk0'><span class='sk'></span><span class='key1'></span></p>";
mtab+="<p class='ik'>"+mm[ae][4]+": <i>"+jooy[(mm[ae][5])][4]+"</i> "+mm[ae][1];
mtab+="</p><p class='zk'>"+mm[ae][3]+"</p>"; 
mtab+="<p class='rk'>"/*+mm[ae][2]*/+"</p>";
mtab+="<p class='key0'></p>";
//swithk(mm[ae][0],0,0);
if(mm[ae][0]>"ー"){swithk(ae,0,0);}
}
else{//np=3; 
mtab+="<p class='sk0'><span class='sk'></span><span class='key1'></span></p>";
mtab+="<p class='ik'></p><p class='zk'></p><p class='rk'></p>";
mtab+="<p class='key0'></p>";

}
mtab+="</section>";
$(".mtab").replaceWith(mtab);//kyos(mm[ae][0]);
if(np==3)//dodatkovyj moment, povjazanyj iz pryntsypom roboty prohramy
{ $(".sk").append("<span class='GO'>"+mm[ae][0]+"</span>"+mm[ae][0]);
$(".sk").append("<img class='k2' src='../kanji-wp/1"+mm[ae][0]+".gif' name='"+mm[ae][0]+"'>"+"</p>");kyos(mm[ae][0]); }
}

function pmrk(a)
{if(ifend==0){

if(a==0.5)
{pp1[4]--;
kpr+=0.1; mxpk++; vpk[ae][0]=psk1++; vpk[ae][3]=0; vpk[ae][4]=0;	
vpk[ae][6]=0; vpk[ae][0]+=".1";
}
else
{
if(a==2){
if(ima==4){vpk[ae][np-2]++; krp++;
}
else{ if(vpk[ae][3]+vpk[ae][4]>=0){
		if(vpk[ae][np-2]<1){vpk[ae][np-2]+=0.5; krp+=0.1;}
		}; }
}
else{ if(vpk[ae][np-2]>0) { if(ima==4){vpk[ae][np-2]--; krm++;}
	else{vpk[ae][np-2]-=0.5; krm+=0.1;} } }

if(a>0){ vpk[ae][np]++;
if(ima==3){kvp1++; if(vpk[ae][3]>1 && vpk[ae][4]>1){kvr++; kkv--; mxpk--;
vpk[ae][0]=1; vpk[ae][3]=0; vpk[ae][4]=0;}
}
else{
kpp++;
/*if(vpk[ae][1]>0 && vpk[ae][2]>1.2){
	if(np==3){kpr+=0.1; mxpk++; vpk[ae][2]=1.2;
	vpk[ae][0]=psk1++; vpk[ae][3]=0; vpk[ae][4]=0;}
}*/

if(vpk[ae][3]>0.9 && vpk[ae][4]>0.9){kpr++; mxpk++;
vpk[ae][0]=psk1++; vpk[ae][3]=0; vpk[ae][4]=0;}
}

}
else{ vpk[ae][np]--;
if(ima==3){kvm++; //pp1[3]--; buek--;
if(vpk[ae][3]+vpk[ae][4]<-1){vpk[ae][3]=0; vpk[ae][4]=0;} }
else{kpm++;
if(vpk[ae][3]+vpk[ae][4]<-1)
{vpk[ae][0]=0; vpk[ae][3]=0; vpk[ae][4]=0; kpv1++; mxpk++; kkv++;}
}
}

}
/*if(a==2){ if(ima==4){vpk[ae][np-2]++; krp++;}
else{ if(vpk[ae][3]+vpk[ae][4]>0){vpk[ae][np-2]+=0.5; krp+=0.1;}; }
}
else{ if(vpk[ae][np-2]>0) { if(ima==4){vpk[ae][np-2]--; krm++;}
	else{vpk[ae][np-2]-=0.5; krm+=0.1;} } }*/
repek(); reg(); res0();
}}

function repek()
{
re1="<p class='repeat'>"+ae+" : "+vpk[ae][0]+" | "+vpk[ae][1]+" "+vpk[ae][2];
re1+=" | "+vpk[ae][3]+" "+vpk[ae][4];
//re1+=(" | "+vp[ae][5]+" "+vp[ae][6]+" | p"+vp[ae][9]+" s"+vp[ae][10]);
re1+=(" / "+mm[ae][0]+" : "+mm[ae][1]+/*" – "+mms[ae][2][0]+*/"</p>");
$("p.repeat").replaceWith(re1);
}