
#!/usr/bin/env bash

set -euo pipefail

ENVIRONMENT="${1:-preview}"

echo "=================================="
echo " PREPARANDO ENTORNO DE LIBERACION"
echo "=================================="

# Validar variables necesarias
if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "ERROR: Falta VERCEL_TOKEN"
  exit 1
fi

if [[ -z "${VERCEL_ORG_ID:-}" ]]; then
  echo "ERROR: Falta VERCEL_ORG_ID"
  exit 1
fi

if [[ -z "${VERCEL_PROJECT_ID:-}" ]]; then
  echo "ERROR: Falta VERCEL_PROJECT_ID"
  exit 1
fi

# Validar entorno
if [[ "$ENVIRONMENT" != "preview" && "$ENVIRONMENT" != "production" ]]; then
  echo "ERROR: Entorno no valido. Usa preview o production."
  exit 1
fi

echo "Entorno seleccionado: $ENVIRONMENT"

# Obtener configuración de Vercel
vercel pull \
  --yes \
  --environment="$ENVIRONMENT" \
  --token="$VERCEL_TOKEN"

# Generar compilación
if [[ "$ENVIRONMENT" == "production" ]]; then
  vercel build --prod --token="$VERCEL_TOKEN"
else
  vercel build --token="$VERCEL_TOKEN"
fi

echo "=================================="
echo " ENTORNO PREPARADO CORRECTAMENTE"
echo "=================================="
