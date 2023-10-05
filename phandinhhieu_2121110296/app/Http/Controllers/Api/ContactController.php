<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Str;

class ContactController extends Controller
{
    public function index()   
    {
        $contacts = Contact::orderBy('created_at','DESC')->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $contacts],
            200 );
    }
    public function show($id)
    {
        $contact = Contact::find($id);
        if($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contact' => null],
                404
            );  
        }
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contact' => $contact],
            200
        );
    }

    public function store(Request $request)   
    {
        $contact =  new contact();
        $contact->name = $request->name; //form

        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $contact->image = $filename;
                $files->move(public_path('images/contact'), $filename);
            }
        }
        
        $contact->status = $request->status; //form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->replay_id = $request->replay_id; //form
        
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            201 );
    }
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        if($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $contact->name = $request->name; //form
        // $contact->image = $request->name;
        $contact->updated_by = 1;
        $contact->status = $request->status; //form
        $contact->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            200
        );
    }
    public function destroy($id)
    {
        $contact=contact::find($id);
        if($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $contact->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            200
        );
}
}
