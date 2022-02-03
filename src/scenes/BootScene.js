import { WIDTH, HEIGHT } from '../cfg/cfg';
import { IMG, SND, UI } from '../cfg/assets';
import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene
{
    constructor()
    {
        super('boot-scene')
    }

    preload()
    {
        // progress bar
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(20, 140, 200, 40);

        let loadingText = this.make.text(
        {
            x: WIDTH / 2,
            y: HEIGHT / 2 - 50,
            text: 'Loading...',
            style: {
                font: '14px monospace',
                fill: '#ffffff'
            }
        }).setOrigin(0.5, 0.5);

        let fileText = this.make.text(
        {
            x: WIDTH / 2,
            y: HEIGHT / 2 + 50,
            text: '',
            style: {
                font: '10px monospace',
                fill: '#ffffff'
            }
        }).setOrigin(0.5, 0.5);

        // load images and sprites

        this.load.image(IMG.PLAYER, 'img/player.png');
        this.load.image(IMG.COIN, 'img/coin.png');

        this.load.image(UI.BTN_EXIT, 'img/exit_btn.png');
        this.load.image(UI.BTN_START, 'img/start_btn.png');
        this.load.image(UI.BTN_SND_OFF, 'img/music_off.png');
        this.load.image(UI.BTN_SND_ON, 'img/music_on.png');

        // load music
        this.load.audio(SND.PICKUP, 'snd/pickup.ogg');
        this.load.audio(SND.MUSIC, 'snd/bg.ogg');

        this.load.on('progress', function (value)
        {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(30, 150, 180 * value, 20);
        });
                    
        this.load.on('fileprogress', function (file)
        {
            fileText.text = file.src;
        });
         
        this.load.on('complete', function ()
        {
            loadingText.destroy();
            fileText.destroy();
            progressBox.destroy();
            progressBar.destroy();
        });
    }

    create()
    {
        //this.scene.launch('bgm-scene');
        this.scene.start('start-scene');
    }
}