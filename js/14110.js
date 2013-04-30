eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(5($,f,g){I h={1D:"4X",1i:2O,k:6,2G:"4S",1y:6,2p:6,7:6,3c:"4R",1m:6,2n:6,2I:o,1X:o,2S:6,1c:6,C:6,3k:o,n:6,N:6,U:6,1a:6,1C:0.9,2X:o,11:"35 {11} 4M {1o}",2r:"2r",F:"F",P:"P",E:6,2J:o,2N:o,1d:o,K:6,2Q:o,2C:4L,2V:"1I K",2Y:"1s K",31:6,32:6,2x:6,36:6,3a:6,2w:o,3g:o,3h:o,15:6,1S:6,t:6,1V:6,2c:6,1j:4E},L=\'L\',q=\'4D\',1k=q+\'4A\',2f=q+\'4x\',21=q+\'4w\',26=q+\'4v\',1w=q+\'4u\',2s=q+\'4t\',1A=q+\'4r\',1n=!$.3e.1C&&!$.3e.p,1p=1n&&!g.4q,1x=q+\'4o\',$14,$m,$1b,$W,$25,$24,$23,$22,$r,$u,$s,$1q,$20,$U,$11,$K,$F,$17,$P,$1Y,3,12,13,T,Z,G,v,n,E,1u,1z,2z,l,8="8",1T;5 $j(a,b,c){I d=f.4n(a);4(b){d.2K=q+b}4(c){d.p.4m=c}B $(d)}5 1v(a){I b=$r.2i,1R=(v+a)%b;B(1R<0)?b+1R:1R}5 A(a,b){B 18.2t((/%/.2T(a)?((b===\'x\'?$u.k():$u.7())/2v):1)*4l(a,10))}5 2F(a){B 3.n||/\\.(4j|4i|4g?g|4f|4b)((#|\\?).*)?$/i.2T(a)}5 2g(){I i;3=$.3d({},$.1j(G,L));4a(i 2j 3){4($.2m(3[i])&&i.49(0,2)!==\'1W\'){3[i]=3[i].1K(G)}}3.1a=3.1a||G.1a||\'3n\';3.N=3.N||$(G).30(\'N\');3.U=3.U||G.U;4(3s 3.N==="3t"){3.N=$.48(3.N)}}5 S(a,b){$.3Z.S(a);4(b){b.1K(G)}}5 K(){I a,1e=q+"3X",J="J."+q,1I,1s,2B;4(3.K&&$r[1]){1I=5(){$K.1P(3.2Y).1Q(J).1l(26,5(){4(3.1d||$r[v+1]){a=1h(l.F,3.2C)}}).1l(21,5(){2e(a)}).1g(J+\' \'+1w,1s);$m.1U(1e+"2h").1B(1e+"1W");a=1h(l.F,3.2C)};1s=5(){2e(a);$K.1P(3.2V).1Q([26,21,1w,J].3V(\' \')).1g(J,5(){l.F();1I()});$m.1U(1e+"1W").1B(1e+"2h")};4(3.2Q){1I()}z{1s()}}z{$m.1U(1e+"2h "+1e+"1W")}}5 2k(b){4(!1z){G=b;2g();$r=$(G);v=0;4(3.1a!==\'3n\'){$r=$(\'.\'+1k).2l(5(){I a=$.1j(H,L).1a||H.1a;B(a===3.1a)});v=$r.v(G);4(v===-1){$r=$r.X(G);v=$r.2i-1}}4(!E){E=1u=o;$m.V();4(3.2J){$(G).3U().1g(2s,5(){$(H).3T()})}$14.D({"1C":+3.1C,"2q":3.2w?"38":"1Z"}).V();3.w=A(3.2G,\'x\');3.h=A(3.3c,\'y\');l.Y();4(1p){$u.1l(\'1H.\'+1x+\' 3S.\'+1x,5(){$14.D({k:$u.k(),7:$u.7(),15:$u.1F(),t:$u.1E()})}).S(\'1H.\'+1x)}S(2f,3.31);$1Y.X($U).R();$P.1c(3.P).V()}l.1f(o)}}5 2A(){4(!$m&&f.3l){1T=6;$u=$(g);$m=$j(8).30({2K:L,\'3R\':1n?q+(1p?\'3P\':\'3O\'):\'\'}).R();$14=$j(8,"3N",1p?\'Y:2D\':\'\').R();$1b=$j(8,"3M");$W=$j(8,"3w").19($s=$j(8,"3u",\'k:0; 7:0; 3v:1J\'),$20=$j(8,"4k").X($j(8,"3x")),$U=$j(8,"3y"),$11=$j(8,"3z"),$F=$j(8,"3A"),$17=$j(8,"3B"),$K=$j(8,"3C").1l(2f,K),$P=$j(8,"3D"));$1b.19($j(8).19($j(8,"3E"),$25=$j(8,"3F"),$j(8,"3G")),$j(8,6,\'2B:t\').19($24=$j(8,"3H"),$W,$23=$j(8,"3I")),$j(8,6,\'2B:t\').19($j(8,"3J"),$22=$j(8,"3K"),$j(8,"3L"))).3r(\'8 8\').D({\'3p\':\'t\'});$1q=$j(8,6,\'Y:2D; k:3o; 2a:1J; 3Q:29\');$1Y=$F.X($17).X($11).X($K);$(f.3l).19($14,$m.19($1b,$1q))}}5 3f(){4($m){4(!1T){1T=o;12=$25.7()+$22.7()+$W.34(o)-$W.7();13=$24.k()+$23.k()+$W.33(o)-$W.k();T=$s.34(o);Z=$s.33(o);$m.D({"2W-1S":12,"2W-1V":13});$F.J(5(){l.F()});$17.J(5(){l.17()});$P.J(5(){l.P()});$14.J(5(){4(3.2w){l.P()}});$(f).1l(\'3W.\'+q,5(e){I a=e.3Y;4(E&&3.3g&&a===27){e.1M();l.P()}4(E&&3.3h&&$r[1]){4(a===37){e.1M();$17.J()}z 4(a===39){e.1M();$F.J()}}});$(\'.\'+1k,f).40(\'J\',5(e){4(!(e.41>1||e.42||e.43||e.44)){e.1M();2k(H)}})}B o}B 6}4($.L){B}$(2A);l=$.45[L]=$[L]=5(a,b){I c=H;a=a||{};2A();4(3f()){4(!c[0]){4(c.46){B c}c=$(\'<a/>\');a.E=o}4(b){a.2x=b}c.47(5(){$.1j(H,L,$.3d({},$.1j(H,L)||h,a))}).1B(1k);4(($.2m(a.E)&&a.E.1K(c))||a.E){2k(c[0])}}B c};l.Y=5(b,c){I d=0,t=0,1t=$m.1t(),1F=$u.1F(),1E=$u.1E();$u.1Q(\'1H.\'+q);$m.D({15:-3i,t:-3i});4(3.2c&&!1p){1t.15-=1F;1t.t-=1E;$m.D({Y:\'2c\'})}z{d=1F;t=1E;$m.D({Y:\'2D\'})}4(3.1V!==6){t+=18.1G($u.k()-3.w-Z-13-A(3.1V,\'x\'),0)}z 4(3.t!==6){t+=A(3.t,\'x\')}z{t+=18.2t(18.1G($u.k()-3.w-Z-13,0)/2)}4(3.1S!==6){d+=18.1G($u.7()-3.h-T-12-A(3.1S,\'y\'),0)}z 4(3.15!==6){d+=A(3.15,\'y\')}z{d+=18.2t(18.1G($u.7()-3.h-T-12,0)/2)}$m.D({15:1t.15,t:1t.t});b=($m.k()===3.w+Z&&$m.7()===3.h+T)?0:b||0;$1b[0].p.k=$1b[0].p.7="3o";5 2d(a){$25[0].p.k=$22[0].p.k=$W[0].p.k=a.p.k;$W[0].p.7=$24[0].p.7=$23[0].p.7=a.p.7}$m.4c().4d({k:3.w+Z,7:3.h+T,15:d,t:t},{4e:b,1r:5(){2d(H);1u=6;$1b[0].p.k=(3.w+Z+13)+"2E";$1b[0].p.7=(3.h+T+12)+"2E";4(3.2N){1h(5(){$u.1l(\'1H.\'+q,l.Y)},1)}4(c){c()}},4h:5(){2d(H)}})};l.1H=5(a){4(E){a=a||{};4(a.k){3.w=A(a.k,\'x\')-Z-13}4(a.1y){3.w=A(a.1y,\'x\')}$s.D({k:3.w});4(a.7){3.h=A(a.7,\'y\')-T-12}4(a.1m){3.h=A(a.1m,\'y\')}4(!a.1m&&!a.7){$s.D({7:"1Z"});3.h=$s.7()}$s.D({7:3.h});l.Y(3.1D==="29"?0:3.1i)}};l.16=5(b){4(!E){B}I c,1i=3.1D==="29"?0:3.1i;$s.1N();$s=$j(8,\'3u\').19(b);5 2Z(){3.w=3.w||$s.k();3.w=3.M&&3.M<3.w?3.M:3.w;B 3.w}5 2L(){3.h=3.h||$s.7();3.h=3.O&&3.O<3.h?3.O:3.h;B 3.h}$s.R().3m($1q.V()).D({k:2Z(),3v:3.1X?\'1Z\':\'1J\'}).D({7:2L()}).4p($W);$1q.R();$(n).D({\'3p\':\'29\'});4(1p){$(\'3j\').3b($m.3r(\'3j\')).2l(5(){B H.p.2a!==\'1J\'}).D({\'2a\':\'1J\'}).1g(1w,5(){H.p.2a=\'4s\'})}c=5(){I a,i,1o=$r.2i,C,1O=\'1O\',28=\'28\',1r,Q,2y;4(!E){B}5 2u(){4(1n){$m[0].p.4y(\'2l\')}}1r=5(){2e(2z);$20.R();S(26,3.2x)};4(1n){4(n){$s.4z(2v)}}$U.1c(3.U).X($s).V();4(1o>1){4(3s 3.11==="3t"){$11.1c(3.11.2R(\'{11}\',v+1).2R(\'{1o}\',1o)).V()}$F[(3.1d||v<1o-1)?"V":"R"]().1c(3.F);$17[(3.1d||v)?"V":"R"]().1c(3.2r);4(3.K){$K.V()}4(3.2X){a=[1v(-1),1v(1)];4B(i=$r[a.4C()]){Q=$.1j(i,L).N||i.N;4($.2m(Q)){Q=Q.1K(i)}4(2F(Q)){2y=2o 2M();2y.Q=Q}}}}z{$1Y.R()}4(3.C){C=$j(\'C\')[0];4(1O 2j C){C[1O]=0}4(28 2j C){C[28]="o"}C.4F=q+(+2o 4G());4(3.3k){1r()}z{$(C).1g(\'1f\',1r)}C.Q=3.N;4(!3.1X){C.1X="4H"}$(C).1B(q+\'4I\').3m($s).1g(1A,5(){C.Q="//4J:4K"})}z{1r()}4(3.1D===\'2U\'){$m.2b(1i,1,2u)}z{2u()}};4(3.1D===\'2U\'){$m.2b(1i,0,5(){l.Y(0,c)})}z{l.Y(1i,c)}};l.1f=5(d){I e,1L,16=l.16;1u=o;n=6;G=$r[v];4(!d){2g()}S(1A);S(21,3.32);3.h=3.7?A(3.7,\'y\')-T-12:3.1m&&A(3.1m,\'y\');3.w=3.k?A(3.k,\'x\')-Z-13:3.1y&&A(3.1y,\'x\');3.M=3.w;3.O=3.h;4(3.2p){3.M=A(3.2p,\'x\')-Z-13;3.M=3.w&&3.w<3.M?3.w:3.M}4(3.2n){3.O=A(3.2n,\'y\')-T-12;3.O=3.h&&3.h<3.O?3.h:3.O}e=3.N;2z=1h(5(){$20.V()},2v);4(3.2S){$j(8).R().4N($(e)[0]).1g(1A,5(){$(H).4O($s.4P())});16($(e))}z 4(3.C){16(" ")}z 4(3.1c){16(3.1c)}z 4(2F(e)){$(n=2o 2M()).1B(q+\'4Q\').3q(5(){3.U=6;16($j(8,\'2H\').1P(\'4T 35 4U 3b 4V s\'))}).1f(5(){I a;n.4W=2P;4(3.2I){1L=5(){n.7-=n.7*a;n.k-=n.k*a};4(3.M&&n.k>3.M){a=(n.k-3.M)/n.k;1L()}4(3.O&&n.7>3.O){a=(n.7-3.O)/n.7;1L()}}4(3.h){n.p.4Y=18.1G(3.h-n.7,0)/2+\'2E\'}4($r[1]&&(3.1d||$r[v+1])){n.p.2q=\'38\';n.4Z=5(){l.F()}}4(1n){n.p.50=\'51\'}1h(5(){16(n)},1)});1h(5(){n.Q=e},1)}z 4(e){$1q.1f(e,3.1j,5(a,b,c){16(b===\'3q\'?$j(8,\'2H\').1P(\'52 53: \'+c.54):$(H).55())})}};l.F=5(){4(!1u&&$r[1]&&(3.1d||$r[v+1])){v=1v(1);l.1f()}};l.17=5(){4(!1u&&$r[1]&&(3.1d||v)){v=1v(-1);l.1f()}};l.P=5(){4(E&&!1z){1z=o;E=6;S(1w,3.36);$u.1Q(\'.\'+q+\' .\'+1x);$14.2b(56,0);$m.1s().2b(2O,0,5(){$m.X($14).D({\'1C\':1,2q:\'1Z\'}).R();S(1A);$s.1N();1h(5(){1z=6;S(2s,3.3a)},1)})}};l.1N=5(){$([]).X($m).X($14).1N();$m=2P;$(\'.\'+1k).57(L).1U(1k).58()};l.G=5(){B $(G)};l.3=h}(59,5a,H));', 62, 321, '|||settings|if|function|false|height|div|||||||||||tag|width|publicMethod|box|photo|true|style|prefix|related|loaded|left|window|index||||else|setSize|return|iframe|css|open|next|element|this|var|click|slideshow|colorbox|mw|href|mh|close|src|hide|trigger|loadedHeight|title|show|content|add|position|loadedWidth||current|interfaceHeight|interfaceWidth|overlay|top|prep|prev|Math|append|rel|wrap|html|loop|className|load|one|setTimeout|speed|data|boxElement|bind|innerHeight|isIE|total|isIE6|loadingBay|complete|stop|offset|active|getIndex|event_cleanup|event_ie6|innerWidth|closing|event_purge|addClass|opacity|transition|scrollLeft|scrollTop|max|resize|start|hidden|call|setResize|preventDefault|remove|frameBorder|text|unbind|newIndex|bottom|init|removeClass|right|on|scrolling|groupControls|auto|loadingOverlay|event_load|bottomBorder|rightBorder|leftBorder|topBorder|event_complete||allowTransparency|none|visibility|fadeTo|fixed|modalDimensions|clearTimeout|event_open|makeSettings|off|length|in|launch|filter|isFunction|maxHeight|new|maxWidth|cursor|previous|event_closed|round|removeFilter|100|overlayClose|onComplete|img|loadingTimer|appendHTML|clear|slideshowSpeed|absolute|px|isImage|initialWidth|Error|scalePhotos|returnFocus|id|getHeight|Image|reposition|300|null|slideshowAuto|replace|inline|test|fade|slideshowStart|padding|preloading|slideshowStop|getWidth|attr|onOpen|onLoad|outerWidth|outerHeight|image|onCleanup||pointer||onClosed|not|initialHeight|extend|support|addBindings|escKey|arrowKey|9e4|select|fastIframe|body|appendTo|nofollow|9999px|float|error|find|typeof|string|LoadedContent|overflow|Content|LoadingGraphic|Title|Current|Next|Previous|Slideshow|Close|TopLeft|TopCenter|TopRight|MiddleLeft|MiddleRight|BottomLeft|BottomCenter|BottomRight|Wrapper|Overlay|IE|IE6|display|class|scroll|focus|blur|join|keydown|Slideshow_|keyCode|event|live|which|shiftKey|altKey|metaKey|fn|selector|each|trim|slice|for|ico|dequeue|animate|duration|bmp|jpe|step|png|gif|LoadingOverlay|parseInt|cssText|createElement|_IE6|prependTo|XMLHttpRequest|_purge|inherit|_closed|_cleanup|_complete|_load|_open|removeAttribute|fadeIn|Element|while|pop|cbox|undefined|name|Date|no|Iframe|about|blank|2500|of|insertBefore|replaceWith|children|Photo|450|600|This|could|be|onload|elastic|marginTop|onclick|msInterpolationMode|bicubic|Request|unsuccessful|statusText|contents|200|removeData|die|jQuery|document'.split('|'), 0, {}));
var versionMinor = parseFloat(navigator.appVersion);
var versionMajor = parseInt(versionMinor);
var IE = document.all && !window.opera && versionMajor < 7;
var IE7 = document.all && !window.opera && versionMajor >= 7;
var OP = window.opera;
var FF = document.getElementById;
var NS = document.layers;

function get_item(a, b) {
    if (IE) {
        return (b) ? window.opener.document.all[a] : document.all[a]
    } else if (FF) {
        return (b) ? window.opener.document.getElementById(a) : document.getElementById(a)
    } else if (NS) {
        return (b) ? window.opener.document.layers[a] : document.layers[a]
    }
};

function change_display(a, b, c) {
    if (IE) {
        element = (c == true) ? window.opener.document.all[a].style : document.all[a].style
    } else if (FF) {
        element = (c == true) ? window.opener.document.getElementById(a).style : document.getElementById(a).style
    } else if (NS) {
        element = (c == true) ? window.opener.document.layers[a] : document.layers[a]
    };
    element.display = b
};

function reverse_display(a, b) {
    element = get_item(a);
    if (!element) {
        return false
    }
    var c = (element.style.display != 'block') ? 'block' : 'none';
    change_display(a, c, b)
};
var current_tooltip;

function show_tooltip(a, b, c, d) {
    var e = get_item('tooltip');
    if (!e) {
        var e = document.createElement('div');
        e.setAttribute('id', 'tooltip');
        document.body.appendChild(e)
    };
    e.style.zIndex = 100;
    e.style.position = 'absolute';
    if (c) {
        b = '<table border="0" cellspacing="1" cellpadding="0"><tr><td class="header2">' + c + '</td></tr><tr><td class="noidung">' + b + '</td></tr></table>'
    } else {
        b = '<span>' + b + '</span>'
    };
    e.innerHTML = b;
    e.style.visibility = 'visible';
    a.onmousemove = move_tooltip;
    a.onmouseout = function () {
        e.style.visibility = "hidden"
    };
    a.title = ''
};
var offsetxpoint = 20;
var offsetypoint = 5;
var real_body = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
real_body = (document.documentElement) ? document.documentElement : document.body;

function move_tooltip(e) {
    var a = (!IE) ? e.pageX : event.clientX + real_body.scrollLeft;
    var b = (!IE) ? e.pageY : event.clientY + real_body.scrollTop;
    var c = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - e.clientX - offsetxpoint - 20;
    var d = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - e.clientY - offsetypoint - 20;
    var f = (offsetxpoint < 0) ? offsetxpoint * (-1) : -1000;
    current_tooltip = get_item('tooltip');
    if (c < current_tooltip.offsetWidth) current_tooltip.style.left = IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + e.clientX - current_tooltip.offsetWidth + "px";
    else if (a < f) current_tooltip.style.left = "5px";
    else current_tooltip.style.left = a + offsetxpoint + "px";
    if (d < current_tooltip.offsetHeight) current_tooltip.style.top = IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + e.clientY - current_tooltip.offsetHeight - offsetypoint + "px";
    else current_tooltip.style.top = b + offsetypoint + "px"
};
$(function () {
    $('.quotene img').each(function () {
        var link = $(this).attr('src');
        if ($(this).height() > 120) {
            $(this).replaceWith('<a class="chay" href="' + link + '" title="FREE - SOFT"><img  title="Click vĂ o áº£nh xem kĂ­ch thÆ°á»›c tháº­t" src="' + link + '"></a>')
        }
    });
    $("a.chay").colorbox({
        slideshow: true
    })
});
function dosat(plus, v) {
	if (v == "Message not voted") v = "x z vietk 0% (0 vote)";
	var a = parseInt(v.split(" ")[3], 10) / 100;
	var b = parseInt(v.split(" ")[4].substr(1), 10);
	if (plus == 'plus') a = (a * b + 1) / (b + 1);
	else a = a * b / (b + 1);
	v = "Message reputation : " + Math.round(a * 100) + "% (" + (b + 1) + " vote)";
	return chem(v)
};
function chem(v) {
	if (v == "Message not voted") return '<span class=qua>B\xE0i vi\u1EBFt ch\u01B0a \u0111\u01B0\u1EE3c vote</span>';
	var a = parseInt(v.split(" ")[3], 10) / 100;
	var b = parseInt(v.split(" ")[4].substr(1), 10);
	return '<span class=no>' + ((a != 0) ? '<span class=vop>' + Math.round(a * b) + '+</span>': '') + ((a != 0 && a != 1) ? ' <span style="color:#C2D5E3">|</span> ': '') + ((a != 1) ? '<span class=vom>' + Math.round(b - a * b) + '-</span>': '') + '</span> <span class=qua>\u0110\xE1nh gi\xE1: ' + Math.round(a * 100) + '%</span>'
};
$(document).ready(function () {
	$(".giet").click(function () {
		$(this).parent().parent().html('Chờ tý nào ..... !').fadeIn('slow').animate({
			opacity: 1
		},
		1800).fadeOut('slow', function () {
			$(this).text('Đã xong!').fadeIn()
		});
		var a = $(this).attr("target"),
		b = $(this).attr("alt"),
		c = $("." + a).attr("title");
		$("." + a).html(dosat(b, c));
		$("." + a).removeAttr("title")
	});
	$(".dosat").html(function () {
		return chem($(this).text())
	})
});