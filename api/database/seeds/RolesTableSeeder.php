<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['Admin', 'Editor', 'Contributor'];

        foreach ($roles as $role) {
            $data[] = [
                'name'       => $role,
                'slug'       => Str::slug($role),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ];
        }

        app('db')->table('roles')->truncate();
        app('db')->table('roles')->insert($data);
    }
}
