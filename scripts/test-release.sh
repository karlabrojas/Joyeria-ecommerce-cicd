
#!/usr/bin/env bash

set -euo pipefail

DEPLOYMENT_URL="${1:-}"

echo "=================================="
echo " PRUEBAS DEL ENTORNO DE LIBERACION"
echo "=================================="

if [[ -z "$DEPLOYMENT_URL" ]]; then
  echo "ERROR: Debes proporcionar la URL del despliegue."
  echo "Uso: bash scripts/test-release.sh https://tu-url.vercel.app"
  exit 1
fi

if [[ ! "$DEPLOYMENT_URL" =~ ^https:// ]]; then
  echo "ERROR: La URL debe comenzar con https://"
  exit 1
fi

HEALTH_URL="${DEPLOYMENT_URL%/}/api/health"

echo "Comprobando: $HEALTH_URL"

# Preparar encabezado de protección si existe el secreto
CURL_ARGS=()

if [[ -n "${VERCEL_AUTOMATION_BYPASS_SECRET:-}" ]]; then
  CURL_ARGS+=(
    --header
    "x-vercel-protection-bypass: $VERCEL_AUTOMATION_BYPASS_SECRET"
  )
fi

# Consultar endpoint
HTTP_STATUS=$(curl \
  --location \
  --silent \
  --show-error \
  --output health-response.json \
  --write-out "%{http_code}" \
  --retry 10 \
  --retry-delay 5 \
  --retry-connrefused \
  "${CURL_ARGS[@]}" \
  "$HEALTH_URL")

echo "HTTP Status: $HTTP_STATUS"

cat health-response.json
echo

# Validar respuesta HTTP
if [[ ! "$HTTP_STATUS" =~ ^2[0-9][0-9]$ ]]; then
  echo "ERROR: El servicio no responde correctamente."
  exit 1
fi

# Validar contenido JSON
node -e '
  const fs = require("fs");
  const response = JSON.parse(
    fs.readFileSync("health-response.json", "utf8")
  );

  if (
    response.status !== "ok" ||
    response.service !== "joyeria-ecommerce"
  ) {
    console.error("ERROR: Respuesta de salud inesperada.");
    process.exit(1);
  }

  console.log("Health check aprobado:", response);
'

echo "=================================="
echo " TODAS LAS PRUEBAS APROBADAS"
echo "=================================="
