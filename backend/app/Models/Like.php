<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Like extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = array('id');
    
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function chatMessage(){
        return $this->belongsTo('App\Models\ChatMessage');
    }
}
