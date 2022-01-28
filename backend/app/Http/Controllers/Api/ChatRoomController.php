<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ChatRoom;
use App\Models\ChatMessage;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;

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
        $chatRoom->user_id = $request->user_id;
        $chatRoom->save();

        // #(ハッシュタグ)で始まる単語を取得。結果は、$matchに多次元配列で代入される。
        preg_match_all('/#([a-zA-z0-9０-９ぁ-んァ-ヶー一-龠]+)/u', $request->tags, $match);

        // $match[0]に#(ハッシュタグ)あり、$match[1]に#(ハッシュタグ)なしの結果が入ってくるので、$match[1]で#(ハッシュタグ)なしの結果のみを使います。
        $tags = [];
        foreach ($match[1] as $tag) {
            $record = Tag::firstOrCreate(['name' => $tag]); // firstOrCreateメソッドで、tags_tableのnameカラムに該当のない$tagは新規登録される。
            array_push($tags, $record); // $recordを配列に追加します(=$tags)
        };

        // 投稿に紐付けされるタグのidを配列化
        $tags_id = [];
        foreach ($tags as $tag) {
            array_push($tags_id, $tag['id']);
        };
        $chatRoom->tags()->attach($tags_id); // 投稿ににタグ付するために、attachメソッドをつかい、モデルを結びつけている中間テーブルにレコードを挿入します。

        return response()->json($chatRoom, 200);
    }
}
