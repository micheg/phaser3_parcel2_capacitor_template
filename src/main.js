import config from './cfg/cfg';
import BootScene from './scenes/BootScene';
import StarScene from './scenes/StarScene';
import AboutScene from './scenes/AboutScene';
import IntroScene from './scenes/IntroScene';
import GameScene from './scenes/GameScene';
import HudScene from './scenes/HUDScene';
import ScoreScene from './scenes/ScoreScene';
import BGMusicScene from './scenes/BGMusicScene';
import Phaser from 'phaser'

const gameConfig = Object.assign(config,
{
    scene: [BootScene, StarScene, AboutScene, IntroScene, GameScene, ScoreScene, HudScene, BGMusicScene]
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    console.log("on device ready");
    // hide status bar and button bar
    NavigationBar.hide();
    StatusBar.hide();
    //window.screen.orientation.lock('landscape');
    window.screen.orientation.lock('landscape').then(i=>console.log(i)).catch(err=>console.log(e))
}
export default new Phaser.Game(gameConfig);
