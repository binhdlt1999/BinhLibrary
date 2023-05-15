<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\sach;

class HomeController extends Controller
{
    public function showBestselling() {
        // $bestSelling = DB::table('saches')
        //                 ->where('noibat', 1)
        //                 ->join('theloais', 'saches.id_l', 'theloais.id')
        //                 ->select('saches.*', 'theloais.tenloai')
        //                 ->get();

        // $latest = DB::table('saches')
        //             ->orderBy('create_at', 'desc')
        //             ->first();
        
        // $threeLatest = DB::table('saches')
        //             ->orderBy('create_at', 'desc')
        //             ->limit(3)
        //             ->join('theloais', 'saches.id_l', 'theloais.id')
        //             ->select('saches.*', 'theloais.tenloai')
        //             ->get();
        
        $bestSelling = sach::where('noibat', 1)
                        ->with('theloai')
                        ->orderby('created_at', 'desc')
                        ->get();

        $latest = sach::limit(1)
                    ->with('theloai')
                    ->orderby('created_at', 'desc')
                    ->first();

        $threeLatest = sach::limit(3)
                        ->with('theloai')
                        ->orderby('created_at', 'desc')
                        ->get();
        return view('pages.home')->with([
            'bestSelling' => $bestSelling,
            'latest' => $latest,
            'threeLatest' => $threeLatest
        ]);
    }
}
