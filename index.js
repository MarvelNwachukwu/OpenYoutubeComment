const signInButton = document.querySelector('#signIn'); 
const signedInIcon = document.querySelector('#signedIn');

signInButton.addEventListener('mouseup', e => {
    signInButton.style.display = 'none';
    signedInIcon.style.display = 'inline-block'
})