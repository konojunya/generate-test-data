<?php

for($i = 0; $i < 10; $i++){
	sleep(1);
	echo ceil(microtime(true)*1000)."\n";
}