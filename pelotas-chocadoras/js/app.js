// ================================
//  PELOTAS CHOCADORAS SANTIAGO
// ================================

const servicios = [
  {
    id: 1,
    nombre: 'Pack 6 Pelotas Chocadoras Premium',
    descripcion: 'Pack de 6 pelotas chocadoras para eventos grandes. ¡Para mayores de 10 años!',
    precio: 75000,
    categoria: 'paquetes',
    imagen: 'img/Bumper_balls.jpeg',
    emoji: '💥',
    fondo: 'linear-gradient(135deg, #FF2D55, #FF6B00)',
    popular: true,
    detalle: 'El pack más completo de pelotas chocadoras para eventos grandes. Incluye 6 pelotas chocadoras de última generación, 6 cascos protectores certificados, 6 petos acolchados reforzados y pista delimitada de 8x8 metros. Apto para niños y adultos mayores de 10 años. Equipamiento profesional para torneos y competencias. Capacidad: 6 jugadores simultáneamente. Duración mínima: 2 horas. ¡La diversión sin límites!'
  },
  {
    id: 2,
    nombre: 'Pack 6 Pelotas Chocadoras Junior',
    descripcion: 'Pack de 6 pelotas chocadoras para niños de 5 a 12 años. ¡Diversión total!',
    precio: 70000,
    categoria: 'paquetes',
    imagen: 'img/Pelotas_chocadoras.jpeg',
    emoji: '⚡',
    fondo: 'linear-gradient(135deg, #007AFF, #AF52DE)',
    popular: true,
    detalle: 'El pack ideal para eventos familiares y cumpleaños de niños. Incluye 6 pelotas chocadoras de tamaño junior, 6 cascos protectores ajustables, 6 petos acolchados cómodos y pista de seguridad delimitada. Perfecto para niños entre 5 y 12 años. Equipamiento de calidad profesional diseñado especialmente para los más pequeños. Capacidad: 6 jugadores simultáneamente. Turnos de 15-20 minutos recomendados. ¡Diversión garantizada para toda la familia!'
  },
  {
    id: 3,
    nombre: 'Tiro al Blanco Inflable',
    descripcion: 'Juego de tiro al blanco inflable. ¡Demuestra tu puntería!',
    precio: 60000,
    categoria: 'juegos',
    emoji: '🎯',
    imagen: 'img/Inflable_tiro_al_blanco.jpg',
    fondo: 'linear-gradient(135deg, #FFD600, #FF6B00)',
    popular: false,
    detalle: 'Tiro al blanco inflable profesional con sistema de puntuación automática. Estructura de 2.5 metros de alto x 2 metros de ancho, con 6 círculos de diferentes tamaños. Incluye 10 bolas de espuma suave con velcro. Apto para todas las edades. Sistema de puntos: cada círculo suma puntos diferentes según dificultad. Perfecto para fiestas, eventos corporativos y competencias. Incluye tabla de puntajes y premios sugeridos. ¡Ideal para eventos familiares y escolares!'
  },
  {
    id: 4,
    nombre: 'Zorb Ball Individual Premium',
    descripcion: 'Bola gigante Zorb Ball para rodar. ¡Experiencia única!',
    precio: 60000,
    categoria: 'zorb-ball',
    imagen: 'img/Zorbball.jpeg',
    emoji: '🌀',
    fondo: 'linear-gradient(135deg, #34C759, #007AFF)',
    popular: false,
    detalle: 'Zorb Ball de última generación con doble capa de seguridad. Bola inflable gigante de 2 metros de diámetro en la que te metes y ruedas. Una experiencia única e inolvidable. Apto para personas de 18 a 100 kg. El participante va completamente asegurado dentro de la bola con arneses de seguridad. Superficie recomendada: pasto, arena o terreno plano. Incluye bomba de aire profesional, arneses de seguridad y operador certificado. ¡La sensación de volar sin dejar el suelo!'
  },
  {
    id: 5,
    nombre: 'Jenga Gigante en Oferta',
    descripcion: 'Jenga gigante profesional. ¡Desde $10.000 al contratar servicios!',
    precio: 15000,
    categoria: 'juegos',
    imagen: 'img/Jenga_gigante.jpeg',
    emoji: '🎮',
    fondo: 'linear-gradient(135deg, #AF52DE, #FF2D55)',
    popular: true,
    detalle: 'Jenga gigante con piezas de madera de 1 metro de alto aprox. Torre de 54 bloques de colores variados. Objetivo: sacar piezas de la base y colocarlas en la cima sin derrumbar la torre. Incluye instrucciones y sistema de puntuación. Apto para todas las edades, desde 6 años. Perfecto para fiestas, eventos corporativos y cumpleaños. ¡OFERTA ESPECIAL: Precio reducido a $10.000 cuando contratas cualquier otro servicio de pelotas chocadoras! Diversión, estrategia y emoción en un solo juego.'
  }
];

let carritoLocal = JSON.parse(localStorage.getItem('carritoChocadoras') || '[]');

// ── RENDERIZAR SERVICIOS ──
function renderizarServicios(lista) {
  const grid = document.getElementById('servicios-grid');
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = '<p class="sin-resultados">😕 No encontramos servicios con ese criterio.</p>';
    return;
  }

  grid.innerHTML = lista.map(s => `
    <div class="servicio-card" onclick="verDetalle(${s.id})">
    <div class="servicio-img" style="background:${s.fondo}">
  ${s.imagen 
    ? `<img src="${s.imagen}" style="width:100%;height:100%;object-fit:cover;" />`
    : `<span style="filter:drop-shadow(0 4px 8px rgba(0,0,0,0.2))">${s.emoji}</span>`
  }
  ${s.popular ? '<div class="servicio-badge">⭐ Popular</div>' : ''}
</div>
      <div class="servicio-info">
        <p class="servicio-categoria">${s.categoria.replace('-', ' ')}</p>
        <h3>${s.nombre}</h3>
        <p>${s.descripcion}</p>
        <div class="servicio-footer">
          <span class="servicio-precio">$${s.precio.toLocaleString('es-CL')}</span>
          <button class="btn-ver" onclick="event.stopPropagation(); verDetalle(${s.id})">Ver más 👀</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── FILTRAR POR CATEGORÍA ──
function filtrarCategoria(categoria) {
  const filtrados = servicios.filter(s => s.categoria === categoria);
  renderizarServicios(filtrados);
  document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
}

// ── VER DETALLE ──
function verDetalle(id) {
  localStorage.setItem('servicioDetalle', id);
  window.location.href = 'Pages/detalle.html';
}

// ── ACTUALIZAR CONTADOR ──
function actualizarContador() {
  const total = carritoLocal.reduce((s, i) => s + i.cantidad, 0);
  const contador = document.querySelector('.cart-count');
  if (contador) contador.textContent = total;
}

// ── CONFETTI ──
function crearConfetti() {
  const container = document.getElementById('confetti');
  if (!container) return;
  const colores = ['#FF6B00', '#FFD600', '#FF2D55', '#007AFF', '#34C759', '#AF52DE'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * -20}%;
      background: ${colores[Math.floor(Math.random() * colores.length)]};
      width: ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${3 + Math.random() * 4}s;
      animation-delay: ${Math.random() * 4}s;
    `;
    container.appendChild(piece);
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderizarServicios(servicios);
  actualizarContador();
  crearConfetti();
});
