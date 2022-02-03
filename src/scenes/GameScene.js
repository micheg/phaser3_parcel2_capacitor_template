import { WIDTH, HEIGHT, CENTER_X, CENTER_Y, PLAYER } from '../cfg/cfg';
import { IMG, SND } from '../cfg/assets';
import Phaser from 'phaser'
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';


export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene');
        this.player = undefined;
        this.coin = undefined;
        this.game_over = false;
    }

    create()
    {
     
    }

    create_audio()
    {
        this.sounds =
        {
            pickup: this.sound.add(SND.PICKUP),
        };
    }

    create_background()
    {
    }

    add_coin()
    {
    }

    create_player()
    {
    }

    update_keycontrols()
    {
        if(!this.cursors) return;
        if( this.cursors.left.isDown )
        {
            this.player.setVelocityX(-PLAYER.SPEED.x);
            this.player.setFlipX(false);
            this.player.anims.play('walk', true);
        }
        else if( this.cursors.right.isDown )
        {
            this.player.setVelocityX(PLAYER.SPEED.x);
            this.player.setFlipX(true);
            this.player.anims.play('walk', true);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if( this.cursors.up.isDown && this.player.body.onFloor() )
        {
            this.player.setVelocityY(-PLAYER.SPEED.y);
        }
    }

    update(dt)
    {
        if(!this.game_over)
        {
            this.update_keycontrols();
        }
    }

}