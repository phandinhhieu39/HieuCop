<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Str;

class orderController extends Controller
{ 
    public function index()   
    {
        $orders = Order::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $orders],
            200 );
    }
    public function show($id)
    {
        $order = Order::find($id);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'order' => null],
                404
            );  
        }
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'order' => $order],
            200
        );
    }

    public function store(Request $request)   
    {
        $order =  new Order();
        $order->name = $request->name; 
       // $order->user_id = $request->user_id;  
        $order->email = $request->email; //form
        $order->phone = $request->phone; //form
        $order->address = $request->address; //form
        $order->note = $request->note; //form
        $order->status = $request->status; //form
        $order->created_at = date('Y-m-d H:i:s');
        $order->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            201 );
    }
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $order->name = $request->name; //form
        // $order->image = $request->name;
        $order->email = $request->email; //form
        $order->phone = $request->phone; //form
        $order->address = $request->address; //form
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1;
        $order->status = $request->status; //form
        $order->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
    }
    public function destroy($id)
    {
        $order=Order::find($id);
        if($order==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $order->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $order],
            200
        );
}
}
