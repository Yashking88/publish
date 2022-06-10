var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_imgae_width = 30;
block_imgae_height = 30;

var player_object = "";
var block_imgae_objects = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img) {
        block_object = img;

        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_imgae_objects);

    });
}
window.addEventListener("keydown", my_keybown);

function my_keybown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_imgae_width - block_imgae_width + 10;
        block_imgae_height = block_imgae_height + 10;
        document.getElementById("current_width"), innerHTML = block_imgae_width;
        document.getElementById("current_height"), innerHTML = block_imgae_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("Down");
    }

    if (keyPressed == '37') {
        left();
        console.log("Left");
    }

    if (keyPressed == '39') {
        right();
        console.log("Right")
    }

    if (keyPressed == '87') {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed == '76') {
        new_image('light_green.png');
        console.log("1");
    }

    if (keyPressed == '84'); {
        new_image('trunk.jpg')
        console.log("t")
    }

    if (keyPressed == '82'); {
        new_image('roof.jpg');
        console.log("r")
    }


    if (keyPressed == '89'); {
        new_image('yellow_wall.png');
        console.log("y")
    }

    if (keyPressed == '68'); {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keyPressed == '85'); {
        new_image('unique.png');
        console.log("u");
    }

    if (keyPressed == '67'); {
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up() {
    if (player_y > 0) {
        player_y = player_y - block_imgae_height;
        console.log("block image height =" + block_imgae_height);
        console.log("When up arrow is prerssed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y > 500) {
        player_y = player_y - block_imgae_height;
        console.log("block image height =" + block_imgae_height);
        console.log("When down arrow is prerssed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_imgae_height;
        console.log("block image height =" + block_imgae_height);
        console.log("When left arrow is prerssed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x > 850) {
        player_x = player_x - block_imgae_height;
        console.log("block image height =" + block_imgae_height);
        console.log("When right arrow is prerssed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}