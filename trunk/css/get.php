<?php
// Code duoc xay dung va phat trien boi phu.phu51 & Error! 
header("Content-Type: application/xml; charset=utf-8");
$mahoa = $_GET['id'];
$string = base64_decode($mahoa);
$auto = $_GET['auto']; 
#ket thuc phan chung, bat dau zing.vn
if ( strstr($mahoa,"http://"))
{
$xml = '<?xml version="1.0" encoding="utf-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/"><trackList>';
$xml .='<track>
<annotation>Vào music.phanvanphu.com để cập nhật lại tool nhạc nhé</annotation>
<title>Vào music.phanvanphu.com để cập nhật lại tool nhạc nhé</title>
<creator>Vào music.phanvanphu.com để cập nhật lại tool nhạc nhé</creator>
<location>http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3</location>
</track></trackList></playlist>';
echo $xml;
}
else
{
if ( strstr($string,"http://mp3.zing.vn"))
{
if ( strstr($string,"/album/")|| strstr($string,"/playlist/"))
{//Neu nhu link co dang nhu tren thi bat dau get
$url = file_get_contents($string);	
$xml = explode  ("xmlURL=",$url);
$xml = explode  ("&",$xml[1]);
$error =   $xml[0];
$data = str_replace(array("<![CDATA[","]]>"),"",file_get_contents($error));
$song = explode('<item type="mp3">',$data);
$xml = '<?xml version="1.0" encoding="utf-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/"><trackList>';
if ($_GET['type']=='pig') {
$xml1='<!-- Music for blog by phanvanphu.com -->'.'<player showDisplay="yes" showPlaylist="yes" autoStart="'.$auto.'">'.'';}
for($i=1;$i<count($song);$i++)
{
if(preg_match('#<title>(.*?)<\/title>(.*?)<performer>(.*?)<\/performer>(.*?)<source>(.*?)<\/source>#is',$song[$i],$name))
$xml .= '<track>'.
'<annotation>'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'</annotation>'.
'<title>'.htmlspecialchars($name[1]).'</title>'.'<creator>'.htmlspecialchars($name[3]).'</creator>'.'
<location>'.htmlspecialchars($name[5]).'.mp3'.'</location>'.'
</track>';
if ($_GET['type']=='pig')
{
$xml1.='<song path="'.htmlspecialchars($name[5]).'.mp3'.'" title="'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'" />';
}
}//ket thuc ham for 
$xml .='<track>
<annotation>Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com </annotation>
<title>wWw.PhanVanPhu.Com</title>
<creator>Phu.Phu51 - Error ! - Insertion Tool Music And Video</creator>
<location>http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3</location>
</track></trackList></playlist>';
if ($_GET['type']=='pig') { $xml1.='<song path="http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3" title="Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com" /></player>'; 
echo $xml1; }
else { echo $xml;}}
// ket thuc if link playlist ,video
if ( strstr($string,"/bai-hat/")|| strstr($string,"/video-clip/"))
{//Neu nhu link co dang nhu tren thi bat dau get
$url = file_get_contents($string);	
$xml = explode  ("xmlURL=",$url);
$xml = explode  ("&",$xml[1]);
$error =   $xml[0];
$data = str_replace(array("<![CDATA[","]]>"),"",file_get_contents($error));
if ( strstr($string,"/video-clip/"))
{
$find = '<item type="mp4">';
}
else
{$find = '<item type="mp3">';
}
$song = explode("$find",$data);
$xml = '<?xml version="1.0" encoding="utf-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/"><trackList>';
if ($_GET['type']=='pig') {
$xml1='<!-- Music or log by phanvanphu.com -->'.'<player showDisplay="yes" showPlaylist="yes" autoStart="'.$auto.'">'.'';}
if ( strstr($string,"/video-clip/"))
{$a=0;}
else{$a=1;}
for($i=$a;$i<count($song);$i++)
{
if(strstr($string,"/video-clip/"))
{
$local='f480';
}
else
{
$local='source';
}
if(preg_match("#<title>(.*?)<\/title>(.*?)<performer>(.*?)<\/performer>(.*?)<$local>(.*?)<\/$local>#is",$song[$i],$name))
$xml .= '<track>'.
'<annotation>'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'</annotation>'.
'<title>'.htmlspecialchars($name[3]).'</title>'.'<creator>'.htmlspecialchars($name[1]).'</creator>'.'
<location>'.htmlspecialchars($name[5]).'</location>'.'
</track>';
if ($_GET['type']=='pig')
{
$xml1.='<song path="'.htmlspecialchars($name[5]).'" title="'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'" />'.'';}
}//ket thuc ham for 
$xml .='<track>
<annotation>Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com </annotation>
<title>wWw.PhanVanPhu.Com</title>
<creator>Phu.Phu51 - Error ! - Insertion Tool Music And Video</creator>
<location>http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3</location>
</track></trackList></playlist>';
if ($_GET['type']=='pig') { $xml1.='<song path="http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3" title="Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com" /></player>'; 
echo $xml1; }
else { echo $xml;}}
}
#Ket thuc zing.vn, Bat dau nhaccuatui 
if ( strstr($string,"http://www.nhaccuatui.com"))
{
$url= file_get_contents($string);
$xml = explode  ("file=",$url);
$xml = explode  ('"',$xml[1]);
$xml1 =   $xml[0];
$data = str_replace(array("<![CDATA[","]]>"),"",file_get_contents($xml1));
$song = explode('<track>',$data);
$xml = '<?xml version="1.0" encoding="utf-8"?>
<playlist version="1"><trackList>';
if ($_GET['type']=='pig') {
$xml1='<!-- Music for blog by phanvanphu.com -->'.'<player showDisplay="yes" showPlaylist="yes" autoStart="'.$auto.'">'.''; }
for($i=1;$i<count($song);$i++)//tinh toan ham for
{
if(preg_match('#<title>(.*?)<\/title>(.*?)<creator>(.*?)<\/creator>(.*?)<location>(.*?)<\/location>(.*?)<info>(.*?)<\/info>(.*?)<image>(.*?)<\/image>#is',$song[$i],$name))
$xml .= '<track>'.
'<annotation>'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'</annotation>'.
'<title>'.htmlspecialchars($name[3]).'</title>'.'<creator>'.htmlspecialchars($name[1]).'</creator>'.'
<location>'.htmlspecialchars($name[5]).'</location>'.'
</track>';
if ($_GET['type']=='pig') { $xml1.='<song path="'.htmlspecialchars($name[5]).'" title="'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'" />'.''; }
}    
$xml .='<track>
<annotation>Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com </annotation>
<title>wWw.PhanVanPhu.Com</title>
<creator>Phu.Phu51 - Error ! - Insertion Tool Music And Video</creator>
<location>http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3</location>
</track></trackList></playlist>';
if ($_GET['type']=='pig') { $xml1.='<song path="http://thanh8x.webs.com/Ha%20Noi%20Va%20Toi.mp3" title="Phu.Phu51 - Error ! - Insertion Tool Music And Video - wWw.PhanVanPhu.Com" /></player>'; 
echo $xml1; }
else { echo $xml;}// ket thuc giao dien pig
}//ket thuc get nhaccuatui
// finish tat ca cac trang
}
?>