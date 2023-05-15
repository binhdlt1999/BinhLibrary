<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BotMan\BotMan\Messages\Conversations\Conversation;
use BotMan\BotMan\Messages\Incoming\Answer;

class PizzaConversation extends Conversation
{
    public function run()
    {
        $this->ask('What pizza size do you want?', function ($answer) {
            $this->size = $answer->getText();
            $this->start = 0;
            $this->end = 0;
            if($this->size == "XL") {
                $this->askTopping();
            } else {
                $this->say('I don\' catch what you said');
            }
        });
    }

    public function askTopping()
    {
        $this->ask('Which topping do you want?', function ($answer) {
            $this->topping = $answer->getText();
            $this->askAddress();
        });
    }

    public function askAddress()
    {
        $this->ask('Where do you live?', function ($answer) {
            $this->address = $answer->getText();
            $this->say('ok that is all i nedd');
            $this->say('Size: ' . $this->size);
            $this->say('start: ' . $this->start);
            $this->say('end: ' . $this->end);
            $this->say('Topping: ' . $this->topping);
            $this->say('Address: ' . $this->address);
        });
    }
}
