// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));// $Id: drupal.js,v 1.41.2.3 2008/06/25 09:06:57 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper to address the mod_rewrite url encoding bug
 * (equivalent of drupal_urlencode() in PHP).
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;// $Id: tabledrag.js,v 1.13.2.5 2009/06/18 12:24:24 goba Exp $

/**
 * Drag and drop table rows with field manipulation.
 *
 * Using the drupal_add_tabledrag() function, any table with weights or parent
 * relationships may be made into draggable tables. Columns containing a field
 * may optionally be hidden, providing a better user experience.
 *
 * Created tableDrag instances may be modified with custom behaviors by
 * overriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.
 * See blocks.js for an example of adding additional functionality to tableDrag.
 */
Drupal.behaviors.tableDrag = function(context) {
  for (var base in Drupal.settings.tableDrag) {
    if (!$('#' + base + '.tabledrag-processed', context).size()) {
      var tableSettings = Drupal.settings.tableDrag[base];

      $('#' + base).filter(':not(.tabledrag-processed)').each(function() {
        // Create the new tableDrag instance. Save in the Drupal variable
        // to allow other scripts access to the object.
        Drupal.tableDrag[base] = new Drupal.tableDrag(this, tableSettings);
      });

      $('#' + base).addClass('tabledrag-processed');
    }
  }
};

/**
 * Constructor for the tableDrag object. Provides table and field manipulation.
 *
 * @param table
 *   DOM object for the table to be made draggable.
 * @param tableSettings
 *   Settings for the table added via drupal_add_dragtable().
 */
Drupal.tableDrag = function(table, tableSettings) {
  var self = this;

  // Required object variables.
  this.table = table;
  this.tableSettings = tableSettings;
  this.dragObject = null; // Used to hold information about a current drag operation.
  this.rowObject = null; // Provides operations for row manipulation.
  this.oldRowElement = null; // Remember the previous element.
  this.oldY = 0; // Used to determine up or down direction from last mouse move.
  this.changed = false; // Whether anything in the entire table has changed.
  this.maxDepth = 0; // Maximum amount of allowed parenting.
  this.rtl = $(this.table).css('direction') == 'rtl' ? -1 : 1; // Direction of the table.

  // Configure the scroll settings.
  this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };
  this.scrollInterval = null;
  this.scrollY = 0;
  this.windowHeight = 0;

  // Check this table's settings to see if there are parent relationships in
  // this table. For efficiency, large sections of code can be skipped if we
  // don't need to track horizontal movement and indentations.
  this.indentEnabled = false;
  for (group in tableSettings) {
    for (n in tableSettings[group]) {
      if (tableSettings[group][n]['relationship'] == 'parent') {
        this.indentEnabled = true;
      }
      if (tableSettings[group][n]['limit'] > 0) {
        this.maxDepth = tableSettings[group][n]['limit'];
      }
    }
  }
  if (this.indentEnabled) {
    this.indentCount = 1; // Total width of indents, set in makeDraggable.
    // Find the width of indentations to measure mouse movements against.
    // Because the table doesn't need to start with any indentations, we
    // manually append 2 indentations in the first draggable row, measure
    // the offset, then remove.
    var indent = Drupal.theme('tableDragIndentation');
    // Match immediate children of the parent element to allow nesting.
    var testCell = $('> tbody > tr.draggable:first td:first, > tr.draggable:first td:first', table).prepend(indent).prepend(indent);
    this.indentAmount = $('.indentation', testCell).get(1).offsetLeft - $('.indentation', testCell).get(0).offsetLeft;
    $('.indentation', testCell).slice(0, 2).remove();
  }

  // Make each applicable row draggable.
  // Match immediate children of the parent element to allow nesting.
  $('> tr.draggable, > tbody > tr.draggable', table).each(function() { self.makeDraggable(this); });

  // Hide columns containing affected form elements.
  this.hideColumns();

  // Add mouse bindings to the document. The self variable is passed along
  // as event handlers do not have direct access to the tableDrag object.
  $(document).bind('mousemove', function(event) { return self.dragRow(event, self); });
  $(document).bind('mouseup', function(event) { return self.dropRow(event, self); });
};

/**
 * Hide the columns containing form elements according to the settings for
 * this tableDrag instance.
 */
Drupal.tableDrag.prototype.hideColumns = function(){
  for (var group in this.tableSettings) {
    // Find the first field in this group.
    for (var d in this.tableSettings[group]) {
      var field = $('.' + this.tableSettings[group][d]['target'] + ':first', this.table);
      if (field.size() && this.tableSettings[group][d]['hidden']) {
        var hidden = this.tableSettings[group][d]['hidden'];
        var cell = field.parents('td:first');
        break;
      }
    }

    // Hide the column containing this field.
    if (hidden && cell[0] && cell.css('display') != 'none') {
      // Add 1 to our indexes. The nth-child selector is 1 based, not 0 based.
      // Match immediate children of the parent element to allow nesting.
      var columnIndex = $('> td', cell.parent()).index(cell.get(0)) + 1;
      var headerIndex = $('> td:not(:hidden)', cell.parent()).index(cell.get(0)) + 1;
      $('> thead > tr, > tbody > tr, > tr', this.table).each(function(){
        var row = $(this);
        var parentTag = row.parent().get(0).tagName.toLowerCase();
        var index = (parentTag == 'thead') ? headerIndex : columnIndex;

        // Adjust the index to take into account colspans.
        row.children().each(function(n) {
          if (n < index) {
            index -= (this.colSpan && this.colSpan > 1) ? this.colSpan - 1 : 0;
          }
        });
        if (index > 0) {
          cell = row.children(':nth-child(' + index + ')');
          if (cell[0].colSpan > 1) {
            // If this cell has a colspan, simply reduce it.
            cell[0].colSpan = cell[0].colSpan - 1;
          }
          else {
            // Hide table body cells, but remove table header cells entirely
            // (Safari doesn't hide properly).
            parentTag == 'thead' ? cell.remove() : cell.css('display', 'none');
          }
        }
      });
    }
  }
};

/**
 * Find the target used within a particular row and group.
 */
Drupal.tableDrag.prototype.rowSettings = function(group, row) {
  var field = $('.' + group, row);
  for (delta in this.tableSettings[group]) {
    var targetClass = this.tableSettings[group][delta]['target'];
    if (field.is('.' + targetClass)) {
      // Return a copy of the row settings.
      var rowSettings = new Object();
      for (var n in this.tableSettings[group][delta]) {
        rowSettings[n] = this.tableSettings[group][delta][n];
      }
      return rowSettings;
    }
  }
};

/**
 * Take an item and add event handlers to make it become draggable.
 */
Drupal.tableDrag.prototype.makeDraggable = function(item) {
  var self = this;

  // Create the handle.
  var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));
  // Insert the handle after indentations (if any).
  if ($('td:first .indentation:last', item).after(handle).size()) {
    // Update the total width of indentation in this entire table.
    self.indentCount = Math.max($('.indentation', item).size(), self.indentCount);
  }
  else {
    $('td:first', item).prepend(handle);
  }

  // Add hover action for the handle.
  handle.hover(function() {
    self.dragObject == null ? $(this).addClass('tabledrag-handle-hover') : null;
  }, function() {
    self.dragObject == null ? $(this).removeClass('tabledrag-handle-hover') : null;
  });

  // Add the mousedown action for the handle.
  handle.mousedown(function(event) {
    // Create a new dragObject recording the event information.
    self.dragObject = new Object();
    self.dragObject.initMouseOffset = self.getMouseOffset(item, event);
    self.dragObject.initMouseCoords = self.mouseCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentMousePos = self.dragObject.initMouseCoords;
    }

    // If there's a lingering row object from the keyboard, remove its focus.
    if (self.rowObject) {
      $('a.tabledrag-handle', self.rowObject.element).blur();
    }

    // Create a new rowObject for manipulation of this row.
    self.rowObject = new self.row(item, 'mouse', self.indentEnabled, self.maxDepth, true);

    // Save the position of the table.
    self.table.topY = self.getPosition(self.table).y;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    // Add classes to the handle and row.
    $(this).addClass('tabledrag-handle-hover');
    $(item).addClass('drag');

    // Set the document to use the move cursor during drag.
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'none');
    }

    // Hack for Konqueror, prevent the blur handler from firing.
    // Konqueror always gives links focus, even after returning false on mousedown.
    self.safeBlur = false;

    // Call optional placeholder function.
    self.onDrag();
    return false;
  });

  // Prevent the anchor tag from jumping us to the top of the page.
  handle.click(function() {
    return false;
  });

  // Similar to the hover event, add a class when the handle is focused.
  handle.focus(function() {
    $(this).addClass('tabledrag-handle-hover');
    self.safeBlur = true;
  });

  // Remove the handle class on blur and fire the same function as a mouseup.
  handle.blur(function(event) {
    $(this).removeClass('tabledrag-handle-hover');
    if (self.rowObject && self.safeBlur) {
      self.dropRow(event, self);
    }
  });

  // Add arrow-key support to the handle.
  handle.keydown(function(event) {
    // If a rowObject doesn't yet exist and this isn't the tab key.
    if (event.keyCode != 9 && !self.rowObject) {
      self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
    }

    var keyChange = false;
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 63234: // Safari left arrow.
        keyChange = true;
        self.rowObject.indent(-1 * self.rtl);
        break;
      case 38: // Up arrow.
      case 63232: // Safari up arrow.
        var previousRow = $(self.rowObject.element).prev('tr').get(0);
        while (previousRow && $(previousRow).is(':hidden')) {
          previousRow = $(previousRow).prev('tr').get(0);
        }
        if (previousRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'up';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the previous top-level row..
            var groupHeight = 0;
            while (previousRow && $('.indentation', previousRow).size()) {
              previousRow = $(previousRow).prev('tr').get(0);
              groupHeight += $(previousRow).is(':hidden') ? 0 : previousRow.offsetHeight;
            }
            if (previousRow) {
              self.rowObject.swap('before', previousRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, -groupHeight);
            }
          }
          else if (self.table.tBodies[0].rows[0] != previousRow || $(previousRow).is('.draggable')) {
            // Swap with the previous row (unless previous row is the first one
            // and undraggable).
            self.rowObject.swap('before', previousRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, -parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
      case 39: // Right arrow.
      case 63235: // Safari right arrow.
        keyChange = true;
        self.rowObject.indent(1 * self.rtl);
        break;
      case 40: // Down arrow.
      case 63233: // Safari down arrow.
        var nextRow = $(self.rowObject.group).filter(':last').next('tr').get(0);
        while (nextRow && $(nextRow).is(':hidden')) {
          nextRow = $(nextRow).next('tr').get(0);
        }
        if (nextRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'down';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the next group (necessarily a top-level one).
            var groupHeight = 0;
            nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
            if (nextGroup) {
              $(nextGroup.group).each(function () {groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight});
              nextGroupRow = $(nextGroup.group).filter(':last').get(0);
              self.rowObject.swap('after', nextGroupRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, parseInt(groupHeight));
            }
          }
          else {
            // Swap with the next row.
            self.rowObject.swap('after', nextRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
    }

    if (self.rowObject && self.rowObject.changed == true) {
      $(item).addClass('drag');
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      self.oldRowElement = item;
      self.restripeTable();
      self.onDrag();
    }

    // Returning false if we have an arrow key to prevent scrolling.
    if (keyChange) {
      return false;
    }
  });

  // Compatibility addition, return false on keypress to prevent unwanted scrolling.
  // IE and Safari will supress scrolling on keydown, but all other browsers
  // need to return false on keypress. http://www.quirksmode.org/js/keys.html
  handle.keypress(function(event) {
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return false;
    }
  });
};

/**
 * Mousemove event handler, bound to document.
 */
Drupal.tableDrag.prototype.dragRow = function(event, self) {
  if (self.dragObject) {
    self.currentMouseCoords = self.mouseCoords(event);

    var y = self.currentMouseCoords.y - self.dragObject.initMouseOffset.y;
    var x = self.currentMouseCoords.x - self.dragObject.initMouseOffset.x;

    // Check for row swapping and vertical scrolling.
    if (y != self.oldY) {
      self.rowObject.direction = y > self.oldY ? 'down' : 'up';
      self.oldY = y; // Update the old value.

      // Check if the window should be scrolled (and how fast).
      var scrollAmount = self.checkScroll(self.currentMouseCoords.y);
      // Stop any current scrolling.
      clearInterval(self.scrollInterval);
      // Continue scrolling if the mouse has moved in the scroll direction.
      if (scrollAmount > 0 && self.rowObject.direction == 'down' || scrollAmount < 0 && self.rowObject.direction == 'up') {
        self.setScroll(scrollAmount);
      }

      // If we have a valid target, perform the swap and restripe the table.
      var currentRow = self.findDropTargetRow(x, y);
      if (currentRow) {
        if (self.rowObject.direction == 'down') {
          self.rowObject.swap('after', currentRow, self);
        }
        else {
          self.rowObject.swap('before', currentRow, self);
        }
        self.restripeTable();
      }
    }

    // Similar to row swapping, handle indentations.
    if (self.indentEnabled) {
      var xDiff = self.currentMouseCoords.x - self.dragObject.indentMousePos.x;
      // Set the number of indentations the mouse has been moved left or right.
      var indentDiff = Math.round(xDiff / self.indentAmount * self.rtl);
      // Indent the row with our estimated diff, which may be further
      // restricted according to the rows around this row.
      var indentChange = self.rowObject.indent(indentDiff);
      // Update table and mouse indentations.
      self.dragObject.indentMousePos.x += self.indentAmount * indentChange * self.rtl;
      self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
    }

    return false;
  }
};

/**
 * Mouseup event handler, bound to document.
 * Blur event handler, bound to drag handle for keyboard support.
 */
Drupal.tableDrag.prototype.dropRow = function(event, self) {
  // Drop row functionality shared between mouseup and blur events.
  if (self.rowObject != null) {
    var droppedRow = self.rowObject.element;
    // The row is already in the right place so we just release it.
    if (self.rowObject.changed == true) {
      // Update the fields in the dropped row.
      self.updateFields(droppedRow);

      // If a setting exists for affecting the entire group, update all the
      // fields in the entire dragged group.
      for (var group in self.tableSettings) {
        var rowSettings = self.rowSettings(group, droppedRow);
        if (rowSettings.relationship == 'group') {
          for (n in self.rowObject.children) {
            self.updateField(self.rowObject.children[n], group);
          }
        }
      }

      self.rowObject.markChanged();
      if (self.changed == false) {
        $(Drupal.theme('tableDragChangedWarning')).insertAfter(self.table).hide().fadeIn('slow');
        self.changed = true;
      }
    }

    if (self.indentEnabled) {
      self.rowObject.removeIndentClasses();
    }
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    $(droppedRow).removeClass('drag').addClass('drag-previous');
    self.oldRowElement = droppedRow;
    self.onDrop();
    self.rowObject = null;
  }

  // Functionality specific only to mouseup event.
  if (self.dragObject != null) {
    $('.tabledrag-handle', droppedRow).removeClass('tabledrag-handle-hover');

    self.dragObject = null;
    $('body').removeClass('drag');
    clearInterval(self.scrollInterval);

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'block');
    }
  }
};

/**
 * Get the position of an element by adding up parent offsets in the DOM tree.
 */
Drupal.tableDrag.prototype.getPosition = function(element){
  var left = 0;
  var top  = 0;
  // Because Safari doesn't report offsetHeight on table rows, but does on table
  // cells, grab the firstChild of the row and use that instead.
  // http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari
  if (element.offsetHeight == 0) {
    element = element.firstChild; // a table cell
  }

  while (element.offsetParent){
    left   += element.offsetLeft;
    top    += element.offsetTop;
    element = element.offsetParent;
  }

  left += element.offsetLeft;
  top  += element.offsetTop;

  return {x:left, y:top};
};

/**
 * Get the mouse coordinates from the event (allowing for browser differences).
 */
Drupal.tableDrag.prototype.mouseCoords = function(event){
  if (event.pageX || event.pageY) {
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
};

/**
 * Given a target element and a mouse event, get the mouse offset from that
 * element. To do this we need the element's position and the mouse position.
 */
Drupal.tableDrag.prototype.getMouseOffset = function(target, event) {
  var docPos   = this.getPosition(target);
  var mousePos = this.mouseCoords(event);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
};

/**
 * Find the row the mouse is currently over. This row is then taken and swapped
 * with the one being dragged.
 *
 * @param x
 *   The x coordinate of the mouse on the page (not the screen).
 * @param y
 *   The y coordinate of the mouse on the page (not the screen).
 */
Drupal.tableDrag.prototype.findDropTargetRow = function(x, y) {
  var rows = this.table.tBodies[0].rows;
  for (var n=0; n<rows.length; n++) {
    var row = rows[n];
    var indentDiff = 0;
    // Safari fix see Drupal.tableDrag.prototype.getPosition()
    if (row.offsetHeight == 0) {
      var rowY = this.getPosition(row.firstChild).y;
      var rowHeight = parseInt(row.firstChild.offsetHeight)/2;
    }
    // Other browsers.
    else {
      var rowY = this.getPosition(row).y;
      var rowHeight = parseInt(row.offsetHeight)/2;
    }

    // Because we always insert before, we need to offset the height a bit.
    if ((y > (rowY - rowHeight)) && (y < (rowY + rowHeight))) {
      if (this.indentEnabled) {
        // Check that this row is not a child of the row being dragged.
        for (n in this.rowObject.group) {
          if (this.rowObject.group[n] == row) {
            return null;
          }
        }
      }
      // Check that swapping with this row is allowed.
      if (!this.rowObject.isValidSwap(row)) {
        return null;
      }

      // We may have found the row the mouse just passed over, but it doesn't
      // take into account hidden rows. Skip backwards until we find a draggable
      // row.
      while ($(row).is(':hidden') && $(row).prev('tr').is(':hidden')) {
        row = $(row).prev('tr').get(0);
      }
      return row;
    }
  }
  return null;
};

/**
 * After the row is dropped, update the table fields according to the settings
 * set for this table.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 */
Drupal.tableDrag.prototype.updateFields = function(changedRow) {
  for (var group in this.tableSettings) {
    // Each group may have a different setting for relationship, so we find
    // the source rows for each seperately.
    this.updateField(changedRow, group);
  }
};

/**
 * After the row is dropped, update a single table field according to specific
 * settings.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 * @param group
 *   The settings group on which field updates will occur.
 */
Drupal.tableDrag.prototype.updateField = function(changedRow, group) {
  var rowSettings = this.rowSettings(group, changedRow);

  // Set the row as it's own target.
  if (rowSettings.relationship == 'self' || rowSettings.relationship == 'group') {
    var sourceRow = changedRow;
  }
  // Siblings are easy, check previous and next rows.
  else if (rowSettings.relationship == 'sibling') {
    var previousRow = $(changedRow).prev('tr').get(0);
    var nextRow = $(changedRow).next('tr').get(0);
    var sourceRow = changedRow;
    if ($(previousRow).is('.draggable') && $('.' + group, previousRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', previousRow).size() == $('.indentations', changedRow)) {
          sourceRow = previousRow;
        }
      }
      else {
        sourceRow = previousRow;
      }
    }
    else if ($(nextRow).is('.draggable') && $('.' + group, nextRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', nextRow).size() == $('.indentations', changedRow)) {
          sourceRow = nextRow;
        }
      }
      else {
        sourceRow = nextRow;
      }
    }
  }
  // Parents, look up the tree until we find a field not in this group.
  // Go up as many parents as indentations in the changed row.
  else if (rowSettings.relationship == 'parent') {
    var previousRow = $(changedRow).prev('tr');
    while (previousRow.length && $('.indentation', previousRow).length >= this.rowObject.indents) {
      previousRow = previousRow.prev('tr');
    }
    // If we found a row.
    if (previousRow.length) {
      sourceRow = previousRow[0];
    }
    // Otherwise we went all the way to the left of the table without finding
    // a parent, meaning this item has been placed at the root level.
    else {
      // Use the first row in the table as source, because it's garanteed to
      // be at the root level. Find the first item, then compare this row
      // against it as a sibling.
      sourceRow = $('tr.draggable:first').get(0);
      if (sourceRow == this.rowObject.element) {
        sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
      }
      var useSibling = true;
    }
  }

  // Because we may have moved the row from one category to another,
  // take a look at our sibling and borrow its sources and targets.
  this.copyDragClasses(sourceRow, changedRow, group);
  rowSettings = this.rowSettings(group, changedRow);

  // In the case that we're looking for a parent, but the row is at the top
  // of the tree, copy our sibling's values.
  if (useSibling) {
    rowSettings.relationship = 'sibling';
    rowSettings.source = rowSettings.target;
  }

  var targetClass = '.' + rowSettings.target;
  var targetElement = $(targetClass, changedRow).get(0);

  // Check if a target element exists in this row.
  if (targetElement) {
    var sourceClass = '.' + rowSettings.source;
    var sourceElement = $(sourceClass, sourceRow).get(0);
    switch (rowSettings.action) {
      case 'depth':
        // Get the depth of the target row.
        targetElement.value = $('.indentation', $(sourceElement).parents('tr:first')).size();
        break;
      case 'match':
        // Update the value.
        targetElement.value = sourceElement.value;
        break;
      case 'order':
        var siblings = this.rowObject.findSiblings(rowSettings);
        if ($(targetElement).is('select')) {
          // Get a list of acceptable values.
          var values = new Array();
          $('option', targetElement).each(function() {
            values.push(this.value);
          });
          var maxVal = values[values.length - 1];
          // Populate the values in the siblings.
          $(targetClass, siblings).each(function() {
            // If there are more items than possible values, assign the maximum value to the row. 
            if (values.length > 0) {
              this.value = values.shift();
            }
            else {
              this.value = maxVal;
            }
          });
        }
        else {
          // Assume a numeric input field.
          var weight = parseInt($(targetClass, siblings[0]).val()) || 0;
          $(targetClass, siblings).each(function() {
            this.value = weight;
            weight++;
          });
        }
        break;
    }
  }
};

/**
 * Copy all special tableDrag classes from one row's form elements to a
 * different one, removing any special classes that the destination row
 * may have had.
 */
Drupal.tableDrag.prototype.copyDragClasses = function(sourceRow, targetRow, group) {
  var sourceElement = $('.' + group, sourceRow);
  var targetElement = $('.' + group, targetRow);
  if (sourceElement.length && targetElement.length) {
    targetElement[0].className = sourceElement[0].className;
  }
};

Drupal.tableDrag.prototype.checkScroll = function(cursorY) {
  var de  = document.documentElement;
  var b  = document.body;

  var windowHeight = this.windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth != 0 ? de.clientHeight : b.offsetHeight);
  var scrollY = this.scrollY = (document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY));
  var trigger = this.scrollSettings.trigger;
  var delta = 0;

  // Return a scroll speed relative to the edge of the screen.
  if (cursorY - scrollY > windowHeight - trigger) {
    delta = trigger / (windowHeight + scrollY - cursorY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return delta * this.scrollSettings.amount;
  }
  else if (cursorY - scrollY < trigger) {
    delta = trigger / (cursorY - scrollY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return -delta * this.scrollSettings.amount;
  }
};

Drupal.tableDrag.prototype.setScroll = function(scrollAmount) {
  var self = this;

  this.scrollInterval = setInterval(function() {
    // Update the scroll values stored in the object.
    self.checkScroll(self.currentMouseCoords.y);
    var aboveTable = self.scrollY > self.table.topY;
    var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
    if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
      window.scrollBy(0, scrollAmount);
    }
  }, this.scrollSettings.interval);
};

Drupal.tableDrag.prototype.restripeTable = function() {
  // :even and :odd are reversed because jquery counts from 0 and
  // we count from 1, so we're out of sync.
  // Match immediate children of the parent element to allow nesting.
  $('> tbody > tr.draggable, > tr.draggable', this.table)
    .filter(':odd').filter('.odd')
      .removeClass('odd').addClass('even')
    .end().end()
    .filter(':even').filter('.even')
      .removeClass('even').addClass('odd');
};

/**
 * Stub function. Allows a custom handler when a row begins dragging.
 */
Drupal.tableDrag.prototype.onDrag = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is dropped.
 */
Drupal.tableDrag.prototype.onDrop = function() {
  return null;
};

/**
 * Constructor to make a new object to manipulate a table row.
 *
 * @param tableRow
 *   The DOM element for the table row we will be manipulating.
 * @param method
 *   The method in which this row is being moved. Either 'keyboard' or 'mouse'.
 * @param indentEnabled
 *   Whether the containing table uses indentations. Used for optimizations.
 * @param maxDepth
 *   The maximum amount of indentations this row may contain.
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row = function(tableRow, method, indentEnabled, maxDepth, addClasses) {
  this.element = tableRow;
  this.method = method;
  this.group = new Array(tableRow);
  this.groupDepth = $('.indentation', tableRow).size();
  this.changed = false;
  this.table = $(tableRow).parents('table:first').get(0);
  this.indentEnabled = indentEnabled;
  this.maxDepth = maxDepth;
  this.direction = ''; // Direction the row is being moved.

  if (this.indentEnabled) {
    this.indents = $('.indentation', tableRow).size();
    this.children = this.findChildren(addClasses);
    this.group = $.merge(this.group, this.children);
    // Find the depth of this entire group.
    for (var n = 0; n < this.group.length; n++) {
      this.groupDepth = Math.max($('.indentation', this.group[n]).size(), this.groupDepth);
    }
  }
};

/**
 * Find all children of rowObject by indentation.
 *
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row.prototype.findChildren = function(addClasses) {
  var parentIndentation = this.indents;
  var currentRow = $(this.element, this.table).next('tr.draggable');
  var rows = new Array();
  var child = 0;
  while (currentRow.length) {
    var rowIndentation = $('.indentation', currentRow).length;
    // A greater indentation indicates this is a child.
    if (rowIndentation > parentIndentation) {
      child++;
      rows.push(currentRow[0]);
      if (addClasses) {
        $('.indentation', currentRow).each(function(indentNum) {
          if (child == 1 && (indentNum == parentIndentation)) {
            $(this).addClass('tree-child-first');
          }
          if (indentNum == parentIndentation) {
            $(this).addClass('tree-child');
          }
          else if (indentNum > parentIndentation) {
            $(this).addClass('tree-child-horizontal');
          }
        });
      }
    }
    else {
      break;
    }
    currentRow = currentRow.next('tr.draggable');
  }
  if (addClasses && rows.length) {
    $('.indentation:nth-child(' + (parentIndentation + 1) + ')', rows[rows.length - 1]).addClass('tree-child-last');
  }
  return rows;
};

/**
 * Ensure that two rows are allowed to be swapped.
 *
 * @param row
 *   DOM object for the row being considered for swapping.
 */
Drupal.tableDrag.prototype.row.prototype.isValidSwap = function(row) {
  if (this.indentEnabled) {
    var prevRow, nextRow;
    if (this.direction == 'down') {
      prevRow = row;
      nextRow = $(row).next('tr').get(0);
    }
    else {
      prevRow = $(row).prev('tr').get(0);
      nextRow = row;
    }
    this.interval = this.validIndentInterval(prevRow, nextRow);

    // We have an invalid swap if the valid indentations interval is empty.
    if (this.interval.min > this.interval.max) {
      return false;
    }
  }

  // Do not let an un-draggable first row have anything put before it.
  if (this.table.tBodies[0].rows[0] == row && $(row).is(':not(.draggable)')) {
    return false;
  }

  return true;
};

/**
 * Perform the swap between two rows.
 *
 * @param position
 *   Whether the swap will occur 'before' or 'after' the given row.
 * @param row
 *   DOM element what will be swapped with the row group.
 */
Drupal.tableDrag.prototype.row.prototype.swap = function(position, row) {
  $(row)[position](this.group);
  this.changed = true;
  this.onSwap(row);
};

/**
 * Determine the valid indentations interval for the row at a given position
 * in the table.
 *
 * @param prevRow
 *   DOM object for the row before the tested position
 *   (or null for first position in the table).
 * @param nextRow
 *   DOM object for the row after the tested position
 *   (or null for last position in the table).
 */
Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
  var minIndent, maxIndent;

  // Minimum indentation:
  // Do not orphan the next row.
  minIndent = nextRow ? $('.indentation', nextRow).size() : 0;

  // Maximum indentation:
  if (!prevRow || $(this.element).is('.tabledrag-root')) {
    // Do not indent the first row in the table or 'root' rows..
    maxIndent = 0;
  }
  else {
    // Do not go deeper than as a child of the previous row.
    maxIndent = $('.indentation', prevRow).size() + ($(prevRow).is('.tabledrag-leaf') ? 0 : 1);
    // Limit by the maximum allowed depth for the table.
    if (this.maxDepth) {
      maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
    }
  }

  return {'min':minIndent, 'max':maxIndent};
}

/**
 * Indent a row within the legal bounds of the table.
 *
 * @param indentDiff
 *   The number of additional indentations proposed for the row (can be
 *   positive or negative). This number will be adjusted to nearest valid
 *   indentation level for the row.
 */
Drupal.tableDrag.prototype.row.prototype.indent = function(indentDiff) {
  // Determine the valid indentations interval if not available yet.
  if (!this.interval) {
    prevRow = $(this.element).prev('tr').get(0);
    nextRow = $(this.group).filter(':last').next('tr').get(0);
    this.interval = this.validIndentInterval(prevRow, nextRow);
  }

  // Adjust to the nearest valid indentation.
  var indent = this.indents + indentDiff;
  indent = Math.max(indent, this.interval.min);
  indent = Math.min(indent, this.interval.max);
  indentDiff = indent - this.indents;

  for (var n = 1; n <= Math.abs(indentDiff); n++) {
    // Add or remove indentations.
    if (indentDiff < 0) {
      $('.indentation:first', this.group).remove();
      this.indents--;
    }
    else {
      $('td:first', this.group).prepend(Drupal.theme('tableDragIndentation'));
      this.indents++;
    }
  }
  if (indentDiff) {
    // Update indentation for this row.
    this.changed = true;
    this.groupDepth += indentDiff;
    this.onIndent();
  }

  return indentDiff;
};

/**
 * Find all siblings for a row, either according to its subgroup or indentation.
 * Note that the passed in row is included in the list of siblings.
 *
 * @param settings
 *   The field settings we're using to identify what constitutes a sibling.
 */
Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
  var siblings = new Array();
  var directions = new Array('prev', 'next');
  var rowIndentation = this.indents;
  for (var d in directions) {
    var checkRow = $(this.element)[directions[d]]();
    while (checkRow.length) {
      // Check that the sibling contains a similar target field.
      if ($('.' + rowSettings.target, checkRow)) {
        // Either add immediately if this is a flat table, or check to ensure
        // that this row has the same level of indentaiton.
        if (this.indentEnabled) {
          var checkRowIndentation = $('.indentation', checkRow).length
        }

        if (!(this.indentEnabled) || (checkRowIndentation == rowIndentation)) {
          siblings.push(checkRow[0]);
        }
        else if (checkRowIndentation < rowIndentation) {
          // No need to keep looking for siblings when we get to a parent.
          break;
        }
      }
      else {
        break;
      }
      checkRow = $(checkRow)[directions[d]]();
    }
    // Since siblings are added in reverse order for previous, reverse the
    // completed list of previous siblings. Add the current row and continue.
    if (directions[d] == 'prev') {
      siblings.reverse();
      siblings.push(this.element);
    }
  }
  return siblings;
};

/**
 * Remove indentation helper classes from the current row group.
 */
Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function() {
  for (n in this.children) {
    $('.indentation', this.children[n])
      .removeClass('tree-child')
      .removeClass('tree-child-first')
      .removeClass('tree-child-last')
      .removeClass('tree-child-horizontal');
  }
};

/**
 * Add an asterisk or other marker to the changed row.
 */
Drupal.tableDrag.prototype.row.prototype.markChanged = function() {
  var marker = Drupal.theme('tableDragChangedMarker');
  var cell = $('td:first', this.element);
  if ($('span.tabledrag-changed', cell).length == 0) {
    cell.append(marker);
  }
};

/**
 * Stub function. Allows a custom handler when a row is indented.
 */
Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is swapped.
 */
Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
  return null;
};

Drupal.theme.prototype.tableDragChangedMarker = function () {
  return '<span class="warning tabledrag-changed">*</span>';
};

Drupal.theme.prototype.tableDragIndentation = function () {
  return '<div class="indentation">&nbsp;</div>';
};

Drupal.theme.prototype.tableDragChangedWarning = function () {
  return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("Changes made in this table will not be saved until the form is submitted.") + '</div>';
};
;// $Id: progress.js,v 1.20 2008/01/04 11:53:21 goba Exp $

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || "GET";
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  this.element = document.createElement('div');
  this.element.id = id;
  this.element.className = 'progress';
  $(this.element).html('<div class="bar"><div class="filled"></div></div>'+
                       '<div class="percentage"></div>'+
                       '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage +'%');
    $('div.percentage', this.element).html(percentage +'%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer
        pb.timer = setTimeout(function() { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ahahError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = string;

  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};
;// $Id: dhtml_menu.js,v 1.18.2.10 2009/01/12 10:13:30 arancaytar Exp $

/**
 * @file dhtml_menu.js
 * The Javascript code for DHTML Menu
 */
 
Drupal.dhtmlMenu = {};

/**
 * Initialize the module's JS functions
 */
Drupal.behaviors.dhtmlMenu = function() {
  // Do not run this function more than once.
  if (Drupal.dhtmlMenu.init) {
    return;
  }
  else {
    Drupal.dhtmlMenu.init = true;
  }

  // Get the settings.
  var effects = Drupal.settings.dhtmlMenu;

  $('.collapsed').removeClass('expanded');

  // Get cookie
  if (!effects.siblings) {
    var cookie = Drupal.dhtmlMenu.cookieGet();
    for (var i in cookie) {
      // If the cookie was not applied to the HTML code yet, do so now.
      var li = $('#dhtml_menu-' + cookie[i]).parents('li:first');
      if ($(li).hasClass('collapsed')) {
        Drupal.dhtmlMenu.toggleMenu(li);
      }
    }
  }

  /* Add jQuery effects and listeners to all menu items.
   * The ~ (sibling) selector is unidirectional and selects 
   * only the latter element, so we must use siblings() to get 
   * back to the link element.
   */
   $('ul.menu li.dhtml-menu:not(.leaf,.no-dhtml)').each(function() {
    var li = this;
    if (effects.clone) {
      var ul = $(li).find('ul:first');
      if (ul.length) {
        $(li).find('a:first').clone().prependTo(ul).wrap('<li class="leaf fake-leaf"></li>');
      }
    }

    if (effects.doubleclick) {
      $(li).find('a:first').dblclick(function(e) {
        window.location = this.href;
      });
    }

    $(li).find('a:first').click(function(e) {
      Drupal.dhtmlMenu.toggleMenu($(li));
      return false;
    });
  });
}

/**
 * Toggles the menu's state between open and closed.
 *
 * @param li
 *   Object. The <li> element that will be expanded or collapsed.
 */
Drupal.dhtmlMenu.toggleMenu = function(li) {
  var effects = Drupal.settings.dhtmlMenu;

  // If the menu is expanded, collapse it.
  if($(li).hasClass('expanded')) {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'none');

    // If children are closed automatically, find and close them now.
    if (effects.children) {
      if (effects.slide) {
        $(li).find('li.expanded').find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(li).find('li.expanded').find('ul:first').css('display', 'none');

      $(li).find('li.expanded').removeClass('expanded').addClass('collapsed')
    }

    $(li).removeClass('expanded').addClass('collapsed');
  }

  // Otherwise, expand it.
  else {
    if (effects.slide) {
      $(li).find('ul:first').animate({height: 'show', opacity: 'show'}, '1000');
    }
    else $(li).find('ul:first').css('display', 'block');
    $(li).removeClass('collapsed').addClass('expanded');

    // If the siblings effect is on, close all sibling menus.
    if (effects.siblings) {
      var id = $(li).find('a:first').attr('id');

      // Siblings are all open menus that are neither parents nor children of this menu.
      $(li).find('li').addClass('own-children-temp');
	  
      // If the relativity option is on, select only the siblings that have the same parent
      if (effects.relativity) {
        var siblings = $(li).parent().find('li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }
      // Otherwise, select all menus of the same level
      else {
        var siblings = $('ul.menu li.expanded').not('.own-children-temp').not(':has(#' + id + ')');
      }

      // If children should not get closed automatically...
      if (!effects.children) {
        // Remove items that are currently hidden from view (do not close these).
        $('li.collapsed li.expanded').addClass('sibling-children-temp');
        // Only close the top-most open sibling, not its children.
        $(siblings).find('li.expanded').addClass('sibling-children-temp');
        siblings = $(siblings).not('.sibling-children-temp');
      }

      $('.own-children-temp, .sibling-children-temp').removeClass('own-children-temp').removeClass('sibling-children-temp');

      if (effects.slide) {
        $(siblings).find('ul:first').animate({height: 'hide', opacity: 'hide'}, '1000');
      }
      else $(siblings).find('ul:first').css('display', 'none');

      $(siblings).removeClass('expanded').addClass('collapsed');
    }
  }

  // Save the current state of the menus in the cookie.
  Drupal.dhtmlMenu.cookieSet();
}

/**
 * Reads the dhtml_menu cookie.
 */
Drupal.dhtmlMenu.cookieGet = function() {
  var c = /dhtml_menu=(.*?)(;|$)/.exec(document.cookie);
  if (c) {
    return c[1];
  }
  else return '';
}

/**
 * Saves the dhtml_menu cooki.
 */
Drupal.dhtmlMenu.cookieSet = function() {
  var expanded = new Array();
  $('li.expanded').each(function() {
    expanded.push($(this).find('a:first').attr('id').substr(5));
  });
  document.cookie = 'dhtml_menu=' + expanded.join(',') + ';path=/';
}

;// $Id: thickbox.js,v 1.8.2.18 2009/07/31 15:21:59 frjo Exp $

/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/


// Initialize Thickbox.
Drupal.behaviors.initThickbox = function (context) {
  $('a,area,input', context).filter('.thickbox:not(.initThickbox-processed)').addClass('initThickbox-processed').click(function() {
    var t = this.title || this.name || null;
    var a = this.href || this.alt;
    var g = this.rel || false;
    tb_show(t,a,g);
    this.blur();
    return false;
  });
};

function tb_show(caption, url, imageGroup) { //function called when the user clicks on a thickbox link

  var settings = Drupal.settings.thickbox;
  tb_setBrowserExtra();

  try {
    if (typeof document.body.style.maxHeight === 'undefined') { //if IE 6
      $('body','html').css({height: '100%', width: '100%'});
      $('html').css('overflow','hidden');
      if (document.getElementById('TB_HideSelect') === null) { //iframe to hide select elements in ie6
        $('body').append('<iframe id="TB_HideSelect"></iframe><div id="TB_overlay"></div><div id="TB_window"></div>');
        $('#TB_overlay').click(tb_remove);
      }
    }
    else { //all others
      if (document.getElementById('TB_overlay') === null) {
        $('body').append('<div id="TB_overlay"></div><div id="TB_window"></div>');
        $('#TB_overlay').click(tb_remove);
      }
    }

    if ($.browserextra.macfirefox) {
      $('#TB_overlay').addClass('TB_overlayMacFFBGHack'); //use png overlay so hide flash
    }
    else {
      $('#TB_overlay').addClass('TB_overlayBG'); //use background and opacity
    }

    if (caption === null) {
      caption = '';
    }
    $('body').append('<div id="TB_load"></div>'); //add loader to the page
    $('#TB_load').show(); //show loader

    var baseURL;
    if (url.indexOf('?')!==-1) { //ff there is a query string involved
      baseURL = url.substr(0, url.indexOf('?'));
    }
    else {
      baseURL = url;
    }

    var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
    var urlType = baseURL.toLowerCase().match(urlString);

    if (urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp') { //code to show images
      TB_PrevCaption = '';
      TB_PrevURL = '';
      TB_PrevHTML = '';
      TB_NextCaption = '';
      TB_NextURL = '';
      TB_NextHTML = '';
      TB_imageCount = '';
      TB_FoundURL = false;
      if (imageGroup) {
        TB_TempArray = $('a[rel=' + imageGroup + ']').get();
        for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === '')); TB_Counter++) {
          var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
          if (!(TB_TempArray[TB_Counter].href == url)) {
            if (TB_FoundURL) {
              TB_NextCaption = TB_TempArray[TB_Counter].title;
              TB_NextURL = TB_TempArray[TB_Counter].href;
              TB_NextHTML = '<span id="TB_next">&nbsp;&nbsp;<a href="#">' + settings.next + '</a></span>';
            }
            else {
              TB_PrevCaption = TB_TempArray[TB_Counter].title;
              TB_PrevURL = TB_TempArray[TB_Counter].href;
              TB_PrevHTML = '<span id="TB_prev">&nbsp;&nbsp;<a href="#">' + settings.prev + '</a></span>';
            }
          }
          else {
            TB_FoundURL = true;
            if (TB_TempArray.length > 1) { // Don't show "Image 1 of 1".
              TB_imageCount = settings.image_count.replace(/\!current/, (TB_Counter + 1)).replace(/\!total/, TB_TempArray.length);
            }
          }
        }
      }

      // Modified to preload previous and next image.
      imgPreloader = new Image();
      prevImg = new Image();
      nextImg = new Image();
      imgPreloader.onload = function() {
        imgPreloader.onload = null;

        var TB_Links = $('a[class*="thickbox"]');
        var i = -1;
        TB_Links.each(function(n) { if (this.href == imgPreloader.src) { i = n; } });
        if (i != -1) {
          if (i > 0) { prevImg.src = TB_Links[i - 1].href; }
          if (i + 1 < TB_Links.length) { nextImg.src = TB_Links[i + 1].href; }
        }

        // Resizing large images - orginal by Christian Montoya edited by me.
        var pagesize = tb_getPageSize();
        var x = pagesize[0] - 100;
        var y = pagesize[1] - 100;
        var imageWidth = imgPreloader.width;
        var imageHeight = imgPreloader.height;
        if (imageWidth > x) {
          imageHeight = imageHeight * (x / imageWidth);
          imageWidth = x;
          if (imageHeight > y) {
            imageWidth = imageWidth * (y / imageHeight);
            imageHeight = y;
          }
        }
        else if (imageHeight > y) {
          imageWidth = imageWidth * (y / imageHeight);
          imageHeight = y;
          if (imageWidth > x) {
            imageHeight = imageHeight * (x / imageWidth);
            imageWidth = x;
          }
        }
        // End Resizing

        TB_WIDTH = imageWidth < 320 ? 350 : imageWidth + 30;
        TB_HEIGHT = imageHeight + 60;
        $('#TB_window').append('<a href="" id="TB_ImageOff" title="' + settings.next_close + '"><img id="TB_Image" src="' + url + '" width="' + imageWidth + '" height="' + imageHeight + '" alt="' + caption + '" /></a><div id="TB_caption">' + caption + '<div id="TB_secondLine">' + TB_imageCount + TB_PrevHTML + TB_NextHTML + '</div></div><div id="TB_closeWindow"><a href="#" id="TB_closeWindowButton" title="' + settings.close + '">' + settings.close + '</a> ' + settings.esc_key + '</div>');
        $('#TB_closeWindowButton').click(tb_remove);

        if (!(TB_PrevHTML === '')) {
          function goPrev() {
            if ($(document).unbind('click',goPrev)) {$(document).unbind('click',goPrev);}
            $('#TB_window').remove();
            $('body').append('<div id="TB_window"></div>');
            tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
            return false;
          }
          $('#TB_prev').click(goPrev);
        }

        if (!(TB_NextHTML === '')) {
          function goNext() {
            $('#TB_window').remove();
            $('body').append('<div id="TB_window"></div>');
            tb_show(TB_NextCaption, TB_NextURL, imageGroup);
            return false;
          }
          $('#TB_next').click(goNext);
          $('#TB_ImageOff').click(goNext);
        }
        else {
          $('#TB_ImageOff').click(tb_remove);
        }

        document.onkeydown = function(e) {
          if (e == null) { // ie
            keycode = event.keyCode;
            escapeKey = 27;
          }
          else if ($.browser.safari || $.browser.opera) { // safari or opera
            keycode = e.which;
            escapeKey = 27;
          }
          else { // mozilla
            keycode = e.keyCode;
            escapeKey = e.DOM_VK_ESCAPE;
          }
          key = String.fromCharCode(keycode).toLowerCase();
          if (key == 'x' || key == 'c' || keycode == escapeKey) { // close
            tb_remove();
          }
          else if (key == 'n' || keycode == 39) { // display previous image
            if (!(TB_NextHTML == '')) {
              document.onkeydown = '';
              goNext();
            }
          }
          else if (key == 'p' || keycode == 37) { // display next image
            if (!(TB_PrevHTML == '')) {
              document.onkeydown = '';
              goPrev();
            }
          }
        };

        tb_position();
        $('#TB_load').remove();
        $('#TB_window').css({display:'block', opacity: 0}).animate({opacity: 1}, 400); //for safari using css instead of show
      };

      imgPreloader.src = url;
    }
    else { //code to show html

      var queryString = url.replace(/^[^\?]+\??/,'');
      var params = tb_parseQuery( queryString );

      TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
      TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
      ajaxContentW = TB_WIDTH - 30;
      ajaxContentH = TB_HEIGHT - 45;

      if (url.indexOf('TB_iframe') != -1) { // either iframe or ajax window
        urlNoQuery = url.split('TB_');
        $('#TB_iframeContent').remove();
        if (params['modal'] != 'true') { //iframe no modal
          $('#TB_window').append('<div id="TB_title"><div id="TB_ajaxWindowTitle">' + caption + '</div><div id="TB_closeAjaxWindow"><a href="#" id="TB_closeWindowButton" title="' + settings.close + '">' + settings.close + '</a> ' + settings.esc_key + '</div></div><iframe frameborder="0" hspace="0" src="' + urlNoQuery[0] + '" id="TB_iframeContent" name="TB_iframeContent' + Math.round(Math.random()*1000) + '" onload="tb_showIframe()" style="width:' + (ajaxContentW + 29) + 'px;height:' + (ajaxContentH + 17) + 'px;"></iframe>');
        }
        else { //iframe modal
          $('#TB_overlay').unbind();
          $('#TB_window').append('<iframe frameborder="0" hspace="0" src="' + urlNoQuery[0] + '" id="TB_iframeContent" name="TB_iframeContent' + Math.round(Math.random()*1000) + '" onload="tb_showIframe()" style="width:' + (ajaxContentW + 29) + 'px;height:' + (ajaxContentH + 17) + 'px;"></iframe>');
        }
      }
      else { // not an iframe, ajax
        if ($('#TB_window').css('display') != 'block') {
          if (params['modal'] != 'true') { //ajax no modal
            $('#TB_window').append('<div id="TB_title"><div id="TB_ajaxWindowTitle">' + caption + '</div><div id="TB_closeAjaxWindow"><a href="#" id="TB_closeWindowButton" title="' + settings.close + '">' + settings.close + '</a> ' + settings.esc_key + '</div></div><div id="TB_ajaxContent" style="width:' + ajaxContentW + 'px;height:' + ajaxContentH + 'px"></div>');
            window.setTimeout("tb_focusFirstFormElement()", 1000);
          }
          else { //ajax modal
            $('#TB_overlay').unbind();
            $('#TB_window').append('<div id="TB_ajaxContent" class="TB_modal" style="width:' + ajaxContentW + 'px;height:' + ajaxContentH + 'px;"></div>');
          }
        }
        else { //this means the window is already up, we are just loading new content via ajax
          $('#TB_ajaxContent')[0].style.width = ajaxContentW + 'px';
          $('#TB_ajaxContent')[0].style.height = ajaxContentH + 'px';
          $('#TB_ajaxContent')[0].scrollTop = 0;
          $('#TB_ajaxWindowTitle').html(caption);
        }
      }

      $('#TB_closeWindowButton').click(tb_remove);

      if (url.indexOf('TB_inline') != -1) {
        $('#TB_ajaxContent').append($('#' + params['inlineId']).children());
        $('#TB_window').unload(function () {
          $('#' + params['inlineId']).append($('#TB_ajaxContent').children()); // move elements back when you're finished
        });
        tb_position();
        $('#TB_load').remove();
        $('#TB_window').css({display:'block', opacity: 0}).animate({opacity: 1}, 400);
      }
      else if (url.indexOf('TB_iframe') != -1) {
        tb_position();
        if ($.browser.safari || $.browserextra.iphone) { //safari needs help because it will not fire iframe onload
          $('#TB_load').remove();
          $('#TB_window').css({display:'block', opacity: 0}).animate({opacity: 1}, 400);
        }
      }
      else {
        $('#TB_ajaxContent').load(url += '&random=' + (new Date().getTime()),function() { //to do a post change this load method
          tb_position();
          $('#TB_load').remove();
          Drupal.attachBehaviors('#TB_ajaxContent');
          $('#TB_window').css({display:'block', opacity: 0}).animate({opacity: 1}, 400);
        });
      }
    }

    if (!params['modal']) {
      document.onkeyup = function(e) {
        if (e == null) { // ie
          keycode = event.keyCode;
          escapeKey = 27;
        }
        else if ($.browser.safari || $.browser.opera) { // safari or opera
          keycode = e.which;
          escapeKey = 27;
        }
        else { // mozilla
          keycode = e.keyCode;
          escapeKey = e.DOM_VK_ESCAPE;
        }
        key = String.fromCharCode(keycode).toLowerCase();
        if (keycode == escapeKey) { // close
          tb_remove();
        }
      };
    }

  }
  catch(e) {
    //nothing here
  }
}

//helper functions below
function tb_showIframe() {
  $('#TB_load').remove();
  $('#TB_window').css({display:'block', opacity: 0}).animate({opacity: 1}, 400);
}

function tb_remove() {
  $('#TB_imageOff').unbind('click');
  $('#TB_overlay').unbind('click');
  $('#TB_closeWindowButton').unbind('click');
  $('#TB_window').fadeOut(400,function() {$('#TB_window,#TB_overlay,#TB_HideSelect').trigger('unload').unbind().remove();});
  $('#TB_load').remove();
  if (typeof document.body.style.maxHeight == 'undefined') { //if IE 6
    $('body','html').css({height: 'auto', width: 'auto'});
    $('html').css('overflow','');
  }
  document.onkeydown = '';
  document.onkeyup = '';
  return false;
}

function tb_position() {
  $('#TB_window').css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
  if (!($.browserextra.msie6)) { // take away IE6
    $('#TB_window').css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
  }
}

function tb_parseQuery( query ) {
  var Params = {};
  if ( ! query ) {return Params;}// return empty object
  var Pairs = query.split(/[;&]/);
  for ( var i = 0; i < Pairs.length; i++ ) {
    var KeyVal = Pairs[i].split('=');
    if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
    var key = unescape( KeyVal[0] );
    var val = unescape( KeyVal[1] );
    val = val.replace(/\+/g, ' ');
    Params[key] = val;
  }
  return Params;
}

function tb_getPageSize() {
  var de = document.documentElement;
  var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
  var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
  arrayPageSize = [w,h];
  return arrayPageSize;
}

function tb_setBrowserExtra() {
  // Return if already set.
  if ($.browserextra) {
    return;
  }

  // Add iPhone, IE 6 and Mac Firefox browser detection.
  // msie6 fixes the fact that IE 7 now reports itself as MSIE 6.0 compatible
  var userAgent = navigator.userAgent.toLowerCase();
  $.browserextra = {
    iphone: /iphone/.test( userAgent ),
    msie6: /msie/.test( userAgent ) && !/opera/.test( userAgent ) && /msie 6\.0/.test( userAgent ) && !/msie 7\.0/.test( userAgent ),
    macfirefox: /mac/.test( userAgent ) && /firefox/.test( userAgent )
  };
}

function tb_focusFirstFormElement() {
  $('#TB_window form input[type=text]:first').focus();
}
;// $Id: tableheader.js,v 1.16.2.2 2009/03/30 12:48:09 goba Exp $

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
};
;// $Id: block.js,v 1.2 2007/12/16 10:36:53 goba Exp $

/**
 * Move a block in the blocks table from one region to another via select list.
 *
 * This behavior is dependent on the tableDrag behavior, since it uses the
 * objects initialized in that behavior to update the row.
 */
Drupal.behaviors.blockDrag = function(context) {
  var table = $('table#blocks');
  var tableDrag = Drupal.tableDrag.blocks; // Get the blocks tableDrag object.

  // Add a handler for when a row is swapped, update empty regions.
  tableDrag.row.prototype.onSwap = function(swappedRow) {
    checkEmptyRegions(table, this);
  };

  // A custom message for the blocks page specifically.
  Drupal.theme.tableDragChangedWarning = function () {
    return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("The changes to these blocks will not be saved until the <em>Save blocks</em> button is clicked.") + '</div>';
  };

  // Add a handler so when a row is dropped, update fields dropped into new regions.
  tableDrag.onDrop = function() {
    dragObject = this;
    if ($(dragObject.rowObject.element).prev('tr').is('.region-message')) {
      var regionRow = $(dragObject.rowObject.element).prev('tr').get(0);
      var regionName = regionRow.className.replace(/([^ ]+[ ]+)*region-([^ ]+)-message([ ]+[^ ]+)*/, '$2');
      var regionField = $('select.block-region-select', dragObject.rowObject.element);
      var weightField = $('select.block-weight', dragObject.rowObject.element);
      var oldRegionName = weightField[0].className.replace(/([^ ]+[ ]+)*block-weight-([^ ]+)([ ]+[^ ]+)*/, '$2');

      if (!regionField.is('.block-region-'+ regionName)) {
        regionField.removeClass('block-region-' + oldRegionName).addClass('block-region-' + regionName);
        weightField.removeClass('block-weight-' + oldRegionName).addClass('block-weight-' + regionName);
        regionField.val(regionName);
      }
    }
  };

  // Add the behavior to each region select list.
  $('select.block-region-select:not(.blockregionselect-processed)', context).each(function() {
    $(this).change(function(event) {
      // Make our new row and select field.
      var row = $(this).parents('tr:first');
      var select = $(this);
      tableDrag.rowObject = new tableDrag.row(row);

      // Find the correct region and insert the row as the first in the region.
      $('tr.region-message', table).each(function() {
        if ($(this).is('.region-' + select[0].value + '-message')) {
          // Add the new row and remove the old one.
          $(this).after(row);
          // Manually update weights and restripe.
          tableDrag.updateFields(row.get(0));
          tableDrag.rowObject.changed = true;
          if (tableDrag.oldRowElement) {
            $(tableDrag.oldRowElement).removeClass('drag-previous');
          }
          tableDrag.oldRowElement = row.get(0);
          tableDrag.restripeTable();
          tableDrag.rowObject.markChanged();
          tableDrag.oldRowElement = row;
          $(row).addClass('drag-previous');
        }
      });

      // Modify empty regions with added or removed fields.
      checkEmptyRegions(table, row);
      // Remove focus from selectbox.
      select.get(0).blur();
    });
    $(this).addClass('blockregionselect-processed');
  });

  var checkEmptyRegions = function(table, rowObject) {
    $('tr.region-message', table).each(function() {
      // If the dragged row is in this region, but above the message row, swap it down one space.
      if ($(this).prev('tr').get(0) == rowObject.element) {
        // Prevent a recursion problem when using the keyboard to move rows up.
        if ((rowObject.method != 'keyboard' || rowObject.direction == 'down')) {
          rowObject.swap('after', this);
        }
      }
      // This region has become empty
      if ($(this).next('tr').is(':not(.draggable)') || $(this).next('tr').size() == 0) {
        $(this).removeClass('region-populated').addClass('region-empty');
      }
      // This region has become populated.
      else if ($(this).is('.region-empty')) {
        $(this).removeClass('region-empty').addClass('region-populated');
      }
    });
  };
};
;// $Id: quicktabs.js,v 1.3.2.16 2009/03/16 20:35:31 katbailey Exp $

Drupal.settings.views = Drupal.settings.views || {'ajax_path': 'views/ajax'};

Drupal.behaviors.quicktabs = function (context) {
  $('.quicktabs_wrapper:not(.quicktabs-processed)', context).addClass('quicktabs-processed').each(function(){
    Drupal.quicktabs.prepare(this);
  });
};

Drupal.quicktabs = Drupal.quicktabs || {};

// setting up the inital behaviours
Drupal.quicktabs.prepare = function(el) {
  var i = 0;
  var qtid = el.id.split('-')[1];
  
  $(el).find('ul.quicktabs_tabs li a').each(function(){
    this.myTabIndex = i++;
    this.qtid = qtid;
    $(this).bind('click', quicktabsClick);
  });

  // Search for the active tab.
  var $active_tab = $(el).children('.quicktabs_tabs').find('li.active a');

  if ($active_tab.hasClass('qt_tab') || $active_tab.hasClass('qt_ajax_tab')) {
    $active_tab.trigger('click');
  }
  else {
    // Click on the first tab.
    $(el).children('.quicktabs_tabs').find('li.first a').trigger('click');
  }
  return false;
}

// constructor for an individual tab
Drupal.quicktabs.tab = function (el) {
  this.element = el;
  this.tabIndex = el.myTabIndex;
  this.qtid = el.qtid;
  var qtKey = 'qt_' + this.qtid;
  var i = 0;
  for (var key in Drupal.settings.quicktabs[qtKey].tabs) {
    if (i == this.tabIndex) {
      this.tabObj = Drupal.settings.quicktabs[qtKey].tabs[key];
      this.tabKey = key;
    }
    i++;
  }
  this.tabpage_id = 'quicktabs_tabpage_' + this.qtid + '_' + this.tabKey;
  this.container = $('#quicktabs_container_' + this.qtid);
  this.tabpage = this.container.find('#' + this.tabpage_id);
  // The 'this' variable will not persist inside of the options object.
  var tab = this;
  this.options = {
    success: function(response) {
      return tab.success(response);
    },
    complete: function(response) {
      return tab.complete();
    }
  }
}

// ajax callback for non-views tabs
Drupal.quicktabs.tab.prototype.success = function(response) {
  var result = Drupal.parseJson(response.data);
  this.container.append(Drupal.theme('quicktabsResponse', this, result));
  Drupal.attachBehaviors(this.container);
}

// function to call on completed ajax call
// for non-views tabs
Drupal.quicktabs.tab.prototype.complete = function() {
  // stop the progress bar
  this.stopProgress();
}


Drupal.quicktabs.tab.prototype.stopProgress = function () {
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  $(this.element).removeClass('progress-disabled').attr('disabled', false);
}

Drupal.quicktabs.tab.prototype.startProgress = function () {
  var progressBar = new Drupal.progressBar('qt-progress-' + this.element.id, null, null, null);
  progressBar.setProgress(-1, Drupal.t('Loading'));
  this.progress = {};
  this.progress.element = $(progressBar.element).addClass('qt-progress qt-progress-bar');
  this.container.prepend(this.progress.element);
}

Drupal.quicktabs.tab.prototype.quicktabsAjaxView = function() {
  // Create an empty div for the tabpage. The generated view will be inserted into this.
  var tab = this;
  tab.container.append(Drupal.theme('quicktabsResponse', this, null));

  var target;
  target = $('#' + tab.tabpage_id + ' > div');
  var ajax_path = Drupal.settings.views.ajax_path;
   //If there are multiple views this might've ended up showing up multiple times.
  if (ajax_path.constructor.toString().indexOf("Array") != -1) {
    ajax_path = ajax_path[0];
  }
  var args;
  if (tab.tabObj.args != '') {
    args = tab.tabObj.args.join('/');
  } else {
    args = '';
  }
  var viewData = {
    'view_name': tab.tabObj.vid,
    'view_display_id': tab.tabObj.display,
    'view_args': args
  }
  $.ajax({
    url: ajax_path,
    type: 'GET',
    data: viewData,
    success: function(response) {
      // Call all callbacks.
      if (response.__callbacks) {
        $.each(response.__callbacks, function(i, callback) {
          eval(callback)(target, response);
        });
      }
    },
    complete: function() {
      tab.stopProgress();
    },
    error: function() { alert(Drupal.t("An error occurred at @path.", {'@path': ajax_path})); },
    dataType: 'json'
  });
}

var quicktabsClick = function() {

  var tab = new Drupal.quicktabs.tab(this);

  // Set clicked tab to active.
  $(this).parents('li').siblings().removeClass('active');
  $(this).parents('li').addClass('active');

  // Hide all tabpages.
  tab.container.children().hide();

  // Show the active tabpage.
  if (tab.tabpage.hasClass('quicktabs_tabpage')) {
    tab.tabpage.show();
  }
  else {
    if ($(this).hasClass('qt_ajax_tab')) {
      tab.startProgress();
      // Construct the ajax tabpage.
      if (tab.tabObj.type != 'view') {
        // construct the ajax path to retrieve the content, depending on type
        var qtAjaxPath = Drupal.settings.basePath + 'quicktabs/ajax/' + tab.tabObj.type + '/';
        switch (tab.tabObj.type) {
          case 'node':
            qtAjaxPath +=  tab.tabObj.nid + '/' + tab.tabObj.teaser + '/' + tab.tabObj.hide_title;
            break;
          case 'block':
            qtAjaxPath +=  tab.tabObj.bid + '/' + tab.tabObj.hide_title;
            break;
          case 'qtabs':
            qtAjaxPath +=  tab.tabObj.qtid;
            break;
        }
        
        $.ajax({
          url: qtAjaxPath,
          type: 'GET',
          data: null,
          success: tab.options.success,
          complete: tab.options.complete,
          dataType: 'json'
        });
      }
      else {
        // special treatment for views
        tab.quicktabsAjaxView();
      }
    }
  }
  return false;
}

// theme function for ajax response
Drupal.theme.prototype.quicktabsResponse = function(tab, result) {
  var newDiv = tab.tabObj.type == 'view' ? '<div id="' + tab.tabpage_id + '" class="quicktabs_tabpage"><div></div></div>' : '<div id="' + tab.tabpage_id + '" class="quicktabs_tabpage">' + result['data'] + '</div>';
  return newDiv;
}; 
;// $Id: jquery.form.js,v 1.2 2007/11/19 10:05:48 goba Exp $

/*
 * jQuery Form Plugin
 * version: 2.01 (10/31/2007)
 * @requires jQuery v1.1 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.7.1j=5(o){2(P o==\'5\')o={L:o};o=$.2h({1h:4.X(\'2i\')||1E.2u.3D(),I:4.X(\'2g\')||\'29\'},o||{});3 p={};$.M.N(\'R.2P.2L\',[4,o,p]);2(p.1Q)6 4;3 a=4.1z(o.2r);2(o.V){H(3 n 3u o.V)a.C({z:n,A:o.V[n]})}2(o.28&&o.28(a,4,o)===E)6 4;$.M.N(\'R.K.36\',[a,4,o,p]);2(p.1Q)6 4;3 q=$.1x(a);2(o.I.31()==\'29\'){o.1h+=(o.1h.2Z(\'?\')>=0?\'&\':\'?\')+q;o.V=B}8 o.V=q;3 r=4,U=[];2(o.1r)U.C(5(){r.1r()});2(o.1o)U.C(5(){r.1o()});2(!o.18&&o.14){3 u=o.L||5(){};U.C(5(a){2(4.1N)$(o.14).X("1M",a).1N().D(u,1L);8 $(o.14).2t(a).D(u,1L)})}8 2(o.L)U.C(o.L);o.L=5(a,b){H(3 i=0,F=U.G;i<F;i++)U[i](a,b,r)};3 v=$(\'19:3v\',4).15();3 w=E;H(3 j=0;j<v.G;j++)2(v[j])w=T;2(o.2f||w){2($.1i.3o&&o.2a)$.3l(o.2a,1l);8 1l()}8 $.3h(o);$.M.N(\'R.K.3f\',[4,o]);6 4;5 1l(){3 d=r[0];3 f=$.2h({},$.39,o);3 h=\'35\'+$.7.1j.1a++;3 i=$(\'<2f 33="\'+h+\'" z="\'+h+\'" />\');3 j=i[0];3 k=$.1i.20&&1E.20.30()<9;2($.1i.1X||k)j.2Y=\'2W:E;1w.2U("");\';i.2S({2R:\'2Q\',23:\'-24\',1R:\'-24\'});3 l={Z:B,1b:B,2K:0,2J:\'n/a\',2H:5(){},2F:5(){},2E:5(){}};3 g=f.2B;2(g&&!$.1O++)$.M.N("2x");2(g)$.M.N("2w",[l,f]);3 m=0;3 n=0;1f(5(){i.2v(\'1n\');j.1K?j.1K(\'1J\',12):j.2s(\'1I\',12,E);3 a=d.1H?\'1H\':\'2q\';3 t=r.X(\'14\');r.X({14:h,2g:\'3C\',2i:f.1h});d[a]=\'3B/R-V\';2(f.1G)1f(5(){n=T;12()},f.1G);d.K();r.X(\'14\',t)},10);5 12(){2(m++)6;j.2o?j.2o(\'1J\',12):j.3A(\'1I\',12,E);3 a=T;3z{2(n)3x\'1G\';3 b,O;O=j.2n?j.2n.1w:j.2l?j.2l:j.1w;l.Z=O.1n?O.1n.1M:B;l.1b=O.2k?O.2k:O;2(f.18==\'2j\'||f.18==\'3s\'){3 c=O.1D(\'1C\')[0];b=c?c.A:l.Z;2(f.18==\'2j\')3r("V = "+b);8 $.3q(b)}8 2(f.18==\'2m\'){b=l.1b;2(!b&&l.Z!=B)b=2d(l.Z)}8{b=l.Z}}3p(e){a=E;$.3n(f,l,\'2b\',e)}2(a){f.L(b,\'L\');2(g)$.M.N("3m",[l,f])}2(g)$.M.N("3k",[l,f]);2(g&&!--$.1O)$.M.N("3j");2(f.27)f.27(l,a?\'L\':\'2b\');1f(5(){i.3i();l.1b=B},3g)};5 2d(s,a){2(1E.26){a=25 26(\'3d.3c\');a.3b=\'E\';a.3a(s)}8 a=(25 38()).37(s,\'1A/2m\');6(a&&a.22&&a.22.1e!=\'34\')?a:B}}};$.7.1j.1a=0;$.7.W=5(a){6 4.21().K(1m).D(5(){4.1u=$.7.W.1a++;$.7.W.1t[4.1u]=a;$(":K,19:Y",4).1Z(1s)})};$.7.W.1a=1;$.7.W.1t={};5 1s(e){3 a=4.R;a.Q=4;2(4.I==\'Y\'){2(e.1Y!=S){a.11=e.1Y;a.16=e.2X}8 2(P $.7.1U==\'5\'){3 b=$(4).1U();a.11=e.1V-b.1R;a.16=e.1W-b.23}8{a.11=e.1V-4.2V;a.16=e.1W-4.32}}1f(5(){a.Q=a.11=a.16=B},10)};5 1m(){3 a=4.1u;3 b=$.7.W.1t[a];$(4).1j(b);6 E};$.7.21=5(){4.1T(\'K\',1m);6 4.D(5(){$(":K,19:Y",4).1T(\'1Z\',1s)})};$.7.1z=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1D(\'*\'):c.2T;2(!d)6 a;H(3 i=0,F=d.G;i<F;i++){3 e=d[i];3 n=e.z;2(!n)1v;2(b&&c.Q&&e.I=="Y"){2(!e.1d&&c.Q==e)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16});1v}3 v=$.15(e,T);2(v&&v.1c==1g){H(3 j=0,1S=v.G;j<1S;j++)a.C({z:n,A:v[j]})}8 2(v!==B&&P v!=\'S\')a.C({z:n,A:v})}2(!b&&c.Q){3 f=c.1D("19");H(3 i=0,F=f.G;i<F;i++){3 g=f[i];3 n=g.z;2(n&&!g.1d&&g.I=="Y"&&c.Q==g)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16})}}6 a};$.7.2O=5(a){6 $.1x(4.1z(a))};$.7.2N=5(b){3 a=[];4.D(5(){3 n=4.z;2(!n)6;3 v=$.15(4,b);2(v&&v.1c==1g){H(3 i=0,F=v.G;i<F;i++)a.C({z:n,A:v[i]})}8 2(v!==B&&P v!=\'S\')a.C({z:4.z,A:v})});6 $.1x(a)};$.7.15=5(a){H(3 b=[],i=0,F=4.G;i<F;i++){3 c=4[i];3 v=$.15(c,a);2(v===B||P v==\'S\'||(v.1c==1g&&!v.G))1v;v.1c==1g?$.3e(b,v):b.C(v)}6 b};$.15=5(b,c){3 n=b.z,t=b.I,13=b.1e.1F();2(P c==\'S\')c=T;2(c&&(!n||b.1d||t==\'17\'||t==\'2M\'||(t==\'1q\'||t==\'1B\')&&!b.1p||(t==\'K\'||t==\'Y\')&&b.R&&b.R.Q!=b||13==\'J\'&&b.1y==-1))6 B;2(13==\'J\'){3 d=b.1y;2(d<0)6 B;3 a=[],1k=b.2I;3 e=(t==\'J-2e\');3 f=(e?d+1:1k.G);H(3 i=(e?d:0);i<f;i++){3 g=1k[i];2(g.2c){3 v=$.1i.1X&&!(g.2G[\'A\'].3t)?g.1A:g.A;2(e)6 v;a.C(v)}}6 a}6 b.A};$.7.1o=5(){6 4.D(5(){$(\'19,J,1C\',4).2p()})};$.7.2p=$.7.2D=5(){6 4.D(5(){3 t=4.I,13=4.1e.1F();2(t==\'1A\'||t==\'3w\'||13==\'1C\')4.A=\'\';8 2(t==\'1q\'||t==\'1B\')4.1p=E;8 2(13==\'J\')4.1y=-1})};$.7.1r=5(){6 4.D(5(){2(P 4.17==\'5\'||(P 4.17==\'2C\'&&!4.17.3y))4.17()})};$.7.2A=5(b){2(b==S)b=T;6 4.D(5(){4.1d=!b})};$.7.J=5(b){2(b==S)b=T;6 4.D(5(){3 t=4.I;2(t==\'1q\'||t==\'1B\')4.1p=b;8 2(4.1e.1F()==\'1P\'){3 a=$(4).2z(\'J\');2(b&&a[0]&&a[0].I==\'J-2e\'){a.2y(\'1P\').J(E)}4.2c=b}})}})(3E);',62,227,'||if|var|this|function|return|fn|else|||||||||||||||||||||||||||name|value|null|push|each|false|max|length|for|type|select|submit|success|event|trigger|doc|typeof|clk|form|undefined|true|callbacks|data|ajaxForm|attr|image|responseText||clk_x|cb|tag|target|fieldValue|clk_y|reset|dataType|input|counter|responseXML|constructor|disabled|tagName|setTimeout|Array|url|browser|ajaxSubmit|ops|fileUpload|submitHandler|body|clearForm|checked|checkbox|resetForm|clickHandler|optionHash|formPluginId|continue|document|param|selectedIndex|formToArray|text|radio|textarea|getElementsByTagName|window|toLowerCase|timeout|encoding|load|onload|attachEvent|arguments|innerHTML|evalScripts|active|option|veto|left|jmax|unbind|offset|pageX|pageY|msie|offsetX|click|opera|ajaxFormUnbind|documentElement|top|1000px|new|ActiveXObject|complete|beforeSubmit|GET|closeKeepAlive|error|selected|toXml|one|iframe|method|extend|action|json|XMLDocument|contentDocument|xml|contentWindow|detachEvent|clearFields|enctype|semantic|addEventListener|html|location|appendTo|ajaxSend|ajaxStart|find|parent|enable|global|object|clearInputs|setRequestHeader|getResponseHeader|attributes|getAllResponseHeaders|options|statusText|status|serialize|button|fieldSerialize|formSerialize|pre|absolute|position|css|elements|write|offsetLeft|javascript|offsetY|src|indexOf|version|toUpperCase|offsetTop|id|parsererror|jqFormIO|validate|parseFromString|DOMParser|ajaxSettings|loadXML|async|XMLDOM|Microsoft|merge|notify|100|ajax|remove|ajaxStop|ajaxComplete|get|ajaxSuccess|handleError|safari|catch|globalEval|eval|script|specified|in|file|password|throw|nodeType|try|removeEventListener|multipart|POST|toString|jQuery'.split('|'),0,{}))
;// $Id: base.js,v 1.11 2009/06/02 18:45:38 merlinofchaos Exp $
/**
 * @file base.js
 *
 * Some basic behaviors and utility functions for Views.
 */

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = function (context) {
  if ($.ui && $.ui.tabs) {
    $('#views-tabset:not(.views-processed)').addClass('views-processed').tabs({
      selectedClass: 'active'
    });
  }

  $('a.views-remove-link')
    .addClass('views-processed')
    .click(function() {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      return false;
    });
}

/**
 * For IE, attach some javascript so that our hovers do what they're supposed
 * to do.
 */
Drupal.behaviors.viewsHoverlinks = function() {
  if ($.browser.msie) {
    // If IE, attach a hover event so we can see our admin links.
    $("div.view:not(.views-hover-processed)").addClass('views-hover-processed').hover(
      function() {
        $('div.views-hide', this).addClass("views-hide-hover"); return true;
      },
      function(){
        $('div.views-hide', this).removeClass("views-hide-hover"); return true;
      }
    );
    $("div.views-admin-links:not(.views-hover-processed)")
      .addClass('views-hover-processed')
      .hover(
        function() {
          $(this).addClass("views-admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("views-admin-links-hover"); return true;
        }
      );
  }
}

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    var pair = pairs[i].split('=');
    // Ignore the 'q' path argument, if present.
    if (pair[0] != 'q' && pair[1]) {
      args[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};
;// $Id: dependent.js,v 1.8 2009/06/02 17:12:13 merlinofchaos Exp $
/**
 * @file dependent.js
 *
 * Written by dmitrig01 (Dmitri Gaskin) for Views; this provides dependent
 * visibility for form items in Views' ajax forms.
 *
 * To your $form item definition add:
 * - '#process' => array('views_process_dependency'),
 * - Add '#dependency' => array('id-of-form-item' => array(list, of, values, that, 
     make, this, item, show),
 *
 * Special considerations:
 * - radios are harder. Because Drupal doesn't give radio groups individual ids,
 *   use 'radio:name-of-radio' 
 *
 * - Checkboxes don't have their own id, so you need to add one in a div 
 *   around the checkboxes via #prefix and #suffix. You actually need to add TWO
 *   divs because it's the parent that gets hidden. Also be sure to retain the
 *   'expand_checkboxes' in the #process array, because the views process will
 *   override it.
 */

Drupal.Views = Drupal.Views || {};

Drupal.Views.dependent = { bindings: {}, activeBindings: {}, activeTriggers: [] };

Drupal.Views.dependent.inArray = function(array, search_term) {
  var i = array.length;
  if (i > 0) {
   do {
    if (array[i] == search_term) {
       return true;
    }
   } while (i--);
  }
  return false;
}


Drupal.Views.dependent.autoAttach = function() {
  // Clear active bindings and triggers.
  for (i in Drupal.Views.dependent.activeTriggers) {
    jQuery(Drupal.Views.dependent.activeTriggers[i]).unbind('change');
  }
  Drupal.Views.dependent.activeTriggers = [];
  Drupal.Views.dependent.activeBindings = {};
  Drupal.Views.dependent.bindings = {};

  if (!Drupal.settings.viewsAjax) {
    return;
  }

  // Iterate through all relationships
  for (id in Drupal.settings.viewsAjax.formRelationships) {

    // Drupal.Views.dependent.activeBindings[id] is a boolean, 
    // whether the binding is active or not.  Defaults to no.
    Drupal.Views.dependent.activeBindings[id] = 0;
    // Iterate through all possible values
    for(bind_id in Drupal.settings.viewsAjax.formRelationships[id].values) {
      // This creates a backward relationship.  The bind_id is the ID
      // of the element which needs to change in order for the id to hide or become shown.  
      // The id is the ID of the item which will be conditionally hidden or shown.
      // Here we're setting the bindings for the bind
      // id to be an empty array if it doesn't already have bindings to it
      if (!Drupal.Views.dependent.bindings[bind_id]) {
        Drupal.Views.dependent.bindings[bind_id] = [];
      }
      // Add this ID
      Drupal.Views.dependent.bindings[bind_id].push(id);
      // Big long if statement.
      // Drupal.settings.viewsAjax.formRelationships[id].values[bind_id] holds the possible values

      if (bind_id.substring(0, 6) == 'radio:') {
        var trigger_id = "input[name='" + bind_id.substring(6) + "']";
      }
      else {
        var trigger_id = '#' + bind_id;
      }

      Drupal.Views.dependent.activeTriggers.push(trigger_id);


      var getValue = function(item, trigger) {
        if (item.substring(0, 6) == 'radio:') {
          var val = jQuery(trigger + ':checked').val();
        }
        else {
          switch (jQuery(trigger).attr('type')) {
            case 'checkbox':
              var val = jQuery(trigger).attr('checked') || 0;
              break;
            default:
              var val = jQuery(trigger).val();
          }
        }
        return val;
      }

      var setChangeTrigger = function(trigger_id, bind_id) {
        // Triggered when change() is clicked.
        var changeTrigger = function() {
          var val = getValue(bind_id, trigger_id);

          for (i in Drupal.Views.dependent.bindings[bind_id]) {
            var id = Drupal.Views.dependent.bindings[bind_id][i];

            // Fix numerous errors
            if (typeof id != 'string') {
              continue;
            }

            // This bit had to be rewritten a bit because two properties on the
            // same set caused the counter to go up and up and up.
            if (!Drupal.Views.dependent.activeBindings[id]) {
              Drupal.Views.dependent.activeBindings[id] = {};
            }

            if (Drupal.Views.dependent.inArray(Drupal.settings.viewsAjax.formRelationships[id].values[bind_id], val)) {
              Drupal.Views.dependent.activeBindings[id][bind_id] = 'bind';
            }
            else {
              delete Drupal.Views.dependent.activeBindings[id][bind_id];
            }

            var len = 0;
            for (i in Drupal.Views.dependent.activeBindings[id]) {
              len++;
            }

            var object = jQuery('#' + id + '-wrapper');
            if (!object.size()) {
              object = jQuery('#' + id).parent();
            }

            if (Drupal.settings.viewsAjax.formRelationships[id].num <= len) {
              // Show if the element if criteria is matched
              object.show(0);
            }
            else {
              // Otherwise hide
              object.hide(0);
            }
          }
        }

        jQuery(trigger_id).change(function() {
          // Trigger the internal change function
          // the attr('id') is used because closures are more confusing
          changeTrigger(trigger_id, bind_id);
        });
        // Trigger initial reaction
        changeTrigger(trigger_id, bind_id);
      }
      setChangeTrigger(trigger_id, bind_id);
    }
  }
}

Drupal.behaviors.viewsDependent = function (context) {
  Drupal.Views.dependent.autoAttach();

  // Really large sets of fields are too slow with the above method, so this
  // is a sort of hacked one that's faster but much less flexible.
  $("select.views-master-dependent:not(.views-processed)")
    .addClass('views-processed')
    .change(function() {
      var val = $(this).val();
      if (val == 'all') {
        $('.views-dependent-all').show(0);
      }
      else {
        $('.views-dependent-all').hide(0);
        $('.views-dependent-' + val).show(0);
      }
    })
    .trigger('change');
}
;// $Id: ajax_view.js,v 1.18 2009/06/02 19:30:44 merlinofchaos Exp $

/**
 * @file ajaxView.js
 *
 * Handles AJAX fetching of views, including filter submission and response.
 */

Drupal.Views.Ajax = Drupal.Views.Ajax || {};

/**
 * An ajax responder that accepts a packet of JSON data and acts appropriately.
 *
 * The following fields control behavior.
 * - 'display': Display the associated data in the view area.
 */
Drupal.Views.Ajax.ajaxViewResponse = function(target, response) {

  if (response.debug) {
    alert(response.debug);
  }

  var $view = $(target);

  // Check the 'display' for data.
  if (response.status && response.display) {
    var $newView = $(response.display);
    $view.replaceWith($newView);
    $view = $newView;
    Drupal.attachBehaviors($view.parent());
  }
 
  if (response.messages) {
    // Show any messages (but first remove old ones, if there are any).
    $view.find('.views-messages').remove().end().prepend(response.messages);
  }
};

/**
 * Ajax behavior for views. 
 */
Drupal.behaviors.ViewsAjaxView = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    var ajax_path = Drupal.settings.views.ajax_path;
    // If there are multiple views this might've ended up showing up multiple times.
    if (ajax_path.constructor.toString().indexOf("Array") != -1) {
      ajax_path = ajax_path[0];
    }
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      var view = '.view-dom-id-' + settings.view_dom_id;
      if (!$(view).size()) {
        // Backward compatibility: if 'views-view.tpl.php' is old and doesn't
        // contain the 'view-dom-id-#' class, we fall back to the old way of
        // locating the view:
        view = '.view-id-' + settings.view_name + '.view-display-id-' + settings.view_display_id;
      }


      // Process exposed filter forms.
      $('form#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'))
      .filter(':not(.views-processed)')
      .each(function () {
        // remove 'q' from the form; it's there for clean URLs
        // so that it submits to the right place with regular submit
        // but this method is submitting elsewhere.
        $('input[name=q]', this).remove();
        var form = this;
        // ajaxSubmit doesn't accept a data argument, so we have to
        // pass additional fields this way.
        $.each(settings, function(key, setting) {
          $(form).append('<input type="hidden" name="'+ key + '" value="'+ setting +'"/>');
        });
      })
      .addClass('views-processed')
      .submit(function () {
        $('input[type=submit]', this).after('<span class="views-throbbing">&nbsp</span>');
        var object = this;
        $(this).ajaxSubmit({
          url: ajax_path,
          type: 'GET',
          success: function(response) {
            // Call all callbacks.
            if (response.__callbacks) {
              $.each(response.__callbacks, function(i, callback) {
                eval(callback)(view, response);
              });
              $('.views-throbbing', object).remove();
            }
          },
          error: function() { alert(Drupal.t("An error occurred at @path.", {'@path': ajax_path})); $('.views-throbbing', object).remove(); },
          dataType: 'json'
        });

        return false;
      });

      $(view).filter(':not(.views-processed)')
        // Don't attach to nested views. Doing so would attach multiple behaviors
        // to a given element.
        .filter(function() {
          // If there is at least one parent with a view class, this view
          // is nested (e.g., an attachment). Bail.
          return !$(this).parents('.view').size();
        })
        .each(function() {
          // Set a reference that will work in subsequent calls.
          var target = this;
          $(this)
            .addClass('views-processed')
            // Process pager, tablesort, and attachment summary links.
            .find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
            .each(function () {
              var viewData = {};
              // Construct an object using the settings defaults and then overriding
              // with data specific to the link.
              $.extend(
                viewData,
                settings,
                Drupal.Views.parseQueryString($(this).attr('href')),
                // Extract argument data from the URL.
                Drupal.Views.parseViewArgs($(this).attr('href'), settings.view_base_path)
              );
              $(this).click(function () {
                $(this).addClass('views-throbbing');
                $.ajax({
                  url: ajax_path,
                  type: 'GET',
                  data: viewData,
                  success: function(response) {
                    $(this).removeClass('views-throbbing');
                    // Scroll to the top of the view. This will allow users
                    // to browse newly loaded content after e.g. clicking a pager
                    // link.
                    var offset = $(target).offset();
                    // Only scroll upward
                    if (offset.top - 10 < $(window).scrollTop()) {
                      $('html,body').animate({scrollTop: (offset.top - 10)}, 500);
                    }
                    // Call all callbacks.
                    if (response.__callbacks) {
                      $.each(response.__callbacks, function(i, callback) {
                        eval(callback)(target, response);
                      });
                    }
                  },
                  error: function() { $(this).removeClass('views-throbbing'); alert(Drupal.t("An error occurred at @path.", {'@path': ajax_path})); },
                  dataType: 'json'
                });

                return false;
              });
            }); // .each function () {
      }); // $view.filter().each
    }); // .each Drupal.settings.views.ajaxViews
  } // if
};
;Drupal.behaviors.qtabsCookie = function (context) {
  $('a.qt_tab').click(function(e) {
    var qt_parent_id = $(this).parents('.quicktabs_wrapper')[0].id;
    var qt_par_id = qt_parent_id.replace('-', '_'); 
    var qt_index = this.id.split('-')[3];
    var COOKIE_NAME = qt_par_id;
    $.cookie(COOKIE_NAME, qt_index); 
  });
}

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;