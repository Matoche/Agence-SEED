window.onload = function() {
  /******************************************************
                       BONHOMMES
  *******************************************************/

  /**
    BUT : Récupérer les valeurs d'attributs
    E : l'attribut du lien cliqué dans l'interface
    S : les valeurs des attributs en lien avec celui-çi
    APP : Interface
    TST : 0%
  **/
  // Proc $('#bloc-persos .equipe img').click c'est fixe ($(this)) result (T_Cdc image, prenom, role, compAV, compCom, compProg, compGraph)
  $('#bloc-agence .equipe img').click(function() {
     console.log("clique");
     var image = $(".affichage_perso");
     var prenom = $(this).attr('attr-prenom');
     var role = $(this).attr('attr-role');
     var description = $(this).attr('attr-description');
     detailsChange(image, prenom, role, description);
  });

  /**
    BUT : Changer le contenu de l'html en fonction des données du personnage
    E : image, prenom, role, compAV, compCom, compProg, compGraph
    APP : Contrôleur
    TST : 0%
  **/
  // Proc detailsChange c'est fixe (T_Cdc image, prenom, role, compAV, compCom, compProg, compGraph)
  function detailsChange(image, prenom, role, description) {
     console.log("---------------------------------------------");
     console.log("Vous avez sélectionné " + prenom + " !");
     console.log("Ses informations :");
     console.log("- " + role);
     console.log("- " + description);
     console.log("---------------------------------------------");
     image.attr("src", "images/equipe/" + prenom + ".svg");
     $(".titre_agence").html(prenom);
     $(".role_agence").html(role);
     $("#description p").html(description);
  }





};
