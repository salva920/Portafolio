# 🚀 Portafolio de Salva - Desarrollador Full Stack

Un portafolio moderno y profesional desarrollado con Next.js, TypeScript y Tailwind CSS, diseñado para mostrar proyectos, experiencia laboral y habilidades técnicas.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Metadatos y estructura semántica
- **Navegación Suave**: Scroll suave entre secciones
- **Formulario de Contacto**: Formulario funcional para comunicación
- **Botón Scroll to Top**: Navegación mejorada

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14**: Framework de React para producción
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utility-first
- **Framer Motion**: Biblioteca de animaciones
- **Lucide React**: Iconos modernos y consistentes

### Herramientas de Desarrollo
- **ESLint**: Linting de código
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Compatibilidad entre navegadores

## 📁 Estructura del Proyecto

```
portafolio/
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal de la aplicación
│   └── page.tsx             # Página principal del portafolio
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind CSS
├── postcss.config.js        # Configuración de PostCSS
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint

## 🎨 Personalización

### Colores
Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... más variantes
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... más variantes
  }
}
```

### Contenido
El contenido del portafolio se puede editar directamente en `app/page.tsx`:

- **Proyectos**: Array `projects` con información de cada proyecto
- **Habilidades**: Array `skills` con niveles de competencia
- **Experiencia**: Sección de experiencia laboral
- **Información de contacto**: Datos personales y enlaces

### Fuentes
La fuente principal (Inter) se puede cambiar en `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## 📱 Responsive Design

El portafolio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Desplegar con un clic

### Netlify
1. Construir el proyecto: `npm run build`
2. Subir la carpeta `.next` y archivos estáticos
3. Configurar redirecciones para SPA

### Otros
El proyecto se puede desplegar en cualquier hosting que soporte Node.js o sitios estáticos.

## 🔧 Configuración Avanzada

### Variables de Entorno
Crear archivo `.env.local` para configuraciones:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Analytics
Integrar Google Analytics en `app/layout.tsx`:

```typescript
// Agregar script de GA en el head
```

### SEO
Los metadatos se configuran en `app/layout.tsx` y se pueden personalizar por página.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portafolio personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

## 📞 Contacto

- **Email**: contacto@salva.dev
- **GitHub**: [Tu Usuario]
- **LinkedIn**: [Tu Perfil]

---

⭐ Si te gusta este portafolio, ¡déjame una estrella en GitHub!
# Portafolio
