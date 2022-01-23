<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\User;
use App\Model\ChatRoom;
use App\Model\ChatMessage;
use App\Model\Tag;

class ChatRoomController extends Controller
{
    public function index()
    {
        $chatRooms = ChatRoom::all();
        return response()->json($chatRooms, 200);
    }

    public function show(Request $request){
        $chatRoom = ChatRoom::find($request->id);
        $chatMessages = ChatMessage::with('chatRoom')->with('user')->where('chat_room_id','=',$request->id)->orderBy('created_at', 'ASC')->get();
        return response()->json([$chatRoom, $chatMessages], 200);
    }

    public function store(Request $request)
    {
        $chatRoom = new ChatRoom;
        $chatRoom->title = $request->title;
        $chatRoom->body = $request->body;
        $chatRoom->user_id = Auth::id();
        $chatRoom->save();
        return response()->json($chatRoom, 200);
    }
}