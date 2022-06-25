<?php

namespace App\Models;

use App\Models\packs;
use App\Models\type_ventes;
use App\Models\pack_articles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class articles extends Model
{
    use HasFactory;
    public $connection="commercial";


    public function type_ventes(): BelongsTo
    {
        return $this->belongsTo(type_ventes::class);
    }

    public function packs()
    {
        return $this->belongsToMany(packs::class);
    }

    public function pack_articles()
    {
        return $this->hasMany(pack_articles::class);
    }


}
