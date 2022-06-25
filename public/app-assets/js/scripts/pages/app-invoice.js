/*=========================================================================================
    File Name: app-invoice.js
    Description: app-invoice Javascripts
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
   Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
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


    // init date picker
    // if (datepicker.length) {
    //     datepicker.each(function() {
    //         $(this).flatpickr({
    //             defaultDate: date,
    //             minDate: "2022-04",

    //         });
    //     });
    // }

    if (dueDate.length) {
        dueDate.flatpickr({
            defaultDate: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 5)
        });
    }

    // Country Select2
    if (countrySelect.length) {
        countrySelect.select2({
            placeholder: 'choisissez la wilaya',
            dropdownParent: countrySelect.parent()
        });
    }

    // Close select2 on modal open
    $(document).on('click', '.add-new-customer', function() {
        select2.select2('close');

    });

    // $(document).on('change', '.invoiceto', function(e) {
    //     alert($(".invoiceto").val());
    // });


    // Select2
    if (select2.length) {

        // select2.select2({
        //     placeholder: 'Sélectionnez le client',
        //     dropdownParent: $('.invoice-customer')
        // });




        select2.on('select2:open', function() {
            if (!$(document).find('.add-new-customer').length) {
                $(document)
                    .find('.select2-results__options')
                    .before(
                        '<div class="add-new-customer btn btn-flat-success cursor-pointer rounded-0 text-start mb-50 p-50 w-100" data-bs-toggle="modal" data-bs-target="#add-new-customer-sidebar">' +
                        feather.icons['plus'].toSvg({ class: 'font-medium-1 me-50' }) +
                        '<span class="align-middle">Ajouter un nouveau client</span></div>'
                    );
            }
        });
    }

    // Repeater init
    if (sourceItem.length) {
        sourceItem.on('submit', function(e) {
            e.preventDefault();
        });
        sourceItem.repeater({
            show: function() {
                $(this).slideDown();
            },
            hide: function(e) {
                $(this).slideUp();
            }
        });
    }

    // Prevent dropdown from closing on tax change
    $(document).on('click', '.tax-select', function(e) {
        e.stopPropagation();
    });

    // On tax change update it's value
    function updateValue(listener, el) {
        listener.closest('.repeater-wrapper').find(el).text(listener.val());
    }

    // Apply item changes btn
    if (applyChangesBtn.length) {
        $(document).on('click', '.btn-apply-changes', function(e) {
            var $this = $(this);
            tax1Input = $this.closest('.dropdown-menu').find('#tax-1-input');
            tax2Input = $this.closest('.dropdown-menu').find('#tax-2-input');
            discountInput = $this.closest('.dropdown-menu').find('#discount-input');
            tax1 = $this.closest('.repeater-wrapper').find('.tax-1');
            tax2 = $this.closest('.repeater-wrapper').find('.tax-2');
            discount = $('.discount');

            if (tax1Input.val() !== null) {
                updateValue(tax1Input, tax1);
            }

            if (tax2Input.val() !== null) {
                updateValue(tax2Input, tax2);
            }

            if (discountInput.val().length) {
                // var finalValue = discountInput.val() <= 100 ? discountInput.val() : 100;
                var finalValue = discountInput.val();
                $this
                    .closest('.repeater-wrapper')
                    .find(discount)
                    .text(finalValue + ',00');
                $('.Remise').text(finalValue + ',00');

                var Total = $(".Cout").val() * $('.Qte').val();
                var tva = Total * 0.19;
                var ttc = Total - $('.Remise').text().replace(",00", "") + tva;
                $('.Total_ttc').text(ttc + ',00');

            }

        });
    }

    // Item details select onchange
    $(document).on('change click ', '.item-details', function() {
        var test = $(this).val();
        // alert(test);
        var name = $(this).attr("name").slice(6, 7);
        // alert(name);

        $.ajax({
            method: 'GET',
            url: '/autocompleteSearchArticle',
            success: (function(data) {

                // alert(data.adminDetails[test].Qte);
                var value = data.adminDetails[test].Libelle;
                var Code = data.adminDetails[test].Code;
                var Cout = data.adminDetails[test].Prix_HT;
                var Total_ht = 0;

                $('[name*="group[' + name + '][Cout]"]').val(Cout);
                var Total = Cout * $('[name*="group[' + name + '][Qte]"]').val();
                $('[name*="group[' + name + '][Total]"]').val(Total);

                for (let index = 0; index <= name;) {
                    Total_ht += Number($('[name*="group[' + index + '][Total]"]').val());
                    index++;
                }

                var tva = Total_ht * 0.19;
                var ttc = Total_ht - $('.Remise').text().replace(",00", "") + tva;

                $('.Total_ht').text(Total_ht + ',00');
                $('.TVA').text(tva + ',00');
                $('.Total_ttc').text(ttc + ',00');

                $.ajax({
                    method: 'GET',
                    url: '/articles',
                    data: { value: value },
                    success: (function(data) {
                        // console.log(data);
                        var ArticleLibelle = '';
                        var br = '\n\n';
                        for (var i = 0; i < data.length; i++) {
                            ArticleLibelle += data[i].code + ' | ' + data[i].Libelle + br;
                        }
                        if (ArticleLibelle == '') {
                            $('[name*="group[' + name + '][item-details2]"]').val(Code + '|' + value)

                        } else {
                            $('[name*="group[' + name + '][item-details2]"]').val(ArticleLibelle);

                        }
                    })
                })
            })
        })



    });

    if (btnAddNewItem.length) {
        btnAddNewItem.on('click', function() {

            if (feather) {
                // featherSVG();
                feather.replace({ width: 14, height: 14 });
            }

            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {

                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

        });
    }

    // $('.dynamic').change(function() {
    $(document).on('change', '.dynamic', function(e) {

        var value = $(this).val();
        var name = $(this).attr("name").slice(6, 7);
        // alert(name);
        $(document).ready(function() {

            $.ajax({
                url: "/articleSearch",
                method: "GET",
                data: { value: value },
                success: function(result) {

                    $('[name*="group[' + name + '][Qte]"]').val('1');

                    if (value == 6) {
                        $('[name*="group[' + name + '][item-details2]"]').attr('disabled', false);
                    } else {
                        $('[name*="group[' + name + '][item-details2]"]').attr('disabled', true);
                    }

                    $('[name*="group[' + name + '][Article]"]').html(result);

                }

            })
        });

    });


    $(document).on('change', '.dynamic', function(e) {

        var name = $(this).attr("name").slice(6, 7);
        $('[name*="group[' + name + '][item-details2]"]').val('');
        $('[name*="group[' + name + '][Cout]"]').val('');
        $('[name*="group[' + name + '][Total]"]').val('');
        $('[name*="group[' + name + '][Qte]"]').val('1');
    });


    $(document).on('change', '.Qte', function(e) {

        var name = $(this).attr("name").slice(6, 7);
        var Total_ht = 0;

        if ($('[name*="group[' + name + '][Qte]"]').val() == '' || $('[name*="group[' + name + '][Qte]"]').val() == '0') {
            $('[name*="group[' + name + '][Qte]"]').val('1');
        }

        var Total = $('[name*="group[' + name + '][Cout]"]').val() * $('[name*="group[' + name + '][Qte]"]').val();
        $('[name*="group[' + name + '][Total]"]').val(Total);


        for (let index = 0; index <= name;) {
            Total_ht += Number($('[name*="group[' + index + '][Total]"]').val());
            index++;
        }

        var tva = Total_ht * 0.19;
        var ttc = Total_ht - $('.Remise').text().replace(",00", "") + tva;
        $('.Total_ht').text(Total_ht + ',00');
        $('.TVA').text(tva + ',00');
        $('.Total_ttc').text(ttc + ',00');



    });

    $(document).on('click', '.delete', function(e) {

        var name = $(this).attr("name").slice(6, 7);
        var Total_ht = $('.Total_ht').text().replace(",00", "");


        Total_ht = Total_ht - Number($('[name*="group[' + name + '][Total]"]').val());

        var tva = Total_ht * 0.19;
        var ttc = Total_ht - $('.Remise').text().replace(",00", "") + tva;

        $('.Total_ht').text(Total_ht + ',00');
        $('.TVA').text(tva + ',00');
        $('.Total_ttc').text(ttc + ',00');


        // $('[name*="group[' + name + '][type_vente]"]').val('');
        // $('[name*="group[' + name + '][Article]"]').html('');
        $('[name*="group[' + name + '][item-details2]"]').val('');
        $('[name*="group[' + name + '][Cout]"]').val('');
        $('[name*="group[' + name + '][Total]"]').val('');
        $('[name*="group[' + name + '][Qte]"]').val('');

    });

});
