<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->string('mavoucher');
            $table->string('tenvoucher');
            $table->decimal('mucuudai', 12, 2);
            $table->decimal('dieukien', 12, 2);
            $table->integer('soluong');
            $table->integer('trangthai');
            $table->dateTime('ngaybatdau');
            $table->dateTime('ngayketthuc');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
};
