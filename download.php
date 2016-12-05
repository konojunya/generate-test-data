<?php

$filepath = "./download_files/".$_GET["target"].'.sql';
header('Content-Type: application/force-download');
header('Content-Length: '.filesize($filepath));
header('Content-Disposition: attachment; filename=TEST_DATA.sql');
readfile($filepath);
unlink($filepath);