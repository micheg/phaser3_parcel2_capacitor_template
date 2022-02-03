import { WIDTH, HEIGHT, CENTER_X, CENTER_Y } from '../cfg/cfg';
import { IMG } from '../cfg/assets';
import Phaser from 'phaser'

export default class ScoreScene extends Phaser.Scene
{
    constructor()
    {
        super('score-scene');
    }

    create_background()
    {
    }

    create()
    {
        this.create_background();
        this.create_scores_ui();
    }

    create_scores_ui()
    {
    }
}