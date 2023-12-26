document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.stopPropagation();

    var body = document.body;
    body.classList.toggle('dark-mode');

    var buttonText = body.classList.contains('dark-mode') ? 'Changer en Light Mode' : 'Changer en Dark Mode';
    var buttonColor = body.classList.contains('dark-mode') ? '#fff' : '#000';
    var bodyBgImage = body.classList.contains('dark-mode') ? 'url("https://cdn.discordapp.com/attachments/998202486940770316/1188904351247368363/FNaF_Background_BW.jpg?ex=659c3876&is=6589c376&hm=30b1161bc9710457b208f62944e4bc9520c18007c1d049a67c01a33eec3b9ada&")' : 'url("https://cdn.discordapp.com/attachments/998202486940770316/1189126233909379072/FNaF_Background.jpg?ex=659d071b&is=658a921b&hm=6d2a6e7e9c493f124097ce615c485942157d7491d5c5d101556be691137b8b96&")';

    document.getElementById('toggleButton').textContent = buttonText;
    document.getElementById('toggleButton').style.color = buttonColor;
    body.style.backgroundImage = bodyBgImage;
});

document.addEventListener('click', function() {

});
