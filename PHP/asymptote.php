<?php
$p = readline("\"p\" value: ");
$n = readline("\"n\" value: ");;
$u = (2*$n + 3)/($n + 1);

while (abs($u - 2) >= pow(10, -$p)) {
    $n += 1;
    $u = (2*$n + 3)/($n + 1);
}

echo($n);
?>
