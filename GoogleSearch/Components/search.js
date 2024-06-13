export default class GoogleSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {
        this.render();
        this.addSearchListener();
    }
    
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
            console.log('La palabra que ingresaste es válida');
        } else {
            console.log('No se pudo completar tu busqueda');
            


        }
    }


    render() {

        const lupa = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#808185" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>';
        const micro = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#669eff" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>';
        const lens = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#5c98ff" d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>';

        const iconos = [
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png', text: 'Carrito de c...' },
            { icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', text: 'GitHub' },
            { icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', text: '(420) YouTu...' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg', text: '(2) Facebook' },
            { icon: 'https://cdn.worldvectorlogo.com/logos/lit-1.svg', text: 'Lit' },
            { icon: 'https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png', text: 'Web Compo...' },
            { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/860px-Google_Drive_icon_%282020%29.svg.png', text: 'Google Drive' },
            { icon: 'https://web-components-resources.appspot.com/static/logo.svg', text: 'webcompon...' },
            { icon: 'https://camo.githubusercontent.com/dfb7129b176d0f6559d3c67365d99ad2a510d2eab5afdd28612e163344f35f79/68747470733a2f2f646f63732e636f6465776172732e636f6d2f6c6f676f2e737667', text: 'Codewars' },
            { icon: '<i class="fa-solid fa-plus" style="color: #999da3;"></i>', text: 'Add shortcut' },

        ]
        this.shadowRoot.innerHTML = `
        <style>
            body{
                margin:0;
                min-width: 400px;
                padding-bottom: 0px;
                padding-left: 0px;
                padding-right: 0px;
                padding-top: 0px;
            }

            header{
                background-color:rgb(168, 218, 247);
                position: fixed;
                left:0px;
                top:0px;
                display: inline-block;
                padding-top: 0px;
                padding-bottom: 0px;
                width: 100%;
                height: 60px;
                display: flex;
                flex-direction: column;

                
            }

            .ahead{
                color: white;
                display: flex;
                margin-top:60px;
                width: 100%;
                height: 60px;
                justify-content: end;
                margin-left:10px;
                align-items: center;
            }

            footer{
                color:white;
                position:fixed;
                left:0px;
                bottom:0px;
                width:100%;
                display: flex;
                flex-direction: column;
            }

            .fin{
                display: flex;
                flex-direction: row;
                margin: 30px;
                justify-content: space-between;
            }

            .centro{
                width: 100%;
                height:800px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }
            .grid-container {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    padding: 10px;
            }

            .grid-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 1px solid #ccc;
                padding: 10px;
                border: none;
                color: white;
                transition: transform 0.2s;
            }
            .grid-item img {
                margin: 1px;
                max-width: 40px;
                max-height: 40px;
            }

            .grid-item p {
                margin-top: 10px;
                font-size: 14px;
            }
            #icons{
                border-radius:50%
            }
            #google{
                width:300px;

            }
            svg{
                width:20px;
                margin:10px;
                
            }
            #barra{
                margin: 20px;
                display:flex;
                background-color: white;
                width: 600px;
                border-radius: 30px;
                justify-content: space-between;
                align-items: center;
            }
            .inputbar{
                width: 400px;
                height: 35px;
                border: none;
            }
            .lala{
                backgraund-color: blue;
                border-radius: 50%;
            }
            .s1{
                margin-left:10px;
                margin-right:20px;
            }

            .s2{
                margin-left:20px;
                
            }

            .s3{
                
                margin-right:20px;
            }
            #s3{
                margin-left:50px;
                margin-top:20px
            }


            .containerModal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #111111bd;
                display: none;
            }

            .modal {
                background-color: #fefefe;
                display: grid;
                place-items: center;
                margin: auto;
                margin-top: 250px;
                border: 1px solid #888;
                width: 30%;
                height: 30%;
            }

            #icon {
                margin-top: 25px;
                color: #f01800;
                font-size: 90px;
            }

            .button{
                background-color:#008CBA; /* Green */
                border: none;
                color: white;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
            }

            .button:hover{
                background-color: white; 
                color: black; 
                border: 2px solid #008CBA;
            }

            

        </style>

            <section>
                <section class="container bottom">
                    <header>
                        <div>
                            <button><</button>
                            <button>></button>
                            <span>icono</span>
                            <input type="text" name="" >
                            <span>icono 2</span>
                            <span>icono 2</span>
                            <span>perfil</span>
                            <span>3 puntos</span>
                        </div>
                        <div>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>
                            <span>icono</span>

                            <span>>></span>
                            <span>carpeta</span>
                            <span>All Bookmarks</span>
                        </div>

                    </header>
                    
                    <div class="ahead">
                        <span class="s1">Gmail</span>
                        <span class="s1">Imagenes</span>
                        <span class="s1">Menu</span>
                        <span class="s1">Usuario</span>
                    </div>

                    <div class="centro">

                        <div id="hidden" class="containerModal">
                            <div class="modal">
                                <i id="icon" class="fa-solid fa-circle-exclamation"></i>
                                <p id="lblModal"></p>
                                <button class="button" id="btnClose">Cerrar</button>
                            </div>
                        </div>

                        <img id="google" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png" alt="">
                        <div id="barra">
                            ${lupa}
                            <input type="text" name="" id="busqueda" class="inputbar" placeholder="Search Google or type a URL">
                            ${micro}
                            ${lens}
                        </div>
                        <div class="grid-container">
                            ${iconos.map((icono, index) => `
                                <div key="${index}" class="grid-item">
                                    <div class="jaja">
                                         ${icono.icon.includes('http') ? `<img src="${icono.icon}" alt="${icono.text} class="minicon">` : icono.icon}
                                    </div>
                                    <p>${icono.text}</p>
                                </div>
                            `).join('')}
                        </div>

                    </div>
                    <footer>
                        <span id="s3">México</span>
                        <section class="fin">
                            <div>
                                <span class="s2">Sobre Google</span>
                                <span class="s2">Publicidad</span>
                                <span class="s2">Negocios</span>
                                <span class="s2">Como funciona la Busqueda</span>
                            </div>
                            <div>
                                <span class="s3">Privacidad</span>
                                <span class="s3">Condiciones</span>
                                <span class="s3">Preferencias</span>
                            </div>

                        </section>
                    </footer>
                </section>
            </section>
        `;
    }
}