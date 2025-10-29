FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD sh -c "wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1"