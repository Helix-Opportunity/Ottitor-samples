<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/sys/includes/wwwlib.php'); 

SetHeaderTitle('ChemAccess: Events');
SetPageTitle('ChemAccess: Events');
SetMaintainer('ChemAccess Admin', 'chemaccessibility@gmail.com');

HTMLHeader();
PageStart();
?>


<div align="right">
<?php include("social.php"); ?>
</div>

<?php include("events.html"); ?>

<?php
PageEnd();
HTMLFooter();
?>
