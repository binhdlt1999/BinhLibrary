<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\voucher>
 */
class VoucherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'mavoucher' => $this->faker->unique()->colorName(),
            'tenvoucher' => $this->faker->name(),
            'mucuudai' => $this->faker->randomDigit(),
            'dieukien' => 100000,
            'soluong' => $this->faker->randomDigit(),
            'trangthai' => $this->faker->numberBetween($min = 0, $max = 1),
            'ngaybatdau' => $this->faker->date('Y-m-d H:i:s', $max = 'now'),
            'ngayketthuc' => $this->faker->date(),
            'created_at' => '2022/05/10 18:58:00',
        ];
    }
}
