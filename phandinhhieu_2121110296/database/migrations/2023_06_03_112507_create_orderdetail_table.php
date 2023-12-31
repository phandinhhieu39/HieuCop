<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('db_orderdetail', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('order_id')->default(0);
            $table->unsignedInteger('product_id')->default(0);
            $table->float('price');
            $table->unsignedInteger('qty')->default(0);
            $table->float('amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_orderdetail');
    }
};
