<?php


$str = "insert into()" . "\r\n";
$str .= "insert into()" . "\r\n";
$str .= "insert into()" . "\r\n";

//ファイル出力
header('Content-Type: text/plain');
header('Content-Disposition: attachment; filename=test.sql');
echo mb_convert_encoding($str, "SJIS", "UTF-8");
exit;