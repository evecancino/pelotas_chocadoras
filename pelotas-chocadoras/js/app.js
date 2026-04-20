// ================================
//  PELOTAS CHOCADORAS SANTIAGO
// ================================

const servicios = [
  {
    id: 1,
    nombre: 'Pelota Chocadora Individual',
    descripcion: 'Diversión asegurada para 1 persona. Ideal para cumpleaños y eventos familiares.',
    precio: 8990,
    categoria: 'pelotas-chocadoras',
    emoji: '💥',
    fondo: 'linear-gradient(135deg, #FF6B00, #FFD600)',
    popular: true,
    detalle: 'La clásica pelota chocadora inflable para 1 persona. Perfecta para niños desde 6 años. Incluye casco protector y peto acolchado. Tiempo de uso: 15 minutos por turno. Ideal para fiestas de cumpleaños, eventos escolares y celebraciones familiares.'
  },
  {
    id: 2,
    nombre: 'Pack 2 Pelotas Chocadoras',
    descripcion: '¡El duelo más divertido! 2 pelotas para enfrentarse cara a cara.',
    precio: 15990,
    categoria: 'pelotas-chocadoras',
    emoji: '⚡',
    fondo: 'linear-gradient(135deg, #FF2D55, #FF6B00)',
    popular: false,
    detalle: 'El pack perfecto para un duelo épico. Incluye 2 pelotas chocadoras, 2 cascos y 2 petos protectores. Los participantes se chocan entre sí en una pista delimitada. Apto para niños y adultos. Diversión garantizada para todos los asistentes.'
  },
  {
    id: 3,
    nombre: 'Pack 4 Pelotas Chocadoras',
    descripcion: 'El pack más popular para grupos. ¡4 jugadores al mismo tiempo!',
    precio: 28990,
    categoria: 'paquetes',
    emoji: '🎯',
    fondo: 'linear-gradient(135deg, #007AFF, #AF52DE)',
    popular: true,
    detalle: 'El paquete más solicitado para eventos. 4 pelotas chocadoras con todo el equipamiento necesario. Perfecto para torneos entre amigos o familia. Incluye 4 cascos, 4 petos y una pista delimitada de 6x6 metros. Tiempo mínimo de arriendo: 1 hora.'
  },
  {
    id: 4,
    nombre: 'Zorb Ball Individual',
    descripcion: 'Métete dentro de una bola gigante y rueda por todos lados. ¡Increíble!',
    precio: 12990,
    categoria: 'zorb-ball',
    emoji: '🌀',
    fondo: 'linear-gradient(135deg, #34C759, #007AFF)',
    popular: false,
    detalle: 'La Zorb Ball es una bola inflable gigante en la que te metes y ruedas por una superficie. Una experiencia única e inolvidable. Apto para personas de 20 a 100 kg. El participante va asegurado dentro de la bola. Superficie recomendada: pasto o superficie plana.'
  },
  {
    id: 5,
    nombre: 'Pack Zorb Ball x2',
    descripcion: '2 Zorb Balls para competir en carreras o chocarse entre sí.',
    precio: 22990,
    categoria: 'zorb-ball',
    emoji: '🔵',
    fondo: 'linear-gradient(135deg, #5856D6, #34C759)',
    popular: false,
    detalle: '¡Doble la diversión con 2 Zorb Balls! Perfectas para carreras, empujones y competencias. Cada bola tiene espacio para 1 persona. Incluye superficie de rodado de 10 metros. Los participantes quedan completamente protegidos dentro de la bola.'
  },
  {
    id: 6,
    nombre: 'Pista de Sumo Inflable',
    descripcion: 'Trajes de sumo gigantes para combates épicos entre amigos.',
    precio: 19990,
    categoria: 'juegos',
    emoji: '🥊',
    fondo: 'linear-gradient(135deg, #FFD600, #FF6B00)',
    popular: true,
    detalle: 'Los famosos trajes de sumo inflables para combates llenos de risas. Incluye 2 trajes de sumo gigantes, pista delimitada y juez de combate (opcional). Apto para mayores de 10 años. Los participantes se empujan hasta que uno cae. ¡El juego más gracioso de la fiesta!'
  },
  {
    id: 7,
    nombre: 'Cama Elástica Profesional',
    descripcion: 'Cama elástica de 4 metros con red de seguridad. ¡Salta hasta el cielo!',
    precio: 35000,
    categoria: 'juegos',
    emoji: '🤸',
    fondo: 'linear-gradient(135deg, #FF375F, #AF52DE)',
    popular: false,
    detalle: 'Cama elástica profesional de 4 metros de diámetro con red de seguridad de 2 metros de altura. Capacidad para 3 niños simultáneamente. Apto para niños hasta 12 años y 60 kg. Incluye colchoneta alrededor para mayor seguridad. Requiere espacio mínimo de 6x6 metros.'
  },
  {
    id: 8,
    nombre: 'Tobogán Inflable Gigante',
    descripcion: 'Tobogán inflable de 5 metros de altura. ¡La atracción estrella de tu evento!',
    precio: 45000,
    categoria: 'juegos',
    emoji: '🎢',
    fondo: 'linear-gradient(135deg, #007AFF, #34C759)',
    popular: false,
    detalle: 'Tobogán inflable de 5 metros de alto y 8 metros de largo. La atracción principal para cualquier evento. Capacidad para uso continuo con turnos de 1 persona. Apto para niños de 4 a 14 años. Requiere un área de 12x6 metros y toma eléctrica para la motoinfla.'
  },
  {
    id: 9,
    nombre: 'Pack Fiesta Completa',
    descripcion: '4 pelotas chocadoras + 1 zorb ball + sumo. ¡El paquete definitivo!',
    precio: 65000,
    categoria: 'paquetes',
    emoji: '🎊',
    fondo: 'linear-gradient(135deg, #FF6B00, #FF2D55)',
    popular: true,
    detalle: 'El paquete más completo para una fiesta épica. Incluye: 4 pelotas chocadoras con equipamiento, 1 zorb ball, 2 trajes de sumo y 1 operador para todo el evento. Duración mínima: 3 horas. Perfecto para cumpleaños, eventos corporativos y celebraciones grandes. Incluye traslado dentro de Santiago.'
  },
  {
    id: 10,
    nombre: 'Carrera de Sacos Gigante',
    descripcion: 'Sacos gigantes inflables para carreras grupales. ¡Risas garantizadas!',
    precio: 14990,
    categoria: 'juegos',
    emoji: '🏃',
    fondo: 'linear-gradient(135deg, #34C759, #FFD600)',
    popular: false,
    detalle: 'Set de 6 sacos inflables gigantes para carreras en grupos. Cada saco tiene espacio para 1 persona que debe saltar dentro. Perfecto para competencias grupales en fiestas y eventos. Apto para niños y adultos. Incluye pista delimitada de 20 metros. ¡El juego más divertido para todas las edades!'
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
        <span style="filter:drop-shadow(0 4px 8px rgba(0,0,0,0.2))">${s.emoji}</span>
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
