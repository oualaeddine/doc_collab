<?php

namespace App\Models;

use App\Models\paiements;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class paiement_details extends Model
{
    use HasFactory;
    public $connection="commercial";
    public $timestamps = false;
    protected  $fillable = ['Nom_banque','Num_cheque', 'Montant','date', 'img_path', 'img_name', 'paiement_id'];

    public function paiement() : BelongsTo
    {
        return $this->belongsTo(paiements::class);
    }


}
