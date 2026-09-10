
(function() {
  'use strict';

  // =============================================
  // 1. ESTADO TEMPORAL EN MEMORIA
  // =============================================
  let currentUser = null;

try {
  const usuarioGuardado = sessionStorage.getItem('zonaTotalUsuario');
  if (usuarioGuardado) {
    currentUser = JSON.parse(usuarioGuardado);
  }
} catch (error) {
  currentUser = null;
}          

function guardarSesion() {
  if (currentUser) {
    sessionStorage.setItem(
      'zonaTotalUsuario',
      JSON.stringify(currentUser)
    );
  }
}  
  
  
  // { username, phone, email, role }

  const PROPIETARIA = {
    username: 'Reyna Anelis',
    role: 'propietaria'
  };

  let cart = [];                   // Array de productos { id, name, category, description }
  let pendingAction = null;        // 'compra' | 'revendedor'
  let currentCategory = null;      // Para saber qué categoría está abierta

// =============================================
// VENDEDOR DEL ENLACE
// =============================================
const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbzaQbpywYXzpL0Db2dKlD1jsPKHjNg_POoq-mtRwkskCVGmR77w1vw9ukSWx072qopW/exec';

let vendedorActual = null;

async function cargarVendedorDelEnlace() {
  const parametros = new URLSearchParams(window.location.search);
  const idVendedor = parametros.get('v');

  if (!idVendedor) {
    return;
  }

  try {
    const respuesta = await fetch(
      `${BACKEND_URL}?accion=obtenerVendedor&idVendedor=${encodeURIComponent(idVendedor)}`
    );

    const datos = await respuesta.json();

    if (datos.ok) {
      vendedorActual = {
        id: datos.idVendedor,
        nombre: datos.vendedor,
        telefono: datos.telefono
      };



if (grupoPrecioReventa) {
  grupoPrecioReventa.style.display = 'block';
}

      console.log('Vendedor detectado:', vendedorActual);
    } else {
      console.warn('Vendedor no válido:', datos.mensaje);
    }

  } catch (error) {
    console.error('No se pudo consultar el vendedor:', error);
  }
}




  // =============================================
  // 2. DATOS DE PRODUCTOS (DEMOSTRACIÓN)
  // =============================================
  const productosData = {
    'plantillas-premium': {
      title: 'PLANTILLAS PROFESIONALES PREMIUM',
      eyebrow: '✦ COLECCIÓN PREMIUM',
      desc: 'Herramientas digitales profesionales para gestionar diferentes áreas de tu negocio.',
      products: [
        {
          id: 'factura-premium',
          name: 'Factura Premium',
          description: 'Plantilla profesional para crear y gestionar facturas de forma organizada.',
          category: 'plantillas-premium',
          icon: '📄'
        },
        {
          id: 'control-ventas-pro',
          name: 'Control de Ventas Pro',
          description: 'Herramienta profesional para organizar y controlar las ventas de tu negocio.',
          category: 'plantillas-premium',
          icon: '📊'
        },
        {
          id: 'inventario-pro',
          name: 'Inventario Pro',
          description: 'Plantilla profesional para organizar productos, existencias y movimientos de inventario.',
          category: 'plantillas-premium',
          icon: '📦'
        }
      ]
    },
    'ebooks-plr': {
      title: 'E-BOOKS PLR',
      eyebrow: '✦ COLECCIÓN DIGITAL',
      desc: 'Recursos digitales en formato e-book con derechos PLR para diferentes usos.',
      products: [
        {
          id: 'ebook-ejemplo-1',
          name: 'E-Book PLR — Ejemplo 1',
          description: 'Producto temporal utilizado para probar el funcionamiento del carrito.',
          category: 'ebooks-plr',
          icon: '📖'
        },
        {
          id: 'ebook-ejemplo-2',
          name: 'E-Book PLR — Ejemplo 2',
          description: 'Producto temporal utilizado para probar el funcionamiento del carrito.',
          category: 'ebooks-plr',
          icon: '📘'
        }
      ]
    },
    'mockups': {
      title: 'PACK PROFESIONAL DE MOCKUPS',
      eyebrow: '✦ COLECCIÓN VISUAL',
      desc: 'Recursos visuales profesionales para presentar diseños y proyectos.',
      products: [
        {
          id: 'mockup-ejemplo',
          name: 'Mockup Profesional — Ejemplo',
          description: 'Producto temporal utilizado para probar el funcionamiento del carrito.',
          category: 'mockups',
          icon: '🖼️'
        }
      ]
    }
  };

  // Categorías que abren catálogo
  const categoriasConCatalogo = ['plantillas-premium', 'ebooks-plr', 'mockups'];

  // =============================================
  // 3. DOM REFERENCES
  // =============================================
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  // Modales
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const modalClose = document.getElementById('modalClose');
  const modalActionBtn = document.getElementById('modalActionBtn');

  const modalColeccionOverlay = document.getElementById('modalColeccionOverlay');
  const modalColeccionClose = document.getElementById('modalColeccionClose');
  const modalColeccionActionBtn = document.getElementById('modalColeccionActionBtn');
  const modalColeccionTitle = document.getElementById('modalColeccionTitle');
  const coleccionEyebrow = document.getElementById('coleccionEyebrow');
  const coleccionDesc = document.getElementById('coleccionDesc');
  const coleccionCount = document.getElementById('coleccionCount');
  const productosColeccion = document.getElementById('productosColeccion');

  const modalCartOverlay = document.getElementById('modalCartOverlay');
  const modalCartClose = document.getElementById('modalCartClose');
  const cartItems = document.getElementById('cartItems');
  const cartCountLabel = document.getElementById('cartCountLabel');
  const btnCheckout = document.getElementById('btnCheckout');
  const cartBadge = document.getElementById('cartBadge');

  const modalRegistroRequeridoOverlay = document.getElementById('modalRegistroRequeridoOverlay');
  const modalRegistroRequeridoClose = document.getElementById('modalRegistroRequeridoClose');
  const btnRegistroCancelar = document.getElementById('btnRegistroCancelar');
  const btnRegistroIr = document.getElementById('btnRegistroIr');

  const modalFormularioOverlay = document.getElementById('modalFormularioOverlay');
  const modalFormularioClose = document.getElementById('modalFormularioClose');
  const btnFormCancelar = document.getElementById('btnFormCancelar');
  const btnFormCrearCuenta = document.getElementById('btnFormCrearCuenta');
// Inicio de sesión
const btnIniciarSesionIr = document.getElementById('btnIniciarSesionIr');
const modalLoginOverlay = document.getElementById('modalLoginOverlay');
const modalLoginClose = document.getElementById('modalLoginClose');
const btnLoginCancelar = document.getElementById('btnLoginCancelar');
const btnLoginEntrar = document.getElementById('btnLoginEntrar');
const loginUsuario = document.getElementById('loginUsuario');
const loginCorreo = document.getElementById('loginCorreo');
const loginContrasena = document.getElementById('loginContrasena');
const loginError = document.getElementById('loginError');
  const formRegistro = document.getElementById('formRegistro');
  const regUsuario = document.getElementById('regUsuario');
  const regTelefono = document.getElementById('regTelefono');
  const regCorreo = document.getElementById('regCorreo');
  const regContrasena = document.getElementById('regContrasena');
  const formError = document.getElementById('formError');

  const modalConfirmarCompraOverlay = document.getElementById('modalConfirmarCompraOverlay');
  const modalConfirmarCompraClose = document.getElementById('modalConfirmarCompraClose');
  const confirmarProductos = document.getElementById('confirmarProductos');
  const confirmarCount = document.getElementById('confirmarCount');
  const btnRealizarPago = document.getElementById('btnRealizarPago');

const modalPagoOverlay = document.getElementById('modalPagoOverlay');
const modalPagoClose = document.getElementById('modalPagoClose');
const modalPagoActionBtn = document.getElementById('modalPagoActionBtn');
const pagoIdCompra = document.getElementById('pagoIdCompra');


// Formulario de solicitud de revendedor
const modalFormularioRevendedorOverlay = document.getElementById('modalFormularioRevendedorOverlay');
const modalFormularioRevendedorClose = document.getElementById('modalFormularioRevendedorClose');
const formRevendedor = document.getElementById('formRevendedor');
const revUsuario = document.getElementById('revUsuario');
const revTelefono = document.getElementById('revTelefono');
const revCorreo = document.getElementById('revCorreo');
const revContrasena = document.getElementById('revContrasena');
const formRevendedorError = document.getElementById('formRevendedorError');
const btnFormRevendedorCancelar = document.getElementById('btnFormRevendedorCancelar');
const btnFormRevendedorEnviar = document.getElementById('btnFormRevendedorEnviar');
const grupoPrecioReventa = document.getElementById('grupoPrecioReventa');
const precioReventa = document.getElementById('revPrecioReventa');


// Pago de revendedor
const modalPagoRevendedorOverlay = document.getElementById('modalPagoRevendedorOverlay');
const modalPagoRevendedorClose = document.getElementById('modalPagoRevendedorClose');
const btnEnviarComprobanteRevendedor = document.getElementById('btnEnviarComprobanteRevendedor');


  const modalActivarRevendedorOverlay = document.getElementById('modalActivarRevendedorOverlay');
  const modalActivarRevendedorClose = document.getElementById('modalActivarRevendedorClose');
  const btnActivarRevendedor = document.getElementById('btnActivarRevendedor');

  const modalYaRevendedorOverlay = document.getElementById('modalYaRevendedorOverlay');
  const modalYaRevendedorClose = document.getElementById('modalYaRevendedorClose');
  const modalYaRevendedorActionBtn = document.getElementById('modalYaRevendedorActionBtn');

  const modalExplicacionRevendedorOverlay = document.getElementById('modalExplicacionRevendedorOverlay');
  const modalExplicacionRevendedorClose = document.getElementById('modalExplicacionRevendedorClose');
  const btnExplicacionCancelar = document.getElementById('btnExplicacionCancelar');
  const btnExplicacionContinuar = document.getElementById('btnExplicacionContinuar');

  const modalAreaClienteOverlay = document.getElementById('modalAreaClienteOverlay');
  const modalAreaClienteClose = document.getElementById('modalAreaClienteClose');
  const modalAreaClienteBody = document.getElementById('modalAreaClienteBody');
  const modalAreaClienteActionBtn = document.getElementById('modalAreaClienteActionBtn');

  const btnCuenta = document.getElementById('btnCuenta');
  const cuentaLabel = document.getElementById('cuentaLabel');
  const crownIcon = document.getElementById('crownIcon');
  const btnRevendedor = document.getElementById('btnRevendedor');
  const btnPlantillasPremium = document.getElementById('btnPlantillasPremium');
  const btnEbooksPlr = document.getElementById('btnEbooksPlr');
  const btnMockups = document.getElementById('btnMockups');
  const btnCart = document.getElementById('btnCart');

  // Notificaciones
  const btnNotif = document.getElementById('btnNotificaciones');
  const notifPanel = document.getElementById('notificacionesPanel');
  const notifOverlay = document.getElementById('notifOverlay');
  const notifBody = document.getElementById('notifBody');
  const notifClose = document.getElementById('notifClose');
  const badgeNotif = document.getElementById('badgeNotificacion');

  const toast = document.getElementById('toast');

  let lastFocusedElement = null;
  let isNotifOpen = false;
  let highlightTimeout = null;
  let toastTimeout = null;

  // =============================================
  // 4. DATOS DE NOVEDADES (INICIALMENTE VACÍO)
  // =============================================
  const novedades = [];

  // =============================================
  // 5. FUNCIONES DE NOTIFICACIONES
  // =============================================
  function actualizarBadge() {
    const novedadesActivas = novedades.filter(item => item.nueva === true);
    const count = novedadesActivas.length;
    if (count > 0) {
      badgeNotif.textContent = count;
      badgeNotif.classList.add('visible');
    } else {
      badgeNotif.classList.remove('visible');
    }
  }

  function renderizarNotificaciones() {
    const novedadesActivas = novedades.filter(item => item.nueva === true);
    if (novedadesActivas.length === 0) {
      notifBody.innerHTML = '<p class="notif-empty">No hay novedades por el momento.</p>';
      return;
    }
    let html = '';
    novedadesActivas.forEach(item => {
      const fechaFormateada = item.fecha ? new Date(item.fecha).toLocaleDateString('es-ES', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      }) : 'Recientemente';
      html += `
        <button class="notif-item-btn" data-target="${item.id}" aria-label="Ir a ${item.nombre}">
          <span class="notif-tag">NUEVO</span>
          <span class="notif-name">${item.nombre}</span>
          <span class="notif-date">Agregado el ${fechaFormateada}</span>
        </button>
      `;
    });
    notifBody.innerHTML = html;
    notifBody.querySelectorAll('.notif-item-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const targetId = this.getAttribute('data-target');
        irANovedad(targetId);
      });
    });
  }

  function abrirNotificaciones() {
    if (isNotifOpen) return;
    isNotifOpen = true;
    notifPanel.classList.add('open');
    notifOverlay.classList.add('visible');
    btnNotif.setAttribute('aria-expanded', 'true');
    notifPanel.setAttribute('aria-hidden', 'false');
    renderizarNotificaciones();
    setTimeout(() => notifClose.focus(), 80);
  }

  function cerrarNotificaciones() {
    if (!isNotifOpen) return;
    isNotifOpen = false;
    notifPanel.classList.remove('open');
    notifOverlay.classList.remove('visible');
    btnNotif.setAttribute('aria-expanded', 'false');
    notifPanel.setAttribute('aria-hidden', 'true');
    btnNotif.focus();
  }

  function irANovedad(categoryId) {
    if (!categoryId) return;
    const targetCard = document.querySelector(`.categoria-card[data-category="${categoryId}"]`);
    if (!targetCard) { cerrarNotificaciones(); return; }
    cerrarNotificaciones();
    const headerHeight = document.querySelector('.header')?.offsetHeight || 68;
    const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    if (highlightTimeout) { clearTimeout(highlightTimeout); targetCard.classList.remove('notification-highlight'); }
    setTimeout(() => targetCard.classList.add('notification-highlight'), 300);
    highlightTimeout = setTimeout(() => { targetCard.classList.remove('notification-highlight'); highlightTimeout = null; }, 2200);
  }

  // =============================================
  // 6. TOAST
  // =============================================
  function mostrarToast(mensaje) {
    if (toastTimeout) { clearTimeout(toastTimeout); }
    toast.textContent = mensaje;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toastTimeout = null;
    }, 2500);
  }

  // =============================================
  // 7. FUNCIONES DE MODALES (ABRIR/CERRAR)
  // =============================================
  function abrirModal(overlay) {
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 80);
  }

  function cerrarModal(overlay) {
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  function cerrarTodosLosModales() {
    document.querySelectorAll('.modal-overlay.active').forEach(overlay => {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  // =============================================
  // 8. MENU HAMBURGUESA
  // =============================================
  function toggleMenu(forceState) {
    const isOpen = typeof forceState === 'boolean' ? forceState : !mainNav.classList.contains('open');
    mainNav.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    if (mainNav.classList.contains('open')) toggleMenu(false);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) { e.stopPropagation(); toggleMenu(); });
  }

  document.querySelectorAll('.nav-link[data-scroll]').forEach(link => {
    link.addEventListener('click', function() { closeMenu(); cerrarNotificaciones(); });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (mainNav.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
      const activeOverlays = document.querySelectorAll('.modal-overlay.active');
      if (activeOverlays.length > 0) { cerrarTodosLosModales(); }
      if (isNotifOpen) { cerrarNotificaciones(); }
    }
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 640) {
      const isClickInsideNav = mainNav.contains(e.target);
      const isClickOnToggle = menuToggle.contains(e.target);
      if (mainNav.classList.contains('open') && !isClickInsideNav && !isClickOnToggle) { closeMenu(); }
    }
    document.querySelectorAll('.modal-overlay.active').forEach(overlay => {
      if (e.target === overlay) { cerrarModal(overlay); }
    });
  });

  // =============================================
  // 9. SCROLL SUAVE
  // =============================================
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 64;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          closeMenu();
          cerrarNotificaciones();
        }
      }
    });
  });

  // =============================================
  // 10. MODAL PRINCIPAL (genérico)
  // =============================================
  function openModal(title, message, actionText = 'Cerrar') {
    if (document.querySelector('#modalOverlay.active')) { cerrarModal(modalOverlay); }
    lastFocusedElement = document.activeElement;
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalActionBtn.textContent = actionText;
    abrirModal(modalOverlay);
  }

  function closeModalGeneric() { cerrarModal(modalOverlay); }

  if (modalClose) { modalClose.addEventListener('click', closeModalGeneric); }
  if (modalActionBtn) { modalActionBtn.addEventListener('click', closeModalGeneric); }

  // =============================================
  // 11. CARRITO - FUNCIONES
  // =============================================
  function actualizarBadgeCarrito() {
    const count = cart.length;
    if (count > 0) {
      cartBadge.textContent = count;
      cartBadge.classList.add('visible');
    } else {
      cartBadge.classList.remove('visible');
    }
  }

  function estaEnCarrito(productId) {
    return cart.some(item => item.id === productId);
  }

  function agregarAlCarrito(producto) {
    if (estaEnCarrito(producto.id)) return;
    cart.push({ ...producto });
    actualizarBadgeCarrito();
    mostrarToast(`${producto.name} se agregó al carrito.`);
    // Actualizar botones si la colección está abierta
    actualizarBotonesColeccion();
  }

  function eliminarDelCarrito(productId) {
    cart = cart.filter(item => item.id !== productId);
    actualizarBadgeCarrito();
    actualizarBotonesColeccion();
    renderizarCarrito();
  }

  function vaciarCarrito() {
    cart = [];
    actualizarBadgeCarrito();
    actualizarBotonesColeccion();
  }

  function actualizarBotonesColeccion() {
    document.querySelectorAll('.producto-card .btn-add-cart').forEach(btn => {
      const productId = btn.getAttribute('data-product-id');
      if (estaEnCarrito(productId)) {
        btn.classList.remove('btn-primary', 'btn-add-cart');
        btn.classList.add('btn-in-cart');
        btn.textContent = '✓ EN EL CARRITO';
        btn.disabled = true;
      } else {
        btn.classList.remove('btn-in-cart');
        btn.classList.add('btn-primary', 'btn-add-cart');
        btn.textContent = 'AGREGAR AL CARRITO';
        btn.disabled = false;
      }
    });
  }

  function renderizarCarrito() {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <p>Tu carrito está vacío.</p>
          <button class="btn btn-primary" id="btnVerProductos">VER PRODUCTOS</button>
        </div>
      `;
      const btnVerProductos = document.getElementById('btnVerProductos');
      if (btnVerProductos) {
        btnVerProductos.addEventListener('click', function() {
          cerrarModal(modalCartOverlay);
          document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
        });
      }
      cartCountLabel.textContent = '0 productos seleccionados';
      btnCheckout.style.display = 'none';
      return;
    }

    let html = '';
    cart.forEach(item => {
      html += `
        <div class="cart-item">
          <span class="cart-item-icon">${item.icon || '📄'}</span>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-category">${item.category}</div>
          </div>
          <button class="cart-item-remove" data-product-id="${item.id}" aria-label="Eliminar producto">✕</button>
        </div>
      `;
    });

    cartItems.innerHTML = html;

    // Eventos eliminar
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = this.getAttribute('data-product-id');
        eliminarDelCarrito(productId);
      });
    });

    cartCountLabel.textContent = `${cart.length} producto${cart.length > 1 ? 's' : ''} seleccionado${cart.length > 1 ? 's' : ''}`;
    btnCheckout.style.display = 'inline-flex';
  }

  // =============================================
  // 12. ABRIR COLECCIÓN (CATÁLOGO)
  // =============================================
  function abrirColeccion(categoryId) {
  const data = productosData[categoryId];
  if (!data) return;

  currentCategory = categoryId;

  modalColeccionTitle.textContent = data.title;
  coleccionEyebrow.textContent = data.eyebrow;
  coleccionDesc.textContent = data.desc;

  const esPropietaria =
    currentUser && currentUser.role === 'propietaria';

  let html = '';

  data.products.forEach(product => {
    const inCart = estaEnCarrito(product.id);

    let btnClass = '';
    let btnText = '';
    let btnDisabled = '';

    if (esPropietaria) {
      btnClass = 'btn-primary btn-acceso-propietaria';
      btnText = 'ABRIR PRODUCTO';
    } else {
      btnClass = inCart ? 'btn-in-cart' : 'btn-primary btn-add-cart';
      btnText = inCart ? '✓ EN EL CARRITO' : 'AGREGAR AL CARRITO';
      btnDisabled = inCart ? 'disabled' : '';
    }

    html += `
      <div class="producto-card">
        <div class="producto-visual">
          <span class="icon-placeholder">${product.icon || '📄'}</span>
        </div>

        <div class="producto-info">
          <span class="producto-categoria">${data.title}</span>
          <h4 class="producto-nombre">${product.name}</h4>
          <p class="producto-desc">${product.description}</p>

          <button
            class="btn ${btnClass}"
            data-product-id="${product.id}"
            ${btnDisabled}
          >
            ${btnText}
          </button>
        </div>
      </div>
    `;
  });

  productosColeccion.innerHTML = html;
  coleccionCount.textContent =
    `${data.products.length} productos disponibles`;

  if (esPropietaria) {
    productosColeccion
      .querySelectorAll('.btn-acceso-propietaria')
      .forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();

          const productId = this.getAttribute('data-product-id');
          const productData = data.products.find(
            p => p.id === productId
          );

          if (productData) {
            mostrarToast(
              `Acceso de propietaria: ${productData.name}`
            );
          }
        });
      });

  } else {
    productosColeccion
      .querySelectorAll('.btn-add-cart')
      .forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();

          const productId = this.getAttribute('data-product-id');
          const productData = data.products.find(
            p => p.id === productId
          );

          if (productData) {
            agregarAlCarrito(productData);
          }
        });
      });
  }

  lastFocusedElement = document.activeElement;
  abrirModal(modalColeccionOverlay);
}


  function cerrarColeccion() {
    cerrarModal(modalColeccionOverlay);
  }

  if (modalColeccionClose) { modalColeccionClose.addEventListener('click', cerrarColeccion); }
  if (modalColeccionActionBtn) { modalColeccionActionBtn.addEventListener('click', cerrarColeccion); }

  // =============================================
  // 13. BOTONES DE CATEGORÍAS
  // =============================================
  function manejarClickCategoria(categoryId) {
    if (categoriasConCatalogo.includes(categoryId)) {
      abrirColeccion(categoryId);
    } else {
      // Comportamiento genérico
      const card = document.querySelector(`.categoria-card[data-category="${categoryId}"]`);
      const title = card ? card.querySelector('.card-title')?.textContent || 'Categoría' : 'Categoría';
      openModal(title, 'Estamos preparando el contenido de esta colección.', 'Cerrar');
    }
  }

  document.querySelectorAll('.btn-card[data-category]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const categoryId = this.getAttribute('data-category');
      manejarClickCategoria(categoryId);
    });
  });

  // =============================================
  // 14. CARRITO - ABRIR
  // =============================================
  if (btnCart) {
    btnCart.addEventListener('click', function(e) {
      e.stopPropagation();
      lastFocusedElement = document.activeElement;
      renderizarCarrito();
      abrirModal(modalCartOverlay);
    });
  }

  if (modalCartClose) { modalCartClose.addEventListener('click', function() { cerrarModal(modalCartOverlay); }); }

  // =============================================
  // 15. CHECKOUT - INICIAR PROCESO DE COMPRA
  // =============================================
  function iniciarCheckout() {
    if (cart.length === 0) {
      mostrarToast('Tu carrito está vacío.');
      return;
    }

    cerrarModal(modalCartOverlay);

    if (currentUser) {
      // Usuario ya registrado → ir a confirmar compra
      setTimeout(() => {
        mostrarConfirmarCompra();
      }, 200);
    } else {
      // Sin registro → pedir registro
      pendingAction = 'compra';
      setTimeout(() => {
        lastFocusedElement = document.activeElement;
        abrirModal(modalRegistroRequeridoOverlay);
      }, 200);
    }
  }

  if (btnCheckout) {
    btnCheckout.addEventListener('click', function(e) {
      e.stopPropagation();
      iniciarCheckout();
    });
  }

  // =============================================
  // 16. REGISTRO REQUERIDO
  // =============================================
  function cerrarRegistroRequerido() { cerrarModal(modalRegistroRequeridoOverlay); }

  if (modalRegistroRequeridoClose) { modalRegistroRequeridoClose.addEventListener('click', cerrarRegistroRequerido); }
  if (btnRegistroCancelar) { btnRegistroCancelar.addEventListener('click', cerrarRegistroRequerido); }

  if (btnRegistroIr) {
    btnRegistroIr.addEventListener('click', function(e) {
      e.stopPropagation();
      cerrarRegistroRequerido();
      setTimeout(() => {
        lastFocusedElement = document.activeElement;
        abrirModal(modalFormularioOverlay);
        formError.style.display = 'none';
        formError.textContent = '';
        formRegistro.reset();
      }, 200);
    });
  }

  
// =============================================
// INICIO DE SESIÓN DE CLIENTE O REVENDEDOR
// =============================================
if (btnIniciarSesionIr) {
  btnIniciarSesionIr.addEventListener('click', function(e) {
    e.stopPropagation();

    cerrarModal(modalRegistroRequeridoOverlay);

    setTimeout(() => {
      loginError.style.display = 'none';
      loginError.textContent = '';
      loginUsuario.value = '';
      loginCorreo.value = '';
      loginContrasena.value = '';
      abrirModal(modalLoginOverlay);
    }, 200);
  });
}

if (modalLoginClose) {
  modalLoginClose.addEventListener('click', function() {
    cerrarModal(modalLoginOverlay);
  });
}

if (btnLoginCancelar) {
  btnLoginCancelar.addEventListener('click', function() {
    cerrarModal(modalLoginOverlay);
  });
}

if (btnLoginEntrar) {
  btnLoginEntrar.addEventListener('click', async function(e) {
    e.stopPropagation();

    loginError.style.display = 'none';
    loginError.textContent = '';

    const usuario = loginUsuario.value.trim();
    const correo = loginCorreo.value.trim();
    const contrasena = loginContrasena.value.trim();





    if (!usuario || !correo || !contrasena) {
      loginError.textContent = 'Completa todos los campos.';
      loginError.style.display = 'block';
      return;
    }

    btnLoginEntrar.disabled = true;
    btnLoginEntrar.textContent = 'ENTRANDO...';

    try {

      // Primero comprobamos si es la PROPIETARIA
      const respuestaPropietaria = await fetch(BACKEND_URL, {
        method: 'POST',
        body: JSON.stringify({
          accion: 'iniciarSesionPropietaria',
          usuario: usuario,
          correo: correo,
          contrasena: contrasena
        })
      });

      const datosPropietaria = await respuestaPropietaria.json();

      if (datosPropietaria.ok) {
        currentUser = {
          id: 'PROPIETARIA',
          username: datosPropietaria.usuario,
          phone: '',
          email: datosPropietaria.correo,
          role: 'propietaria'
        };

        pendingAction = null;

vaciarCarrito();
pendingAction = null;

cerrarModal(modalLoginOverlay);
actualizarHeader();

if (currentCategory) abrirColeccion(currentCategory);

mostrarToast('Sesión de propietaria iniciada correctamente.');
return;
      }


      // Primero comprobamos si es REVENDEDOR
const respuestaRevendedor = await fetch(BACKEND_URL, {
  method: 'POST',
  body: JSON.stringify({
    accion: 'iniciarSesionRevendedor',
    usuario: usuario,
    correo: correo,
    contrasena: contrasena
  })
});

const datosRevendedor = await respuestaRevendedor.json();

// Si es revendedor ACTIVO, entra como REVENDEDOR
if (datosRevendedor.ok) {

  currentUser = {
    id: datosRevendedor.idVendedor,
    username: datosRevendedor.usuario,
    phone: datosRevendedor.telefono,
    email: datosRevendedor.correo,
    role: 'revendedor',

    idVendedor: datosRevendedor.idVendedor,
    vendedor: datosRevendedor.usuario,
    telefonoVendedor: datosRevendedor.telefono,

    idReferidoPor: datosRevendedor.idReferidoPor,
    referidoPor: datosRevendedor.referidoPor,
    porcentaje: datosRevendedor.porcentaje,
    estado: datosRevendedor.estado,
    fechaInicio: datosRevendedor.fechaInicio,
    fechaFin: datosRevendedor.fechaFin,
    mercado: datosRevendedor.mercado,
    precioReventaLicencia: datosRevendedor.precioReventaLicencia
  };

  cerrarModal(modalLoginOverlay);
  actualizarHeader();

  if (pendingAction === 'compra') {
    pendingAction = null;

    setTimeout(() => {
      lastFocusedElement = document.activeElement;
      mostrarConfirmarCompra();
    }, 200);
  }

  return;
}


// Si no pudo entrar como revendedor ACTIVO,
// comprobamos si también tiene una cuenta de CLIENTE
const respuestaCliente = await fetch(BACKEND_URL, {
  method: 'POST',
  body: JSON.stringify({
    accion: 'iniciarSesionCliente',
    usuario: usuario,
    correo: correo,
    contrasena: contrasena
  })
});

const datosCliente = await respuestaCliente.json();

if (datosCliente.ok) {

  currentUser = {
    id: datosCliente.idCliente,
    username: datosCliente.usuario,
    phone: datosCliente.telefono,
    email: datosCliente.correo,
    role: 'cliente',
    idVendedor: datosCliente.idVendedor,
    vendedor: datosCliente.vendedor,
    telefonoVendedor: datosCliente.telefonoVendedor
  };

  cerrarModal(modalLoginOverlay);
  actualizarHeader();

  if (pendingAction === 'compra') {
    pendingAction = null;

    setTimeout(() => {
      lastFocusedElement = document.activeElement;
      mostrarConfirmarCompra();
    }, 200);
  }

  return;
}


// No pudo entrar ni como revendedor activo ni como cliente.
// Si existe como revendedor PENDIENTE o INACTIVO,
// mostramos el mensaje que devolvió el backend.
loginError.textContent =
  datosRevendedor.mensaje ||
  datosCliente.mensaje ||
  'Usuario, correo o contraseña incorrectos.';

loginError.style.display = 'block';
return;

    } catch (error) {
      console.error('Error al iniciar sesión:', error);

      loginError.textContent =
        'No se pudo conectar con el sistema. Inténtalo nuevamente.';
      loginError.style.display = 'block';

    } finally {
      btnLoginEntrar.disabled = false;
      btnLoginEntrar.textContent = 'INICIAR SESIÓN';
    }
  });
}


// =============================================
  // 17. FORMULARIO DE REGISTRO
  // =============================================
  function cerrarFormulario() { cerrarModal(modalFormularioOverlay); }

  if (modalFormularioClose) { modalFormularioClose.addEventListener('click', cerrarFormulario); }
  if (btnFormCancelar) { btnFormCancelar.addEventListener('click', cerrarFormulario); }

  if (btnFormCrearCuenta) {
    btnFormCrearCuenta.addEventListener('click', async function(e) {
      e.stopPropagation();
      formError.style.display = 'none';
      formError.textContent = '';

      const usuario = regUsuario.value.trim();
      const telefono = regTelefono.value.trim();
      const correo = regCorreo.value.trim();
      const contrasena = regContrasena.value.trim();

      if (!usuario || !telefono || !correo || !contrasena) {
        formError.textContent = 'Todos los campos son obligatorios.';
        formError.style.display = 'block';
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        formError.textContent = 'Ingresa un correo electrónico válido.';
        formError.style.display = 'block';
        return;
      }
      if (contrasena.length < 6) {
        formError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        formError.style.display = 'block';
        return;
      }

     // Registrar cliente realmente en Google Sheets
if (!vendedorActual) {
  vendedorActual = {
    id: 'PROPIETARIA',
    nombre: 'PROPIETARIA',
    telefono: '5355877689'
  };
}

btnFormCrearCuenta.disabled = true;
btnFormCrearCuenta.textContent = 'CREANDO CUENTA...';

try {
  const respuestaRegistro = await fetch(BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify({
      accion: 'registrarCliente',
      usuario: usuario,
      telefono: telefono,
      correo: correo,
      contrasena: contrasena,
      idVendedor: vendedorActual.id,
      vendedor: vendedorActual.nombre
    })
  });

  const datosRegistro = await respuestaRegistro.json();

  if (!datosRegistro.ok) {
    formError.textContent = datosRegistro.mensaje || 'No se pudo crear la cuenta.';
    formError.style.display = 'block';
    return;
  }

  currentUser = {
  id: datosRegistro.idCliente,
  username: usuario,
  phone: telefono,
  email: correo,
  role: 'cliente',
  idVendedor: vendedorActual.id,
  vendedor: vendedorActual.nombre,
  telefonoVendedor: vendedorActual.telefono
};

} catch (error) {
  console.error('Error al registrar cliente:', error);
  formError.textContent = 'No se pudo conectar con el sistema. Inténtalo nuevamente.';
  formError.style.display = 'block';
  return;

} finally {
  btnFormCrearCuenta.disabled = false;
  btnFormCrearCuenta.textContent = 'CREAR CUENTA';
}

      cerrarFormulario();
      actualizarHeader();

      // Redirigir según acción pendiente
      if (pendingAction === 'compra') {
        pendingAction = null;
        setTimeout(() => {
          lastFocusedElement = document.activeElement;
          mostrarConfirmarCompra();
        }, 200);
      } else if (pendingAction === 'revendedor') {
        pendingAction = null;
        setTimeout(() => {
          lastFocusedElement = document.activeElement;
          abrirModal(modalActivarRevendedorOverlay);
        }, 200);
      }
    });
  }

  // =============================================
  // 18. CONFIRMAR COMPRA (Resumen)
  // =============================================
  function mostrarConfirmarCompra() {
    if (cart.length === 0) {
      mostrarToast('No hay productos en el carrito.');
      return;
    }

    let html = '';
    cart.forEach(item => {
      html += `
        <div class="confirmar-item">
          <span class="confirmar-item-icon">${item.icon || '📄'}</span>
          <span class="confirmar-item-name">${item.name}</span>
        </div>
      `;
    });

    confirmarProductos.innerHTML = html;
    confirmarCount.textContent = `${cart.length} producto${cart.length > 1 ? 's' : ''} seleccionado${cart.length > 1 ? 's' : ''}`;
    lastFocusedElement = document.activeElement;
    abrirModal(modalConfirmarCompraOverlay);
  }

  if (modalConfirmarCompraClose) { modalConfirmarCompraClose.addEventListener('click', function() { cerrarModal(modalConfirmarCompraOverlay); }); }

  if (btnRealizarPago) {btnRealizarPago.addEventListener('click', async function(e) {
  e.stopPropagation();

  if (!currentUser) {
    return;
  }

  btnRealizarPago.disabled = true;
  btnRealizarPago.textContent = 'PROCESANDO...';

  try {
    const nombresProductos = cart
  .map(producto => producto.name)
  .join(', ');

const totalCompra = cart.reduce((total, producto) => {
  return total + (Number(producto.price) || 0);
}, 0);

    const respuestaCompra = await fetch(BACKEND_URL, {
      method: 'POST',
      body: JSON.stringify({
        accion: 'registrarCompra',
        idCliente: currentUser.id,
        idVendedor: currentUser.idVendedor,
        cliente: currentUser.username,
        vendedor: currentUser.vendedor,
        productos: nombresProductos,
        total: totalCompra
      })
    });

    const datosCompra = await respuestaCompra.json();

    if (!datosCompra.ok) {
  openModal(
    'No se pudo registrar la compra',
    datosCompra.mensaje || 'Inténtalo nuevamente.',
    'Entendido'
  );
  return;
}

vaciarCarrito();
const idCompraActual = datosCompra.idCompra;

if (pagoIdCompra) {
  pagoIdCompra.textContent = `Compra: ${idCompraActual}`;
}

if (modalPagoActionBtn) {
  modalPagoActionBtn.onclick = function() {
    const telefonoWhatsApp = String(currentUser.telefonoVendedor || '')
      .replace(/\D/g, '');

    if (!telefonoWhatsApp) {
      openModal(
        'WhatsApp no disponible',
        'No se encontró el número de WhatsApp del vendedor.',
        'Entendido'
      );
      return;
    }

    const mensaje =
  'Hola, envío el comprobante de mi compra en Zona Total Servicios.' +
  '\r\n\r\n' +
  `Cliente: ${currentUser.username}` +
  '\r\n' +
  `Teléfono: ${currentUser.phone}` +
  '\r\n' +
  `Correo: ${currentUser.email}` +
  '\r\n' +
  `Vendedor: ${currentUser.vendedor}` +
  '\r\n' +
  `Productos: ${nombresProductos}`;

const enlaceWhatsApp =
  `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

window.open(enlaceWhatsApp, '_blank', 'noopener,noreferrer');
  };
}

cerrarModal(modalConfirmarCompraOverlay);


    setTimeout(() => {
      lastFocusedElement = document.activeElement;
      abrirModal(modalPagoOverlay);
    }, 200);

  } catch (error) {
    console.error('Error al registrar la compra:', error);

    openModal(
      'Error',
      'No se pudo conectar con el sistema.',
      'Entendido'
    );

  } finally {
    btnRealizarPago.disabled = false;
    btnRealizarPago.textContent = 'REALIZAR PAGO';
  }
});
  }

  // =============================================
// 19. PAGO POR WHATSAPP
// =============================================
if (modalPagoClose) {
  modalPagoClose.addEventListener('click', function() {
    cerrarModal(modalPagoOverlay);
  });
}

if (modalPagoActionBtn) {
  modalPagoActionBtn.addEventListener('click', function() {
    // El comportamiento de WhatsApp se asigna al registrar cada compra.
  });
}

  // =============================================
// 20. REVENDEDOR - FLUJO COMPLETO
// =============================================

function abrirFormularioRevendedor() {
  formRevendedorError.style.display = 'none';
  formRevendedorError.textContent = '';

  if (currentUser && currentUser.role === 'cliente') {
    revUsuario.value = currentUser.username || '';
    revTelefono.value = currentUser.phone || '';
    revCorreo.value = currentUser.email || '';
    revContrasena.value = '';

    // Si el cliente pertenece a un revendedor,
    // esa persona será su referente al hacerse revendedor.
    if (
      currentUser.idVendedor &&
      currentUser.idVendedor !== 'PROPIETARIA'
    ) {
      grupoPrecioReventa.style.display = 'block';
      precioReventa.required = true;
      precioReventa.value = '';
    } else {
      grupoPrecioReventa.style.display = 'none';
      precioReventa.required = false;
      precioReventa.value = '';
    }

  } else {
    formRevendedor.reset();

// Para una persona que todavía no es cliente,
// se mantiene el comportamiento según el enlace de referido.
if (
  vendedorActual &&
  vendedorActual.id &&
  vendedorActual.id !== 'PROPIETARIA'
) {
  grupoPrecioReventa.style.display = 'block';
  precioReventa.required = true;
  precioReventa.value = '';
} else {
  grupoPrecioReventa.style.display = 'none';
  precioReventa.required = false;
  precioReventa.value = '';
}
}

lastFocusedElement = document.activeElement;
abrirModal(modalFormularioRevendedorOverlay);
}


function iniciarFlujoRevendedor() {

  if (currentUser && currentUser.role === 'revendedor') {
    abrirModal(modalYaRevendedorOverlay);
    return;
  }

  if (currentUser && currentUser.role === 'propietaria') {
    openModal(
      'Cuenta de propietaria',
      'La propietaria ya tiene acceso superior a la modalidad de revendedor.',
      'Entendido'
    );
    return;
  }

  abrirFormularioRevendedor();
}


if (btnRevendedor) {
  btnRevendedor.addEventListener('click', function(e) {
    e.stopPropagation();
    iniciarFlujoRevendedor();
  });
}


// EXPLICACIÓN PARA PERSONA SIN CUENTA
if (modalExplicacionRevendedorClose) {
  modalExplicacionRevendedorClose.addEventListener('click', function() {
    cerrarModal(modalExplicacionRevendedorOverlay);
  });
}

if (btnExplicacionCancelar) {
  btnExplicacionCancelar.addEventListener('click', function() {
    cerrarModal(modalExplicacionRevendedorOverlay);
  });
}

if (btnExplicacionContinuar) {
  btnExplicacionContinuar.addEventListener('click', function(e) {
    e.stopPropagation();

    cerrarModal(modalExplicacionRevendedorOverlay);

    setTimeout(() => {
      abrirFormularioRevendedor();
    }, 200);
  });
}


// FORMULARIO DE REVENDEDOR
if (modalFormularioRevendedorClose) {
  modalFormularioRevendedorClose.addEventListener('click', function() {
    cerrarModal(modalFormularioRevendedorOverlay);
  });
}

if (btnFormRevendedorCancelar) {
  btnFormRevendedorCancelar.addEventListener('click', function() {
    cerrarModal(modalFormularioRevendedorOverlay);
  });
}

if (btnFormRevendedorEnviar) {
  btnFormRevendedorEnviar.addEventListener('click', async function(e) {
    e.stopPropagation();

    formRevendedorError.style.display = 'none';
    formRevendedorError.textContent = '';

    const usuario = revUsuario.value.trim();
    const telefono = revTelefono.value.trim();
    const correo = revCorreo.value.trim();
    const contrasena = revContrasena.value.trim();
    const mercado = document.getElementById('revMercado').value.trim();
    const precioReventa = document.getElementById('revPrecioReventa').value.trim();

    let idReferidoPor = 'PROPIETARIA';
    let referidoPor = 'PROPIETARIA';

    // Si llegó mediante el enlace de un revendedor,
    // la solicitud queda referida a ese vendedor.
    if (vendedorActual) {
      idReferidoPor = vendedorActual.id;
      referidoPor = vendedorActual.nombre;
    }

    // Si ya era cliente, conservamos su vendedor original.
    if (
      currentUser &&
      currentUser.role === 'cliente' &&
      currentUser.idVendedor
    ) {
      idReferidoPor = currentUser.idVendedor;
      referidoPor = currentUser.vendedor;
    }

    if (
      !usuario ||
      !telefono ||
      !correo ||
      !contrasena ||
      !mercado ||
      (idReferidoPor !== 'PROPIETARIA' && !precioReventa)
    ) {
      formRevendedorError.textContent = 'Todos los campos son obligatorios.';
      formRevendedorError.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      formRevendedorError.textContent =
        'Ingresa un correo electrónico válido.';
      formRevendedorError.style.display = 'block';
      return;
    }

    if (contrasena.length < 6) {
      formRevendedorError.textContent =
        'La contraseña debe tener al menos 6 caracteres.';
      formRevendedorError.style.display = 'block';
      return;
    }

    btnFormRevendedorEnviar.disabled = true;
    btnFormRevendedorEnviar.textContent = 'ENVIANDO...';

    try {

      const respuestaRegistro = await fetch(BACKEND_URL, {
        method: 'POST',
        body: JSON.stringify({
          accion: 'registrarRevendedor',
          usuario: usuario,
          telefono: telefono,
          correo: correo,
          contrasena: contrasena,
          idReferidoPor: idReferidoPor,
          referidoPor: referidoPor,
          porcentaje: '',
          mercado: mercado,
          precioReventa: precioReventa
        })
      });

      const datosRegistro = await respuestaRegistro.json();

      if (!datosRegistro.ok) {
        formRevendedorError.textContent =
          datosRegistro.mensaje ||
          'No se pudo enviar la solicitud de revendedor.';
        formRevendedorError.style.display = 'block';
        return;
      }

      cerrarModal(modalFormularioRevendedorOverlay);
      pendingAction = null;

      setTimeout(() => {
        lastFocusedElement = document.activeElement;
        abrirModal(modalPagoRevendedorOverlay);
      }, 200);

    } catch (error) {
      console.error('Error al registrar revendedor:', error);

      formRevendedorError.textContent =
        'No se pudo conectar con el sistema. Inténtalo nuevamente.';
      formRevendedorError.style.display = 'block';

    } finally {
      btnFormRevendedorEnviar.disabled = false;
      btnFormRevendedorEnviar.textContent = 'ENVIAR SOLICITUD';
    }
  });
}


// Cerrar modal de pago de revendedor
if (modalPagoRevendedorClose) {
  modalPagoRevendedorClose.addEventListener('click', function() {
    cerrarModal(modalPagoRevendedorOverlay);
  });
}

// Enviar comprobante de revendedor por WhatsApp
if (btnEnviarComprobanteRevendedor) {
  btnEnviarComprobanteRevendedor.addEventListener('click', function() {

    let telefonoWhatsApp = '5355877689';

if (
  currentUser &&
  currentUser.role === 'cliente' &&
  currentUser.telefonoVendedor
) {
  telefonoWhatsApp = String(currentUser.telefonoVendedor).replace(/\D/g, '');
} else if (vendedorActual && vendedorActual.telefono) {
  telefonoWhatsApp = String(vendedorActual.telefono).replace(/\D/g, '');
}

    const usuario = revUsuario.value.trim();
    const telefono = revTelefono.value.trim();
    const correo = revCorreo.value.trim();

   const mensaje =
`Hola, solicito la activación de mi cuenta de revendedor en Zona Total Servicios.

DATOS DEL REVENDEDOR

Nombre/Usuario: ${usuario}
Teléfono: ${telefono}
Correo: ${correo}

Adjunto mi comprobante de pago para su verificación.

Gracias.`;

    const enlaceWhatsApp =
      `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlaceWhatsApp, '_blank', 'noopener,noreferrer');
  });
}


// MODAL DE ACTIVACIÓN
if (modalActivarRevendedorClose) {
  modalActivarRevendedorClose.addEventListener('click', function() {
    cerrarModal(modalActivarRevendedorOverlay);
  });
}

if (btnActivarRevendedor) {
  btnActivarRevendedor.addEventListener('click', function(e) {
    e.stopPropagation();

    cerrarModal(modalActivarRevendedorOverlay);

    setTimeout(() => {
      abrirFormularioRevendedor();
    }, 200);
  });
}


// YA ES REVENDEDOR
if (modalYaRevendedorClose) {
  modalYaRevendedorClose.addEventListener('click', function() {
    cerrarModal(modalYaRevendedorOverlay);
  });
}

if (modalYaRevendedorActionBtn) {
  modalYaRevendedorActionBtn.addEventListener('click', function() {
    cerrarModal(modalYaRevendedorOverlay);
  });
}

  // =============================================
// 21. ACTUALIZAR HEADER
// =============================================
function actualizarHeader() {
  if (currentUser) {
    cuentaLabel.textContent = currentUser.username;

    if (currentUser.role === 'propietaria') {
      cuentaLabel.textContent = 'PROPIETARIA';
      crownIcon.style.display = 'inline-flex';

    } else if (currentUser.role === 'revendedor') {
      crownIcon.style.display = 'inline-flex';

    } else {
      crownIcon.style.display = 'none';
    }

  } else {
    cuentaLabel.textContent = 'Mi cuenta';
    crownIcon.style.display = 'none';
  }
}

  // =============================================
  // 22. ÁREA DE CLIENTES (Mi cuenta)
  // =============================================
  function mostrarAreaCliente() {
  lastFocusedElement = document.activeElement;

  if (currentUser) {

    let roleLabel = 'Cliente';
    let crownClass = '';

    if (currentUser.role === 'propietaria') {
      roleLabel = 'Propietaria 👑';
      crownClass = 'revendedor';

    } else if (currentUser.role === 'revendedor') {
      roleLabel = 'Revendedor 👑';
      crownClass = 'revendedor';
    }

    modalAreaClienteBody.innerHTML = `
      <div class="area-info">
        <p><span class="label">Usuario</span><span class="value">${currentUser.username || '—'}</span></p>
        <p><span class="label">Teléfono</span><span class="value">${currentUser.phone || '—'}</span></p>
        <p><span class="label">Correo</span><span class="value">${currentUser.email || '—'}</span></p>
      </div>

      <div class="area-role ${crownClass}">
        Tipo de cuenta: ${roleLabel}
      </div>
    `;

  } else {

    modalAreaClienteBody.innerHTML = `
      <div class="area-info">
        <p style="text-align:center; color: var(--text-secondary);">
          No hay usuario registrado en esta sesión.
        </p>
      </div>
    `;
  }

  abrirModal(modalAreaClienteOverlay);
}
  if (btnCuenta) {
  btnCuenta.addEventListener('click', function(e) {
    e.stopPropagation();

    if (!currentUser) {
      pendingAction = null;
      abrirModal(modalLoginOverlay);
      return;
    }

    if (currentUser.role === 'revendedor') {
      window.location.href =
  `revendedor.html?v=${encodeURIComponent(currentUser.idVendedor)}`;
      return;
    }

    mostrarAreaCliente();
  });
}

  if (modalAreaClienteClose) { modalAreaClienteClose.addEventListener('click', function() { cerrarModal(modalAreaClienteOverlay); }); }
  if (modalAreaClienteActionBtn) { modalAreaClienteActionBtn.addEventListener('click', function() { cerrarModal(modalAreaClienteOverlay); }); }

  // =============================================
  // 23. NOTIFICACIONES - EVENTOS
  // =============================================
  if (btnNotif) {
    btnNotif.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isNotifOpen) { cerrarNotificaciones(); } else { abrirNotificaciones(); }
    });
  }

  if (notifClose) {
    notifClose.addEventListener('click', function(e) { e.stopPropagation(); cerrarNotificaciones(); });
  }

  if (notifOverlay) {
    notifOverlay.addEventListener('click', function(e) {
      if (e.target === this) { cerrarNotificaciones(); }
    });
  }

  // =============================================
  // 24. INICIALIZACIÓN
  // =============================================
  
actualizarBadge();
actualizarHeader();
actualizarBadgeCarrito();
cargarVendedorDelEnlace();

  console.log('Zona Total Servicios — Página funcionando correctamente.');
  console.log('Novedades activas:', novedades.filter(item => item.nueva === true).length);
  console.log('Usuario actual:', currentUser);
  console.log('Carrito:', cart);

})();
