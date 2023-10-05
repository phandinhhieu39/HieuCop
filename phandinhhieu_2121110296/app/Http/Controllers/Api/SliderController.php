<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slider;
use Illuminate\Support\Str;


class SliderController extends Controller
{
    public function index()   
    {
        $sliders = Slider::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $sliders],
            200 );
    }
    public function show($id)
    {
        $slider = Slider::find($id);
        if($slider==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'slider' => null],
                404
            );
        }
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'slider' => $slider],
            200
        );
    }

    public function store(Request $request)   
    {
        $slider =  new Slider();
        $slider->name = $request->name; //form
        $slider->link = $request->link; //form
        $slider->position = $request->position; //form
        $slider->sort_order = $request->sort_order; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $slider->name . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }
        $slider->created_by = 1;
        $slider->status = $request->status; //form
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            201 );
    }
    public function update(Request $request, $id)
    {
        $slider = Slider::find($id);
        if($slider==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $slider->name = $request->name; //form
        $slider->link = $request->link; //form
        $slider->position = $request->position; //form
        $slider->sort_order = $request->sort_order; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {  
                $filename = $slider->name . '.' . $extension;
                $slider->image = $filename;
                $files->move(public_path('images/slider'), $filename);
            }
        }
        $slider->created_by = 1;
        $slider->status = $request->status; //form
        $slider->created_at = date('Y-m-d H:i:s');
        $slider->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            200
        );
    }
    public function destroy($id)
    {
        $slider=Slider::find($id);
        if($slider==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $slider->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $slider],
            200
        );
}
public function slider_list($position)
{
    $args = [
        ['position', '=', $position],
        ['status', '=', 1]
    ];
    $sliders = Slider::where($args)
        ->orderBy('sort_order', 'ASC')
        ->get();
    return response()->json(
        [
            'success' => true,
            'message' => 'Tải dữ liệu thành công',
            'sliders' => $sliders
        ],
        200
    );
}

}
