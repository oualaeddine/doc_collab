$(function() {
    'use strict';

    var applyChangesBtn = $('.btn-apply-changes'),
        discount,
        tax1,
        tax2,
        discountInput,
        tax1Input,
        tax2Input,
        sourceItem = $('.source-item'),
        date = new Date(),
        datepicker = $('.date-picker'),
        dueDate = $('.due-date-picker'),
        select2 = $('.invoiceto'),
        countrySelect = $('#customer-country'),
        btnAddNewItem = $('.btn-add-new');



    // Select2
    if (select2.length) {
        select2.select2({
            placeholder: 'Sélectionnez le client',
            dropdownParent: $('.invoice-customer')
        });

        select2.ready(function() {

            $.ajax({
                method: 'GET',
                url: '/autocomplete-search',
                success: (function(data) {
                    var test = $(".invoiceto").val();
                    var CodeClient = data.customerDetails[test].company_id != null ? data.customerDetails[test].company_id : '';
                    var Sigle = data.customerDetails[test].abv_company_name != null ? data.customerDetails[test].abv_company_name : '';
                    var Adresse = data.customerDetails[test].company_id != null ? data.customerDetails[test].company_id : '';
                    var Localité = data.customerDetails[test].company_id != null ? data.customerDetails[test].registre_commerce : '';
                    var RC = data.customerDetails[test].registre_commerce != null ? data.customerDetails[test].company_id : '';
                    var AI = data.customerDetails[test].article_imposition != null ? data.customerDetails[test].article_imposition : '';
                    var NIF = data.customerDetails[test].nif != null ? data.customerDetails[test].nif : '';
                    var NIS = data.customerDetails[test].nis != null ? data.customerDetails[test].nis : '';

                    $('.row-bill-to').find('.customer-details').remove();
                    $(".row-bill-to ").find('.col-bill-to').append('<div class="customer-details mt-1">' +
                        '<p class="mb-25">' + 'Code Client : ' + CodeClient + '</p>' +
                        '<p class="mb-25">' + 'Sigle  : ' + Sigle + '</p>' +
                        '<p class="mb-25">' + 'Adresse : ' + ' ' + '</p>' +
                        '<p class="mb-25">' + 'Localité : ' + ' ' + '</p>' +
                        '<p class="mb-25">' + 'RC : ' + RC + '</p>' +
                        '<p class="mb-25">' + 'AI : ' + AI + '</p>' +
                        '<p class="mb-25">' + 'NIF : ' + NIF + '</p>' +
                        '<p class="mb-25">' + 'NIS : ' + NIS + '</p>' +
                        '</div>');
                    // $('.row-bill-to').find('.col-bill-to').append(renderDetails);
                })
            })

        });

    }



    // $('.dynamic').ready(function() {
    //     // $(document).on('change', '.dynamic', function(e) {

    //     var value = $('.dynamic').val();
    //     var name = 1;
    //     alert($('.dynamic').val());
    //     $(document).ready(function() {

    //         $.ajax({
    //             url: "/articleSearch",
    //             method: "GET",
    //             data: { value: value },
    //             success: function(result) {

    //                 $('[name*="group[' + name + '][Qte]"]').val('1');

    //                 if (value == 6) {
    //                     $('[name*="group[' + name + '][item-details2]"]').attr('disabled', false);
    //                 } else {
    //                     $('[name*="group[' + name + '][item-details2]"]').attr('disabled', true);
    //                 }

    //                 $('[name*="group[' + name + '][Article]"]').html(result);

    //             }

    //         })
    //     });

    // });








    // Item details select onchange
    // $(document).ready(function() {
    //     var test = $(this).val();
    //     alert(test);
    //     var name = $(this).attr("name").slice(6, 7);
    //     alert(name);

    //     $.ajax({
    //         method: 'GET',
    //         url: '/autocompleteSearchArticle',
    //         success: (function(data) {


    //             var value = data.adminDetails[test].Libelle;
    //             var Code = data.adminDetails[test].Code;
    //             var Cout = data.adminDetails[test].Prix_HT;
    //             var Total_ht = 0;

    //             $('[name*="group[' + name + '][Cout]"]').val(Cout);
    //             var Total = Cout * $('[name*="group[' + name + '][Qte]"]').val();
    //             $('[name*="group[' + name + '][Total]"]').val(Total);

    //             for (let index = 0; index <= name;) {
    //                 Total_ht += Number($('[name*="group[' + index + '][Total]"]').val());
    //                 index++;
    //             }

    //             var tva = Total_ht * 0.19;
    //             var ttc = Total_ht - $('.Remise').text().replace(",00", "") + tva;

    //             $('.Total_ht').text(Total_ht + ',00');
    //             $('.TVA').text(tva + ',00');
    //             $('.Total_ttc').text(ttc + ',00');

    //             $.ajax({
    //                 method: 'GET',
    //                 url: '/articles',
    //                 data: { value: value },
    //                 success: (function(data) {
    //                     console.log(data);
    //                     var ArticleLibelle = '';
    //                     var br = '\n\n';
    //                     for (var i = 0; i < data.length; i++) {
    //                         ArticleLibelle += data[i].code + ' | ' + data[i].Libelle + br;
    //                     }
    //                     if (ArticleLibelle == '') {
    //                         $('[name*="group[' + name + '][item-details2]"]').val(Code + '|' + value)

    //                     } else {
    //                         $('[name*="group[' + name + '][item-details2]"]').val(ArticleLibelle);

    //                     }
    //                 })
    //             })
    //         })
    //     })



    // });



});