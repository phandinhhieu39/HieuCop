<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use Illuminate\Support\Str;


class MenuController extends Controller
{
    public function index()   
    {
        $menus = Menu::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menus],
            200 );
    }
    public function show($id)
    {
        $menu = menu::find($id);
        if($menu==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contact' => null],
                404
            );  
        }
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $menu],
            200
        );
    }

    public function store(Request $request)   
    {
        $menu =  new Menu();
        $menu->name = $request->name; //form
        $menu->link = $request->link; //form
        $menu->type = $request->type; //form
        $menu->table_id = $request->table_id; //form
        
        $menu->created_by = 1;
        $menu->status = $request->status; //form
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            201 );
    }
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        if($menu==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $menu->name = $request->name; //form
        // $menu->image = $request->name;
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = 1;
        $menu->status = $request->status; //form
        $menu->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
    }
    public function destroy($id)
    {
        $menu=Menu::find($id);
        if($menu==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $menu->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $menu],
            200
        );
}
public function menu_list($position, $parent_id = 0)
{
    $args = [
        ['position', '=', $position],
        ['parent_id', '=', $parent_id],
        ['status', '=', 1]
    ];
    $menus = Menu::where($args)
        ->get();
    if (count($menus)) {
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'menus' => $menus
            ],
            200
        );
    } else {
        return response()->json(
            [
                'success' => false,
                'message' => 'Không có dữ liệu',
                'menus' => null
            ],
            200
        );
    }
}
}
