import config from './cfg/cfg';
import BootScene from './scenes/BootScene';
import StarScene from './scenes/StarScene';
import GameScene from './scenes/GameScene';
import ScoreScene from './scenes/ScoreScene';
import BGMusicScene from './scenes/BGMusicScene';
import Phaser from 'phaser'

const gameConfig = Object.assign(config,
{
    scene: [BootScene, StarScene, GameScene, ScoreScene, BGMusicScene]
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
