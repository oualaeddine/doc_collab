$(function() {
    'use strict';

    $('#example').dataTable({

        "drawCallback": function(settings) {
            feather.replace();
        },

        dom: '<"d-flex justify-content-between align-items-center header-actions mx-2 row mt-75"' +
            '<"col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start" l>' +
            '<"col-sm-12 col-lg-8 ps-xl-75 ps-0"<"dt-action-buttons d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap"<"me-1"f>B>>' +
            '>t' +
            '<"d-flex justify-content-between mx-2 row mb-1"' +
            '<"col-sm-12 col-md-6"i>' +
            '<"col-sm-12 col-md-6"p>' +
            '>',


        buttons: [{
                text: '<i data-feather="plus"></i>',
                className: 'add-new btn btn-primary me-2',
                action: function(e, dt, button, config) {
                    window.location = '/facturer';
                },
                init: function(api, node, config) {
                    $(node).removeClass('btn-secondary');
                }
            },

            {
                extend: 'collection',
                className: 'btn btn-outline-secondary dropdown-toggle me-2',
                text: feather.icons['external-link'].toSvg({ class: 'font-small-4 me-50' }) + 'Export',
                buttons: [{
                        extend: 'csv',
                        text: feather.icons['file-text'].toSvg({ class: 'font-small-4 me-50' }) + 'Csv',
                        className: 'dropdown-item',
                        exportOptions: { columns: [0, 1, 2, 3, 4, 5, 6] }
                    },
                    {
                        extend: 'excel',
                        text: feather.icons['file'].toSvg({ class: 'font-small-4 me-50' }) + 'Excel',
                        className: 'dropdown-item',
                        exportOptions: { columns: [0, 1, 2, 3, 4, 5, 6] }
                    },
                    {
                        extend: 'pdf',
                        text: feather.icons['clipboard'].toSvg({ class: 'font-small-4 me-50' }) + 'Pdf',
                        className: 'dropdown-item',
                        exportOptions: { columns: [0, 1, 2, 3, 4, 5, 6] }
                    }
                ],
                init: function(api, node, config) {
                    $(node).removeClass('btn-secondary');
                    $(node).parent().removeClass('btn-group');
                    setTimeout(function() {
                        $(node).closest('.dt-buttons').removeClass('btn-group').addClass('d-inline-flex mt-50');
                    }, 50);
                }
            }

        ],

        "language": {
            "emptyTable": "Aucune donnée disponible dans le tableau",
            "loadingRecords": "Chargement...",
            "processing": "Traitement...",
            "aria": {
                "sortAscending": ": activer pour trier la colonne par ordre croissant",
                "sortDescending": ": activer pour trier la colonne par ordre décroissant"
            },
            "select": {
                "rows": {
                    "_": "%d lignes sélectionnées",
                    "1": "1 ligne sélectionnée"
                },
                "cells": {
                    "1": "1 cellule sélectionnée",
                    "_": "%d cellules sélectionnées"
                },
                "columns": {
                    "1": "1 colonne sélectionnée",
                    "_": "%d colonnes sélectionnées"
                }
            },
            "autoFill": {
                "cancel": "Annuler",
                "fill": "Remplir toutes les cellules avec <i>%d<\/i>",
                "fillHorizontal": "Remplir les cellules horizontalement",
                "fillVertical": "Remplir les cellules verticalement"
            },
            "searchBuilder": {
                "conditions": {
                    "date": {
                        "after": "Après le",
                        "before": "Avant le",
                        "between": "Entre",
                        "empty": "Vide",
                        "not": "Différent de",
                        "notBetween": "Pas entre",
                        "notEmpty": "Non vide",
                        "equals": "Égal à"
                    },
                    "number": {
                        "between": "Entre",
                        "empty": "Vide",
                        "gt": "Supérieur à",
                        "gte": "Supérieur ou égal à",
                        "lt": "Inférieur à",
                        "lte": "Inférieur ou égal à",
                        "not": "Différent de",
                        "notBetween": "Pas entre",
                        "notEmpty": "Non vide",
                        "equals": "Égal à"
                    },
                    "string": {
                        "contains": "Contient",
                        "empty": "Vide",
                        "endsWith": "Se termine par",
                        "not": "Différent de",
                        "notEmpty": "Non vide",
                        "startsWith": "Commence par",
                        "equals": "Égal à",
                        "notContains": "Ne contient pas",
                        "notEnds": "Ne termine pas par",
                        "notStarts": "Ne commence pas par"
                    },
                    "array": {
                        "empty": "Vide",
                        "contains": "Contient",
                        "not": "Différent de",
                        "notEmpty": "Non vide",
                        "without": "Sans",
                        "equals": "Égal à"
                    }
                },
                "add": "Ajouter une condition",
                "button": {
                    "0": "Recherche avancée",
                    "_": "Recherche avancée (%d)"
                },
                "clearAll": "Effacer tout",
                "condition": "Condition",
                "data": "Donnée",
                "deleteTitle": "Supprimer la règle de filtrage",
                "logicAnd": "Et",
                "logicOr": "Ou",
                "title": {
                    "0": "Recherche avancée",
                    "_": "Recherche avancée (%d)"
                },
                "value": "Valeur"
            },
            "searchPanes": {
                "clearMessage": "Effacer tout",
                "count": "{total}",
                "title": "Filtres actifs - %d",
                "collapse": {
                    "0": "Volet de recherche",
                    "_": "Volet de recherche (%d)"
                },
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "Pas de volet de recherche",
                "loadMessage": "Chargement du volet de recherche...",
                "collapseMessage": "Réduire tout",
                "showMessage": "Montrer tout"
            },
            "buttons": {
                "collection": "Collection",
                "colvis": "Visibilité colonnes",
                "colvisRestore": "Rétablir visibilité",
                "copy": "Copier",
                "copySuccess": {
                    "1": "1 ligne copiée dans le presse-papier",
                    "_": "%ds lignes copiées dans le presse-papier"
                },
                "copyTitle": "Copier dans le presse-papier",
                "csv": "CSV",
                "excel": "Excel",
                "pageLength": {
                    "-1": "Afficher toutes les lignes",
                    "_": "Afficher %d lignes"
                },
                "pdf": "PDF",
                "print": "Imprimer",
                "copyKeys": "Appuyez sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier."
            },
            "decimal": ",",
            "search": "Rechercher:",
            "thousands": ".",
            "datetime": {
                "previous": "Précédent",
                "next": "Suivant",
                "hours": "Heures",
                "minutes": "Minutes",
                "seconds": "Secondes",
                "unknown": "-",
                "amPm": [
                    "am",
                    "pm"
                ],
                "months": {
                    "0": "Janvier",
                    "2": "Mars",
                    "3": "Avril",
                    "4": "Mai",
                    "5": "Juin",
                    "6": "Juillet",
                    "8": "Septembre",
                    "9": "Octobre",
                    "10": "Novembre",
                    "1": "Février",
                    "11": "Décembre",
                    "7": "Août"
                },
                "weekdays": [
                    "Dim",
                    "Lun",
                    "Mar",
                    "Mer",
                    "Jeu",
                    "Ven",
                    "Sam"
                ]
            },
            "editor": {
                "close": "Fermer",
                "create": {
                    "title": "Créer une nouvelle entrée",
                    "button": "Nouveau",
                    "submit": "Créer"
                },
                "edit": {
                    "button": "Editer",
                    "title": "Editer Entrée",
                    "submit": "Mettre à jour"
                },
                "remove": {
                    "button": "Supprimer",
                    "title": "Supprimer",
                    "submit": "Supprimer",
                    "confirm": {
                        "_": "Êtes-vous sûr de vouloir supprimer %d lignes ?",
                        "1": "Êtes-vous sûr de vouloir supprimer 1 ligne ?"
                    }
                },
                "error": {
                    "system": "Une erreur système s'est produite"
                },
                "multi": {
                    "noMulti": "Ce champ peut être édité individuellement, mais ne fait pas partie d'un groupe. ",
                    "title": "Valeurs multiples",
                    "restore": "Rétablir modification",
                    "info": "Les éléments sélectionnés contiennent différentes valeurs pour cette entrée. Pour modifier et définir tous les éléments de cette entrée à la même valeur, cliquez ou tapez ici, sinon ils conserveront leurs valeurs individuelles."
                }
            },
            "stateRestore": {
                "removeSubmit": "Supprimer",
                "creationModal": {
                    "button": "Créer",
                    "name": "Nom :",
                    "order": "Tri",
                    "paging": "Pagination",
                    "scroller": "Position du défilement",
                    "search": "Recherche",
                    "select": "Sélection",
                    "toggleLabel": "Inclus :"
                },
                "renameButton": "Renommer"
            },
            "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
            "infoEmpty": "Affichage de 0 à 0 sur 0 entrées",
            "infoFiltered": "(filtrées depuis un total de _MAX_ entrées)",
            "lengthMenu": "Afficher _MENU_ entrées",
            "paginate": {
                "first": "Première",
                "last": "Dernière",
                "next": "Suivante",
                "previous": "Précédente"
            },
            "zeroRecords": "Aucune entrée correspondante trouvée"
        }
    });


    $(document).on('click', '.Accepter', function(e) {

        var query = $(this).attr('id');
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous souhaitez mettre à jour la facture",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28c76f',
            cancelButtonColor: '#d33',
            confirmButtonText: 'confirmer',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {

                $.ajax({
                    url: "/updateFacture",
                    method: "GET",
                    data: { query: query },
                    success: function(data) {

                        if (result.isConfirmed) {
                            swal.fire(
                                "Bien",
                                "La Facture Mise à Jour Avec Succès",
                                "success"
                            ).then(function() {
                                location.reload();
                            });
                        }

                    }

                })
            }
        })
    });

    $(document).on('click', '.Annuler', function(e) {

        var query = $(this).attr('id');
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous souhaitez Annulér la Proforma",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28c76f',
            cancelButtonColor: '#d33',
            confirmButtonText: 'confirmer',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {

                $.ajax({
                    url: "/AnnuleFacture",
                    method: "GET",
                    data: { query: query },
                    success: function(data) {

                        if (result.isConfirmed) {
                            swal.fire(
                                "Bien",
                                "La Proforma Annulée avec succès",
                                "success"
                            ).then(function() {
                                location.reload();
                            });
                        }

                    }

                })
            }
        })
    });


    $(document).on('click', '.Supprimer', function(e) {

        var query = $(this).attr('id');
        Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous souhaitez Supprimé",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28c76f',
            cancelButtonColor: '#d33',
            confirmButtonText: 'confirmer',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {

                $.ajax({
                    url: "/SupprimerFacture",
                    method: "GET",
                    data: { query: query },
                    success: function(data) {

                        if (result.isConfirmed) {
                            swal.fire(
                                "Bien",
                                "Supprimé avec succès",
                                "success"
                            ).then(function() {
                                location.reload();
                            });
                        }

                    }

                })
            }
        })
    });




});