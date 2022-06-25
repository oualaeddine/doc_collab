<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class facture_avoirs extends Model
{
    public $connection="commercial";
    use HasFactory;

    public $timestamps = false;
    protected  $fillable = ['Num_facture_avoir','date', 'ventes_id'];

}
