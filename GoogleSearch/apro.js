const amazonIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png";
const youtubeIcon = "https://cdn-icons-png.flaticon.com/512/1384/1384060.png";
const facebookIcon = "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg";
const litIcon = "https://cdn.worldvectorlogo.com/logos/lit-1.svg";
const mdnIcon = "/icon-component/mdn_preview_rev_1.png";
const mdnIcon1 = "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png";
const driveIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/860px-Google_Drive_icon_%282020%29.svg.png";
const webComponentsIcon = "https://web-components-resources.appspot.com/static/logo.svg";
const codeWarsicon = "https://camo.githubusercontent.com/dfb7129b176d0f6559d3c67365d99ad2a510d2eab5afdd28612e163344f35f79/68747470733a2f2f646f63732e636f6465776172732e636f6d2f6c6f676f2e737667";
const addIcon = `<span class="material-symbols-outlined">add</span>`;


addSearchListener() {
    const searchInput = this.shadowRoot.querySelector('#busqueda');
    const items = ['Gmail', 'Imagenes', 'Menu', 'Usuario']; // Ejemplo de arreglo

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        this.searchArray(query, items);
    });
}

searchArray(query, array) {
    const result = array.some(item => item.toLowerCase().includes(query));
    if (result) {
        console.log('El valor ingresado está contenido en el arreglo.');
    } else {
        console.log('El valor ingresado no está contenido en el arreglo.');

    }
}
