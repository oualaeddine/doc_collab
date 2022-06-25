<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'registraion_number' => $this->faker->randomDigit(),
            'full_name' => $this->faker->name(),
           'age' =>  $this->faker->numberBetween(),
            'phone' =>  $this->faker->numberBetween(),
            'address' =>  $this->faker->address(),
            'seance-date' =>  $this->faker->date(),
            
        ];
    }
}
