<?php



header('Content-Description: File Transfer');
header('Content-Type: text/plain');
header('Content-Disposition: attachment; filename=test.sql');
echo mb_convert_encoding($str, "SJIS", "UTF-8");
exit;