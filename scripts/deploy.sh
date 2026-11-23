
#!/usr/bin/env bash

set -euo pipefail

ENVIRONMENT="${1:-preview}"

echo "=================================="
echo " INICIANDO DESPLIEGUE"
echo "=================================="

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "ERROR: Falta VERCEL_TOKEN"
  exit 1
fi

if [[ "$ENVIRONMENT" != "preview" && "$ENVIRONMENT" != "production" ]]; then
  echo "ERROR: Entorno no valido. Usa preview o production."
  exit 1
fi

echo "Entorno: $ENVIRONMENT"

# Ejecutar despliegue
if [[ "$ENVIRONMENT" == "production" ]]; then
  DEPLOY_OUTPUT=$(vercel deploy \
    --prebuilt \
    --prod \
    --token="$VERCEL_TOKEN" 2>&1)
else
  DEPLOY_OUTPUT=$(vercel deploy \
    --prebuilt \
    --token="$VERCEL_TOKEN" 2>&1)
fi

# Mostrar resultados
echo "$DEPLOY_OUTPUT" >&2

# Obtener URL generada
DEPLOYMENT_URL=$(printf '%s\n' "$DEPLOY_OUTPUT" |
  grep -Eo 'https://[^[:space:]]+' |
  tail -n 1 || true)

if [[ -z "$DEPLOYMENT_URL" ]]; then
  echo "ERROR: No se pudo obtener la URL del despliegue." >&2
  exit 1
fi

echo "Despliegue completado." >&2
echo "URL: $DEPLOYMENT_URL" >&2

# Publicar URL para GitHub Actions
if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
  echo "url=$DEPLOYMENT_URL" >> "$GITHUB_OUTPUT"
fi

if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
  echo "### Despliegue $ENVIRONMENT" >> "$GITHUB_STEP_SUMMARY"
  echo "$DEPLOYMENT_URL" >> "$GITHUB_STEP_SUMMARY"
fi

# La URL queda como salida del script
echo "$DEPLOYMENT_URL"
