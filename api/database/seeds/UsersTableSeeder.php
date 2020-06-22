<?php

use Faker\Factory;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $f = Factory::create('id_ID');

        $data[] = [
            'role_id'    => 1,
            'name'       => 'Ini Admin',
            'email'      => 'admin@admin',
            'password'   => app('hash')->make('admin'),
            'gender'     => 'l',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ];

        for ($i = 0; $i < 50; $i++) {
            $data[] = [
                'role_id'    => rand(1, 3),
                'name'       => $f->name,
                'email'      => $f->freeEmail,
                'password'   => app('hash')->make('secret'),
                'gender'     => $i % 3 ? 'l' : 'p',
                'created_at' => date('Y-m-d H:i:s', strtotime("-{$i} weeks")),
                'updated_at' => date('Y-m-d H:i:s', strtotime("-{$i} weeks")),
            ];
        }

        app('db')->table('users')->truncate();
        app('db')->table('users')->insert($data);
    }
}
