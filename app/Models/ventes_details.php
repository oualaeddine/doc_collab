<?php

namespace App\Models;

use App\Models\Ventes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ventes_details extends Model
{
    use HasFactory;

    public $connection="commercial";
    // protected $guarded = [];

    public $timestamps = false;
    protected  $fillable = ['Prix_HT', 'Qte','TVA','Prix_TTC','Remise', 'type_vente_id','Pack_id','Articles_id','Ventes_id'];


    public function vente() : BelongsTo
    {
        return $this->belongsTo(Ventes::class);
    }

}
