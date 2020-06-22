<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * for vue-good-table data only
     *
     * @param  Request $request
     * @return JSON
     */
    public function data(Request $request)
    {
        $search  = $request->searchTerm;
        $sort    = $request->sort;
        $perPage = $request->perPage;
        $page    = $request->page;

        $data = User::with('role');

        if ($search) {
            $data = $data->where('name', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%")
                ->orWhere('created_at', 'like', "%{$search}%")
                ->orWhereHas('role', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                });
        }

        if ($sort['field']) {
            $data = $data->orderBy($sort['field'], $sort['type']);
        }

        if ($page) {
            $data = $data->paginate($perPage);
        } else {
            $data = $data->get();
        }

        return response()->json($data);
    }

    public function create(Request $request)
    {
        User::create($request->all());

        return response()->json(['message' => 'success'], 200);
    }

    public function edit(Request $request, $id)
    {
        if ($request->password == '') {unset($request->password);}

        User::find($id)->update($request->all());

        return response()->json(['message' => 'success'], 200);
    }

    public function delete($id)
    {
        User::find($id)->delete();

        return response()->json(['message' => 'success'], 200);
    }
}
