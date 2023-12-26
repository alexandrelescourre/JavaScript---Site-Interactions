var imageIndex = 1;

function changeImage() {
    var img = document.getElementById("myImage");

    // Changez ces noms d'images selon vos fichiers
    var images = ["https://cdn.discordapp.com/attachments/998202486940770316/1188878815934562334/IntroPoster_ScottCawthon.png?ex=659c20ae&is=6589abae&hm=e983ec61e3b25fb57c66f99b7bf47665e113d779728be85fcc0eebe66e550052&", "https://cdn.discordapp.com/attachments/998202486940770316/1188878816249122887/Scott2023.png?ex=659c20ae&is=6589abae&hm=1f11fe9cb80b0ec8d78259a03ed239a6d2e6ca5a121d8a59ef4b1848ea6158a5&", "https://cdn.discordapp.com/attachments/998202486940770316/1188878816853114981/ScottShrug.png?ex=659c20ae&is=6589abae&hm=6aacf6edd76430346a6d9af5d5f7d2fe009bbd3d61d7ebf1bf6c246d5b4425b0&", "https://cdn.discordapp.com/attachments/998202486940770316/1188878816509165658/ScottsFuckingSkinwalker.png?ex=659c20ae&is=6589abae&hm=3524f1216a3656b821e860b3015e66c7f0b014622b8acc23ce5831714f81fc4e&", "https://cdn.discordapp.com/attachments/998202486940770316/1188879575434932275/FancyScott.png?ex=659c2163&is=6589ac63&hm=7925a963e6c6532c143ac275f84d3c6b6cfec069c433da2c54c27d3b5814364f&", "https://cdn.discordapp.com/attachments/998202486940770316/1188879607215181875/Scottcloseup.png?ex=659c216a&is=6589ac6a&hm=06fe7ff185a4e95892d94f47519cb7104534899755229cbce6f91941c4367140&" ];

    if (imageIndex < images.length) {
        imageIndex++;
    } else {
        imageIndex = 1;
    }

    img.src = images[imageIndex - 1];
}
