# Joyería E-commerce 💎

Aplicación web de comercio electrónico enfocada en la presentación y comercialización de artículos de joyería y accesorios. Este proyecto implementa un flujo de **Integración Continua y Despliegue Continuo (CI/CD)** para automatizar la validación, liberación y publicación de nuevas versiones.

## 📌 Información del proyecto

| Característica        | Descripción        |
| --------------------- | ------------------ |
| Nombre                | Joyería E-commerce |
| Tipo                  | Aplicación web     |
| Framework             | Next.js            |
| Lenguaje              | TypeScript         |
| Control de versiones  | Git y GitHub       |
| Integración continua  | GitHub Actions     |
| Despliegue continuo   | Vercel             |
| Entorno de desarrollo | `develop`          |
| Entorno de producción | `main`             |
| Runtime               | Node.js 22.x       |

## 🌐 Entornos de despliegue

El proyecto utiliza Vercel para alojar la aplicación y administrar sus entornos de despliegue.

| Entorno    | Rama      | Propósito                                          |
| ---------- | --------- | -------------------------------------------------- |
| Preview    | `develop` | Validar cambios antes de integrarlos a producción. |
| Production | `main`    | Publicar la versión estable de la aplicación.      |

**Plataforma:** [Vercel](https://vercel.com/)

**URL de producción:** https://joyeria-ecommerce-liard.vercel.app/

**URL de Preview:** Se genera automáticamente mediante los despliegues de la rama `develop`.

## 🛠️ Tecnologías utilizadas

- **Next.js:** framework para el desarrollo de la aplicación web.
- **TypeScript:** lenguaje utilizado para mejorar la seguridad de tipos.
- **Node.js:** entorno de ejecución.
- **npm:** administrador de paquetes y dependencias.
- **Git:** control de versiones.
- **GitHub:** alojamiento del repositorio.
- **GitHub Actions:** automatización de los procesos CI/CD.
- **Vercel:** plataforma de alojamiento y despliegue.
- **Vercel CLI:** herramienta para preparar y publicar los despliegues.

## ⚙️ Pipeline CI/CD

El proyecto utiliza GitHub Actions para automatizar las verificaciones del código y Vercel para publicar las versiones de la aplicación.

### 1. Integración continua (CI)

El workflow `ci.yml` ejecuta las siguientes actividades:

1. Obtiene el código fuente del repositorio.
2. Configura Node.js 22.x.
3. Instala las dependencias mediante `npm ci`.
4. Ejecuta ESLint.
5. Verifica los tipos de TypeScript.
6. Ejecuta la compilación de producción.

### 2. Despliegue continuo (CD)

El workflow `cd.yml` administra los despliegues según la rama:

- **develop:** prepara y publica una versión Preview.
- **main:** prepara y publica una versión Production.

El proceso utiliza Vercel CLI para recuperar la configuración, generar la compilación y publicar el artefacto.

### 3. Validación posterior al despliegue

Se utiliza el endpoint:

`/api/health`

Este permite comprobar la disponibilidad de la aplicación mediante una respuesta JSON.

Ejemplo:

```json
{
  "status": "ok",
  "service": "joyeria-ecommerce",
  "timestamp": "2026-11-23T02:28:34.788Z"
}
```

La validación comprueba que el servidor responda correctamente y que el estado del servicio sea `ok`.

## 📂 Estructura del proyecto

```text
Joyeria-ecommerce-cicd/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── scripts/
│   ├── prepare-release.sh
│   ├── test-release.sh
│   └── deploy.sh
│
├── src/
│   └── app/
│       └── api/
│           └── health/
│               └── route.ts
│
├── evidence/
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🚀 Instalación y ejecución local

### Requisitos previos

- Node.js 22.x.
- npm.
- Git.

### Clonar el repositorio

```bash
git clone https://github.com/karlabrojas/Joyeria-ecommerce-cicd.git
```

### Acceder al proyecto

```bash
cd Joyeria-ecommerce-cicd
```

### Instalar dependencias

```bash
npm ci
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

`http://localhost:3000`

### Ejecutar verificaciones

```bash
npm run lint
npm run typecheck
npm run build
```

## 🔐 Configuración de GitHub Actions

Para permitir la comunicación entre GitHub Actions y Vercel se requieren los siguientes secretos:

| Secreto                           | Descripción                                                            |
| --------------------------------- | ---------------------------------------------------------------------- |
| `VERCEL_TOKEN`                    | Token de autenticación de Vercel.                                      |
| `VERCEL_ORG_ID`                   | Identificador de la organización o cuenta.                             |
| `VERCEL_PROJECT_ID`               | Identificador del proyecto.                                            |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Secreto para realizar pruebas automatizadas en despliegues protegidos. |

Estos valores se configuran desde:

**GitHub → Settings → Secrets and variables → Actions.**

Por seguridad, los valores de los secretos no deben publicarse en el repositorio.

## 📊 Evidencias del proceso CI/CD

Las evidencias de la implementación se encuentran en la carpeta:

`evidence/release/`

Incluyen registros y capturas relacionados con:

- Ejecución exitosa de integración continua.
- Despliegue del entorno Preview.
- Validación del endpoint de salud.
- Despliegue del entorno Production.
- Verificación de disponibilidad de la aplicación.

## 📈 Objetivos de calidad y monitoreo

El proyecto contempla los siguientes indicadores como objetivos de servicio:

| Indicador                                 | Objetivo                                  |
| ----------------------------------------- | ----------------------------------------- |
| Disponibilidad                            | 99 % mensual                              |
| Tiempo de respuesta del endpoint de salud | ≤ 2 segundos                              |
| Verificaciones de CI                      | Todas aprobadas antes de integrar cambios |
| Estado del endpoint de salud              | HTTP 200 y `status: ok`                   |
| Despliegues                               | Finalización exitosa del workflow         |

Los valores representan objetivos propuestos para el proyecto y no garantías contractuales de los proveedores.

## 👩‍💻 Autora y repositorio

**Repositorio:** [Joyeria-ecommerce-cicd](https://github.com/karlabrojas/Joyeria-ecommerce-cicd)

**Desarrollado como proyecto académico**, con el propósito de implementar y documentar un proceso automatizado de integración, liberación y despliegue continuo.

---

**Proyecto:** Joyería E-commerce  
**Tecnologías principales:** Next.js, TypeScript, GitHub Actions y Vercel.
