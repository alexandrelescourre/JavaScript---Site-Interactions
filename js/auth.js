function validateRegistrationForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (email === '' || username === '' || password === '') {
      alert('Veuillez remplir tous les champs');
      return false;
    }
  
    // Enregistrer les identifiants après la validation du formulaire d'inscription
    saveCredentials(username, password);
  
    alert('Formulaire d\'inscription soumis avec succès !');
    return true;
  }
  