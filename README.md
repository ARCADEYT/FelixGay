# 🎟️ Sistema de Gestión de Tickets y Eventos

Sistema completo de gestión de eventos y tickets con códigos QR, desarrollado con Next.js 16, React 19, Prisma y SQLite.

## 📋 Descripción

Aplicación web moderna para la gestión integral de eventos y control de acceso mediante tickets digitales con códigos QR. Permite crear eventos, generar tickets personalizados, validar accesos en tiempo real y gestionar la capacidad de asistentes.

## ✨ Características Principales

- 🎫 **Generación de Tickets**: Crea tickets VIP, Free Pass y Promocionales con códigos QR únicos
- 📅 **Gestión de Eventos**: Administra eventos con capacidad, fechas, ubicaciones y categorías
- 📱 **Lectura QR**: Valida tickets en tiempo real mediante lector QR integrado
- 📊 **Dashboard Analítico**: Visualiza métricas de eventos, tickets y ocupación
- 🌙 **Modo Oscuro**: Interfaz adaptable con soporte completo para tema oscuro
- 💾 **Base de Datos Local**: Almacenamiento persistente con SQLite y Prisma ORM
- 📲 **Integración WhatsApp**: Envío automático de tickets por WhatsApp

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 16.0.3** - Framework React con App Router
- **React 19.2.0** - Biblioteca UI con React Compiler
- **TailwindCSS 4** - Framework CSS utility-first
- **Lucide React** - Iconos modernos y optimizados
- **TypeScript 5** - Tipado estático

### Backend
- **Prisma 6.19.0** - ORM moderno para Node.js
- **SQLite 3** - Base de datos embebida
- **Fastify 5.6.2** - Framework web de alto rendimiento
- **QRCode** - Generación de códigos QR
- **html5-qrcode** - Lectura de códigos QR en navegador

### Herramientas de Desarrollo
- **ESLint 9** - Linter para JavaScript/TypeScript
- **PM2** - Gestor de procesos para producción
- **bcryptjs** - Encriptación de contraseñas

## 📁 Estructura del Proyecto

```
tickets/
├── prisma/                      # Configuración de Prisma ORM
│   ├── schema.prisma           # Esquema de base de datos
│   └── seed.ts                 # Datos iniciales
│
├── public/                      # Archivos estáticos públicos
│   ├── images/                 # Imágenes del proyecto
│   └── icons/                  # Iconos y favicons
│
├── src/
│   └── app/                    # Directorio principal de Next.js App Router
│       ├── api/                # API Routes de Next.js
│       │   ├── events/         # Endpoints de eventos
│       │   │   └── route.ts    # CRUD de eventos
│       │   ├── tickets/        # Endpoints de tickets
│       │   │   ├── route.ts    # Listado de tickets
│       │   │   └── generate/   # Generación de tickets
│       │   │       └── route.ts
│       │   ├── qr/             # Endpoints de códigos QR
│       │   │   ├── [id]/       # QR por ID de ticket
│       │   │   │   └── route.ts
│       │   │   ├── preview/    # QR de previsualización
│       │   │   │   └── route.ts
│       │   │   └── validate/   # Validación de tickets
│       │   │       └── route.ts
│       │   └── localStorageApi.ts  # Utilidades de almacenamiento
│       │
│       ├── components/         # Componentes React
│       │   ├── DashboardContent.tsx    # Panel principal
│       │   ├── EventsContent.tsx       # Gestión de eventos
│       │   ├── TicketsContent.tsx      # Generador de tickets
│       │   ├── QrReaderContent.tsx     # Lector QR
│       │   ├── Sidebar.tsx             # Barra lateral de navegación
│       │   ├── modals/                 # Componentes modales
│       │   │   ├── CreateEventModal.tsx
│       │   │   ├── EditEventModal.tsx
│       │   │   └── DetailEventModal.tsx
│       │   └── ui/                     # Componentes UI reutilizables
│       │       ├── Button.tsx
│       │       └── Input.tsx
│       │
│       ├── lib/                # Utilidades y configuraciones
│       │   └── database.ts     # Cliente de Prisma
│       │
│       ├── globals.css         # Estilos globales
│       ├── layout.tsx          # Layout principal
│       ├── page.tsx            # Página principal
│       └── favicon.ico         # Favicon
│
├── .env.local                  # Variables de entorno (no versionado)
├── .gitignore                  # Archivos ignorados por Git
├── eslint.config.mjs           # Configuración de ESLint
├── next.config.ts              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── postcss.config.mjs          # Configuración de PostCSS
├── tailwindcss.config.ts       # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── README.md                   # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd tickets
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env.local
   echo "DATABASE_URL=file:./dev.db" > .env.local
   ```

4. **Inicializar la base de datos**
   ```bash
   # Generar cliente de Prisma
   npm run db:generate
   
   # Crear tablas en la base de datos
   npm run db:push
   
   # (Opcional) Poblar con datos de ejemplo
   npm run db:seed
   ```

5. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

6. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

### Desarrollo
- `npm run dev` - Inicia el servidor de desarrollo en puerto 3000
- `npm run build` - Genera build de producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter ESLint

### Base de Datos
- `npm run db:generate` - Genera el cliente de Prisma
- `npm run db:push` - Sincroniza el esquema con la base de datos
- `npm run db:seed` - Puebla la base de datos con datos iniciales
- `npm run db:studio` - Abre Prisma Studio (GUI para la BD)
- `npm run db:reset` - Resetea la base de datos (¡cuidado!)

### Producción (PM2)
- `npm run pm2:start` - Inicia la aplicación con PM2
- `npm run pm2:stop` - Detiene la aplicación
- `npm run pm2:restart` - Reinicia la aplicación
- `npm run pm2:delete` - Elimina la aplicación de PM2
- `npm run pm2:monit` - Monitorea la aplicación en tiempo real

## 🗄️ Modelo de Base de Datos

### Event (Eventos)
- `id`: ID único del evento
- `name`: Nombre del evento
- `description`: Descripción detallada
- `location`: Ubicación del evento
- `date`: Fecha del evento
- `time`: Horario del evento
- `capacity`: Capacidad máxima
- `current`: Asistentes actuales
- `category`: Categoría del evento
- `price`: Precio base
- `status`: Estado (Activo, Próximamente, Finalizado)
- `image`: URL de la imagen

### Ticket (Tickets)
- `id`: ID único del ticket (UUID)
- `eventId`: Referencia al evento
- `guestName`: Nombre del invitado
- `guestId`: DNI/Identificación del invitado
- `guestPhone`: Teléfono del invitado
- `ticketType`: Tipo (VIP, Free, Promocion)
- `expiresAt`: Fecha de expiración
- `used`: Estado de uso (boolean)
- `usedAt`: Fecha de uso
- `createdAt`: Fecha de creación

## 🎨 Características de UI/UX

- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Tema Oscuro/Claro**: Cambio dinámico entre modos
- **Glassmorphism**: Efectos de vidrio esmerilado en componentes
- **Gradientes Vibrantes**: Paleta de colores moderna y atractiva
- **Micro-interacciones**: Feedback visual en cada acción del usuario

## 🔒 Seguridad

- Validación de datos en cliente y servidor
- Sanitización de inputs
- Códigos QR únicos e irrepetibles
- Control de expiración de tickets
- Prevención de uso duplicado de tickets

## 📱 Funcionalidades Detalladas

### Dashboard
- Métricas en tiempo real de eventos activos
- Gráficos de ocupación y tickets generados
- Lista de próximos eventos
- Accesos directos a funciones principales

### Gestión de Eventos
- Creación de eventos con wizard de 3 pasos
- Edición y eliminación de eventos
- Vista detallada con estadísticas
- Filtrado y búsqueda de eventos

### Generación de Tickets
- Formulario intuitivo con validaciones
- Previsualización en tiempo real
- Descarga automática del QR
- Envío por WhatsApp integrado
- Soporte para múltiples tipos de tickets

### Lector QR
- Escaneo en tiempo real con cámara
- Validación instantánea de tickets
- Historial de validaciones
- Feedback visual y sonoro

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ para la gestión eficiente de eventos y control de acceso.

## 🐛 Reporte de Bugs

Si encuentras algún bug o tienes sugerencias, por favor abre un issue en el repositorio.

---

**Nota**: Este proyecto utiliza Next.js 16 con el nuevo App Router y React 19 con el React Compiler experimental para máximo rendimiento.
