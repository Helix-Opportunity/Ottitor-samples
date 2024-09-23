<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/sys/includes/wwwlib.php'); 

SetHeaderTitle('ChemAccess: Software');
SetPageTitle('ChemAccess: Software');
SetMaintainer('ChemAccess Admin', 'chemaccessibility@gmail.com');

HTMLHeader();
PageStart();
?>


<div align="right">
<?php include("social.php"); ?>
</div>

<?php include("software.html"); ?>

<?php
PageEnd();
HTMLFooter();
?>
