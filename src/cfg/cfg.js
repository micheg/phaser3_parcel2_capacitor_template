import Phaser from 'phaser'
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin.js';

export const WIDTH = 780;
export const HEIGHT = 360;

// All configuration
export default
{
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 390 },
            debug: false
        }
    },
    pixelArt: true,
    plugins:
    {
        global:
        [
            {
                key: 'rexVirtualJoystick',
                plugin: VirtualJoystickPlugin,
                start: true
            }
        ]
    }
};


export const CENTER_X = WIDTH / 2;
export const CENTER_Y = HEIGHT / 2;
export const PLAYER =
{
    SPEED:
    {
        x: 120,
        y: 260
    }
};

export const APP_NAME = 'Phaser Sample';
export const SLOT = 'com.michelangelog.phaser.template';
