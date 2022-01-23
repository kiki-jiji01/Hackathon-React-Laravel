<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChatRoom extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = array('id');

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function chatMessages(){
        return $this->hasMany('App\Models\ChatMessage');     
    }
}
