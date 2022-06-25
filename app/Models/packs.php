<?php

namespace App\Models;

use App\Models\articles;
use App\Models\type_ventes;
use App\Models\pack_articles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class packs extends Model
{
    use HasFactory;
    public $connection="commercial";


    public function type_ventes(): BelongsTo
    {
        return $this->belongsTo(type_ventes::class);
    }


    public function articles()
    {
        return $this->belongsToMany(articles::class);
    }

    public function pack_articles()
    {
        return $this->hasMany(pack_articles::class);
    }


}
