<!DOCTYPE html>
<html>



<head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
   <!-- Personnalisation de l'aperçu quand on partage le site sur les RS -->
     <meta property="og:title" content="Agence ORIGAMMI" />
     <meta property="og:type" content="siteweb" />
     <meta property="og:description" content="Nous sommes une agence étudiante du DUT MMI de Chambéry !" />
     <meta property="og:url" content="http://www.agence-origammi.fr" />
     <meta property="og:image" content="images/picto.svg" />
   <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500" rel="stylesheet">

   <!-- feuilles de styles -->
   <link rel="stylesheet" href="styles/reset.css">
   <link rel="stylesheet" href="styles/global.css">
   <link rel="stylesheet" href="styles/fond.css">
   <link rel="stylesheet" href="styles/header.css">
   <link rel="stylesheet" href="styles/menu.css">
   <link rel="stylesheet" href="styles/agence.css">
   <link rel="stylesheet" href="styles/projets.css">
   <link rel="stylesheet" href="styles/footer.css">
   <link rel="stylesheet" href="styles/mention.css">

   <!--icone onglet -->
   <link rel="icon" href="images/picto.svg" />
   <meta name="author" content="Agence SEED"/>
   <meta name="description" content="Nous sommes une agence étudiante du DUT MMI de Chambéry !" />
   <title>Agence ORIGAMMI</title>
</head>



<body>


   <!-- CORPS DU ONE PAGE -->
   <section id="page">

      <!-- header : animation -->
      <?php include("include/inc_header.php") ?>

      <!-- équipe interactive -->
      <?php include("include/inc_agence.php") ?>

      <!-- Partie projets (COM IUT / CHAINA'ZIK / PONEY / AFS / EFFICIENCE)-->
      <?php include("include/inc_projets.php") ?>
      
      <!-- pied de page -->
      <?php include("include/inc_footer.php") ?>

   </section>

   <!-- Appel des scripts utilisés -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="scripts/menu.js"></script>
   <script src="scripts/projets.js"></script>
</body>



</html>
