<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Topic;
use Illuminate\Support\Str; 
use App\Http\Controllers\Api\TopicController;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::all(); //::where()->orderBy()->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'topics' => $topics],
            200
        );
    }
    public function show($id)
    {
        $topic = Topic::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $topic],
            200
        );
    }
    
    public function store(Request $request)
    {
        $topic = new Topic();
        $topic->name = $request->name; //form
        $topic->metakey = $request->metakey; //form
        $topic->metadesc = $request->metadesc; //form
        $topic->parent_id=$request->parent_id;
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = 1;
        $topic->status = $request->status; //form
        $topic->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $topic],
            201
        );
    }
    //topic-update
    public function update(Request $request, $id)
    {
        $topic = Topic::find($id);
        $topic->name = $request->name; //form

        $topic->metakey = $request->metakey; //form
        $topic->metadesc = $request->metadesc; //form
        $topic->parent_id=$request->parent_id;
        $topic->updated_at = date('Y-m-d H:i:s');
        $topic->updated_by = 1; //takm cho =1
        $topic->status = $request->status; //form
        $topic->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $topic],
            200
        );
    }
    public function destroy ($id)
    {
        $topic = Topic::find($id);
        if($topic == null){
            return response()->json(
                ['message' => 'Tải dữ liệu thành công', 'success'=>false, 'data' => null], 404
            );
        }
        $topic->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$topic],200);
    }
    public function topic_list($parent_id = 0)
    {
        $args = [
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $topics = Topic::where($args)
            
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'topics' => $topics
            ],
            200
        );
    }

}