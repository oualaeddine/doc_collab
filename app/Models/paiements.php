<?php

namespace App\Models;

use App\Models\Ventes;
use App\Models\paiement_details;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class paiements extends Model
{
    use HasFactory;
    public $connection="commercial";
    public $timestamps = false;
    protected  $fillable = ['date','reste_a_payer', 'ventes_id', 'type_paiement_id'];



    public function paiements_details(): HasMany
    {
        return $this->hasMany(paiement_details::class);
    }
    public function vente() : BelongsTo
    {
        return $this->belongsTo(Ventes::class);
    }

}
