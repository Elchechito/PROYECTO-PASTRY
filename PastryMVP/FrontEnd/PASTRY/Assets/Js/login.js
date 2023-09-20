const LoginBtn = document.getElementById('LoginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');

LoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});
//Obteniendo imformacion de los campos

//Obteniendo el elemento form
const form=document.getElementById('formLogin');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const usu=document.getElementById('user').value;
 const con=document.getElementById('contra').value;
  try {
    const response = await fetch('http://127.0.0.1:3000/user/pastry/Ingresar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: usu, contra: con }),
    }).then((response)=>response.json()).then((data)=>{
      message = data.message;
            if (message === 'Usuario no encontrado') {
                const contenedor_mensaje=document.getElementById("Mensi");
                contenedor_mensaje.style.display="block";
                const respuesta='Ups! Usuario o Contraseña Incorrectos, Reintente';
                document.getElementById('MensajeLogin').innerHTML=respuesta;
            } else {
                window.location.href = 'Views/productos.html';
            }
            console.log(`GET ${usu} and ${con}`);
    })
  } catch (error) {
    console.error('Error en la solicitud fetch:', error);
  }
});