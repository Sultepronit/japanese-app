function ou2()
{

document.write('<table><tr><td><div contenteditable>');
document.write('kv=' + kv + '; kpv=' + kpv + '; kpV=' + kpV + '; jsk=' + jsk + '; jsk2=' + jsk2 + '; ');
document.write('psn=',psn,'; ');
document.write('vp=[ ');
for(x=0;x<kss;x++)
{
document.write('['+vp[x][0]+', '+vp[x][1]+', '+vp[x][2]+', '+vp[x][3]+', '+vp[x][4]
//+', '+vp[x][5]+', '+vp[x][6]+', '+vp[x][7]+', '+vp[x][8]+', '+vp[x][9]+', '+vp[x][10]+'],<br>');
+', '+vp[x][5]+', '+vp[x][6]+', '+vp[x][7]+', '+vp[x][8]+', '+vp[x][9]+', '+vp[x][10]);
document.write(', "',mms[x][0],'"],<br>');
//document.write('],<br>');
}
//document.write('];></div></td></tr></table>');
document.write('];</div></td>');

document.write('<td><div contenteditable>');
document.write('kkv=' + kkv + '; Kpv=' + Kpv + '; KpV=' + KpV + '; psk1=' + psk1 + '; vpk=[ ');
for(x=0;x<kss*1.32;x++)
{
if(x<ks)
{//document.write('['+vpk[x][0]+', '+vpk[x][1]+', '+vpk[x][2]+', '+vpk[x][3]+', '+vpk[x][4]+'],<br>');}
document.write('[',vpk[x],'],<br>');}
else{document.write('<br>');}
}
/*document.write('];</div></td>');

document.write('<td><div contenteditable>');
document.write('fkv=' + fkv + '; fkp=' + fkp + '; psf1=' + psf1 + '; vpf=[ ');
for(x=0;x<kss;x++)
{

if(x<ksf)
{
//document.write('['+vpk[x][0]+', '+vpk[x][1]+', '+vpk[x][2]+', '+vpk[x][3]+', '+vpk[x][4]+'],<br>');
document.write('[',vpf[x],'],<br>');
}
else{document.write('<br>');}
}*/
document.write('];</div></td></tr></table>');

}

function ou2f()
{

document.write('<table><tr><td><div contenteditable>');

//document.write('<td><div contenteditable>');
document.write('fkv=' + fkv + '; fkp=' + fkp + '; psf1=' + psf1 + '; vpf=[ ');
for(x=0;x<ksf;x++)
{
document.write('[',vpf[x],'],<br>');

}
document.write('];</div></td></tr></table>');

}