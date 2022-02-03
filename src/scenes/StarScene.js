import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { IMG, UI } from '../cfg/assets';
import Phaser from 'phaser'

export default class StartScene extends Phaser.Scene
{
    constructor()
    {
        super('start-scene');
    }

    create()
    {
        this.current_position = 0;
        // ui
        this.start_btn = this.add.image(CENTER_X, CENTER_Y - 100, UI.BTN_START);
        this.exit_btn = this.add.image(CENTER_X, CENTER_Y + 100, UI.BTN_EXIT);
        this.start_btn.setOrigin(0.5, 0.5).setInteractive();
        this.exit_btn.setOrigin(0.5, 0.5).setInteractive();
        this.start_btn.on('pointerdown', () =>
        {
            alert("start");
        });
        this.exit_btn.on('pointerdown', () =>
        {
            alert("start");
        });
        /*
        const audio = localStorage.getItem('audio');
        if(audio === 'off') this.btn.SOUND.text = 'AUDIO OFF';
        const pad_dir = localStorage.getItem('pad');
        if(pad_dir === 'R') this.btn.PAD.text = 'PAD RIGHT';
        */
    }
}
