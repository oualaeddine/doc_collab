<?php

namespace App\Models;

use App\Models\paiements;
use App\Models\ventes_details;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ventes extends Model
{
    use HasFactory;

    public $connection="commercial";
    // protected $guarded = [];

    public $timestamps = false;
    protected  $fillable = ['Num_Facture','Num_Proforma', 'Date','Commercial','Company_id','Etat_vente'];

    public function ventes_details(): HasMany
    {
        return $this->hasMany(ventes_details::class);
    }

    public function paiements(): HasMany
    {
        return $this->hasMany(paiements::class);
    }
}
