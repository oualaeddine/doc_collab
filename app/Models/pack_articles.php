<?php

namespace App\Models;

use App\Models\packs;
use App\Models\articles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class pack_articles extends Model
{
    use HasFactory;
    public $connection="commercial";


    public function packs()
    {
        return $this->belongsTo(packs::class);
    }

    public function articles()
    {
        return $this->belongsTo(articles::class);
    }


}
