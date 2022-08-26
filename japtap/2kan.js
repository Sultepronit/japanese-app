var mk=['','',''], yn=[0,0,0], ek=0, ddk=0;
//var vp2=[['','','',''],['','','',''],];
//var vp_=[0,0,0], vpv=[0,0,0], vpd=[0,0,0];
function sp00()
{
	for(x=0;x<kss;x++)
	{
		kkan(x);
	}
	//$(".transc").append(ek,mk);
endd();
}

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

function kkan(ae)
{
var sl0=vsika2(ae);//, res=0;
for(x4=0; sl0[x4] ; x4++)
{	
	if(sl0[x4]=="･"){continue;}
	if(sl0[x4]=="２"){continue;}
	if(sl0[x4]>"ー")
	{
		for(z=0;z<=ek;z++){
			if(sl0[x4]==mk[z]){break;}
			if(z==ek){mk[ek++]=sl0[x4];
				for(y=0;;y++)
				{
					if(y==ks){yn[ek-1]=0; ddk++; break;}
					if(sl0[x4]==mm[y][0][0]){yn[ek-1]=y; break;}
				}
			break;}
		}			
	}
}
//return res;
}

function acs()
{
	var ifzm=0;
	//$(".orig").replaceWith("<p class='orig'>"+mk[ek-1]+"</p>");
	//vp2[2][0]='*';
	for(x=0;x<ek;x++)
	{
		if(vp2[x+1][0]==mk[x]){
			//$(".orig").replaceWith("<p class='orig'>"+mk[x]+"</p>");
			//$(".orig").append(mk[x]);
		}
		else
		{	
				if(vp2[x+1][0]){ifzm=1;
				$(".orig").append(mk[x]+":"+vp2[x+1][0]+"/");
				//$(".orig").append(vp2[x+1][0]);
				}
			vp2[x+1][0]=mk[x];
			vp2[x+1][1]=0; vp2[x+1][2]=0; vp2[x+1][3]=0;
		}
	
	}
	//$(".orig").replaceWith("<p class='orig'>"+vp2[ek][0]+"</p>");
if(ifzm){}else{getLists();}
}
