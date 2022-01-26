<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ChatRoom;
use App\Models\ChatMessage;

class ChatMessageController extends Controller
{
    public function store(Request $request)
    {
        $chatMessage = new ChatMessage;
        $chatMessage->message = $request->message;
        $chatMessage->chat_room_id = $request->chat_room_id;
        $chatMessage->user_id = $request->user_id;
        $chatMessage->save();
        return response()->json($chatMessage, 200);
    }
}
