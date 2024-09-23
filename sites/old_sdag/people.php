<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/sys/includes/wwwlib.php'); 

SetHeaderTitle('ChemAccess: People');
SetPageTitle('ChemAccess: People');
SetMaintainer('ChemAccess Admin', 'chemaccessibility@gmail.com');

HTMLHeader();
PageStart();
?>


<div align="right">
<?php include("social.php"); ?>
</div>

<?php include("people.html"); ?>

<?php
PageEnd();
HTMLFooter();
?>
