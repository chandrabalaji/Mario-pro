import { images, audios } from "./img.js";

let startbtn = document.getElementById("startbtn");
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");




startbtn.addEventListener("click", startgame);


function startgame() {
  audios.start.play();
  startbtn.style.display = "none";
  start = true;
}
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 1.5;
let start = false;
class Player {
  constructor() {
    (this.speed = 10),
      (this.position = {
        x: 100,
        y: 100,
      }),
      (this.velocity = {
        x: 0,
        y: 0,
      });
    (this.scale = 0.3),
      (this.width = 398 * this.scale),
      (this.height = 353 * this.scale);
    this.image = images.spriteStandRight;
    this.frame = 0;
    this.sprit = {
      stand: {
        right: images.spriteStandRight,
        Left: images.spriteStandLeft,
      },
      run: {
        right: images.spriteRunRight,
        Left: images.spriteRunLeft,
      },
      jump: {
        right: images.spriteMarioJumpRight,
        Left: images.spriteMarioJumpLeft,
      },
    };

    this.CurrentSprit = this.sprit.stand.right;
    this.CurrentCropWidth = 398;
  }

  //  crt image link
  // x axis &  crt frame calc
  // y axis
  // img width
  // width

  draw() {
    c.drawImage(
      this.CurrentSprit,
      this.CurrentCropWidth * this.frame,
      0,
      this.CurrentCropWidth,
      353,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.frame++;
    if (
      this.frame > 58 &&
      (this.CurrentSprit === this.sprit.stand.right ||
        this.CurrentSprit === this.sprit.stand.Left)
    ) {
      this.frame = 0;
    } else if (
      this.frame > 28 &&
      (this.CurrentSprit === this.sprit.run.right ||
        this.CurrentSprit === this.sprit.run.Left)
    ) {
      this.frame = 0;
    } else if (
      this.CurrentSprit === this.sprit.jump.right ||
      this.CurrentSprit === this.sprit.jump.Left
    ) {
      this.frame = 0;
    }
    this.draw();
    Math.round((this.position.x += this.velocity.x));
    Math.round((this.position.y += this.velocity.y));

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

class Platform {
  constructor({ x, y, Image }) {
    this.position = {
      x,
      y,
    };
    this.image = Image;
    this.width = this.image.width;

    this.height = this.image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({ x, y, Image }) {
    this.position = {
      x,
      y,
    };
    this.img = Image;
  }

  draw() {
    c.drawImage(this.img, this.position.x, this.position.y);
  }
}

//  Danger creater

class Goomba {
  constructor({
    position,
    velocity,
    distance = {
      limite: 40,
      traveled: 0,
    },
  }) {
    (this.position = {
      x: position.x,
      y: position.y,
    }),
      (this.velocity = {
        x: velocity.x,
        y: velocity.y,
      }),
      (this.width = 43.33);
    this.height = 50;

    this.image = images.spriteGoomba;

    this.frame = 0;
    this.distance = distance;
  }

  draw() {
    // c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
      this.image,
      130 * this.frame,
      0,
      130,
      150,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.frame++;
    if (this.frame >= 58) this.frame = 0;
    this.draw();
    Math.round((this.position.x += this.velocity.x));
    Math.round((this.position.y += this.velocity.y));

    // set the bomb top of the platform
    if (this.position.y + this.height + this.velocity.y) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    // walk the goomba back and forth
    this.distance.traveled += Math.abs(this.velocity.x);
    if (this.distance.traveled >= this.distance.limite) {
      this.velocity.x = 1;
      this.distance.traveled = 0;
    }
  }
}

let boombs = [
  new Goomba({
    position: {
      x: 1608,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 290,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 1648,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 340,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 3448,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 720,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 4748,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 630,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 5248,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 1430,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 6248,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 830,
      traveled: 0,
    },
  }),
  // new

  new Goomba({
    position: {
      x: 7248,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 1000,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 7548,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 1200,
      traveled: 0,
    },
  }),
  new Goomba({
    position: {
      x: 7448,
      y: 100,
    },
    velocity: {
      x: -1,
      y: 0,
    },
    distance: {
      limite: 1300,
      traveled: 0,
    },
  }),
];
const platformimg = images.platform;
const platformSmallimg = images.Platformsmall;
let player = new Player();
let platforms = [
  // small platform
  new Platform({
    x:
      platformimg.width * 5 +
      300 +
      platformimg.width -
      images.platformSmallTall.width,
    y: 390,
    Image: images.platformSmallTall,
  }),
  new Platform({
    x: platformimg.width * 7 + 650 - 2,
    y: 560,
    Image: platformSmallimg,
  }),
  new Platform({
    x: platformimg.width * 7 + 710 - 2,
    y: 520,
    Image: platformSmallimg,
  }),
  new Platform({
    x: platformimg.width * 7 + 780 - 2,
    y: 490,
    Image: platformSmallimg,
  }),

  // normal platform
  new Platform({ x: -1, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width - 3, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width * 2 + 100, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width * 3, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width * 4 + 300, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width * 5 + 300, y: 610, Image: platformimg }),
  new Platform({ x: platformimg.width * 6 + 700, y: 610, Image: platformimg }),
  new Platform({
    x: platformimg.width * 7 + 700 - 2,
    y: 610,
    Image: platformimg,
  }),
  new Platform({
    x: platformimg.width * 8 + 1000,
    y: 650,
    Image: images.lrgPlatform,
  }),
  new Platform({
    x: platformimg.width * 10 + 1000,
    y: 650,
    Image: images.lrgPlatform2,
  }),
  new Platform({
    x: platformimg.width * 12 + 900,
    y: 650,
    Image: images.lrgPlatform2,
  }),
  // Flag
  new Platform({
    x: platformimg.width * 14 + 200,
    y: 280,
    Image: images.Flag,
  }),
];

let Genericobj = [
  new GenericObject({ x: -1, y: -1, Image: images.background }),
  new GenericObject({ x: 760, y: 100, Image: images.sun }),
  new GenericObject({ x: 3000, y: 100, Image: images.sun }),
  new GenericObject({ x: 5100, y: 100, Image: images.sun }),
  new GenericObject({ x: 7000, y: 100, Image: images.sun }),

  new GenericObject({ x: 700, y: 100, Image: images.mountains }),
];

// keyboard key control
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  Up: {
    pressed: false,
  },
};

let screenOfset = 0;
let keySet = "";
let diebygoomba = false;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  Genericobj.forEach((obj) => {
    obj.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  if (start) {
    boombs.forEach((boomb) => {
      boomb.update();
    });
  }
  player.update();

  // player

  if (keys.right.pressed && player.position.x < 600) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && player.position.x > 0 && screenOfset === 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    //platform
    if (keys.right.pressed) {
      screenOfset += player.speed;

      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      Genericobj.forEach((obj) => {
        obj.position.x -= player.speed * 0.6;
      });

      boombs.forEach((boomb) => {
        boomb.position.x -= 9;
      });
    } else if (keys.left.pressed && screenOfset > 0) {
      screenOfset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      Genericobj.forEach((obj) => {
        obj.position.x += player.speed * 0.6;
      });
    }
  }

  // sprit condition instant check player direction
  if (
    keys.left.pressed &&
    keySet === "Left" &&
    player.CurrentSprit !== player.sprit.run.Left
  ) {
    player.frame = 1;
    player.CurrentSprit = player.sprit.run.Left;
  } else if (
    keys.right.pressed &&
    !keys.Up.pressed &&
    keySet === "Right" &&
    player.CurrentSprit !== player.sprit.run.right
  ) {
    player.frame = 1;
    player.CurrentSprit = player.sprit.run.right;
  } else if (keys.Up.pressed) {
    if (keySet === "Right" && keys.Up.pressed) {
      player.CurrentSprit = player.sprit.jump.right;
    } else {
      player.CurrentSprit = player.sprit.jump.Left;
    }
  } else if (
    !keys.left.pressed &&
    keySet === "Left" &&
    player.CurrentSprit !== player.sprit.stand.Left
  ) {
    player.frame = 1;
    player.CurrentSprit = player.sprit.stand.Left;
  } else if (
    !keys.right.pressed &&
    keySet === "Right" &&
    player.CurrentSprit !== player.sprit.stand.right
  ) {
    player.frame = 1;
    player.CurrentSprit = player.sprit.stand.right;
  }

  // level 2
  if (screenOfset > 5800) {
    audios.start.pause();
    audios.Completelevel.play();
  }
  if (screenOfset >= 7500) {
    audios.FireWork.play();
  }
  // loose condition
  if (player.position.y >= canvas.height) {
    audios.start.pause();
    if (!diebygoomba) {
      audios.Gameover.play();
    } else {
      audios.Goombadie.play();
    }
    screenOfset = 0;
    Restart();
  }

  // collusion

  boombs.forEach((boomb) => {
    //  Goomba kill player
    if (player.position.x === boomb.position.x && player.position.y >= "500") {
      diebygoomba = true;
      player.position.y += 100;
      audios.Gameover.pause();
    } else {
      platforms.forEach((platform) => {
        if (
          player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
          player.position.x + player.width >= platform.position.x &&
          player.position.x + player.width <=
            platform.position.x + platform.width
        ) {
          player.velocity.y = 0;
        }

        // Goomba
        if (
          boomb.position.y + boomb.height <= platform.position.y &&
          boomb.position.y + boomb.height + boomb.velocity.y >=
            platform.position.y &&
          boomb.position.x + boomb.width >= platform.position.x &&
          boomb.position.x + boomb.width <= platform.position.x + platform.width
        ) {
          boomb.velocity.y = 0;
        }
      });
    }
  });
}
// animate over

// Restart the whole game
function Restart() {
  player = new Player();
  platforms = [
    // small platform
    new Platform({
      x:
        platformimg.width * 5 +
        300 +
        platformimg.width -
        platformSmallimg.width,
      y: 490,
      Image: platformSmallimg,
    }),
    new Platform({
      x: platformimg.width * 7 + 650 - 2,
      y: 560,
      Image: platformSmallimg,
    }),
    new Platform({
      x: platformimg.width * 7 + 710 - 2,
      y: 520,
      Image: platformSmallimg,
    }),
    new Platform({
      x: platformimg.width * 7 + 780 - 2,
      y: 490,
      Image: platformSmallimg,
    }),

    // normal platform
    new Platform({ x: -1, y: 610, Image: platformimg }),
    new Platform({ x: platformimg.width - 3, y: 610, Image: platformimg }),
    new Platform({
      x: platformimg.width * 2 + 100,
      y: 610,
      Image: platformimg,
    }),
    new Platform({ x: platformimg.width * 3, y: 610, Image: platformimg }),
    new Platform({
      x: platformimg.width * 4 + 300,
      y: 610,
      Image: platformimg,
    }),
    new Platform({
      x: platformimg.width * 5 + 300,
      y: 610,
      Image: platformimg,
    }),
    new Platform({
      x: platformimg.width * 6 + 600,
      y: 610,
      Image: platformimg,
    }),
    new Platform({
      x: platformimg.width * 7 + 600 - 2,
      y: 610,
      Image: platformimg,
    }),
    new Platform({
      x: platformimg.width * 8 + 900,
      y: 610,
      Image: platformimg,
    }),
  ];
  Genericobj = [
    new GenericObject({ x: -1, y: -1, Image: images.background }),
    new GenericObject({ x: 400, y: 100, Image: images.mountains }),
  ];

  boombs = [
    new Goomba({
      position: {
        x: 1608,
        y: 100,
      },
      velocity: {
        x: -1,
        y: 0,
      },
      distance: {
        limite: 520,
        traveled: 0,
      },
    }),
    new Goomba({
      position: {
        x: 1648,
        y: 100,
      },
      velocity: {
        x: -1,
        y: 0,
      },
      distance: {
        limite: 520,
        traveled: 0,
      },
    }),
    new Goomba({
      position: {
        x: 2948,
        y: 100,
      },
      velocity: {
        x: -1,
        y: 0,
      },
      distance: {
        limite: 720,
        traveled: 0,
      },
    }),
  ];
  startgame();
}

platformimg.onload = () => {
  animate();
};

// windows event
const handlekeyUp = (event) => {
  const { key } = event;

  switch (key) {
    case "w":
      player.velocity.y = 0;
      keys.Up.pressed = false;
      break;
    case "d":
      keys.right.pressed = false;
      player.CurrentSprit = player.sprit.stand.right;

      break;
    case "a":
      keys.left.pressed = false;
      player.CurrentSprit = player.sprit.stand.Left;
      break;
    default:
      break;
  }
};

const handlekeyDown = (event) => {
  const { key } = event;

  switch (key) {
    case "w":
      player.velocity.y -= 25;
      keys.Up.pressed = true;
      if (keySet === "Right") {
        player.CurrentSprit = player.sprit.jump.right;
      } else {
        player.CurrentSprit = player.sprit.jump.Left;
      }
      audios.jump.play();
      break;
    case "d":
      if (start) {
        keys.right.pressed = true;
        keySet = "Right";
      }

      break;
    case "a":
      keys.left.pressed = true;
      keySet = "Left";

      break;
    default:
      break;
  }
};

addEventListener("keydown", handlekeyDown);
addEventListener("keyup", handlekeyUp);

//end :)
