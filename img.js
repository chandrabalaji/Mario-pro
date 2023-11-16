export const audios = {
  start: AudioRender("audio/audioMusicLevel1.mp3"),
  jump: AudioRender("audio/audioJump.mp3"),
  Gameover: AudioRender("audio/audioGameOver.mp3"),
  Completelevel: AudioRender("audio/audioCompleteLevel.mp3"),
  Goombadie: AudioRender("audio/audioLosePowerUp.mp3"),
  FireWork : AudioRender('audio/audioFireworkWhistle.mp3')
};

function AudioRender(link) {
  let audio = new Audio(link);

  return audio;
}

function Addimage(imgsrc) {
  const platformImage = new Image();
  platformImage.src = imgsrc;

  return platformImage;
}

export const images = {
  background: Addimage("./img/background.png"),
  background2: Addimage("./img/background2.png"),
  platform: Addimage("./img/platform.png"),
  platformSmallTall : Addimage('img/platformSmallTall.png'),
  lrgPlatform: Addimage("img/lgPlatform.png"),
  lrgPlatform2: Addimage("img/lgPlatform2.png"),
  hindrance: Addimage("img/hills.png"),
  mountains: Addimage("img/mountains.png"),
  Platformsmall: Addimage("./img/platformsmall.png"),
  spriteStandRight: Addimage("img/spriteMarioStandRight.png"),
  spriteRunRight: Addimage("img/spriteMarioRunRight.png"),
  spriteStandLeft: Addimage("img/spriteMarioStandLeft.png"),
  spriteRunLeft: Addimage("img/spriteMarioRunLeft.png"),
  spriteMarioJumpLeft: Addimage("img/spriteMarioJumpLeft.png"),
  spriteMarioJumpRight: Addimage("img/spriteMarioJumpRight.png"),
  spriteGoomba: Addimage("img/spriteGoomba.png"),
  sun :Addimage('img/sun.png'),
  Flag : Addimage('img/flagPole.png')
  
};
