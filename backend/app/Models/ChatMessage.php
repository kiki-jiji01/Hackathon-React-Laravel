<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChatMessage extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = array('id');
    
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function chatRoom(){
        return $this->belongsTo('App\Models\ChatRoom');
    }

    public function likes(){
        return $this->hasMany('App\Models\Like');     
    }
}
