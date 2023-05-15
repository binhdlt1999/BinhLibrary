<?php

namespace App\Http\Controllers;

use App\Models\chitietloaisach;
use App\Models\sach;
use App\Models\theloai;
use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Incoming\Answer;
use BotMan\BotMan\Messages\Outgoing\Question;
use BotMan\BotMan\Messages\Outgoing\Actions\Button;

class DatabaseChatBotController extends Conversation
{
    public function run()
    {

    }
}
