# Evidencias del proceso de liberación

**Proyecto:** Joyeria E-commerce  
**Herramienta CI/CD:** GitHub Actions  
**Plataforma de despliegue:** Vercel  
**Ramas:** develop (Preview) y main (Production)

## 1. Integración continua

`01-ci-success.png`

Evidencia de la ejecución satisfactoria del pipeline CI, incluyendo ESLint, TypeScript y compilación.

## 2. Despliegue Preview

`02-cd-preview-success.png`

Evidencia de la ejecución del pipeline CD en la rama develop.

## 3. Pruebas del entorno Preview

`03-preview-health-check.png`

Evidencia de la respuesta HTTP 200 y validación del endpoint /api/health.

## 4. Plataforma Vercel Preview

`04-vercel-preview.png`

Evidencia del despliegue Preview con estado Ready.

## 5. Despliegue Production

`05-cd-production-success.png`

Evidencia de la ejecución del pipeline CD en la rama main.

## 6. Pruebas del entorno Production

`06-production-health-check.png`

Evidencia de la validación del endpoint /api/health en producción.

## 7. Plataforma Vercel Production

`07-vercel-production.png`

Evidencia del despliegue productivo con estado Ready.

**Nota:** Cada evidencia corresponde a una ejecución real del pipeline o a una comprobación realizada sobre los entornos desplegados.
