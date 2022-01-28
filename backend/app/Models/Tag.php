<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = array('id');

    public function chatRooms(){
        return $this->belongsToMany(
            'App\Models\ChatRoom',
            'chat_room_tag',
            'tag_id',
            'chat_room_id'
        );
    }
}
