<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class type_ventes extends Model
{
    use HasFactory;
    public $connection="commercial";


    public function articles(): HasMany
    {
        return $this->hasMany(articles::class);
    }

    public function packs(): HasMany
    {
        return $this->hasMany(packs::class);
    }


}
