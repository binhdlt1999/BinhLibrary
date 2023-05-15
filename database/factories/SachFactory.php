<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\sach>
 */
class SachFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_l' => '1',
            'tensach' => $this->faker->name(),
            'gia' => $this->faker->numerify(),
            'giakhuyenmai' => $this->faker->numerify(),
            'mota' => Str::random(),
            'diemdanhgia' => random_int(0, 10),
            'hinhanh' => 'test.jpg',
            'noibat' => random_int(0, 1),
            'soluong' => random_int(0, 10),
            'tacgia' => $this->faker->name(),
        ];
    }
}
