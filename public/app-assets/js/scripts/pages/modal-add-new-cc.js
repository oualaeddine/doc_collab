$(function() {
    ('use strict');

    $(document).on('click', '.addPaiement', function() {
        var query = $(this).val();

        $.ajax({
            url: "/addPaiement",
            method: "GET",
            data: { query: query },
            success: function(data) {
                console.log(data[0]);
                document.getElementById("NumProforma").innerHTML = data[0].Num_Proforma
                document.getElementById("NumFacture").innerHTML = data[0].Num_Facture
                $('#Montant').val(data[0].Prix_TTC.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& '));
                $('#Rreste_payer').val(data[0].Prix_TTC.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& '));
                $('.idvanter').val(data[0].id);
                $('.montant').val(data[0].Prix_TTC);

                $('#addPaiement').modal('show');

            }

        })

    });

    $(document).on('click', '.EditPaiement', function() {
        var query = $(this).val();

        $.ajax({
            url: "/editPaiement",
            method: "GET",
            data: { query: query },
            success: function(data) {
                var rest = parseInt(data[0].reste_a_payer);
                var ttc = ((data[0].Prix_HT * data[0].Qte - data[0].Remise) + (data[0].Prix_HT * data[0].Qte - data[0].Remise) * 0.19)
                document.getElementById("EditNumProforma").innerHTML = data[0].Num_Proforma;
                document.getElementById("EditNumFacture").innerHTML = data[0].Num_Facture;
                $('#EditMontant').val(ttc.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& '));
                $('#EditRreste_payer').val(rest.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& '));
                $('.idvanter').val(data[0].id);
                $('.paiement_id').val(data[0].paiement_id);
                $('.montant').val(data[0].Prix_TTC);

                $('#EditPaiement').modal('show');

            }

        })

    });


});